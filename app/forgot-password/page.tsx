"use client";

import React, { useState } from "react";
import { sendOTP, verifyOTP, resetPassword } from "../utils/api";
import Link from "next/link"; // Import Link for navigation

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [stage, setStage] = useState<"email" | "otp" | "newPassword" | "done">("email");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle sending OTP
  const handleSendOTP = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    const response = await sendOTP(email);
    if (response.error) {
      setError(response.error);
    } else if (response.message === "OTP sent successfully") {
      setMessage("OTP sent! Please check your email.");
      setStage("otp");
    } else {
      setError(response.message || "Failed to send OTP.");
    }
  };

  // Handle verifying OTP
  const handleVerifyOTP = async () => {
    setError("");
    setMessage("");

    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }

    const response = await verifyOTP(email, otp);
    if (response.error) {
      setError(response.error);
    } else if (response.message === "OTP verified successfully") {
      setMessage("OTP verified! Please enter your new password.");
      setStage("newPassword");
    } else {
      setError(response.message || "OTP verification failed.");
    }
  };

  // Handle resetting the password
  const handleResetPassword = async () => {
    setError("");
    setMessage("");

    if (!newPassword) {
      setError("Please enter a new password.");
      return;
    }

    const response = await resetPassword(email, newPassword);
    if (response.error) {
      setError(response.error);
    } else if (response.message === "Password reset successfully") {
      setMessage("Your password has been reset! You can now log in.");
      setStage("done");
    } else {
      setError(response.message || "Password reset failed.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-inconsolata">
      <div className="mx-auto w-11/12 max-w-md">
        <h1 className="text-2xl mb-4 text-center">Forgot Password</h1>

        {/* Stage 1: Enter email */}
        {stage === "email" && (
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="font-bold">
              Enter your email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourname@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded border border-gray-300 text-black"
            />
            <button
              onClick={handleSendOTP}
              className="p-2 bg-gray-700 text-white border-none cursor-pointer"
            >
              Send OTP
            </button>
          </div>
        )}

        {/* Stage 2: Enter OTP */}
        {stage === "otp" && (
          <div className="flex flex-col gap-4">
            <label htmlFor="otp" className="font-bold">
              Enter the OTP:
            </label>
            <input
              id="otp"
              type="number"
              placeholder="123456"
              value={otp}
              onChange={(e) => setOTP(e.target.value)}
              className="p-2 rounded border border-gray-300 text-black"
            />
            <button
              onClick={handleVerifyOTP}
              className="p-2 bg-gray-700 text-white border-none cursor-pointer"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Stage 3: Enter new password */}
        {stage === "newPassword" && (
          <div className="flex flex-col gap-4">
            <label htmlFor="newPassword" className="font-bold">
              Enter your new password:
            </label>
            <input
              id="newPassword"
              type="password"
              placeholder="********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-2 rounded border border-gray-300 text-black"
            />
            <button
              onClick={handleResetPassword}
              className="p-2 bg-gray-700 text-white border-none cursor-pointer"
            >
              Reset Password
            </button>
          </div>
        )}

        {/* Stage 4: Done */}
        {stage === "done" && (
          <div className="text-center mt-8">
            <h2 className="text-xl font-bold">Success!</h2>
            {/* <p>Your password has been reset. You can now log in.</p> */}
            <Link href="/login">
              <button className="mt-4 p-2 bg-gray-700 text-white border-none cursor-pointer">
                Go to Login
              </button>
            </Link>
          </div>
        )}

        {/* Display message or error */}
        {message && <p className="text-green-400 mt-4">{message}</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}
