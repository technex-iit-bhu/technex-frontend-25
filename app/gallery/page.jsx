"use client";
import Image from "next/image";
import Background_D from "../_backgrounds/Background_D";
import Navbar from "../_components/Navbar";
import { FireEffect } from "../_components/particleEffects";
import { cardVariants } from "../utils/cardVariants";
import { motion } from "motion/react";
import { useState } from "react";
import Footer from "../_components/Footer";

const GalleryModal = ({ onClick, children }) => {
  return (
    <div
      onClick={onClick}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center"
    >
      {children}
    </div>
  );
};

const GalleryCard = ({ imageSrc, alt, expand, isExpanded, index }) => {
  return (
    <motion.div
      layoutId={imageSrc}
      whileHover={{
        scale: 1.08,
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      transition={{ duration: 0.2 }}
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ margin: "-80px 0px -10px 0px", amount: 0.1 }}
      onClick={() => expand(index)}
      className="w-[300px] lg:w-[533px] relative h-[160px] lg:h-[300px] flex flex-col justify-center items-center text-white"
    >
      <Image
        src="/GalleryCard.png"
        width={533}
        height={0}
        className="w-[300px] lg:w-[533px] absolute z-[-1] top-0"
        alt="gallery-card"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <img
        src={imageSrc}
        className="object-contain object-center w-[265px] lg:w-[470px] mt-[15px] lg:mt-[10px] h-[160px] lg:h-[260px] bg-white rounded overflow-hidden"
      />
      <div className="absolute bottom-[-10px] w-[300px] lg:w-[533px] flex justify-center">
        <span className="text-black px-4 bg-white rounded-md bg-opacity-70">
          {/* {isExpanded?"true":"false"} */}
          {alt}
        </span>
      </div>
      {/* <div
        className={`absolute w-[100%] h-[100%] bg-gradient-to-r from-black/80 to-transparent left-0 ${
          isExpanded ? "" : "hidden"
        }`}
      >
        <div className="h-full w-[50%] overflow-y-auto no-scrollbar">
          {image text}
        </div>
      </div> */}
    </motion.div>
  );
};

export default function Gallery() {
  let [expandedImage, setExpandedImage] = useState(null);

  const images = [
    { imageSrc: "/gallery/Sophie.png", alt: "Sophia" },
    { imageSrc: "/gallery/AshneerGrover.png", alt: "Ashneer Grover" },
    { imageSrc: "/gallery/GuruRandhawa.png", alt: "Guru Randhawa" },
    { imageSrc: "/gallery/JubinNautiyal.png", alt: "Jubin Nautiyal" },
    { imageSrc: "/gallery/KavithaSubramanian.jpg", alt: "Kavitha Subramanian" },
    { imageSrc: "/gallery/LaxmiAgarwal.png", alt: "Laxmi Agarwal" },
    { imageSrc: "/gallery/MikaSingh.png", alt: "Mika Singh" },
    { imageSrc: "/gallery/NamitaThapar.png", alt: "Namita Thapar" },
    { imageSrc: "/gallery/NitinVijay.png", alt: "Nitin Vijay" },
    { imageSrc: "/gallery/RajivAnand.png", alt: "Rajiv Anand" },
    { imageSrc: "/gallery/SandeepJain.png", alt: "Sandeep Jain" },
    { imageSrc: "/gallery/SankarAnandPal.jpg", alt: "Sankar Anand Pal" },
    { imageSrc: "/gallery/SatishDua.png", alt: "Satish Dua" },
    { imageSrc: "/gallery/TechnicalGuruji.png", alt: "Technical Guruji" },
  ];

  return (
    <div className="absolute">
      {expandedImage !== null && (
        <GalleryModal onClick={() => setExpandedImage(null)}>
          <motion.div
            className="scale-110 sm:scale-[2]"
            onClick={(e) => e.stopPropagation()}
          >
            <GalleryCard
              {...images[expandedImage]}
              isExpanded={true}
              expand={() => {}}
            />
          </motion.div>
        </GalleryModal>
      )}
      <Background_D />
      <FireEffect />
      <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip">
        <Navbar />
        <div className="text-white px-20 py-20 text-5xl">Gallery</div>
        <div className="w-full flex items-center justify-center mb-24">
          <div className="max-w-[1200px] flex flex-wrap gap-20 justify-center items-center">
            {images.map((image, idx) => (
              <GalleryCard
                {...image}
                index={idx}
                expand={setExpandedImage}
                key={idx}
                isExpanded={expandedImage === idx}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
