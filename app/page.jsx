"use client";
import Background_A from "./_backgrounds/Background_A";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";
import { FireEffect } from "./_components/particleEffects";
import { motion } from "framer-motion";

export default function Home() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className="absolute">
      <Background_A />
      <FireEffect />
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-500 opacity-50"
          initial={{
            x: Math.random() * windowDimensions.width,
            y: Math.random() * windowDimensions.height,
          }}
          animate={{
            y: [null, -20, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <div className="w-[100vw] h-[100vh] overflow-y-auto lg:h-fit overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
