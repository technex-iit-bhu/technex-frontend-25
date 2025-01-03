"use client";
import ComingSoon from "@/app/_components/ComingSoon";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Background_E from "../_backgrounds/Background_E";
const Schedule = () => {
  return (
    <div className="absolute">
      <Background_E />
      <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip">
        <Navbar />
        <ComingSoon />;
        <Footer />
      </div>
    </div>
  );
};

export default Schedule;
