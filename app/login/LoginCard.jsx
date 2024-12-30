"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Textbox from "./Textbox";
import { motion } from "motion/react";
import { loginUser } from "../utils/api";

export default function LoginCard() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      if (response.token) {
        localStorage.setItem('token', response.token);
        router.push('/');
      }
    } catch (err) {
      setError("Invalid credentials");
    }
  };

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
          <form onSubmit={handleSubmit} className="w-[300px] lg:w-[400px] px-4 py-10 flex flex-col items-center">
            <Textbox
              title="Username"
              placeholder="Enter Username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
            />
            <Textbox
              title="Password"
              placeholder="Enter Password"
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            {error && <div className="text-red-500 mt-2 mb-4">{error}</div>}
            <button 
              type="submit"
              className="text-white border py-2 px-20 text-2xl hover:bg-white hover:text-black transition mt-4"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
