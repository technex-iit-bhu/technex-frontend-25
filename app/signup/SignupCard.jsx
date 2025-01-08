"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Textbox from "./Textbox";
import { motion } from "framer-motion";
import { registerUser } from "../utils/api";
import Footer from "../_components/Footer";

export default function SignupCard() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "", 
    password: "",
    confirmPassword: "",
    institute: "",
    phone: "",
    city: "",
    year: "",
    branch: "",
    github: "",
    referralCode: ""
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field) => (e) => {
    let value = e.target.value;
    if (field === 'year' && value) {
      value = parseInt(value);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'username', 'password', 'institute', 'phone'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

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
      <div className="min-h-screen p-2 md:p-10 w-full flex justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "linear" }}
          className="p-6 md:p-10 rounded-2xl bg-[#252525] bg-opacity-60 flex flex-col justify-center items-center my-20"
        >
          <div className="text-3xl sm:text-5xl w-full text-center">Signup</div>
          <div className="text-xl sm:text-2xl w-full text-center mt-2">
            Have an account already?{" "}
            <Link href="/login" className="text-slate-400">
              Login Here
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-4 py-5 w-full">
              <div className="flex-1 min-w-[300px] max-w-[400px] p-4">
                <Textbox
                  title="Name *"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange('name')}
                />
                <Textbox
                  title="Email *"
                  placeholder="Enter Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                />
                <Textbox
                  title="Username *"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange('username')}
                />
                <Textbox
                  title="Institute *"
                  placeholder="Enter Institute Name"
                  value={formData.institute}
                  onChange={handleChange('institute')}
                />
                <Textbox
                  title="Phone Number *"
                  placeholder="Enter Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                />
                <Textbox
                  title="City"
                  placeholder="Enter City"
                  value={formData.city}
                  onChange={handleChange('city')}
                />
              </div>
              <div className="flex-1 min-w-[300px] max-w-[400px] p-4">
                <Textbox
                  title="Password *"
                  placeholder="Enter Password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange('password')}
                />
                <Textbox
                  title="Confirm Password *"
                  placeholder="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                />
                <Textbox
                  title="Year"
                  placeholder="Enter Year"
                  type="number"
                  value={formData.year}
                  onChange={handleChange('year')}
                />
                <Textbox
                  title="Branch"
                  placeholder="Enter Branch"
                  value={formData.branch}
                  onChange={handleChange('branch')}
                />
                <Textbox
                  title="Github Profile"
                  placeholder="Enter Github Profile URL"
                  value={formData.github}
                  onChange={handleChange('github')}
                />
                <Textbox
                  title="Referral Code"
                  placeholder="Enter Referral Code"
                  value={formData.referralCode}
                  onChange={handleChange('referralCode')}
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
      <Footer />
    </>
  );
}
