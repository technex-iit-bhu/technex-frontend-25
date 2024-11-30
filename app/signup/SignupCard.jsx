"use client"
import Link from "next/link";
import Textbox from "./Textbox";
import DatePicker from "./DatePicker";

export default function SignupCard() {
  return (
    <>
      <div className="mt-40 lg:mt-0 w-full h-[90vh] flex justify-center items-center text-white">
        <div className="p-10 rounded-2xl bg-[#252525] bg-opacity-60 flex flex-col justify-center items-center">
          <div className="text-5xl w-full">Signup</div>
          <div className="text-2xl w-full">
            Have an account already?{" "}
            <Link href="/login" className="text-slate-400">
              {" "}
              Login Here
            </Link>
          </div>
          <div className="lg:flex py-5">
            <div className="w-[400px] p-4">
              <Textbox title="Name" placeholder="Enter Name" />
              <Textbox title="Email" placeholder="Enter Email" />
              <DatePicker />
            </div>
            <div className="w-[400px] p-4">
              <Textbox title="Username" placeholder="Enter Username" />
              <Textbox title="Password" placeholder="Enter Password" />
              <Textbox title="Confirm Password" placeholder="Confirm Password" />
            </div>
          </div>
        <button className="text-white border py-2 px-20 text-2xl hover:bg-white hover:text-black transition">Signup</button>
        </div>
      </div>
    </>
  );
}
