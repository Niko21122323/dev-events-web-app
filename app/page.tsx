import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import Button from "@/components/Button";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <section className="flex flex-col items-center py-24">
      <h1 className="text-center text-5xl font-bold uppercase max-w-[600px]">
        Where Creators Meet To Build, Play, and Inspire
      </h1>
      <p className="text-center text-lg font-medium max-w-[700px] pt-4 text-muted-foreground">
        A vibrant space for game developers and designers to showcase their
        projects, share ideas, and connect with others who push the boundaries
        of play.
      </p>
      <ExploreBtn />
      <div className="w-fit">
        <Button name="Create an event" url="/" />
      </div>
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <li key={event.title} className="list-none">
                <EventCard {...event} />
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
