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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const { confirmPassword, ...registrationData } = formData;
      const response = await registerUser(registrationData);
      if (response.id) {
        router.push('/login');
      } else {
        setError(response.message || "Registration failed");
      }
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mt-40 p-2 md:p-10 lg:mt-0 w-full h-[90vh] flex justify-center items-center text-white mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="p-6 md:p-10 rounded-2xl bg-[#252525] bg-opacity-60 flex flex-col justify-center items-center mb-10"
        >
          <div className="text-3xl sm:text-5xl w-full text-center">Signup</div>
          <div className="text-xl sm:text-2xl w-full text-center mt-2">
            Have an account already?{" "}
            <Link href="/login" className="text-slate-400">
              Login Here
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="flex flex-col lg:flex-row py-5 w-full">
              <div className="w-full md:w-[400px] p-4">
                <Textbox
                  title="Name"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange('name')}
                />
                <Textbox
                  title="Email"
                  placeholder="Enter Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                />
                <DatePicker
                  value={formData.dob}
                  onChange={handleChange('dob')}
                />
              </div>
              <div className="w-full md:w-[400px] p-4">
                <Textbox
                  title="Username"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange('username')}
                />
                <Textbox
                  title="Password"
                  placeholder="Enter Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange('password')}
                />
                <Textbox
                  title="Confirm Password"
                  placeholder="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                />
              </div>
            </div>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <button
              type="submit"
              disabled={isLoading}
              className="text-white border py-2 px-10 sm:px-20 text-xl sm:text-2xl hover:bg-white hover:text-black transition disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Signup"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}
