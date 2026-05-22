import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../data/projects";

const MOBILE_BREAKPOINT = 640;

export default function BuiltForImpact() {
 const sliderRef = useRef<HTMLDivElement>(null);
 const [activeIndex, setActiveIndex] = useState(0);
 const [visibleCards, setVisibleCards] = useState(() =>
 typeof window !== "undefined" && window.innerWidth < MOBILE_BREAKPOINT
 ? 1
 : 2,
 );

 useEffect(() => {
 const updateVisibleCards = () => {
 setVisibleCards(window.innerWidth < MOBILE_BREAKPOINT ? 1 : 2);
 };

 updateVisibleCards();
 window.addEventListener("resize", updateVisibleCards);
 return () => window.removeEventListener("resize", updateVisibleCards);
 }, []);

 const maxIndex = Math.max(0, PROJECTS.length - visibleCards);

 useEffect(() => {
 setActiveIndex((prev) => Math.min(prev, maxIndex));
 }, [maxIndex]);

 const getStepWidth = () => {
 if (!sliderRef.current) return 0;
 const firstCard = sliderRef.current.firstElementChild as HTMLElement | null;
 if (!firstCard) return 0;

 const gap = parseFloat(
 getComputedStyle(sliderRef.current).columnGap || "0",
 );
 return firstCard.offsetWidth + gap;
 };

 const canPrev = activeIndex > 0;
 const canNext = activeIndex < maxIndex;

 const scroll = (dir: "prev" | "next") => {
 setActiveIndex((i) => {
 const next =
 dir === "next" ? Math.min(i + 1, maxIndex) : Math.max(i - 1, 0);

 // Programmatic scroll so the DOM moves in sync
 if (sliderRef.current) {
 const stepWidth = getStepWidth();
 sliderRef.current.scrollTo({
 left: stepWidth * next,
 behavior: "smooth",
 });
 }
 return next;
 });
 };

 return (
 <section
 id="works"
 className="bg-white py-24 relative overflow-hidden"
 >
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Header row - Desktop only */}
 <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
 <div>
 <span className="inline-block py-1 px-3 w-fit rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-semibold tracking-wide uppercase mb-4">
 ● Projects
 </span>
 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
 Built For Impact
 </h2>
 <p className="text-gray-500 text-base mt-3 max-w-xl leading-relaxed">
 As a transparent agency we always want our clients to know how we
 work, what we do &amp; how we do.
 </p>
 </div>

 {/* Header CTA - Large screens only */}
 <div className="hidden lg:flex items-center gap-3 shrink-0">
 <Link
 to="/ourworks"
 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:opacity-80 active:scale-95 transition-all select-none"
 >
 Our Works
 <ArrowUpRight className="w-4 h-4" />
 </Link>
 </div>
 </div>

 {/* Slider track with side arrows on desktop */}
 <div className="relative">
 {/* Side arrows - Medium and large screens */}
 <button
 onClick={() => scroll("prev")}
 disabled={!canPrev}
 aria-label="Previous projects"
 className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-11 h-11 rounded-full border border-gray-200 items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none z-10"
 >
 <ArrowLeft className="w-4 h-4" />
 </button>

 <button
 onClick={() => scroll("next")}
 disabled={!canNext}
 aria-label="Next projects"
 className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-11 h-11 rounded-full border border-gray-200 items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none z-10"
 >
 <ArrowRight className="w-4 h-4" />
 </button>

 <div
 ref={sliderRef}
 className="flex gap-6 overflow-x-hidden scroll-smooth"
 style={{ scrollSnapType: "x mandatory" }}
 >
 {PROJECTS.map((project, index) => (
 <Link
 key={index}
 to={project.link}
 className="flex-none w-full sm:w-[calc((100%-1.5rem)/2)] min-w-0 sm:min-w-[320px] flex flex-col gap-4 group cursor-pointer"
 style={{ scrollSnapAlign: "start" }}
 >
 {/* Image */}
 <div
 className={`aspect-[4/3] w-full ${project.color} ${project.imageContainerClass ?? ""} rounded-2xl relative overflow-hidden`}
 >
 <img
 src={project.image}
 alt={project.client}
 loading="lazy"
 decoding="async"
 className={`${project.imageClass ?? "w-full h-full object-cover"} transition-transform duration-500 ${project.disableHoverZoom ? "" : "group-hover:scale-105"}`}
 />
 </div>

 {/* Details */}
 <div className="flex flex-col gap-1 px-1">
 <span className="font-bold text-gray-900 text-base leading-snug group-hover:text-royal-600 transition-colors">
 {project.client}
 </span>
 <span className="text-gray-400 text-sm leading-snug line-clamp-2">
 {project.category}
 </span>
 </div>
 </Link>
 ))}
 </div>

 {/* Dot indicators - Large screens only */}
 <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
 {Array.from({ length: maxIndex + 1 }).map((_, i) => (
 <button
 key={i}
 onClick={() => {
 setActiveIndex(i);
 if (sliderRef.current) {
 const stepWidth = getStepWidth();
 sliderRef.current.scrollTo({
 left: stepWidth * i,
 behavior: "smooth",
 });
 }
 }}
 aria-label={`Go to slide ${i + 1}`}
 className={`h-1.5 rounded-full transition-all select-none ${
 activeIndex === i
 ? "w-8 bg-gray-900"
 : "w-1.5 bg-gray-300 hover:bg-gray-400"
 }`}
 />
 ))}
 </div>
 </div>

 {/* Mobile control bar - Small screens only */}
 <div className="md:hidden flex flex-col gap-4 mt-8">
 {/* Control buttons and dots */}
 <div className="flex items-center justify-between">
 <div className="flex items-center gap-3">
 <button
 onClick={() => scroll("prev")}
 disabled={!canPrev}
 aria-label="Previous projects"
 className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none"
 >
 <ArrowLeft className="w-4 h-4" />
 </button>

 {/* Dots for mobile */}
 <div className="flex items-center gap-1.5">
 {Array.from({ length: maxIndex + 1 }).map((_, i) => (
 <button
 key={i}
 onClick={() => {
 setActiveIndex(i);
 if (sliderRef.current) {
 const stepWidth = getStepWidth();
 sliderRef.current.scrollTo({
 left: stepWidth * i,
 behavior: "smooth",
 });
 }
 }}
 aria-label={`Go to slide ${i + 1}`}
 className={`transition-all select-none ${
 activeIndex === i
 ? "w-6 h-1.5 bg-gray-900 rounded-full"
 : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400 rounded-full"
 }`}
 />
 ))}
 </div>

 <button
 onClick={() => scroll("next")}
 disabled={!canNext}
 aria-label="Next projects"
 className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none"
 >
 <ArrowRight className="w-4 h-4" />
 </button>
 </div>

 <Link
 to="/ourworks"
 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:opacity-80 active:scale-95 transition-all select-none"
 >
 Our Works
 <ArrowUpRight className="w-4 h-4" />
 </Link>
 </div>
 </div>
 </div>
 </section>
 );
}
