"use client";

import { useEffect, useState } from "react";
import Background_C from "../_backgrounds/Background_E";
import Navbar from "../_components/Navbar";
import WorkshopCard from "./workshopcard";
import { SnowEffect } from "../_components/particleEffects";
import Footer from "../_components/Footer";
import { getAllWorkshops } from "../utils/api";

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [registeredWorkshops, setRegisteredWorkshops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkshops = async () => {
      try {
        const data = await getAllWorkshops();
        setWorkshops(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkshops();
  }, []);

  useEffect(() => {
    if (workshops.length > 0) {
      const token = localStorage.getItem("token");
      try {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res) {
              setRegisteredWorkshops(res.data.registeredWorkshops);
            }
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, [workshops]);

  return (
    <div className="absolute">
      <Background_C />
      <SnowEffect />
      <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip">
        <Navbar />
        <main className="flex-grow">
          <div className="text-white px-4 md:px-20 py-20 text-5xl">Workshops</div>

          <div className="w-full px-4 md:px-10 lg:px-20 mb-20">
            {loading && (
              <p className="text-white text-7xl">Loading workshops...</p>
            )}
            {error && <p className="text-red-500 text-5xl">Error: {error}</p>}

            {!loading && !error && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {workshops.map((workshop) => (
                  <WorkshopCard
                    key={workshop.id}
                    workshop={workshop}
                    registeredWorkshops={registeredWorkshops}
                  />
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
