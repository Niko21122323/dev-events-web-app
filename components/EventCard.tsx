import Image from "next/image";
import Link from "next/link";
import pinIcon from "../public/assets/icons/pin-icon.png";
import calendarIcon from "../public/assets/icons/calendar-icon.png";
import clockIcon from "../public/assets/icons/clock-icon.png";
import { EventItem } from "@/lib/constants";

const EventCard = ({ title, image, slug, location, date, time }: EventItem) => {
  return (
    <Link
      href={`/events/${slug}`}
      className="rounded-2xl overflow-hidden relative"
    >
      <div>
        <Image
          src={image}
          alt={title}
          width={410}
          height={300}
          className="h-full w-full aspect-video"
        />
      </div>
      <div className="px-4 pb-4">
        <h4 className="text-foreground text-2xl font-medium capitalize py-4">
          {title}
        </h4>
        <div className="flex items-center gap-2">
          <Image
            src={pinIcon}
            alt="location"
            width={32}
            height={32}
            className="w-8 h-auto"
          />
          <p className="text-muted-foreground text-lg font-medium capitalize">
            {location}
          </p>
        </div>
        <div className="date-time">
          <div className="flex items-center gap-2">
            <Image
              src={calendarIcon}
              alt="calendar"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
            <p className="text-muted-foreground text-lg font-medium capitalize">
              {date}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={clockIcon}
              alt="clock"
              width={32}
              height={32}
              className="w-8 h-auto"
            />
            <p className="text-muted-foreground text-lg font-medium capitalize">
              {time}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
