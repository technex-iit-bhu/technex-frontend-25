"use client";
import { useState, useEffect } from "react";
import Background_B from "@/app/_backgrounds/Background_B";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Link from "next/link";
import {IdCard} from "../_components/IdCard";
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
    qrToken?: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
        const profile_data = data.data;
        profile_data.qrToken = data.qrToken;
        console.log(profile_data)
        setProfile(profile_data);
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
          <div className="mt-10 w-full max-w-6xl bg-[#2B2A2A]/80 p-6 rounded-lg border-4 border-[#454242]">
            <h2 className="text-2xl mb-4 font-bold">Registered Events</h2>
            <div className="overflow-x-auto">
              {registeredEvents.length > 0 ? (
                <>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {registeredEvents.map((event, index) => (
                      <div
                        key={index}
                        className="bg-black/30 rounded p-4 font-minecraft"
                      >
                        {event}
                      </div>
                    ))}
                  </div>
                  <div className="bg-black/30 rounded p-4 font-minecraft text-center">
                    <div className="text-[#E0D3B3] mb-4">
                      [!] Want to explore more epic quests?
                    </div>
                    <a
                      href="https://konfhub.com/technex25"
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-block
                        px-4 py-2
                        bg-[#4D4D4D] hover:bg-[#5A5A5A]
                        border-2 border-[#272727]
                        relative
                        transition-all duration-100
                        hover:translate-y-[2px]
                        before:absolute before:inset-0 
                        before:border-t-2 before:border-l-[1px]
                        before:border-white/10
                        after:absolute after:inset-0
                        after:border-r-[1px] after:border-b-2
                        after:border-black/20
                        text-[#E0D3B3] hover:text-white
                        uppercase tracking-wide
                        drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]
                      "
                    >
                      [Register More Events]
                    </a>
                  </div>
                </>
              ) : (
                <div className="bg-black/30 rounded p-4 w-full text-center font-minecraft tracking-wide">
                  <div className="text-[#E0D3B3] mb-4">
                    [!] No events registered yet. Time to embark on a new quest!
                  </div>
                  <a
                    href="https://konfhub.com/technex25"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-block
                      px-4 py-2
                      bg-[#4D4D4D] hover:bg-[#5A5A5A]
                      border-2 border-[#272727]
                      relative
                      transition-all duration-100
                      hover:translate-y-[2px]
                      before:absolute before:inset-0 
                      before:border-t-2 before:border-l-[1px]
                      before:border-white/10
                      after:absolute after:inset-0
                      after:border-r-[1px] after:border-b-2
                      after:border-black/20
                      text-[#E0D3B3] hover:text-white
                      uppercase tracking-wide
                      drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]
                    "
                  >
                    [Register for Events]
                  </a>
                </div>
              )}
            </div>
          </div>
          {/* <IdCard userData={{
            name: profile.name || '',
            college: profile.institute || '',
            id: profile.technexId || '',
            email: profile.email || '',
            phone: profile.phone || '',
            qrToken: profile.qrToken || '',
            profile_photo: "",
          }} /> */}
        </main>
        <Footer />
      </Background_B>
    </>
  );
}
