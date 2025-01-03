"use client";
import AboutSection from "./_components/AboutSection";
import Background_A from "./_backgrounds/Background_A";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import FAQ from "./_components/FAQ";
import { FireEffect } from "./_components/particleEffects";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div className="absolute">
      <FireEffect />
      <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip">
        <Navbar />
        <HeroSection />
        <div className="h-20 spacer"></div>
        <FAQ />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
