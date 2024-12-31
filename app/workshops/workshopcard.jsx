"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function WorkshopCard({
  id,
  name,
  description,
  sub_description,
  start_date,
  end_date,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [showSubworkshops, setShowSubworkshops] = useState(false);
  const [subworkshops, setSubworkshops] = useState([]);

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => setShowImage(false), 500);
      return () => clearTimeout(timer);
    } else {
      setShowImage(true);
    }
  }, [isFlipped]);

  const fetchSubworkshops = async () => {
    try {
      const response = await fetch(
        `${backendURL}/api/workshops/subworkshops?id=${id}`
      );
      const data = await response.json();
      console.log(data);
      setSubworkshops(data.subworkshops);
      setShowSubworkshops(true);
    } catch (error) {
      console.error("Error fetching subworkshops:", error);
    }
  };

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative w-full sm:w-[300px] h-[400px] rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="w-full h-full bg-gray-800">
        <div className="absolute inset-0">
          <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: isFlipped ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center bg-gray-800 text-white p-4"
          >
            <p className="text-md mb-2">{sub_description}</p>
            <p className="text-md">{`From: ${start_date} To: ${end_date}`}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                fetchSubworkshops();
              }}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              More Info
            </button>
          </motion.div>
          {showImage && !isFlipped && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/MemberCard.png"
                alt="Member Card Background"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          )}
          <motion.div
            initial={{ translateY: "0%" }}
            animate={{ translateY: isFlipped ? "-100%" : "0%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <div className="w-[200px] h-[200px] bg-white rounded mb-4" />
            <h2 className="text-3xl mb-2">{name}</h2>
            <p className="text-xl text-center">{description}</p>
          </motion.div>
        </div>
      </div>
      {showSubworkshops && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowSubworkshops(false)}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl mb-4">Subworkshops</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subworkshops.map((sub, index) => {
                console.log(sub);
                return (
                  <li key={index} className="mb-2 flex items-center">
                    <Image
                      src="/logo.png"
                      alt="Subworkshop Logo"
                      width={200}
                      height={200}
                      className="mr-4"
                    />
                    <div>
                      <h3 className="text-xl">{sub.name}</h3>
                      <p>{sub.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={() => setShowSubworkshops(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
