"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NavLink = ({ href, children, icon: Icon }) => {
  return (
    <Link href={href}>
      <motion.div
        className="relative text-white mt-2 px-4 py-2 text-lg font-minecraft hover:text-yellow-300 transition-colors flex flex-col items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-5 h-5" />
        {children}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </Link>
  );
};

const MinecraftButton = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  Icon,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "border-b-4 border-blue-700 bg-blue-500 hover:bg-blue-400";
      case "success":
        return "border-b-4 border-green-700 bg-green-500 hover:bg-green-400";
      default:
        return "border-b-4 border-gray-700 bg-gray-500 hover:bg-gray-400";
    }
  };

  return (
    <motion.button
      className={`px-6 py-2 text-white font-minecraft shadow-lg transform 
        transition-all duration-200 ${getVariantClasses()} ${className}
        hover:border-b-2 hover:translate-y-[2px] active:translate-y-[4px] active:border-b-0
        flex items-center gap-2 justify-center`}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const NavButton = ({ href, children }) => {
    const isActive = pathname === href;

    return (
      <Link href={href} className="group">
        <div className={`
          px-4 py-2 
          ${isActive ? "bg-[#5A5A5A]" : "bg-[#4D4D4D] hover:bg-[#5A5A5A]"}
          border-2 border-[#272727]
          relative
          transition-all duration-100
          hover:translate-y-[2px]
          before:absolute before:inset-0 
          before:border-t-2 before:border-l-[1px]
          before:border-white/10
          after:absolute after:inset-0
          after:border-r-[1px] after:border-b-2
          after:border-black/20
        `}>
          <span className={`text-lg ${isActive ? "text-white" : "text-[#E0D3B3] group-hover:text-white"} 
            font-minecraft uppercase tracking-wide
            drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]`}>
            {children}
          </span>
        </div>
      </Link>
    );
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#373737] border-b-4 border-[#1F1F1F] z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center border-2 border-[#373737] p-2 hover:translate-y-[2px] transition-transform">
                <Image
                  src="/logo.png"
                  width={32}
                  height={32}
                  alt="Logo"
                  style={{
                    height: "auto",
                    width: "auto",
                  }}
                />
                <span className="ml-2 text-3xl text-[#E0D3B3] font-minecraft uppercase tracking-wide">
                  Technex&apos;25
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {['Team', 'Events', 'Workshops', 'Sponsors', 'Gallery', 'Schedule'].map(item => (
                <NavButton key={item} href={`/${item.toLowerCase()}`}>{item}</NavButton>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <NavButton href="https://ca-frontend-25.vercel.app/">CA</NavButton>
              <NavButton href="/login">Login</NavButton>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 bg-[#4D4D4D] border-2 border-[#373737]"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <span className="block h-0.5 bg-[#E0D3B3]" />
                  <span className="block h-0.5 bg-[#E0D3B3]" />
                  <span className="block h-0.5 bg-[#E0D3B3]" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t-2 border-[#1F1F1F] bg-[#373737]">
              <div className="p-2 space-y-2">
                {['Team', 'Events', 'Workshops', 'Sponsors', 'Gallery', 'Schedule', 'CA'].map(item => (
                  <NavButton key={item} href={`/${item.toLowerCase()}`}>{item}</NavButton>
                ))}
              </div>
            </div>
          )}
        </div>
  
      <div className="h-16" /> {/* Spacer */}
    </>
  );
};

export default Navbar;