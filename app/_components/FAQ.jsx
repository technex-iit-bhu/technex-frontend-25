"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MinecraftDialog } from "./Minecraft-dialog";
import { MinecraftButton } from "./Minecraft-button";
import Image from "next/image";

const FAQItem = ({ index, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#4D4B4B] bg-opacity-80 text-white px-5 w-[60vw] rounded-xl text-2xl">
      <button
        onClick={toggleFAQ}
        className="w-full flex justify-between items-center py-5"
      >
        <span>{title}</span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="white"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div className="pb-5 text-xl text-white">{content}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [currentFaq, setCurrentFaq] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const faqs = [
    {
      question: "What is Technex?",
      answer: "Technex is the annual techno-management festival of IIT (BHU) Varanasi."
    },
    {
      question: "When is Technex 2025?",
      answer: "Technex 2025 will be held from March 2 to March 5, 2025."
    },
    {
      question: "How can I register for events?",
      answer: "You can register for events through the official Technex website."
    },
    {
      question: "Are there any participation fees?",
      answer: "Some events may have participation fees. Please check the event details on the website."
    }
  ];

  return (
    <div className="relative overflow-hidden flex items-center justify-center xl:scale-150 my-16 mb-32">
      <div className="max-w-2xl mx-auto px-4 relative z-10 w-full">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="dialog"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <MinecraftDialog
                title="FREQUENTLY ASKED QUESTIONS"
                onClose={() => setIsOpen(false)}
                className="w-full"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="w-32 h-32 bg-[#C6C6C6] border-2 border-[#373737] p-1 flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-full h-full bg-white">
                      <Image
                        src="/skin.png"
                        alt=""
                        width={100}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-black">
                    <p className="font-minecraft mb-2 text-lg">
                      {faqs[currentFaq].question}
                    </p>
                    <p className="text-sm leading-relaxed">
                      {faqs[currentFaq].answer}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {faqs.map((_, index) => (
                      <MinecraftButton
                        key={index}
                        type="button"
                        active={currentFaq === index}
                        onClick={() => setCurrentFaq(index)}
                      >
                        Q{index + 1}
                      </MinecraftButton>
                    ))}
                  </div>
                  <MinecraftButton
                    type="button"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </MinecraftButton>
                </div>
              </MinecraftDialog>
            </motion.div>
          ) : (
            <motion.div
              key="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center"
            >
              <MinecraftButton type="button" onClick={() => setIsOpen(true)}>
                Open FAQ
              </MinecraftButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
