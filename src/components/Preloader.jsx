"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Friendly phrases to keep the user entertained
const loadingPhrases = [
    "Brewing some coffee...",
    "Warming up the servers...",
    "Aligning the pixels...",
    "Putting things together...",
    "Almost there..."
];

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        // Cycle through the fun text phrases every 800ms
        const textInterval = setInterval(() => {
            setPhraseIndex((prev) => (prev + 1) % loadingPhrases.length);
        }, 800);

        // Wait for the window to load completely
        const handleLoad = () => {
            // We give it a 2.5 second delay so the user can enjoy the animation
            setTimeout(() => setIsLoading(false), 2500);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }

        // Cleanup intervals on unmount
        return () => clearInterval(textInterval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    // A super smooth, modern "slide up and fade" exit transition
                    exit={{ opacity: 0, y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[9999] bg-[#0d0d0f] flex flex-col items-center justify-center overflow-hidden"
                >

                    {/* Friendly Bouncing Dots Animation */}
                    <div className="flex gap-3 mb-8">
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-4 h-4 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 shadow-lg shadow-fuchsia-500/20"
                                animate={{
                                    y: ["0%", "-100%", "0%"],
                                    scale: [1, 0.8, 1],
                                }}
                                transition={{
                                    duration: 0.8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.15, // Staggers the bounce
                                }}
                            />
                        ))}
                    </div>

                    {/* Cycling Entertaining Text */}
                    <div className="h-8 overflow-hidden relative w-full flex justify-center mt-2">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={phraseIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-white/80 text-[17px] font-medium tracking-wide absolute"
                            >
                                {loadingPhrases[phraseIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Sleek Progress Bar */}
                    <div className="w-[200px] h-1.5 bg-white/5 rounded-full mt-8 overflow-hidden relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        />
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;