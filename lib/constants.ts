export type EventItem = {
    image: string; 
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events : EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Conf 2024",
    slug: "react-conf-2024",
    location: "San Francisco, CA",
    date: "May 15-16, 2024",
    time: "9:00 AM - 6:00 PM",
  },
  {
    image: "/images/event2.png",
    title: "Next.js Summit",
    slug: "nextjs-summit",
    location: "Virtual Event",
    date: "June 22, 2024",
    time: "10:00 AM - 4:00 PM PST",
  },
  {
    image: "/images/event3.png",
    title: "AWS re:Invent",
    slug: "aws-reinvent",
    location: "Las Vegas, NV",
    date: "November 27 - Dec 1, 2024",
    time: "8:00 AM - 7:00 PM",
  },
  {
    image: "/images/event4.png",
    title: "Google I/O Developer Conference",
    slug: "google-io-2024",
    location: "Mountain View, CA",
    date: "May 14, 2024",
    time: "10:00 AM - 5:00 PM",
  },
  {
    image: "/images/event5.png",
    title: "World AI Summit",
    slug: "world-ai-summit",
    location: "London, UK",
    date: "September 10-12, 2024",
    time: "8:30 AM - 6:00 PM GMT",
  },
  {
    image: "/images/event6.png",
    title: "DevOps Days NYC",
    slug: "devops-days-nyc",
    location: "New York, NY",
    date: "October 8-9, 2024",
    time: "9:00 AM - 5:00 PM EST",
  },
];