"use client";

import { X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../utils/animation";

export function MinecraftDialog({ title, children, className, onClose }) {
  return (
    <div
      className={cn(
        "relative bg-[#C6C6C6] border-4 border-[#373737] p-1",
        "before:absolute before:inset-0 before:border-t-4 before:border-l-4 before:border-[#FFFFFF]",
        "after:absolute after:inset-0 after:border-b-4 after:border-r-4 after:border-[#8B8B8B]",
        className
      )}
    >
      {/* Title bar */}
      {title && (
        <div className="relative bg-[#C6C6C6] border-2 border-[#373737] p-1 mb-1">
          <div className="relative bg-[#373737] px-2 py-1 flex justify-between items-center">
            <h3 className="text-white font-minecraft text-center w-full text-xl">
              {title}
            </h3>

            {onClose && (
              <button
                onClick={onClose}
                className="text-white hover:text-red-500 transition-colors flex-shrink-0 ml-2 z-10"
              >
                <X size={24} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative bg-[#C6C6C6] border-2 border-[#373737] p-1">
        <div className="relative bg-white p-4">{children}</div>
      </div>
    </div>
  );
}
