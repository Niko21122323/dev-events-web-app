import { notFound } from "next/navigation";
import { IEvent } from "@/database";
import { getSimilarEventsBySlug } from "@/lib/actions/event.actions";
import Image, { StaticImageData } from "next/image";
import BookEvent from "./BookEvent";
import EventCard from "@/components/EventCard";
import { cacheLife } from "next/cache";
import CalendarIcon from "../public/assets/icons/calendar-icon.png";
import ClockIcon from "../public/assets/icons/clock-icon.png";
import PinIcon from "../public/assets/icons/pin-icon.png";
import ModeIcon from "../public/assets/icons/mode-icon.png";
import AudienceIcon from "../public/assets/icons/audience-icon.png";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({
  icon,
  alt,
  label,
}: {
  icon: StaticImageData;
  alt: string;
  label: string;
}) => (
  <div className="flex items-center gap-2 pb-1">
    <Image src={icon} alt={alt} width={32} height={32} />
    <p className="max-[425px]:text-sm text-base xl:text-lg text-muted-foreground">
      {label}
    </p>
  </div>
);

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="">
    <h2 className="text-3xl xl:text-4xl pb-2">Agenda</h2>
    <ul>
      {agendaItems.map((item) => (
        <li
          key={item}
          className="max-[425px]:text-sm text-base xl:text-lg text-muted-foreground"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div
        key={tag}
        className="text-foreground px-6 py-3 rounded-full bookGradient border border-muted"
      >
        {tag}
      </div>
    ))}
  </div>
);

const EventDetails = async ({ params }: { params: Promise<string> }) => {
  "use cache";
  cacheLife("hours");
  const slug = await params;

  let event;
  try {
    const request = await fetch(`${BASE_URL}/api/events/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!request.ok) {
      if (request.status === 404) {
        return notFound();
      }
      throw new Error(`Failed to fetch event: ${request.statusText}`);
    }

    const response = await request.json();
    console.log(response, "EVENTS");
    event = response.event;

    if (!event) {
      return notFound();
    }
  } catch (error) {
    console.error("Error fetching event:", error);
    return notFound();
  }

  const {
    description,
    image,
    overview,
    date,
    time,
    location,
    mode,
    agenda,
    audience,
    tags,
    organizer,
  } = event;

  if (!description) return notFound();

  const bookings = 10;

  const similarEvents: IEvent[] = await getSimilarEventsBySlug(slug);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl text-foreground pb-4">
            Event Description
          </h1>
          <p className="text-lg text-muted-foreground max-w-[750px] xl:max-w-[950px]">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 lg:gap-10">
          <div className="col-span-1 md:col-span-7 xl:col-span-8">
            <Image
              src={image}
              alt="Event Banner"
              width={800}
              height={800}
              className="max-h-[400px] w-full object-cover rounded-2xl mb-6"
            />

            <div className="flex-col-gap-2">
              <h2 className="text-3xl xl:text-4xl pb-2">Overview</h2>
              <p className="max-[425px]:text-sm text-base xl:text-lg text-muted-foreground">
                {overview}
              </p>
            </div>

            <div className="flex-col-gap-2 my-6">
              <h2 className="text-3xl xl:text-4xl pb-2">Event Details</h2>
              <EventDetailItem
                icon={CalendarIcon}
                alt="calendar"
                label={date}
              />
              <EventDetailItem icon={ClockIcon} alt="calendar" label={time} />
              <EventDetailItem icon={PinIcon} alt="calendar" label={location} />
              <EventDetailItem icon={ModeIcon} alt="calendar" label={mode} />
              <EventDetailItem
                icon={AudienceIcon}
                alt="calendar"
                label={audience}
              />
            </div>

            <EventAgenda agendaItems={agenda} />

            <div className="flex-col-gap-2 my-6">
              <h2 className="text-3xl xl:text-4xl pb-2">About the Organizer</h2>
              <p className="max-[425px]:text-sm text-base xl:text-lg text-muted-foreground">
                {organizer}
              </p>
            </div>

            <EventTags tags={tags} />
          </div>

          <aside className="col-span-1 md:col-span-5 xl:col-span-4 md:sticky md:top-4 h-fit">
            <div className="border border-muted p-4 rounded-2xl bookGradient">
              <h2 className="text-3xl xl:text-4xl pb-2">Book Your Spot</h2>
              {bookings > 0 ? (
                <p className="max-[425px]:text-sm text-base xl:text-lg text-muted-foreground">
                  Join {bookings} people who have already booked their spot!
                </p>
              ) : (
                <p className="max-[425px]:text-sm text-base xl:text-lg text-muted-foreground">
                  Be the first to book your spot!
                </p>
              )}

              <BookEvent eventId={event._id} slug={event.slug} />
            </div>
          </aside>
        </div>
        {similarEvents.length > 0 && (
          <div className="flex w-full flex-col gap-4 pt-10 lg:pt-20">
            <h2 className="text-4xl lg:pb-4">Similar Events</h2>
            <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-10">
              {similarEvents.length > 0 &&
                similarEvents.map((similarEvent: IEvent) => (
                  <li
                    key={similarEvent.title}
                    className="list-none rounded-2xl bg-background overflow-hidden border border-primary/30 lg:border-transparent hover:border-primary/30 transition-all duration-300 ease-in-out bgGradient"
                  >
                    <EventCard {...similarEvent} />
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};
export default EventDetails;
