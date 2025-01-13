"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const TabButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 
      ${isActive ? "bg-[#5A5A5A]" : "bg-[#4D4D4D] hover:bg-[#5A5A5A]"}
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
    `}
  >
    <span
      className={`text-sm ${
        isActive ? "text-white" : "text-[#E0D3B3]"
      } font-VT323 uppercase tracking-wide drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]`}
    >
      {children}
    </span>
  </button>
);

export default function EventCard({ event, registeredEvents }) {
  const eventId = event.id;
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFrontImage, setShowFrontImage] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  // console.log("reg : ",registeredEvents)

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => setShowFrontImage(false), 500);
      return () => clearTimeout(timer);
    }
    setShowFrontImage(true);
  }, [isFlipped]);

  // const formatDate = (dateString) => {
  //   const date = new Date(dateString);
  //   return date.toLocaleDateString(undefined, {
  //     year: "numeric",
  //     month: "short",
  //     day: "numeric",
  //   });
  // };

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      // Let the grid control the width. Just cap the max width if you like.
      className="relative rounded-lg overflow-hidden cursor-pointer max-w-[500px] sm:max-w-[600px] lg:max-w-[700px] h-[400px]"
    >
      <div className="w-full h-full bg-[#373737]">
        <div className="absolute inset-0">
          {/* BACK SIDE */}
          <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: isFlipped ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col bg-[#373737] text-white"
          >
            {event.subEvents && event.subEvents.length > 0 && (
              <div className="h-full flex flex-col">
                {/* TABS */}
                <div className="flex gap-1 p-2 bg-[#272727] overflow-x-auto">
                  {event.subEvents.map((subEvent, index) => (
                    <TabButton
                      key={index}
                      isActive={activeTab === index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(index);
                      }}
                    >
                      <div className="overflow-x-auto whitespace-nowrap">
                        {subEvent.name}
                      </div>
                    </TabButton>
                  ))}
                </div>

                {/* TAB CONTENT */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {event.subEvents[activeTab] && (
                    <div className="space-y-4">
                      <div className="relative w-full h-32">
                        <Image
                          src={event.subEvents[activeTab].imgsrc || "/logo.jpg"}
                          alt={event.subEvents[activeTab].name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                        />
                      </div>

                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-VT323 text-[#E0D3B3]">
                          {event.subEvents[activeTab].name}
                        </h3>
                        <div className="flex gap-4">
                          {!registeredEvents.includes(
                            event.subEvents[activeTab].name
                          ) ? (
                            <Link
                              href={`https://konfhub.com/technex25`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-block px-4 py-2 bg-orange-600 text-white rounded-md"
                              target="_blank"
                            >
                              Register Now
                            </Link>
                          ) : (
                            <Link
                              href={`#`}
                              onClick={(e) => e.stopPropagation()}
                              className="inline-block px-4 py-2 bg-gray-500 text-white rounded-md pointer-events-none"
                              target="_blank"
                            >
                              Registered
                            </Link>
                          )}
                          <Link
                            href={`/events/event/${eventId}/subevent/${event.subEvents[activeTab].name}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-block px-4 py-2 bg-yellow-600 text-white rounded-md"
                            target="_blank"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>

                      <p className="text-sm">
                        {event.subEvents[activeTab].desc}
                      </p>
                      <p className="text-sm text-gray-300">
                        {event.subEvents[activeTab].sub_desc}
                      </p>

                      {event.subEvents[activeTab].github && (
                        <a
                          href={event.subEvents[activeTab].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block px-4 py-2 bg-[#4D4D4D] text-[#E0D3B3] 
                            hover:bg-[#5A5A5A] hover:text-white
                            border-2 border-[#272727]
                            font-VT323 text-sm
                            transition-all duration-100
                            hover:translate-y-[2px]"
                        >
                          GitHub Repository
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* FRONT IMAGE */}
          {showFrontImage && !isFlipped && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={event.imgsrc || "/bg2.jpg"}
                alt={event.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          )}

          {/* FRONT TEXT */}
          <motion.div
            initial={{ translateY: "0%" }}
            animate={{ translateY: isFlipped ? "-100%" : "0%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col text-white p-4 bg-black opacity-80"
          >
            <div className="mb-4 mt-8">
              <h2 className="text-3xl font-VT323 text-[#E0D3B3] mb-2 text-center">
                {event.name}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto">
              <p className="text-xl text-center">{event.desc}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
