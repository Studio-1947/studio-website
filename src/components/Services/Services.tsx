import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".animate-item", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="relative py-24 md:py-32 lg:min-h-screen lg:flex lg:items-center border-b border-gray-200/50 overflow-hidden bg-white">
      {/* Background illustration */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <img
          src="/what_we_do.svg"
          alt=""
          className="absolute 
          bottom-0 
          md:bottom-[-20%] 
          lg:bottom-[-40%] 
          left-0 w-full object-cover object-bottom z-30"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32">
        {/* Centralized, Premium Introduction */}
        <div
          ref={containerRef}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <span className="animate-item inline-block py-1.5 px-4 text-sm font-bold tracking-widest uppercase mb-8 text-primary relative z-40">
            What We Do
          </span>
          <h2
            className="animate-item text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1] text-gray-900 relative z-10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Comprehensive solution
            <br />
            <span className="md:whitespace-nowrap">
              for the{" "}
              <span className="text-primary">modern digital landscape</span>
            </span>
          </h2>

          <p
            className="animate-item text-lg md:text-2xl text-black font-semibold leading-relaxed max-w-3xl mb-12 relative z-40 mt-8"
            style={{
              fontFamily: "Inter, sans-serif",
              textShadow:
                "0px 0px 10px rgba(255,255,255,1), 0px 0px 5px rgba(255,255,255,0.8)",
            }}
          >
            From performance marketing and cutting-edge web development to brand
            strategy, we provide everything your business needs to scale
            elegantly and efficiently.
          </p>

          <Link
            to="/products-and-services#services"
            className="animate-item relative z-40 inline-flex items-center justify-center px-8 py-3 rounded-full font-medium text-white bg-[#383649] border-0 hover:bg-white hover:text-[#383649] transition-colors duration-300"
          >
            Explore All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
