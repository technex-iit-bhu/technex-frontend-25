"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const NavButton = ({ href = "#", children, isActive, onClick }) => {
  return (
    <Link href={href} className="group" onClick={onClick}>
      <div
        className={`px-4 py-2 
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
        after:border-black/20`}
      >
        <span
          className={`text-lg ${
            isActive ? "text-white" : "text-[#E0D3B3] group-hover:text-white"
          } 
          font-minecraft uppercase tracking-wide
          drop-shadow-[2px_2px_0px_rgba(0,0,0,0.5)]`}
        >
          {children}
        </span>
      </div>
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  const mainNavLinks = [
    "Events",
    "Workshops",
    "Sponsors",
    "Gallery",
    "Schedule",
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const functionalLinks = isLoggedIn
    ? [
        { name: "Profile", href: "/profile" },
        { name: "Logout", onClick: handleLogout },
        { name: "CA", href: "https://ca.technex.in" },
      ]
    : [
        { name: "Login", href: "/login" },
        { name: "Signup", href: "/signup" },
        { name: "CA", href: "https://ca.technex.in/" },
      ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 bg-[#373737] border-b-4 border-[#1F1F1F] z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
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

            {/* Main Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              {mainNavLinks.map((item) => (
                <NavButton
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  isActive={pathname === `/${item.toLowerCase()}`}
                >
                  {item}
                </NavButton>
              ))}
            </div>

            {/* Functional Links */}
            <div className="hidden lg:flex items-center gap-2">
              {functionalLinks.map((link) => (
                <NavButton
                  key={link.name}
                  href={link.href}
                  isActive={pathname === link.href}
                  onClick={link.onClick}
                >
                  {link.name}
                </NavButton>
              ))}
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 bg-[#4D4D4D] border-2 border-[#373737]"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className="block h-0.5 bg-[#E0D3B3]" />
                <span className="block h-0.5 bg-[#E0D3B3]" />
                <span className="block h-0.5 bg-[#E0D3B3]" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#373737]">
            {/* Main Navigation */}
            <div className="p-2 space-y-2">
              <p className="text-lg font-minecraft text-[#E0D3B3] mb-1 border-b border-[#272727] pb-2">
                Navigation
              </p>
              {mainNavLinks.map((item) => (
                <NavButton
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  isActive={pathname === `/${item.toLowerCase()}`}
                >
                  {item}
                </NavButton>
              ))}
            </div>

            {/* Functional Links */}
            <div className="p-2 space-y-2 border-t border-[#1F1F1F]">
              <p className="text-lg font-minecraft text-[#E0D3B3] mb-1 border-b border-[#272727] pb-2">
                Quick Access
              </p>
              {functionalLinks.map((link) => (
                <NavButton
                  key={link.name}
                  href={link.href}
                  isActive={pathname === link.href}
                  onClick={link.onClick}
                >
                  {link.name}
                </NavButton>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Placeholder for fixed navbar */}
      {/* <div className="h-16" /> */}
    </>
  );
};

export default Navbar;
