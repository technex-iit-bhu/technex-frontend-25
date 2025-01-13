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
  const [registeredEvents, setRegisteredEvents] = useState([]);
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

  useEffect(() => {
    if (events.length > 0) {
      const token = localStorage.getItem("token");
      // console.log("E")
      try {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.json())
        .then((res) => {
          if(res){
            setRegisteredEvents(res.data.registeredEvents);
            // console.log(res.data.registeredEvents)
          }
        });
      } catch (err) {
        console.log(err);
      }
      // console.log("EE")
    }
  }, [events]);

  return (
    <div className="absolute">
      <Background_C />
      <SnowEffect />
      <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip">
        <Navbar />
        <main className="flex-grow">
          <div className="text-white px-4 md:px-20 py-20 text-5xl">Events</div>

          <div className="w-full px-4 md:px-10 lg:px-20 mb-20">
            {loading && (
              <p className="text-white text-7xl">Loading events...</p>
            )}
            {error && <p className="text-red-500 text-5xl">Error: {error}</p>}

            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((event) => (
                  <EventCard key={event.id} event={event} registeredEvents={registeredEvents}/>
                ))}
              </div>
            )}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
