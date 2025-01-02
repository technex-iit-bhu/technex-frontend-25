"use client"
import localFont from "next/font/local";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const myFont = localFont({ src: "./minecrafter/Minecrafter.Reg.ttf" });

export default function HeroSection() {
  const heroRef=useRef(null)
  const {scrollYProgress}=useScroll({
    target:heroRef
  })
  const scaleProgress=useTransform(scrollYProgress,[0,1],[1,2])
  const targetDate = new Date("2025-01-04");
  const currentDate = new Date();
  const timeDiff = targetDate - currentDate;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const text = daysRemaining <= 0 ? "Stay Technexed!" : `${daysRemaining} days to go`;
  return (
    <>
      <div className="flex flex-col md:flex-row bg-gray-900  h-screen  w-screen relative justify-center items-center overflow-hidden  " ref={heroRef}>
        <img src="/grass1.svg" alt="" className="absolute top-0 right-0 md:w-[30%] w-[60%] z-[1]"/>
        <img src="/grass2.svg" alt="" className="absolute bottom-0 left-0 md:w-[30%] w-[60%] z-[1]"/>
        <div className="flex justify-center items-center md:w-1/2 w-full h-full relative">
          <img
            src="/TECHNEX25.png"
            alt=""
            className="absolute top-[200px] md:top-[300px] w-[300px] md:w-[350px]"
          />
          <motion.img
            src="/splash_screen.png"
            alt=""
            className="absolute w-[200px] md:w-[400px] top-[200px] md:top-[290px] rotate-[30deg] hidden md:block z-[2]"
            animate={{
              scale: [1, 1.2, 1],
              rotate:["20deg"],
              x:["100px"]
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
            className="absolute w-[200px] md:w-[300px] top-[200px] md:top-[290px] rotate-[30deg] translate-x-[70px] block md:hidden z-[2]"
            animate={{
              scale: [1, 1.2, 1],
              rotate:["20deg"],
              x:["70px"]
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          />
        </div>
        <div className="flex w-full md:w-1/2 h-full relative justify-center items-center">
        </div>
        {/* <motion.img src="/creeper.png" alt="" className="w-[50%] h-[400px] object-contain sticky md:top-[calc(100vh-400px)] right-[100px] z-[2] origin-bottom-right hidden md:block" style={{scale:scaleProgress}}/> */}
        <motion.img src="/creeper.png" alt="" className="w-[50%] h-[400px] absolute bottom-0 object-contain object-bottom right-[50px] z-[2]" />
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
