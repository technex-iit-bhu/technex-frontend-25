"use client";
import { useEffect, useState } from "react";
import Background_E from "../_backgrounds/Background_E";
import Navbar from "../_components/Navbar";
import WorkshopCard from "./workshopcard";
import Footer from "../_components/Footer";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    fetch(`${backendURL}/api/workshops`)
      .then((response) => response.json())
      .then((data) => setWorkshops(data.workshops))
      .catch((error) => {
        return console.error("Error fetching workshops:", error);
      });
  }, []);
  return (
    <>
      <Background_E />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Workshops</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 m-10">
          {workshops.map((workshop) => (
            <WorkshopCard
              key={workshop.id}
              id={workshop.id}
              name={workshop.name}
              description={workshop.description}
              sub_description={workshop.subWorkshops?.[0]?.sub_desc}
              start_date={workshop.subWorkshops?.[0]?.startDate}
              end_date={workshop.subWorkshops?.[0]?.endDate}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
