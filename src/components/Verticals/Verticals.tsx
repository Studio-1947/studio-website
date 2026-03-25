import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VerticalCard from "./VerticalCard";

gsap.registerPlugin(ScrollTrigger);

const VERTICALS = [
  {
    title: "Collaborations",
    description: "We collaborate with NGOs and other businesses who aim for local impact with greater minds.",
    image: "/vertical/collabs.jpg",
  },
  {
    title: "Products",
    description: "We build scalable, robust software solutions tailored to solve complex challenges. Explore our suite of enterprise products.",
    image: "/vertical/products.png",
  },
  {
    title: "Solutions",
    description: "From research to deployment, we build bespoke platforms and workflows tailored exactly to your organizational volume and scale.",
    image: "/vertical/Solutions.png",
  },
  {
    title: "Initiatives",
    description: "Pioneering meaningful change through localized, sustainable, and culturally rooted projects.",
    image: "/vertical/initiative.png",
  },
];

export default function Verticals() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      [badgeRef.current, headingRef.current, copyRef.current],
      { y: 28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-gray-50 dark:bg-gray-900 py-24 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span ref={badgeRef} className="inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
            ● Our Verticals
          </span>
          <h2 ref={headingRef} className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            We Not Just Only Build Products
          </h2>
          <p ref={copyRef} className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
            We work on multiple verticals from entrepreneur to local artisans
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {VERTICALS.map((vertical, index) => (
            <VerticalCard key={index} {...vertical} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
