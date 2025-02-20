"use client";
import ScheduleCalendar from "../_components/ScheduleCalendar";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import Background_E from "../_backgrounds/Background_E";
const Schedule = () => {
  return (
    <div className="absolute">
      <Background_E />
      <div className="w-[100vw] h-[100vh] lg:h-fit overflow-x-clip pt-10 mt-8">
        <Navbar />
        <ScheduleCalendar />
        <Footer />
      </div>
    </div>
  );
};

export default Schedule;
