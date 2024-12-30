"use client";
import Image from "next/image";
import Background_C from "../_backgrounds/Background_C";
import Navbar from "../_components/Navbar";
import { cardVariants } from "../utils/cardVariants";
import { motion } from "motion/react";
import Footer from "../_components/Footer";
import {SnowEffect} from "../_components/particleEffects"
import { useState } from "react";

// Example data structure
const teamData = {
  "Tech Team": [
    {
      name: "John Doe",
      position: "Tech Team Member",
      phone: "+919876543210",
      insta: "@johndoe"
    },
    {
      name: "John Doe",
      position: "Tech Team Member",
      phone: "+919876543210",
      insta: "@johndoe"
    }
  ],
  "Design Team": [
    {
      name: "John Doe",
      position: "Design Team Member",
      phone: "+919876543210",
      insta: "@johndoe"
    }
  ],
  "Content Team": [
    {
      name: "John Doe",
      position: "Content Team Member",
      phone: "+919876543210",
      insta: "@johndoe"
    }
  ]
};

const TeamSelect = ({ title, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected ? "bg-gray-500 text-white" : "bg-white text-black"
      } hover:bg-gray-800 hover:text-white transition px-8 py-1 rounded-md z-10`}
    >
      {title}
    </button>
  );
};

const MemberCard = ({ name, position, phone, insta }) => {
  return (
    (<motion.div
      whileHover={{ scale: 1.08, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
      transition={{ duration: 0.2 }}
      initial="offscreen" whileInView="onscreen"
      variants={cardVariants} viewport={{margin: "-80px 0px -10px 0px", amount: 0.1 }}
      className="w-[300px] relative h-[400px] flex flex-col justify-center items-center text-white rounded-lg"
    >
      <Image
        src="/MemberCard.png"
        width={300}
        height={0}
        className="absolute z-[-1]"
        alt="member-card"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <div className="w-[200px] h-[200px] bg-white rounded overflow-hidden"></div>
      <div className="text-3xl pt-4">{name}</div>
      <div className="text-2xl px-4">{position}</div>
      <div className="text-xl px-4 w-full flex">
        <div className="flex-1 ml-2">{phone}</div>
        <div className="mr-2">{insta}</div>
      </div>
    </motion.div>)
  );
};

export default function Team() {
  const [selectedTeam, setSelectedTeam] = useState("All");
  
  const getFilteredMembers = () => {
    if (selectedTeam === "All") {
      return Object.values(teamData).flat();
    }
    return teamData[selectedTeam] || [];
  };

  return (
    <>
      <Background_C />
      <SnowEffect />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Meet the team</div>
        <div className="px-20 pb-10 text-2xl flex gap-5 max-w-[80vw] overflow-auto">
          <TeamSelect 
            title="All" 
            selected={selectedTeam === "All"}
            onClick={() => setSelectedTeam("All")}
          />
          {Object.keys(teamData).map((team) => (
            <TeamSelect
              key={team}
              title={team}
              selected={selectedTeam === team}
              onClick={() => setSelectedTeam(team)}
            />
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="max-w-[1000px] flex flex-wrap gap-10 pb-10 justify-center items-center">
            {getFilteredMembers().map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                position={member.position}
                phone={member.phone}
                insta={member.insta}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}