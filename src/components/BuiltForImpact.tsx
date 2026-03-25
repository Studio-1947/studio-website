import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export const PROJECTS = [
  {
    client: "RemodelUN",
    category: "Brand Identity & Design Guideline",
    image: "/client/RemodelUN.avif",
    color: "bg-gray-100 dark:bg-gray-800",
    link: "/ourwork/remodel-un",
  },
  {
    client: "Rajkamal Prakashan",
    category: "Kitavtosav - Yearly Book Festival Branding",
    image: "/client/rajkamal.jpeg",
    color: "bg-gray-100 dark:bg-gray-800",
    link: "/ourwork/rajkamal",
  },
  {
    client: "FES-MANIPAL-UNESCO",
    category: "Green Energy Meetup Report",
    image: "/collabs/FES.avif",
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    link: "/ourwork/fes-india",
  },
  {
    client: "Fermilab",
    category: "Brand Identity, Packaging & Retail",
    image: "/ourworks/Fermilab/fermilab_storefront.png",
    color: "bg-emerald-50 dark:bg-emerald-900/20",
    link: "/ourwork/fermilab",
  },
  {
    client: "AWCH",
    category: "Hospital Branding, Website & Social Media",
    image: "/ourworks/awch/logo01.png",
    color: "bg-gray-100 dark:bg-gray-800",
    link: "/ourwork/awch",
  },
  {
    client: "JanSahas",
    category: "Website Design & Digital Communication",
    image: "/ourworks/janSahas/Jansahas.png",
    color: "bg-gray-100 dark:bg-gray-800",
    link: "/ourwork/jansahas",
  },
  {
    client: "Village Ways",
    category: "Brand Identity & Visual Communication",
    image: "/ourworks/villageways/CM1.svg",
    color: "bg-pink-50 dark:bg-pink-950/20",
    link: "/ourwork/village-ways",
  },
  {
    client: "Local Futures",
    category: "Video Translation & Localization",
    image: "/ourworks/localfutures/local-futures-logo-2.png",
    color: "bg-white dark:bg-black",
    imageContainerClass: "flex items-center justify-center",
    imageClass: "w-auto h-auto max-w-full max-h-full object-contain p-6",
    disableHoverZoom: true,
    link: "/ourwork/local-futures",
  },
  {
    client: "Givfunds",
    category: "Brand Identity & Visual Communication",
    image: "/ourworks/givfunds/Givfuds%2002.jpg",
    color: "bg-red-50 dark:bg-red-950/20",
    link: "/ourwork/givfunds",
  },
];

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
      className="bg-white dark:bg-black py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <span className="inline-block py-1 px-3 w-fit rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-4">
              ● Projects
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Built For Impact
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-base mt-3 max-w-xl leading-relaxed">
              As a transparent agency we always want our clients to know how we
              work, what we do &amp; how we do.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("prev")}
              disabled={!canPrev}
              aria-label="Previous projects"
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("next")}
              disabled={!canNext}
              aria-label="Next projects"
              className="w-11 h-11 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-gray-900 dark:hover:border-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed select-none"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/ourworks"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-semibold hover:opacity-80 active:scale-95 transition-all select-none"
            >
              All Works
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Slider track */}
        <div className="relative">
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
                  <span className="font-bold text-gray-900 dark:text-white text-base leading-snug group-hover:text-royal-600 dark:group-hover:text-royal-400 transition-colors">
                    {project.client}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-sm leading-snug line-clamp-2">
                    {project.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
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
                    ? "w-8 bg-gray-900 dark:bg-white"
                    : "w-1.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
