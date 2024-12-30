import Link from "next/link";
import Background_C from "../_backgrounds/Background_C";
import Navbar from "../_components/Navbar";
import Image from "next/image";

const EventsCard = ({ name, id }) => {
  return (
    <Link href={`/events/event/${id}`} passHref>
      <div className="w-[300px] h-[400px] relative flex flex-col items-center text-white transition-transform transform hover:scale-105 cursor-pointer">
        <Image
          src="/SponsorCard.png"
          width={300}
          height={0}
          className="absolute z-[-1] top-0"
          alt="sponsor-card"
        />
        <div className="w-[230px] h-[220px] mt-[30px] mb-[80px] bg-white rounded overflow-hidden"></div>
        <div className="w-[200px] text-2xl text-center bg-black bg-opacity-50 rounded-md">
          {name}
        </div>
      </div>
    </Link>
  );
};

const eventsArray = [
  {
    id: "64bfea1c3e50a92c40e7cbae",
    name: "Event1",
    desc: "Description for Event1",
    description: "Description for Event1",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb1",
    name: "Event2",
    desc: "Description for Event2",
    description: "Description for Event2",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb2",
    name: "Event3",
    desc: "Description for Event3",
    description: "Description for Event3",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb3",
    name: "Event4",
    desc: "Description for Event4",
    description: "Description for Event4",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb4",
    name: "Event5",
    desc: "Description for Event5",
    description: "Description for Event5",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb5",
    name: "Event6",
    desc: "Description for Event6",
    description: "Description for Event6",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb6",
    name: "Event7",
    desc: "Description for Event7",
    description: "Description for Event7",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb7",
    name: "Event8",
    desc: "Description for Event8",
    description: "Description for Event8",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb8",
    name: "Event9",
    desc: "Description for Event9",
    description: "Description for Event9",
  },
  {
    id: "64bfea1c3e50a92c40e7cbb9",
    name: "Event10",
    desc: "Description for Event10",
    description: "Description for Event10",
  },
];

const events = () => {
  return (
    <>
      <Background_C />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Events</div>
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20">
            {eventsArray.map((event) => (
              <EventsCard key={event.id} id={event.id} name={event.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default events;
