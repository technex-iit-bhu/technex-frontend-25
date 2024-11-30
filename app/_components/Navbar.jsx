import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="spacer h-20"></div>
      <div className="fixed top-0 w-[100vw] h-20 flex items-center bg-opacity-80 bg-[#252525CC] z-10">
        <div className="flex w-1/2 lg:w-1/6 justify-start gap-x-10 px-10">
          <Link href="/">
            <Image src="/logo.png" width={40} height={0} />
          </Link>
        </div>
        <div className="hidden lg:flex w-4/6 justify-center gap-x-10 px-10">
          <Link
            href="#"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            Team
          </Link>
          <Link
            href="#"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            Events
          </Link>
          <Link
            href="#"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            Workshops
          </Link>
          <Link
            href="#"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            Sponsors
          </Link>
          <Link
            href="#"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            Gallery
          </Link>
          <Link
            href="#"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            Schedule
          </Link>
        </div>
        <div className="flex w-1/2 lg:w-1/6 justify-end gap-x-10 px-10">
          <Link
            href="#"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            CA
          </Link>
          <Link
            href="/login"
            className="text-white text-3xl hover:bg-slate-700 w-full text-center rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
