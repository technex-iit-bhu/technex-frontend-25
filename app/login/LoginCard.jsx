"use client";
import Link from "next/link";
import Textbox from "./Textbox";
import { motion } from "motion/react";

export default function SignupCard() {
  return (
    <>
      <div className=" w-full h-[90vh] flex flex-col lg:flex-row justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="hidden lg:flex w-full px-10 text-7xl text-center lg:text-left"
        >
          Welcome To TechNex&apos;25
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
          className="p-10 w-fit rounded-2xl bg-[#252525] bg-opacity-60 flex flex-col justify-center items-center m-20"
        >
          <div className="text-5xl w-full">Login</div>
          <div className="text-2xl w-full">
            New to Technex?{" "}
            <Link href="/signup" className="text-slate-400">
              {" "}
              Signup here
            </Link>
          </div>
          <div className="w-[300px] lg:w-[400px] px-4 py-10">
            <Textbox title="Username" placeholder="Enter Username" />
            <Textbox title="Password" placeholder="Enter Password" />
          </div>
          <button className="text-white border py-2 px-20 text-2xl hover:bg-white hover:text-black transition">
            Login
          </button>
        </motion.div>
      </div>
    </>
  );
}
