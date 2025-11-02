import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import pinIcon from "../public/assets/icons/pin.svg";
import calendarIcon from "../public/assets/icons/calendar.svg";
import clockIcon from "../public/assets/icons/clock.svg";
import { EventItem } from "@/lib/constants";

interface Props {
  title: string;
  image: StaticImageData;
  slug: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, slug, location, date, time }: EventItem) => {
  return (
    <Link href={`/events${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />
      <div className="flex flex-row gap-2">
        <Image src={pinIcon} alt="location" width={14} height={14} />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="date-time">
        <div className="flex items-center gap-2">
          <Image src={calendarIcon} alt="calendar" width={14} height={14} />
          <p>{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={clockIcon} alt="clock" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
