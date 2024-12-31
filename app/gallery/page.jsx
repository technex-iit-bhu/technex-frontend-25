"use client";
import Image from "next/image";
import Background_D from "../_backgrounds/Background_D";
import Navbar from "../_components/Navbar";
import {FireEffect} from "../_components/particleEffects"
import { cardVariants } from "../utils/cardVariants";
import { motion } from "motion/react";
import { useState } from "react";
import Footer from "../_components/Footer";


const GalleryModal = ({ onClick, children }) => {
  return <div onClick={onClick} className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center">
    {children}
  </div>
}

const GalleryCard = ({ imageSrc, expand }) => {
  return (
    (
    <motion.div
      layoutId={imageSrc}
      whileHover={{ scale: 1.08, boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
      transition={{ duration: 0.2 }}
      initial="offscreen" whileInView="onscreen"
      variants={cardVariants} viewport={{margin: "-80px 0px -10px 0px", amount: 0.1 }}
      onClick={()=>expand(imageSrc)}
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
          height: "auto"
        }} />
        <div className="w-[265px] lg:w-[470px] mt-[15px] lg:mt-[10px] h-[160px] lg:h-[260px] bg-white rounded overflow-hidden"></div>
      </motion.div>
  )
  );
};

export default function Gallery() {
  let [expandedImage, setExpandedImage] = useState(null);
  return (
    <>
      {expandedImage && <GalleryModal onClick={() => setExpandedImage(null)} >
        <motion.div className="scale-110 sm:scale-[2]" onClick={e => e.stopPropagation()}>
          <GalleryCard imageSrc={expandedImage} expand={() => { }} />
        </motion.div>
      </GalleryModal>}
      <Background_D />
      <div className="p-0 m-0 pointer-events-none">
        <FireEffect />
      </div>
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <div className="text-white px-20 py-10 text-5xl">Gallery</div>
        <div className="w-full flex items-center justify-center mb-24">
          <div className="max-w-[1200px] flex flex-wrap gap-20 justify-center items-center">
            <GalleryCard imageSrc="dummy0.jpg" expand={setExpandedImage} />
            <GalleryCard imageSrc="dummy1.jpg" expand={setExpandedImage} />
            <GalleryCard imageSrc="dummy2.jpg" expand={setExpandedImage} />
            <GalleryCard imageSrc="dummy3.jpg" expand={setExpandedImage} />
            <GalleryCard imageSrc="dummy4.jpg" expand={setExpandedImage} />
            <GalleryCard imageSrc="dummy5.jpg" expand={setExpandedImage} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}