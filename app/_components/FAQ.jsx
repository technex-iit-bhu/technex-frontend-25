"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MinecraftDialog } from "./Minecraft-dialog.jsx";
import { MinecraftButton } from "./Minecraft-button.jsx";

const faqs = [
  {
    question: "What is SNTC?",
    answer:
      "The Science and Technology Council (SNTC) at IIT BHU Varanasi is a student body that promotes scientific and technological activities. We organize various events, workshops, and competitions throughout the year.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    question: "How can I participate?",
    answer:
      "You can register through our website and participate in various events and workshops. Simply click the 'Register' button on the event you're interested in and follow the instructions.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    question: "What are the event dates?",
    answer:
      "Our main events are scheduled throughout the academic year. The next major event series will be held from January to March 2024. Check the schedule section for specific event timings.",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function FAQ() {
  const [currentFaq, setCurrentFaq] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

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
                      <img
                        src="/skin.png"
                        alt=""
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
