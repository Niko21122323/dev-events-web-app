import { StaticImageData } from "next/image";
import event1 from "../public/assets/images/event1.png";
import event2 from "../public/assets/images/event2.png";
import event3 from "../public/assets/images/event3.png";
import event4 from "../public/assets/images/event4.png";
import event5 from "../public/assets/images/event5.png";
import event6 from "../public/assets/images/event6.png";

export type EventItem = {
  image: StaticImageData;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events = [
  {
    slug: "react-conf-2024",
    image: event1,
    title: "React Conf 2024",
    location: "San Francisco, CA",
    date: "March 15, 2024",
    time: "9:00 AM - 6:00 PM",
  },
  {
    slug: "nextjs-summit",
    image: event2,
    title: "Next.js Summit",
    location: "Austin, TX",
    date: "April 22, 2024",
    time: "10:00 AM - 5:00 PM",
  },
  {
    slug: "javascript-world",
    image: event3,
    title: "JavaScript World Conference",
    location: "New York, NY",
    date: "May 8, 2024",
    time: "8:30 AM - 7:00 PM",
  },
  {
    slug: "ai-hackathon-2024",
    image: event4,
    title: "AI Innovation Hackathon",
    location: "Seattle, WA",
    date: "June 14-16, 2024",
    time: "48 Hours",
  },
  {
    slug: "web3-developer-meetup",
    image: event5,
    title: "Web3 Developer Meetup",
    location: "Miami, FL",
    date: "July 20, 2024",
    time: "6:00 PM - 9:00 PM",
  },
  {
    slug: "fullstack-conference",
    image: event6,
    title: "Full Stack Conference",
    location: "Denver, CO",
    date: "August 12, 2024",
    time: "9:00 AM - 6:00 PM",
  },
  {
    slug: "devops-unleashed",
    image: event1,
    title: "DevOps Unleashed",
    location: "Chicago, IL",
    date: "September 5, 2024",
    time: "8:00 AM - 5:30 PM",
  },
  {
    slug: "mobile-dev-summit",
    image: event2,
    title: "Mobile Development Summit",
    location: "Los Angeles, CA",
    date: "October 18, 2024",
    time: "9:30 AM - 6:00 PM",
  },
  {
    slug: "cybersecurity-conference",
    image: event3,
    title: "Cybersecurity Conference",
    location: "Boston, MA",
    date: "November 2, 2024",
    time: "8:00 AM - 7:00 PM",
  },
  {
    slug: "data-science-hackathon",
    image: event4,
    title: "Data Science Hackathon",
    location: "San Diego, CA",
    date: "December 7-9, 2024",
    time: "72 Hours",
  },
  {
    slug: "cloud-native-meetup",
    image: event5,
    title: "Cloud Native Meetup",
    location: "Portland, OR",
    date: "January 15, 2025",
    time: "6:30 PM - 9:00 PM",
  },
  {
    slug: "frontend-masters",
    image: event6,
    title: "Frontend Masters Conference",
    location: "Nashville, TN",
    date: "February 28, 2025",
    time: "9:00 AM - 5:00 PM",
  },
];
