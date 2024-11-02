"use client";
import React, { useState } from "react";
import { Eye, EyeOff, ArrowRight, Github } from "lucide-react";
import useTypography from "../_hooks/useTypography";
import WindowCard from "../_ui/WindowCard";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginText, isTyped] = useTypography("_Terminal Login v2.5", 100);

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <WindowCard title="/usr/bin/login" width="380px">
        <div className="p-6 bg-gray-800 text-white">
          <div className="text-xl font-mono mb-8 h-8 flex items-center">
            <span className="text-green-400">{loginText}</span>
            <span className="animate-blink ml-1">█</span>
          </div>

          <form className="space-y-5">
            <div className="relative">
              <input
                type="email"
                className="w-full px-3 py-2 bg-transparent rounded-none border-l-2 border-green-400 focus:outline-none font-mono pl-4"
                placeholder="user@technex.in"
              />
              <div className="absolute -top-2 left-4 bg-gray-800 px-2 text-xs text-green-400 font-mono">
                EMAIL
              </div>
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 bg-transparent rounded-none border-l-2 border-green-400 focus:outline-none font-mono pl-4 pr-10"
                placeholder="********"
              />
              <div className="absolute -top-2 left-4 bg-gray-800 px-2 text-xs text-green-400 font-mono">
                PASSWORD
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 hover:text-green-300"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-transparent border-2 border-green-400 hover:bg-green-400/10 rounded-none transition-colors font-mono text-green-400 mt-6 flex items-center justify-center gap-2"
            >
              <span>AUTHENTICATE</span>
              <ArrowRight size={16} />
            </button>

            <div className="text-center mt-4">
              <a
                href="#"
                className="text-xs text-green-400 hover:underline font-mono"
              >
                Forgot access codes?
              </a>
            </div>

            <div className="text-center mt-4">
              <a
                href="/signUp" // Adjust this based on your routing setup
                className="text-xs text-green-400 hover:underline font-mono"
              >
                Create an Account
              </a>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex-1 border-t border-gray-600"></div>
              <span className="text-xs text-gray-400 font-mono">OR</span>
              <div className="flex-1 border-t border-gray-600"></div>
            </div>

            <button
              type="button"
              className="w-full py-2 px-4 border border-gray-600 rounded-sm flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors font-mono text-sm"
            >
              <Github size={16} />
              <span>Continue with Github</span>
            </button>
          </form>
        </div>
      </WindowCard>
    </div>
  );
};

export default function Login() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <LoginComponent />
    </main>
  );
}
