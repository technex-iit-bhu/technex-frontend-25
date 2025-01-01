"use client";
import Link from "next/link";
import Background_C from "../_backgrounds/Background_C";
import Navbar from "../_components/Navbar";
import Image from "next/image";
import { SnowEffect } from "../_components/particleEffects";
import Footer from "../_components/Footer";
import { useEffect, useState } from "react";
import { getAllEvents } from "../utils/api";

const EventsCard = ({ name, id, imgsrc }) => {
  console.log(name);
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

        <Image
          src={imgsrc}
          width={300}
          height={0}
          className="w-[230px] h-[220px] mt-[30px] mb-[80px]  rounded overflow-hidden"
          alt="event"
        />
        <div className="w-[200px] text-2xl text-center bg-black bg-opacity-50 rounded-md">
          {name}
        </div>
      </div>
    </Link>
  );
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents(); // Now returns an array of events
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Background_C />
      <SnowEffect />
      <Navbar />
      <main className="flex-grow">
        <div className="text-white px-20 py-10 text-5xl">Events</div>
        <div className="w-full flex items-center justify-center px-4 md:px-10 lg:px-20 mb-20">
          {loading && <p className="text-white text-7xl">Loading events...</p>}
          {error && <p className="text-red-500 text-5xl">Error: {error}</p>}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-20">
              {events.map((event) => (
                <EventsCard
                  key={event.id}
                  id={event.id}
                  name={event.name}
                  imgsrc={event.imgsrc}
                />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Events;
