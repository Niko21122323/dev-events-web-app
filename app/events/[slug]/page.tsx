import Image from "next/image";
import { notFound } from "next/navigation";
import CalendarIcon from "../../../public/assets/icons/calendar.svg";
import ClockIcon from "../../../public/assets/icons/clock.svg";
import PinIcon from "../../../public/assets/icons/pin.svg";
import ModeIcon from "../../../public/assets/icons/mode.svg";
import AudienceIcon from "../../../public/assets/icons/audience.svg";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailItem = ({
  icon,
  alt,
  label,
}: {
  icon: string;
  alt: string;
  label: string;
}) => (
  <div className="flex-row-gap-2 items-center">
    <Image src={icon} alt={alt} width={17} height={17} />
    <p>{label}</p>
  </div>
);

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className="agenda">
    <h2>Agenda</h2>
    <ul>
      {agendaItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row gap-1.5 flex-wrap">
    {tags.map((tag) => (
      <div key={tag} className="pill">
        {tag}
      </div>
    ))}
  </div>
);

const EventDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const retuest = await fetch(`${BASE_URL}/api/events/${slug}`);
  const {
    // I destructure these so that I dont write event. every time
    event: {
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
      title,
    },
  } = await retuest.json();

  if (!description) return notFound();

  return (
    <section id="event">
      <div className="header">
        <h1>About {title}</h1>
        <p className="mt-2">{description}</p>
      </div>
      <div className="details">
        <div className="content">
          <Image
            src={image}
            alt="Event Banner"
            width={800}
            height={800}
            className="banner"
          />
          <section className="flex-col-gap-2">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>
          <section className="flex-col-gap-2">
            <h2>Event Details</h2>
            <EventDetailItem icon={CalendarIcon} alt="calendar" label={date} />
            <EventDetailItem icon={ClockIcon} alt="calendar" label={time} />
            <EventDetailItem icon={PinIcon} alt="calendar" label={location} />
            <EventDetailItem icon={ModeIcon} alt="calendar" label={mode} />
            <EventDetailItem
              icon={AudienceIcon}
              alt="calendar"
              label={audience}
            />
          </section>
          <EventAgenda agendaItems={JSON.parse(agenda[0])} />
          <section className="flex-col-gap-2">
            <h2>About the Organizer</h2>
            <p>{organizer}</p>
          </section>
          <EventTags tags={JSON.parse(tags[0])} />
        </div>
        <aside className="booking">
          <p className="text-lg font-semibold">Book Event</p>
        </aside>
      </div>
    </section>
  );
};

export default EventDetailsPage;
