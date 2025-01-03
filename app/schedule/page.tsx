"use client";
import ComingSoon from "@/app/_components/ComingSoon";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Background_E from "../_backgrounds/Background_E";
const Schedule = () => {
  return (
    <>
    <Background_E />
      <div className="w-[100vw] h-[100vh] overflow-y-auto">
        <Navbar />
        <ComingSoon />;
        <Footer />
      </div>
    </>
  );
};

export default Schedule;
