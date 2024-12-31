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

        {/* User Profile and Menu Section */}
        <div className="flex flex-1 justify-end gap-x-4">
          {/* Menu Section */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (!isMenuOpen) setIsUserMenuOpen(false);
            }}
            className="lg:hidden pr-5 transition-transform duration-300"
          >
            <Image
              src={isMenuOpen ? "/close.png" : "/menu.png"}
              width={30}
              height={30}
              alt="Menu"
              className={`transition-transform duration-300 ${
                isMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>

          {isMenuOpen && (
            <div className="absolute top-20 right-16 bg-[#252525CC] text-white rounded-md shadow-lg p-4 w-[196px] text-right text-xl transition-all ease-in-out duration-300">
              <Link
                href="/team"
                className="block p-2 hover:bg-slate-700 rounded-md"
              >
                Team
              </Link>
              <Link
                href="/sponsors"
                className="block p-2 hover:bg-slate-700 rounded-md"
              >
                Sponsors
              </Link>
              <Link
                href="/gallery"
                className="block p-2 hover:bg-slate-700 rounded-md"
              >
                Gallery
              </Link>
              <Link
                href="#"
                className="block p-2 hover:bg-slate-700 rounded-md"
              >
                Events
              </Link>
              <Link
                href="/workshops"
                className="block p-2 hover:bg-slate-700 rounded-md"
              >
                Workshops
              </Link>
              <Link
                href="#"
                className="block p-2 hover:bg-slate-700 rounded-md"
              >
                Schedule
              </Link>
            </div>
          )}
          {/* User Profile */}
          <button
            onClick={() => {
              setIsUserMenuOpen(!isUserMenuOpen);
              if (!isUserMenuOpen) setIsMenuOpen(false);
            }}
            className="lg:hidden pr-5 transition-transform duration-500"
          >
            <Image
              src={isUserMenuOpen ? "/close.png" : "/user.png"}
              width={30}
              height={30}
              alt="User Menu"
              className={`transition-transform duration-300 ${
                isUserMenuOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>

          {isUserMenuOpen && (
            <div className="absolute top-20 right-4 bg-[#252525CC] text-white shadow-lg p-4 w-[196px] text-right text-xl transition-all ease-in-out duration-300">
              {!isLoggedIn ? (
                <>
                  <Link
                    href="/login"
                    className="block p-2 hover:bg-slate-700 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block p-2 hover:bg-slate-700 rounded-md"
                  >
                    Signup
                  </Link>
                  <Link
                    href="https://ca-frontend-25.vercel.app/"
                    target="_blank"
                    className="block p-2 hover:bg-slate-700 rounded-md"
                  >
                    CA
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/profile"
                    className="block p-2 hover:bg-slate-700 rounded-md"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem("userToken");
                      setIsLoggedIn(false);
                    }}
                    className="block w-full text-left p-2 hover:bg-slate-700 rounded-md"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </motion.nav>
      <div className="h-16" /> {/* Spacer */}
    </>
  );
};

export default Navbar;