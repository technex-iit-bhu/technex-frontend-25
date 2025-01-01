"use client";
import React from "react";

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-6xl font-minecraft text-[#E0D3B3] mb-4 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-2xl font-minecraft text-white text-center">
          This page is under construction
        </p>
        <p className="text-xl font-minecraft text-gray-400 mt-4 text-center">
          Check back later for updates!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
