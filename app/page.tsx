import EventCard from "@/components/EventCard";
import { IEvent } from "@/database";
import { cacheLife } from "next/cache";
import Button from "@/components/Button";
import Image from "next/image";
import robotIcon from "../public/assets/icons/robot-icon.png";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Home() {
  "use cache";
  cacheLife("hours");

  const response = await fetch(`${BASE_URL}/api/events`);
  const { events } = await response.json();

  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-9xl font-bold uppercase">
            PlayForge
          </h1>
          <p className="text-center text-lg font-medium max-w-[700px] pt-4 text-muted-foreground">
            Discover, share, and join game dev events that bring creators
            together. PlayForge connects developers and designers through
            meetups, showcases, and shared passion for play.
          </p>

          <div className="w-fit pt-6">
            <Button name="Create an event" url="/" />
          </div>
        </div>

        <div className="py-36 flex flex-col gap-20">
          <h2 className="text-foreground text-5xl max-w-[800px]">
            Where Creators Meet To Build, Play, and Inspire
          </h2>
          <div className="flex items-end justify-between">
            <Image
              src={robotIcon}
              alt="robot icon"
              width={500}
              height={500}
              className="w-auto h-full max-h-[400px]"
            />
            <p className="text-xl text-muted-foreground font-medium text-right max-w-[800px]">
              A vibrant space for game developers and designers to showcase
              their projects, share ideas, and connect with others who are
              redefining creativity and innovation in interactive entertainment.
              It’s a community built to inspire collaboration, spark new
              concepts, and celebrate the art of game creation.
              <br />
              <br />
              Through events, meetups, and showcases, PlayForge brings creators
              together in meaningful ways, whether to present their latest work,
              find collaborators, or simply share their passion for games. It is
              more than a platform; it is a growing network of visionaries
              shaping the future of interactive experiences.
            </p>
          </div>
        </div>

        <div className="space-y-7">
          <h3 className="text-foreground text-4xl text-center pb-4">
            Upcoming Events
          </h3>
          <ul className="list-none grid grid-cols-3 gap-10">
            {events &&
              events.length > 0 &&
              events.map((event: IEvent) => (
                <li
                  key={event.title}
                  className="list-none rounded-2xl bg-background overflow-hidden border eventCardDropShadow"
                >
                  <EventCard {...event} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
