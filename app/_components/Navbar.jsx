import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status from localStorage
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      <div className="spacer h-20"></div>
      <div className="fixed top-0 w-full h-20 flex items-center bg-opacity-80 bg-[#252525CC] z-10 px-4">
        {/* Logo Section */}
        <div className="flex flex-1 justify-start">
          <Link href="/">
            <Image src="/logo.png" width={40} height={0} alt="Technex Logo" />
          </Link>
        </div>

        {/* Large Screen Menu */}
        <div className="hidden lg:flex flex-[4] justify-center gap-x-10">
          <Link href="/team" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
            Team
          </Link>
          <Link href="/sponsors" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
            Sponsors
          </Link>
          <Link href="/gallery" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
            Gallery
          </Link>
          <Link href="#" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
            Events
          </Link>
          <Link href="#" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
            Workshops
          </Link>
          <Link href="#" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
            Schedule
          </Link>
          <Link
            href="https://ca-frontend-25.vercel.app/"
            target="_blank"
            className="text-white text-xl hover:bg-slate-700 p-2 rounded-md"
          >
            CA
          </Link>

          {/* Login/Signup or Profile/Logout */}
          {!isLoggedIn ? (
            <>
              <Link href="/login" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
                Login
              </Link>
              <Link href="/signup" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile" className="text-white text-xl hover:bg-slate-700 p-2 rounded-md">
                Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("userToken");
                  setIsLoggedIn(false);
                }}
                className="text-white text-xl hover:bg-slate-700 p-2 rounded-md"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* User Profile and Menu Section */}
        <div className="flex flex-1 justify-end gap-x-4">
          {/* User Profile */}
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="lg:hidden"
          >
            <Image
              src={isUserMenuOpen ? "/close.png" : "/user.png"}
              width={30}
              height={30}
              alt="User Menu"
            />
          </button>

          {isUserMenuOpen && (
            <div className="absolute top-20 right-4 bg-[#252525] text-white rounded-md shadow-lg p-4">
              {!isLoggedIn ? (
                <>
                  <Link href="/login" className="block p-2 hover:bg-slate-700 rounded-md">
                    Login
                  </Link>
                  <Link href="/signup" className="block p-2 hover:bg-slate-700 rounded-md">
                    Signup
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/profile" className="block p-2 hover:bg-slate-700 rounded-md">
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

          {/* Menu Section */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            <Image
              src="/menu.png"
              width={30}
              height={30}
              alt="Menu"
            />
          </button>

          {isMenuOpen && (
            <div className="absolute top-20 right-16 bg-[#252525] text-white rounded-md shadow-lg p-4">
              <Link href="/team" className="block p-2 hover:bg-slate-700 rounded-md">
                Team
              </Link>
              <Link href="/sponsors" className="block p-2 hover:bg-slate-700 rounded-md">
                Sponsors
              </Link>
              <Link href="/gallery" className="block p-2 hover:bg-slate-700 rounded-md">
                Gallery
              </Link>
              <Link href="#" className="block p-2 hover:bg-slate-700 rounded-md">
                Events
              </Link>
              <Link href="#" className="block p-2 hover:bg-slate-700 rounded-md">
                Workshops
              </Link>
              <Link href="#" className="block p-2 hover:bg-slate-700 rounded-md">
                Schedule
              </Link>
              <Link
                href="https://ca-frontend-25.vercel.app/"
                target="_blank"
                className="block p-2 hover:bg-slate-700 rounded-md"
              >
                CA
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
