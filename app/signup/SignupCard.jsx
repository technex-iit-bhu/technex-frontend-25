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
      <div className="mt-40 p-10 lg:mt-0 w-full h-[90vh] flex justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="p-10 rounded-2xl bg-[#252525] bg-opacity-60 flex flex-col justify-center items-center"
        >
          <div className="text-5xl w-full">Signup</div>
          <div className="text-2xl w-full">
            Have an account already?{" "}
            <Link href="/login" className="text-slate-400">
              {" "}
              Login Here
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="lg:flex py-5">
              <div className="w-[300px] lg:w-[400px] p-4">
                <Textbox
                  title="Name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={(e) => {
                    console.log("Name changed:", e.target.value);
                    setFormData(prev => ({...prev, name: e.target.value}));
                  }}
                />
                <Textbox
                  title="Email"
                  placeholder="Enter Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                />
                <DatePicker
                  value={formData.dob}
                  onChange={(date) => setFormData(prev => ({...prev, dob: date}))}
                />
              </div>
              <div className="w-[300px] lg:w-[400px] p-4">
                <Textbox
                  title="Username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={(e) => setFormData(prev => ({...prev, username: e.target.value}))}
                />
                <Textbox
                  title="Password"
                  type="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))}
                />
                <Textbox
                  title="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData(prev => ({...prev, confirmPassword: e.target.value}))}
                />
              </div>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button 
              type="submit" 
              className="text-white border py-2 px-20 text-2xl hover:bg-white hover:text-black transition"
            >
              Signup
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
