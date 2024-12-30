"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  HandshakeIcon,
  Image as ImageIcon,
  Calendar,
  BookOpen,
  ClipboardList,
  UserCheck,
  LogIn,
  UserPlus,
  LogOut,
  User,
  Menu,
  X,
} from "lucide-react";

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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navItems = [
    { name: "Team", href: "/team", icon: Users },
    { name: "Sponsors", href: "/sponsors", icon: HandshakeIcon },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Workshops", href: "/workshops", icon: BookOpen },
    { name: "Schedule", href: "/schedule", icon: ClipboardList },
    { name: "CA", href: "https://ca-frontend-25.vercel.app/", icon: UserCheck },
  ];

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(0, 0, 0, 0.95)"
            : "rgba(0, 0, 0, 0.7)",
        }}
        className="fixed w-full z-50 top-0 border-b-2 border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href} icon={item.icon}>
                  {item.name}
                </NavLink>
              ))}

              {!isLoggedIn ? (
                <div className="flex space-x-4">
                  <Link href="/login">
                    <MinecraftButton variant="primary" icon={LogIn}>
                      LOGIN
                    </MinecraftButton>
                  </Link>
                  <Link href="/signup">
                    <MinecraftButton variant="success" icon={UserPlus}>
                      SIGN UP
                    </MinecraftButton>
                  </Link>
                </div>
              ) : (
                <div className="flex space-x-4">
                  <NavLink href="/profile" icon={User}>
                    Profile
                  </NavLink>
                  <MinecraftButton
                    onClick={() => {
                      localStorage.removeItem("userToken");
                      setIsLoggedIn(false);
                    }}
                    icon={LogOut}
                  >
                    LOGOUT
                  </MinecraftButton>
                </div>
              )}
            </div>

            {/* Mobile menu buttons */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                  setIsUserMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
              <button
                onClick={() => {
                  setIsUserMenuOpen(!isUserMenuOpen);
                  setIsMenuOpen(false);
                }}
                className="text-gray-300 hover:text-white p-2"
              >
                {isUserMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <User className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black bg-opacity-95 border-t border-gray-800"
            >
              <div className="px-4 pt-2 pb-3 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white flex items-center gap-2 px-3 py-2 font-minecraft"
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Mobile User Menu */}
          {isUserMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-black bg-opacity-95 border-t border-gray-800"
            >
              <div className="px-4 pt-2 pb-3 m-2 space-y-2">
                {!isLoggedIn ? (
                  <>
                    <Link href="/login" className="block w-full">
                      <button className="w-full flex items-center gap-2 text-white font-minecraft">
                        <LogIn className="w-5 h-5 text-white" />
                        LOGIN
                      </button>
                    </Link>
                    <Link href="/signup" className="block w-full">
                      <button className="w-full flex items-center gap-2 text-white font-minecraft">
                        <UserPlus className="w-5 h-5 text-white" />
                        SIGN UP
                      </button>
                    </Link>
                    <Link
                      href="https://ca-frontend-25.vercel.app/"
                      className="block w-full"
                    >
                      <button className="w-full flex items-center gap-2 text-white font-minecraft">
                        <UserCheck className="w-5 h-5 text-white" />
                        CA
                      </button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/profile" className="block w-full">
                      <button className="w-full flex items-center gap-2 px-3 py-2 text-white font-minecraft">
                        <User className="w-5 h-5 text-white" />
                        Profile
                      </button>
                    </Link>
                    <Link
                      href="https://ca-frontend-25.vercel.app/"
                      className="block w-full"
                    >
                      <button className="w-full flex items-center gap-2 text-white font-minecraft">
                        <UserCheck className="w-5 h-5 text-white" />
                        CA
                      </button>
                    </Link>
                    <button
                      className="w-full flex items-center gap-2 text-white font-minecraft"
                      onClick={() => {
                        localStorage.removeItem("userToken");
                        setIsLoggedIn(false);
                      }}
                    >
                      <LogOut className="w-5 h-5 text-white" />
                      LOGOUT
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <div className="h-16" /> {/* Spacer */}
    </>
  );
};

export default Navbar;
