import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroFigure from "./HeroFigure";
import TalkToUsModal from "./TalkToUsModal";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";
import ClientsTicker from "./ClientsTicker";

const TICKER_WORDS = ["Create", "Innovate", "Inspire"];

export default function Hero() {
 const [index, setIndex] = useState(0);
 const [isTalkToUsModalOpen, setIsTalkToUsModalOpen] = useState(false);

 useEffect(() => {
 const interval = setInterval(() => {
 setIndex((prev) => (prev + 1) % TICKER_WORDS.length);
 }, 2000);
 return () => clearInterval(interval);
 }, []);

 return (
 <div className="relative overflow-hidden min-h-[100dvh] flex flex-col" style={{ background: 'linear-gradient(180deg, #FFFAFA 0%, #FFEAEA 100%)' }}>
 {/*
 Content zone: flex-1 makes this grow to fill everything except the ticker.
 Padding-top accounts for the fixed navbar on all breakpoints.
 Using smaller pt on mobile so nothing gets clipped top or bottom.
 */}
 <div className="flex-1 flex items-center w-full pt-20 pb-4 sm:pt-24 sm:pb-4 lg:pt-28 lg:pb-0">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
 {/* Left Column: Text Content */}
 <div className="text-center lg:text-left z-10 flex flex-col justify-center items-center lg:items-start order-2 lg:order-1 w-full">
 <div className="text-center lg:text-left w-full pl-10 lg:pl-0">
 <div className="flex items-center text-lg sm:text-xl md:text-2xl text-gray-600 font-medium mb-4 justify-center lg:justify-start w-full">
 <Typography as="span" variant="body">With the freedom to</Typography>
 <div className="relative h-8 w-32 sm:w-40 md:w-48 flex-shrink-0 overflow-hidden">
 <AnimatePresence mode="wait">
 <motion.span
 key={index}
 initial={{ y: 20, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: -20, opacity: 0 }}
 transition={{ duration: 0.3, ease: "easeInOut" }}
 className="absolute inset-0 text-primary font-semibold sm:mt-1 md:mt-0 pl-2 text-left"
 >
 {TICKER_WORDS[index]}
 </motion.span>
 </AnimatePresence>
 </div>
 </div>
 </div>

 <Typography as="h1" variant="h1" className="mb-6 lg:mb-8 pr-2 text-[#383649]">
 Local Wisdom
 <span className="block mt-1 lg:mt-0">for Global Impact</span>
 </Typography>

 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
 <Button
 as="a"
 href="#works"
 variant="primary"
 animate
 >
 Explore Our Works
 </Button>
 <Button
 variant="secondary"
 onClick={() => setIsTalkToUsModalOpen(true)}
 className="hover:bg-[#383649] hover:text-white"
 >
 Talk to us
 </Button>
 </div>
 </div>

 {/* Right Column: Hero Figure — explicit heights prevent overflow at every breakpoint */}
 <div className="relative flex justify-center items-center w-full order-1 lg:order-2 mb-4 lg:mb-0 h-[280px] sm:h-[340px] md:h-[380px] lg:h-full lg:max-h-[600px]">
 <motion.div
 className="w-full h-full flex justify-center items-center"
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <HeroFigure className="w-full h-full object-contain" />
 </motion.div>
 </div>
 </div>
 </div>
 </div>

 {/* Clients Ticker — always at the bottom */}
 <div className="w-full flex-shrink-0">
 <ClientsTicker />
 </div>

 <TalkToUsModal
 isOpen={isTalkToUsModalOpen}
 onClose={() => setIsTalkToUsModalOpen(false)}
 />
 </div>
 );
}

