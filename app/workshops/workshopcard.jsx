"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import subworkshops from "./subworkshops.json";

export default function WorkshopCard({
    name,
    description,
    sub_description,
    start_date,
    end_date,
    github,
}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showImage, setShowImage] = useState(true);
    const [showSubworkshops, setShowSubworkshops] = useState(false);

    useEffect(() => {
        if (isFlipped) {
            const timer = setTimeout(() => setShowImage(false), 500); // 500ms matches the transition duration
            return () => clearTimeout(timer);
        } else {
            setShowImage(true);
        }
    }, [isFlipped]);

    return (
        <motion.div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative w-full sm:w-[300px] h-[400px] rounded-lg overflow-hidden cursor-pointer"
        >
            <div className="w-full h-full bg-gray-800">
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ translateY: "100%" }}
                        animate={{ translateY: isFlipped ? "0%" : "100%" }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col justify-center items-center bg-gray-800 text-white p-4"
                    >
                        <p className="text-md mb-2">{sub_description}</p>
                        <p className="text-md">{`From: ${start_date} To: ${end_date}`}</p>
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline mt-4"
                        >
                            GitHub Link
                        </a>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowSubworkshops(true);
                            }}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                        >
                            More Info
                        </button>
                    </motion.div>
                    {showImage && !isFlipped && (
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="/MemberCard.png"
                                alt="Member Card Background"
                                fill
                                style={{ objectFit: "cover" }}
                                className="rounded-lg"
                            />
                        </div>
                    )}
                    <motion.div
                        initial={{ translateY: "0%" }}
                        animate={{ translateY: isFlipped ? "-100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 flex flex-col justify-center items-center text-white p-4"
                    >
                        <div className="w-[200px] h-[200px] bg-white rounded mb-4" />
                        <h2 className="text-3xl mb-2">{name}</h2>
                        <p className="text-xl text-center">{description}</p>
                    </motion.div>
                </div>
            </div>
            {showSubworkshops && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                        <h2 className="text-2xl mb-4">Subworkshops</h2>
                        <ul>
                            {subworkshops.map((sub, index) => (
                                <li key={index} className="mb-2">
                                    <h3 className="text-xl">{sub.name}</h3>
                                    <p>{sub.description}</p>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={() => setShowSubworkshops(false)}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
