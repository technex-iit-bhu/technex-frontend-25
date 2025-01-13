"use client";
import { useState, useEffect } from "react";
import Background_B from "@/app/_backgrounds/Background_B";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Link from "next/link";
import Image from "next/image";
const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Helper function: fallback to "N/A" if empty
const displayOrNA = (value?: string | number) =>
  value !== undefined && value !== null && value !== "" ? value : "N/A";

export default function Profile() {
  const [profile, setProfile] = useState<{
    name?: string;
    username?: string;
    institute?: string;
    city?: string;
    year?: number;
    branch?: string;
    phone?: string;
    referralCode?: string;
    email?: string;
    github?: string;
    createdAt?: string;
    technexId?: string;
    registeredEvents?: string[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedEvent, setSelectedEvent] = useState<{
    subEvent: {
      id: string;
      name: string;
      description: string;
      sub_description: string;
      start_date: string | null;
      end_date: string | null;
      github: string;
      imgsrc: string;
    };
    parentEvent: {
      id: string;
      name: string;
      description: string;
    };
  } | null>(null);
  const [eventDetails, setEventDetails] = useState<Array<{
    subEvent: {
      id: string;
      name: string;
      description: string;
      sub_description: string;
      start_date: string | null;
      end_date: string | null;
      github: string;
      imgsrc: string;
    };
    parentEvent: {
      id: string;
      name: string;
      description: string;
    };
  }>>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        const res = await fetch(`${backendURL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch profile (${res.statusText})`);
        }

        const data = await res.json();
        setProfile(data.data);

        // Fetch details for each registered event
        if (data.data.registeredEvents && data.data.registeredEvents.length > 0) {
          const eventDetailsPromises = data.data.registeredEvents.map(async (eventName: string) => {
            const eventRes = await fetch(`${backendURL}/api/events/subevent-by-name?name=${eventName}`);
            if (!eventRes.ok) {
              throw new Error(`Failed to fetch event details for ${eventName}`);
            }
            const eventData = await eventRes.json();
            return eventData;
          });

          const details = await Promise.all(eventDetailsPromises);
          setEventDetails(details);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || "An Error occurred while Fetching profile");
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <>
        <Background_B>
          <Navbar />
          <main className="min-h-screen flex items-center justify-center text-white text-3xl">
            Loading profile...
          </main>
          <Footer />
        </Background_B>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Background_B>
          <Navbar />
          <main className="min-h-screen flex items-center justify-center text-red-500 text-2xl">
            Error: {error}
          </main>
          <Footer />
        </Background_B>
      </>
    );
  }

  if (!profile) {
    return (
      <>
        <Background_B>
          <Navbar />
          <main className="min-h-screen flex items-center justify-center text-white text-2xl">
            No profile data found.
          </main>
          <Footer />
        </Background_B>
      </>
    );
  }

  const {
    name,
    username,
    institute,
    city,
    year,
    branch,
    phone,
    referralCode,
    email,
    github,
    createdAt,
    technexId,
    registeredEvents = [],
  } = profile;

  const joinedDate = createdAt
    ? new Date(createdAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "N/A";

  return (
    <>
      <Background_B>
        <Navbar />
        <main className="min-h-screen py-20 mt-10 px-4 flex flex-col items-center text-white">
          <div
            className="
            w-full max-w-xl
            p-6
            bg-[#2B2A2A]/80
            border-4 border-[#454242]
            rounded-lg
            pixel-font
          "
          >
            <h1 className="text-3xl mb-6 text-center font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
              Your Profile
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(name)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Username</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(username)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Institute</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(institute)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">City</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(city)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Year</span>
                <span className="bg-black/30 rounded p-1">{year ?? "N/A"}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Branch</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(branch)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Phone</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(phone)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Referral</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(referralCode)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Email</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(email)}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">GitHub</span>
                <span className="bg-black/30 rounded p-1">
                  {github ? (
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-blue-400 hover:text-blue-300"
                    >
                      {github}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Joined At</span>
                <span className="bg-black/30 rounded p-1">{joinedDate}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Technex ID</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(technexId)}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/profile/edit"
              className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-500 transition"
            >
              Update Profile
            </Link>
          </div>

          {/* Registered Events Section */}
          <div className="mt-10 w-full max-w-6xl">
            <h2 className="text-2xl mb-4 font-bold">Registered Events</h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-6 pb-4">
                {eventDetails.length > 0 ? (
                  eventDetails.map((event, index) => (
                    <div
                      key={index}
                      className="flex-none w-72 bg-black/30 rounded-lg overflow-hidden cursor-pointer hover:bg-black/40 transition"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="relative h-40 w-full">
                        <Image
                          src={event.subEvent.imgsrc}
                          alt={event.subEvent.name}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{event.subEvent.name}</h3>
                        <p className="text-sm text-gray-300 mb-2">{event.subEvent.description}</p>
                        <p className="text-xs text-gray-400">Part of {event.parentEvent.name}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-black/30 rounded p-4 w-full text-center">
                    No events registered
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </Background_B>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2B2A2A] border-4 border-[#454242] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold">{selectedEvent.subEvent.name}</h2>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              
              <div className="relative h-60 w-full mb-4">
                <Image
                  src={selectedEvent.subEvent.imgsrc}
                  alt={selectedEvent.subEvent.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-300">{selectedEvent.subEvent.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Additional Details</h3>
                  <p className="text-gray-300">{selectedEvent.subEvent.sub_description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Parent Event</h3>
                  <h4 className="text-xl font-bold mb-2">{selectedEvent.parentEvent.name}</h4>
                  <p className="text-gray-300">{selectedEvent.parentEvent.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold">Start Date</h3>
                    <p className="text-gray-300">
                      {selectedEvent.subEvent.start_date ? 
                        new Date(selectedEvent.subEvent.start_date).toLocaleDateString() : 
                        'TBA'}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">End Date</h3>
                    <p className="text-gray-300">
                      {selectedEvent.subEvent.end_date ? 
                        new Date(selectedEvent.subEvent.end_date).toLocaleDateString() : 
                        'TBA'}
                    </p>
                  </div>
                </div>

                {selectedEvent.subEvent.github && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Resources</h3>
                    <a 
                      href={selectedEvent.subEvent.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline"
                    >
                      GitHub Repository
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
