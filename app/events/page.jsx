"use client";

import Link from "next/link";
import Background_C from "../_backgrounds/Background_C";
import Navbar from "../_components/Navbar";
import Image from "next/image";
import { SnowEffect } from "../_components/particleEffects";
import Footer from "../_components/Footer";
import { useEffect, useState } from "react";
import { getAllEvents } from "../utils/api";

// Import the new flipping card component
import EventCard from "./EventCard"; // <-- Adjust path as needed

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getAllEvents(); // Must return array of events with subEvents
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
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
}
