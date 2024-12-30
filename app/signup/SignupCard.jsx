"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Textbox from "./Textbox";
import DatePicker from "./DatePicker";
import { motion } from "motion/react";
import { registerUser } from "../utils/api";

export default function SignupCard() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "", email: "", dob: "", username: "", password: "", confirmPassword: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        dob: formData.dob,
        username: formData.username,
        password: formData.password
      });
      console.log("Registration response:", response);
      if (response.id) {
        router.push('/login');
      }
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <>
      <div className="mt-40 p-2 md:p-10 lg:mt-0 w-full h-[90vh] flex justify-center items-center text-white mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="p-6 md:p-10 rounded-2xl bg-[#252525] bg-opacity-60 flex flex-col justify-center items-center mb-10 "
        >
          <div className="text-3xl sm:text-5xl w-full text-center">Signup</div>
          <div className="text-xl sm:text-2xl w-full text-center mt-2">
            Have an account already?{" "}
            <Link href="/login" className="text-slate-400">
              Login Here
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row py-5 w-full">
            <div className="w-full md:w-[400px] p-4">
              <Textbox title="Name" placeholder="Enter Name" />
              <Textbox title="Email" placeholder="Enter Email" />
              <DatePicker />
            </div>
            <div className="w-full md:w-[400px] p-4">
              <Textbox title="Username" placeholder="Enter Username" />
              <Textbox title="Password" placeholder="Enter Password" />
              <Textbox
                title="Confirm Password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <button className="text-white border py-2 px-10 sm:px-20 text-xl sm:text-2xl hover:bg-white hover:text-black transition">
            Signup
          </button>
        </motion.div>
      </div>
    </>
  );
}
