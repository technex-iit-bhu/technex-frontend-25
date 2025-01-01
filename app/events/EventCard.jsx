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

export default function EventCard({ event }) {
  const eventId = event.id;
  const [isFlipped, setIsFlipped] = useState(false);
  const [showFrontImage, setShowFrontImage] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  // This effect hides the front image after flip animation finishes
  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => setShowFrontImage(false), 500);
      return () => clearTimeout(timer);
    }
    setShowFrontImage(true);
  }, [isFlipped]);

  const formatDate = (dateString) => {
    // e.g. "2025-03-12T00:00:00Z" => "Mar 12, 2025"
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <motion.div
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative w-full sm:w-[300px] h-[400px] rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="w-full h-full bg-[#373737]">
        <div className="absolute inset-0">
          {/* Back side: SubEvent Tabs */}
          <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: isFlipped ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col bg-[#373737] text-white"
          >
            {/* Only show subEvent tabs if there are subEvents */}
            {event.subEvents && event.subEvents.length > 0 && (
              <div className="h-full flex flex-col">
                {/* Tab Buttons */}
                <div className="flex gap-1 p-2 bg-[#272727] overflow-x-auto">
                  {event.subEvents.map((subEvent, index) => (
                    <TabButton
                      key={index}
                      isActive={activeTab === index}
                      onClick={(e) => {
                        // Prevent the flip if user only changes tab
                        e.stopPropagation();
                        setActiveTab(index);
                      }}
                    >
                      {`SubEvent ${index + 1}`}
                    </TabButton>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 p-4 overflow-y-auto">
                  {event.subEvents[activeTab] && (
                    <div className="space-y-4">
                      {/* subEvent image */}
                      <div className="relative w-full h-32">
                        <Image
                          src={event.subEvents[activeTab].imgsrc || "/logo.png"}
                          alt={event.subEvents[activeTab].name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-lg"
                        />
                      </div>

                      {/* subEvent Name */}
                      <h3 className="text-xl font-VT323 text-[#E0D3B3]">
                        {event.subEvents[activeTab].name}
                      </h3>

                      {/* subEvent Description */}
                      <p className="text-sm">
                        {event.subEvents[activeTab].desc}
                      </p>
                      <p className="text-sm text-gray-300">
                        {event.subEvents[activeTab].sub_desc}
                      </p>

                      {/* Start / End Date */}
                      <div className="text-sm text-[#E0D3B3]">
                        <p>
                          Start: {formatDate(event.subEvents[activeTab].sDate)}
                        </p>
                        <p>
                          End: {formatDate(event.subEvents[activeTab].eDate)}
                        </p>
                      </div>

                      {/* GitHub Link (optional) */}
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

                      {/* Read More Button -> navigate to subEvent’s own page */}
                      <Link
                        href={`/events/event/${eventId}/subevent/${event.subEvents[activeTab].name}`}
                        className="inline-block px-4 py-2 bg-yellow-600 text-white rounded-md"
                      >
                        Read More
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Front side image */}
          {showFrontImage && !isFlipped && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={event.imgsrc || "/MemberCard.png"}
                alt={event.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          )}

          {/* Front side text */}
          <motion.div
            initial={{ translateY: "0%" }}
            animate={{ translateY: isFlipped ? "-100%" : "0%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
          >
            <h2 className="text-3xl font-VT323 text-[#E0D3B3] mb-2">
              {event.name}
            </h2>
            <p className="text-xl text-center">{event.desc}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
