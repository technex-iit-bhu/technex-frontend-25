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
      after:border-black/20`}
  >
    <span
      className={`text-sm ${isActive ? "text-white" : "text-[#E0D3B3]"} 
      font-VT323 uppercase tracking-wide
      drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]`}
    >
      {children}
    </span>
  </button>
);

const WorkshopCard = ({ workshop }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => setShowImage(false), 500);
      return () => clearTimeout(timer);
    }
    setShowImage(true);
  }, [isFlipped]);

  const formatDate = (dateString) => {
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
          <motion.div
            initial={{ translateY: "100%" }}
            animate={{ translateY: isFlipped ? "0%" : "100%" }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col bg-[#373737] text-white"
          >
            {workshop.subWorkshops && workshop.subWorkshops.length > 0 && (
              <div className="h-full flex flex-col">
                <div className="flex gap-1 p-2 bg-[#272727] overflow-x-auto">
                  {workshop.subWorkshops.map((sub, index) => (
                    <TabButton
                      key={index}
                      isActive={activeTab === index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTab(index);
                      }}
                    >
                      {sub.name}
                    </TabButton>
                  ))}
                </div>

                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="relative w-full h-32">
                      <Image
                        src={
                          workshop.subWorkshops[activeTab].imgsrc || "/logo.png"
                        }
                        alt={workshop.subWorkshops[activeTab].name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-lg"
                      />
                    </div>

                    <h3 className="text-xl font-VT323 text-[#E0D3B3]">
                      {workshop.subWorkshops[activeTab].name}
                    </h3>

                    <p className="text-sm">
                      {workshop.subWorkshops[activeTab].desc}
                    </p>
  

                    <div className="text-sm text-[#E0D3B3]">
                      <p>
                        Start:{" "}
                        {formatDate(workshop.subWorkshops[activeTab].sDate)}
                      </p>
                      <p>
                        End:{" "}
                        {formatDate(workshop.subWorkshops[activeTab].eDate)}
                      </p>
                    </div>

                    {workshop.subWorkshops[activeTab].github && (
                      <a
                        href={workshop.subWorkshops[activeTab].github}
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
                        Learn More
                      </a>
                    )}
                    {workshop.subWorkshops[activeTab].sub_desc && (
                      <a
                        href={workshop.subWorkshops[activeTab].sub_desc}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block px-4 py-2 mx-4 bg-[#4D4D4D] text-[#E0D3B3] 
                          hover:bg-[#5A5A5A] hover:text-white
                          border-2 border-[#272727]
                          font-VT323 text-sm
                          transition-all duration-100
                          hover:translate-y-[2px]"
                      >
                        Register Here
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {showImage && !isFlipped && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={workshop.imgsrc || "/MemberCard.png"}
                alt={workshop.name}
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
            <h2 className="text-3xl font-VT323 text-[#E0D3B3] mb-2">
              {workshop.name}
            </h2>
            <p className="text-xl text-center">{workshop.desc}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkshopCard;
