import { useRef, useEffect } from "react";
import gsap from "gsap";

const logos = [
 { src: "/logos/Fes.svg", alt: "FES" },
 { src: "/logos/awch.svg", alt: "AWCH" },
 { src: "/logos/Rajkamal Logo.svg", alt: "Rajkamal" },
 { src: "/logos/Remodel UN.svg", alt: "Remodel UN", raw: true },
 { src: "/logos/Jansahas.svg", alt: "JanSahas" },
 { src: "/logos/sundargaan_logo_white.svg", alt: "Sundargaan" },
];

const CONTENT = {
 title: "Trusted by over 20+ Clients",
 description: "Showcasing our partnerships with industry leaders."
};

export default function ClientsTicker() {
 const tickerRef = useRef<HTMLDivElement>(null);
 const trackRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const track = trackRef.current;
 if (!track) return;

 const ctx = gsap.context(() => {
 gsap.to(track, {
 xPercent: -50,
 repeat: -1,
 duration: 60, // Slower for better visibility
 ease: "linear",
 });
 }, tickerRef);

 return () => ctx.revert();
 }, []);

 return (
 <section className="border-b border-gray-200/50 py-8">
 <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">

 {/* Left Section: Trusted Text */}
 <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left z-10 relative">
 <h3 className="text-xl md:text-2xl font-bold text-[#383649] relative inline-block">
 <span className="relative z-10">{CONTENT.title}</span>
 {/* <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-100 -z-10 transform -rotate-1 rounded-sm"></span> */}
 </h3>
 <p className="mt-2 text-sm text-gray-500 max-w-xs">
 {CONTENT.description}
 </p>
 </div>

 {/* Right Section: Ticker */}
 <div className="w-full lg:w-2/3 overflow-hidden relative" ref={tickerRef}>

 {/* Gradient Masks for Fade Effect */}
 <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#FFEAEA] to-transparent z-10 pointer-events-none"></div>
 <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#FFEAEA] to-transparent z-10 pointer-events-none"></div>

          <div className="flex items-center w-max" ref={trackRef}>
            {/* Original List */}
            {logos.map((logo, index) => (
              <div key={`original-${index}`} className="flex-shrink-0 px-8 transition-all duration-300 cursor-pointer group">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`h-16 md:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 ${logo.raw ? '' : 'brightness-0'}`}
                />
              </div>
            ))}
            {/* Duplicated List for Loop */}
            {logos.map((logo, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0 px-8 transition-all duration-300 cursor-pointer group">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className={`h-16 md:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 ${logo.raw ? '' : 'brightness-0'}`}
                />
              </div>
            ))}
          </div>
        </div>

 </div>
 </section>
 );
}
