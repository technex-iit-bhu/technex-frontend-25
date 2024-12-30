import localFont from "next/font/local";
import { motion } from "motion/react";
const myFont = localFont({ src: "./minecrafter/Minecrafter.Reg.ttf" });

export default function HeroSection() {
  const targetDate = new Date("2025-01-04");
  const currentDate = new Date();
  const timeDiff = targetDate - currentDate;
  const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  const text = `${daysRemaining} days to go`;
  return (
    <>
      <div className="w-[full] h-[100vh] flex justify-center items-center">
        <div className="relative">
          <motion.div
            className="div"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, amount: 0.5, ease: "linear" }}
          >
            <motion.div
              initial={{ top: "0px", left: "0px" }}
              whileInView={{ top: "10px", left: "-10px" }}
              transition={{
                duration: 0.3,
                amount: 0.5,
                delay: 0.5,
                type: "spring",
              }}
              className={`relative hidden xl:flex justify-center items-center text-9xl text-black text-center ${myFont.className} animate-pulse`}
            >
              {text}
            </motion.div>
            <div
              className={`relative top-[-128px] flex justify-center items-center text-9xl text-white text-center ${myFont.className} animate-pulse`}
            >
              {text}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
