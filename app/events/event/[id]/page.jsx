"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Use useRouter to access dynamic route parameters
import Background_C from "@/app/_backgrounds/Background_C";
import Navbar from "@/app/_components/Navbar";
import Image from "next/image";
import { SnowEffect } from "@/app/_components/particleEffects";
import Footer from "@/app/_components/Footer";
import { getEventById } from "@/app/utils/api";
import { useParams } from "next/navigation";

const EventCard = ({ subevent, onClick }) => {
  return (
    <div
      onClick={() => onClick(subevent)}
      className="w-[300px] h-[400px] relative flex flex-col items-center text-white transition-transform transform hover:scale-105 cursor-pointer"
    >
      <Image
        src="/SponsorCard.png"
        width={300}
        height={0}
        className="absolute z-[-1] top-0"
        alt="sponsor-card"
      />
      <Image
        src={subevent.imgsrc}
        width={300}
        height={0}
        className="w-[230px] h-[220px] mt-[30px] mb-[80px]  rounded overflow-hidden"
        alt="subevent"
      />
      <div className="w-[200px] text-2xl text-center bg-black bg-opacity-50 rounded-md">
        {subevent.name}
      </div>
    </div>
  );
};

const Modal = ({ subevent, onClose }) => {
  if (!subevent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-black p-6 rounded-lg max-w-3xl w-full">
        <div className="text-white text-2xl font-bold mb-4">
          {subevent.name}
        </div>
        <p className="text-gray-700 mb-4">{subevent.description}</p>
        <p className="text-gray-500">
          Start: {new Date(subevent.startDate).toLocaleString()}
        </p>
        <p className="text-gray-500 mb-4">
          End: {new Date(subevent.endDate).toLocaleString()}
        </p>
        <a
          href={subevent.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View on GitHub
        </a>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const EventPage = () => {
  // Using router to access dynamic parameters
  const { id } = useParams(); // Getting the 'id' parameter from the URL

  const [event, setEvent] = useState(null);
  const [subEvents, setsubEvents] = useState([]);
  const [selectedSubevent, setSelectedSubevent] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the event details using the `id`
      const fetchEvent = async () => {
        try {
          const eventData = await getEventById(id);
          setEvent(eventData);
          setsubEvents(eventData.subEvents || []); // Populate the subEvents array
        } catch (error) {
          console.error("Failed to fetch event details:", error);
        }
      };
      fetchEvent();
    }
  }, [id]); // Fetch event when `id` changes

  const handleCardClick = (subevent) => {
    setSelectedSubevent(subevent);
  };

  const handleCloseModal = () => {
    setSelectedSubevent(null);
  };

  if (!event) {
    return (
      <div className="text-white flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Background_C />
      <SnowEffect />
      <Navbar />
      <main className="flex-grow">
        <div className="text-white px-20 py-10 text-6xl flex justify-center">
          {event.name}
        </div>
        <div className="px-20">
          <div className="bg-black bg-opacity-50 p-10 rounded-md text-lg text-white">
            <div className="text-white pb-9 text-4xl">Description</div>
            {event.desc}
          </div>
          <div className="mt-10">
            <div className="text-white pb-9 text-6xl flex justify-center">
              subEvents
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10 justify-items-center">
              {subEvents.map((subevent) => (
                <EventCard
                  key={subevent.id}
                  subevent={subevent}
                  onClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        </div>
        <Modal subevent={selectedSubevent} onClose={handleCloseModal} />
        <Footer />
      </main>
    </>
  );
};

export default EventPage;
