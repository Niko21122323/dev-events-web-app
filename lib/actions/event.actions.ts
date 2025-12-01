"use server";

import Event, { IEvent } from "@/database/event.model";
import connectDB from "@/lib/mongodb";
import { revalidatePath } from "next/cache";

export const getSimilarEventsBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });
    return await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean<IEvent[]>();
  } catch {
    return [];
  }
};

export const createEvent = async (formData: FormData) => {
  try {
    await connectDB();

    // Extract form data
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const overview = formData.get("overview") as string;
    const venue = formData.get("venue") as string;
    const location = formData.get("location") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const mode = formData.get("mode") as string;
    const audience = formData.get("audience") as string;
    const organizer = formData.get("organizer") as string;
    const tagsString = formData.get("tags") as string;
    const agendaString = formData.get("agenda") as string;
    const imageFile = formData.get("image") as File;

    // Validate required fields
    if (
      !title ||
      !description ||
      !overview ||
      !venue ||
      !location ||
      !date ||
      !time ||
      !mode ||
      !audience ||
      !organizer ||
      !tagsString ||
      !agendaString ||
      !imageFile
    ) {
      return {
        success: false,
        error: "All fields are required",
      };
    }

    // Parse tags and agenda with error handling
    let tags, agenda;
    try {
      tags = JSON.parse(tagsString);
      agenda = JSON.parse(agendaString);
    } catch (e) {
      console.error("JSON Parse Error:", e);
      console.error("Tags string:", tagsString);
      console.error("Agenda string:", agendaString);
      return {
        success: false,
        error: "Invalid JSON format for tags or agenda",
      };
    }

    // Upload image to Cloudinary
    const { v2: cloudinary } = await import("cloudinary");

    // Configure Cloudinary (make sure you have these env variables)
    if (process.env.CLOUDINARY_URL) {
      cloudinary.config(process.env.CLOUDINARY_URL);
    } else {
      throw new Error("CLOUDINARY_URL is not configured");
    }

    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "image",
              folder: "DevEvent",
              transformation: [
                { width: 1200, height: 630, crop: "fill" },
                { quality: "auto" },
              ],
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result as { secure_url: string });
            },
          )
          .end(buffer);
      },
    );

    // Create event in database
    const newEvent = await Event.create({
      title,
      description,
      overview,
      image: uploadResult.secure_url,
      venue,
      location,
      date,
      time,
      mode,
      audience,
      organizer,
      tags,
      agenda,
    });

    // Revalidate the homepage or events page to show the new event
    revalidatePath("/");
    revalidatePath("/events");

    return {
      success: true,
      event: JSON.parse(JSON.stringify(newEvent)),
    };
  } catch (error) {
    console.error("Error creating event:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create event",
    };
  }
};

export const getAllEvents = async () => {
  try {
    await connectDB();
    const events = await Event.find().sort({ createdAt: -1 }).lean<IEvent[]>();
    return {
      success: true,
      events: JSON.parse(JSON.stringify(events)),
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      success: false,
      error: "Failed to fetch events",
      events: [],
    };
  }
};

export const getEventBySlug = async (slug: string) => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug }).lean<IEvent>();

    if (!event) {
      return {
        success: false,
        error: "Event not found",
      };
    }

    return {
      success: true,
      event: JSON.parse(JSON.stringify(event)),
    };
  } catch (error) {
    console.error("Error fetching event:", error);
    return {
      success: false,
      error: "Failed to fetch event",
    };
  }
};
