import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TICKER_WORDS = ["Create", "Innovate", "Inspire"];

export default function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % TICKER_WORDS.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-screen flex items-center pt-24 lg:pt-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Left Column: Text Content */}
                    <div className="text-left z-10 flex flex-col justify-center">
                        <div className="flex items-baseline gap-2 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4">
                            <span>With the freedom to</span>
                            <div className="relative h-8 w-32 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute inset-0 text-gray-400 font-semibold"
                                    >
                                        {TICKER_WORDS[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-8">
                            Local Wisdom
                            <span className="block">for Global Impact</span>
                        </h1>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#works"
                                className="px-8 py-3 text-base font-medium rounded-full text-white bg-black dark:bg-white dark:text-black hover:opacity-80 transition-opacity"
                            >
                                Explore Our Works
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3 text-base font-medium rounded-full text-gray-900 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                            >
                                Schedule a Call
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Key Figure */}
                    <div className="relative flex justify-center items-center w-full h-full max-h-[60vh] lg:max-h-[80vh]">
                        <motion.img
                            src="/Hero_right_figure.svg"
                            alt="Studio 1947 Hero Figure"
                            className="w-full h-full object-contain max-h-[500px] lg:max-h-[700px]"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

