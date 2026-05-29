import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TalkToUsModal from "./TalkToUsModal";
import { Typography } from "./ui/Typography";
import { Button } from "./ui/Button";
import ClientsTicker from "./ClientsTicker";
import Antigravity from "./Antigravity";

const TICKER_WORDS = ["Create", "Innovate", "Inspire"];

export default function HeroV2() {
  const [index, setIndex] = useState(0);
  const [isTalkToUsModalOpen, setIsTalkToUsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TICKER_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative overflow-hidden min-h-[100dvh] flex flex-col" 
      style={{ background: 'linear-gradient(180deg, #FFFAFA 0%, #FFEAEA 100%)' }}
    >
      {/* 3D WebGL Interactive Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
        <Antigravity
          count={400}
          magnetRadius={9.5}
          ringRadius={5.5}
          waveSpeed={0.25}
          waveAmplitude={0.4}
          particleSize={0.65}
          lerpSpeed={0.045}
          color={'#D80000'} // Using brand primary Studio Red particles
          autoAnimate={true}
          particleVariance={0.8}
          rotationSpeed={0.03}
          depthFactor={1.5}
          pulseSpeed={2.0}
          particleShape="capsule"
          fieldStrength={16}
        />
      </div>

      {/* Grid overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(216,0,0,0.03),rgba(255,255,255,0))] pointer-events-none z-1" />

      {/* Content Container */}
      <div className="flex-1 flex items-center w-full pt-20 pb-4 sm:pt-24 sm:pb-4 lg:pt-28 lg:pb-0 z-10 relative pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Centered typographic layout */}
          <div className="flex flex-col justify-center items-center text-center w-full select-none">
            {/* Ticker Row */}
            <div className="flex items-center text-lg sm:text-xl md:text-2xl text-[#383649]/80 font-semibold mb-6 justify-center w-full tracking-wide">
              <Typography as="span" variant="body" className="font-semibold text-gray-600">
                With the freedom to
              </Typography>
              <div className="relative h-8 w-32 sm:w-40 md:w-48 flex-shrink-0 overflow-hidden ml-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 24, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -24, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className="absolute inset-0 text-[#D80000] font-extrabold text-left pl-1"
                  >
                    {TICKER_WORDS[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Centered H1 Heading */}
            <h1 className="flex flex-col text-center text-[#383649] font-extrabold tracking-tight mb-8 sm:mb-10 w-full max-w-4xl leading-[1.05]">
              {/* Row 1: Centered */}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block"
              >
                Local Wisdom
              </motion.span>
              
              {/* Row 2: Centered */}
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl block mt-2 lg:mt-3 text-[#D80000]"
              >
                for Global Impact
              </motion.span>
            </h1>

            {/* Micro-interaction CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto mt-4 z-20 pointer-events-auto"
            >
              <Button
                as="a"
                href="#works"
                variant="primary"
                className="bg-[#383649] text-white border-2 border-[#383649] hover:bg-[#D80000] hover:border-[#D80000] hover:text-white transition-colors duration-300 shadow-lg shadow-black/10 hover:shadow-red-500/20 active:scale-95"
              >
                Explore Our Works
              </Button>
              <Button
                variant="primary"
                onClick={() => setIsTalkToUsModalOpen(true)}
                className="bg-[#D80000] text-white border-2 border-[#D80000] hover:bg-white hover:text-[#D80000] hover:border-[#D80000] transition-colors duration-300 shadow-lg shadow-red-500/10 hover:shadow-red-500/20 active:scale-95"
              >
                Talk to us
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Clients Ticker — anchored at the bottom */}
      <div className="w-full flex-shrink-0 z-10 relative bg-gradient-to-t from-[#FFEAEA]/40 to-transparent pt-6">
        <ClientsTicker />
      </div>

      <TalkToUsModal
        isOpen={isTalkToUsModalOpen}
        onClose={() => setIsTalkToUsModalOpen(false)}
      />
    </div>
  );
}
