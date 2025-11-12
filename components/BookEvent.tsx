"use client";

import { useState } from "react";
import { createBooking } from "@/lib/actions/booking.actions";
import posthog from "posthog-js";

const BookEvent = ({ eventId, slug }: { eventId: string; slug: string }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { success } = await createBooking({ eventId, slug, email });

    if (success) {
      setSubmitted(true);
      posthog.capture("event_booked", { eventId, slug, email });
    } else {
      console.error("Booking creation failed");
      posthog.captureException("Booking creation failed");
    }
  };

  return (
    <div className="pt-6">
      {submitted ? (
        <p className="text-sm text-muted-foreground">
          Thank you for signing up!
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-6">
            <label
              htmlFor="email"
              className="text-base text-foreground font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email address"
              className="focus:outline-none border border-muted rounded-[8px] py-3 px-4 placeholder:text-muted-foreground text-foreground"
            />
          </div>

          <button
            type="submit"
            className="bg-primary max-sm:text-sm px-4 sm:px-6 py-2.5 sm:py-4 rounded-full text-white font-semibold cursor-pointer hover:bg-sidebar-primary transition-colors duration-300 ease-in-out leading-[1.1]"
          >
            Book A Spot
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
