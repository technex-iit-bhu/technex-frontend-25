"use client";
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Background_A from "../_backgrounds/Background_A";
const myFont = localFont({ src: "./minecrafter/Minecrafter.Reg.ttf" });

export default function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const opacityProgres2 = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);
  const topProgress = useTransform(scrollYProgress, [0, 1], ["50vh", "100vh"]);
  const targetDate = new Date("2025-01-04");
  const currentDate = new Date();
  const timeDiff = targetDate - currentDate;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const text =
    daysRemaining <= 0
      ? "Stay Technexed!"
      : daysRemaining === 1
      ? `${daysRemaining} day to go`
      : `${daysRemaining} days to go`;
  const TypewriterEffectText = ({ text }) => {
    return (
      <motion.div
        className="h-screen w-screen sticky top-0 left-0 flex flex-col justify-center items-center text-white"
        style={{ opacity: 0.8 }}
      >
        <div className="relative text-2xl text-center typewriter">
          <h1 className={myFont.className}>
            WELCOME TO <br /> TEEEECHNEX
          </h1>
        </div>
        <div
          className={`relative text-9xl text-center ${myFont.className} animate-pulse`}
        >
          {text}
        </div>
      </motion.div>
    );
  };
  return (
    <>
    <Background_A />
      <div
        className="w-full h-[200vh] relative top-0 overflow-visible"
        ref={heroRef}
      >
        <motion.div
          className="flex flex-col md:flex-row sticky top-0 w-screen justify-center items-center h-screen"
          style={{ scale: scaleProgress, opacity: opacityProgress }}
        >
          <motion.img
            src="/grass1.svg"
            alt=""
            className="absolute top-0 right-0 md:w-[30%] w-[60%] z-[1]"
            initial={{ x: "200px" }}
            whileInView={{ x: 0 }}
          />
          <motion.img
            src="/grass2.svg"
            alt=""
            className="absolute bottom-0 left-0 md:w-[30%] w-[60%] z-[1]"
            initial={{ x: "-200px" }}
            whileInView={{ x: 0 }}
          />
          <div className="flex justify-center items-center w-full h-full relative">
            <motion.img
              src="/TECHNEX25.png"
              alt=""
              className="absolute top-[50vh] w-[300px] md:w-[500px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            />
            <motion.img
              src="/splash_screen.png"
              alt=""
              className="absolute w-[300px] md:w-[400px] top-[50vh] rotate-[30deg] hidden md:block z-[2]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: ["20deg"],
                x: ["180px"],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
            <motion.img
              src="/splash_screen.png"
              alt=""
              className="absolute w-[200px] md:w-[300px] top-[50vh] rotate-[30deg] translate-x-[70px] block md:hidden z-[2]"
              animate={{
                scale: [1, 1.2, 1],
                rotate: ["20deg"],
                x: ["70px"],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            />
          </div>
          <div className="absolute bottom-0 rounded-t-lg z-[50] bg-opacity-70 text-black w-[300px] text-center text-xl text-[300] left-[calc(50vw-150px)] bg-white">
            [Scroll to explore]
          </div>
          {/* <div className="flex w-full md:w-1/2 h-full relative justify-center items-center"></div> */}
          {/* <motion.img
            src="/creeper.png"
            alt=""
            className="w-[50%] h-[200px] absolute bottom-0 object-contain object-bottom right-[50px] z-[2]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          /> */}
        </motion.div>
        <motion.div
          className="h-screen w-screen sticky top-0 left-0 flex flex-col justify-center items-center text-white"
          style={{ opacity: opacityProgres2 }}
        >
          <div className="relative text-2xl text-center typewriter mb-8 text-[#E0D3B3]">
            <h1 className={myFont.className}>
              WELCOME TO <br /> TEEEECHNEX
            </h1>
          </div>
          <div
            className={`relative text-9xl text-center ${myFont.className} animate-pulse text-[#E0D3B3]`}
          >
            {text}
          </div>
        </motion.div>
      </div>
    </>
  );
}

// const text = "XX days to go";
// return (
//   <>
//     <div className="w-[full] h-[100vh] flex justify-center items-center">
//       <div className="relative">
//         <motion.div className="div" initial={{opacity:0}} whileInView={{opacity:1}} transition={{ duration: 0.3,amount:0.5, ease: "linear" }}>

//         <motion.div
//           initial={{top:'0px',left:'0px'}}
//           whileInView={{top:'10px',left:'-10px'}}
//           transition={{ duration: 0.3,amount:0.5,delay:0.5, type: "spring" }}
//           className={`relative hidden xl:flex justify-center items-center text-9xl text-black text-center ${myFont.className} animate-pulse`}
//           >
//           {text}
//         </motion.div>
//         <div
//           className={`relative top-[-128px] flex justify-center items-center text-9xl text-white text-center ${myFont.className} animate-pulse`}
//           >
//           {text}
//         </div>
//           </motion.div>
//       </div>
//     </div>
//   </>
// );
