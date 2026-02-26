import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroFigure from "./HeroFigure";
import ContactModal from "./ContactModal";

const TICKER_WORDS = ["Create", "Innovate", "Inspire"];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % TICKER_WORDS.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative bg-white dark:bg-gray-900 overflow-hidden min-h-[calc(100vh-6rem)] flex items-center pt-24 pb-12 lg:pt-32 lg:pb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                    {/* Left Column: Text Content */}
                    <div className="text-center lg:text-left z-10 flex flex-col justify-center items-center lg:items-start order-2 lg:order-1">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center  text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-4 justify-center lg:justify-start text-center">
                                <span>With the freedom to</span>
                                <div className="relative h-8 w-32 sm:w-40 md:w-48 flex-shrink-0 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={index}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute inset-0 text-gray-400 font-semibold sm:mt-1 md:mt-0 pl-2 text-left"
                                    >
                                        {TICKER_WORDS[index]}
                                    </motion.span>
                                </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary to-purple-600 bg-clip-text text-transparent leading-tight tracking-tight mb-6 lg:mb-8">
                            Local Wisdom
                            <span className="block mt-1 lg:mt-0">for Global Impact</span>
                        </h1>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                            <a
                                href="#works"
                                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-primary rounded-full hover:border-primary"
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-primary dark:bg-primary group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-primary dark:text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Explore Our Works</span>
                                <span className="relative invisible">Explore Our Works</span>
                            </a>
                            <button
                                onClick={() => setIsContactModalOpen(true)}
                                className="px-8 py-3 text-base font-medium rounded-full text-gray-900 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors"
                            >
                                Schedule a Call
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Key Figure */}
                    <div className="relative flex justify-center items-center w-full h-full max-h-[40vh] sm:max-h-[50vh] lg:max-h-[80vh] order-1 lg:order-2 mb-8 lg:mb-0">
                        <motion.div
                            className="w-full h-full flex justify-center items-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <HeroFigure className="w-full h-full object-contain max-h-[500px] lg:max-h-[700px]" />
                        </motion.div>
                    </div>
                </div>
            </div>
            
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)} 
            />
        </div>
    );
}

