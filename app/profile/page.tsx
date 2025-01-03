"use client";

import { useState, useEffect } from "react";
import Background_B from "@/app/_backgrounds/Background_B";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import Link from "next/link";

// Helper function: fallback to "N/A" if empty
const displayOrNA = (value?: string | number) =>
  value !== undefined && value !== null && value !== "" ? value : "N/A";

export default function Profile() {
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Example: retrieving token from localStorage or cookies
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        // Call the backend: GET /api/user/profile
        const res = await fetch("http://localhost:6969/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error(`Failed to fetch profile (${res.statusText})`);
        }

        const data = await res.json();
        // The user data is in data.data
        setProfile(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Handle loading / error states
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

  // Extract user info
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
  } = profile;

  // Format "joined date"
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
          {/* Container with a "Minecraft" pixel / block style */}
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
            {/* Profile Title */}
            <h1 className="text-3xl mb-6 text-center font-bold drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]">
              Your Profile
            </h1>

            {/* Two-column grid for user info, responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {/* Name */}
              <div className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(name)}
                </span>
              </div>

              {/* Username */}
              <div className="flex flex-col">
                <span className="font-semibold">Username</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(username)}
                </span>
              </div>

              {/* Institute */}
              <div className="flex flex-col">
                <span className="font-semibold">Institute</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(institute)}
                </span>
              </div>

              {/* City */}
              <div className="flex flex-col">
                <span className="font-semibold">City</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(city)}
                </span>
              </div>

              {/* Year */}
              <div className="flex flex-col">
                <span className="font-semibold">Year</span>
                <span className="bg-black/30 rounded p-1">{year ?? "N/A"}</span>
              </div>

              {/* Branch */}
              <div className="flex flex-col">
                <span className="font-semibold">Branch</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(branch)}
                </span>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <span className="font-semibold">Phone</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(phone)}
                </span>
              </div>

              {/* Referral Code */}
              <div className="flex flex-col">
                <span className="font-semibold">Referral</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(referralCode)}
                </span>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <span className="font-semibold">Email</span>
                <span className="bg-black/30 rounded p-1">
                  {displayOrNA(email)}
                </span>
              </div>

              {/* Github */}
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

              {/* Joined At */}
              <div className="flex flex-col">
                <span className="font-semibold">Joined At</span>
                <span className="bg-black/30 rounded p-1">{joinedDate}</span>
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
        </main>

        <Footer />
      </Background_B>
    </>
  );
}
