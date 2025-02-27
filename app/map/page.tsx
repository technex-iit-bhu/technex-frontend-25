"use client";

import Image from "next/image";
import Link from "next/link";

export default function MapPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-white font-classic text-3xl md:text-4xl text-center mb-8">
          IIT BHU Campus Map
        </h1>
        
        <div className="relative w-full aspect-[16/9] mb-8">
          <Image
            src="/map.jpeg"
            alt="IIT BHU Campus Map"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex justify-center">
          <a
            href="/map.jpeg"
            download="IIT_BHU_Map.jpeg"
            className="
              font-classic
              px-6 py-3
              bg-zinc-800 hover:bg-zinc-700
              text-white
              rounded
              transition-all duration-200
              border border-zinc-600
              flex items-center gap-2
            "
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
              />
            </svg>
            Download Map
          </a>
        </div>
      </div>
    </main>
  );
}
