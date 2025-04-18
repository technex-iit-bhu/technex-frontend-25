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
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await loginUser(credentials);
      if (response.token) {
        localStorage.setItem('token', response.token);
        router.push('/');
      } else {
        setError(response.message || "Login failed");
      }
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-[90vh] flex flex-col lg:flex-row justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="hidden lg:flex  px-10 text-7xl text-center lg:text-left"
        >
          Welcome To Technex&apos;25
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
          className="p-4 sm:p-10 small-w w-[80%] sm:w-fit rounded-2xl bg-[#252525] bg-opacity-60 flex flex-col justify-center items-center m-4 sm:m-20"
        >
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="text-3xl sm:text-5xl w-full text-center sm:text-left">
              Login
            </div>
            <div className="text-xl sm:text-2xl w-full text-center sm:text-left">
              New to Technex?{" "}
              <Link href="/signup" className="text-slate-400">
                {" "}
                Signup here
              </Link>
            </div>
            <div className="w-[80%] sm:w-[300px] lg:w-[400px] px-2 sm:px-4 py-4 sm:py-10">
              <Textbox
                title="Username"
                placeholder="Enter Username"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
              />
              <Textbox
                title="Password"
                placeholder="Enter Password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
              />
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="flex flex-col items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="text-white border py-2 px-10 sm:px-20 text-xl sm:text-2xl hover:bg-white hover:text-black transition disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
              <Link href="/forgot-password" className="text-slate-400 mt-4">
                Forgot Password?
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}
