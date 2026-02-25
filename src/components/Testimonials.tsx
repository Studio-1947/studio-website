import { useRef, useEffect } from "react";
import gsap from "gsap";

const CASE_STUDIES = [
    {
        client: "bazmkaar",
        title: "Secured $250K from Venture Partners",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
        color: "bg-gray-100 dark:bg-gray-800"
    },
    {
        client: "bazmkaar",
        title: "Secured $250K from Venture Partners",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
        color: "bg-gray-100 dark:bg-gray-800"
    },
    {
        client: "bazmkaar",
        title: "Secured $250K from Venture Partners",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.",
        color: "bg-gray-100 dark:bg-gray-800"
    }
];

const REVIEWS = [
    {
        title: "Efficient & Thorough",
        quote: "\"Direct ping exceeded our expectations with their quality of work and professionalism.\"",
        author: "Joseph Kumar",
        role: "CEO at Microsoft"
    },
    {
        title: "Efficient & Thorough",
        quote: "\"Direct ping exceeded our expectations with their quality of work and professionalism.\"",
        author: "Joseph Kumar",
        role: "CEO at Microsoft"
    },
    {
        title: "Efficient & Thorough",
        quote: "\"Direct ping exceeded our expectations with their quality of work and professionalism.\"",
        author: "Joseph Kumar",
        role: "CEO at Microsoft"
    }
];

export default function Testimonials() {
    const tickerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const ctx = gsap.context(() => {
            animationRef.current = gsap.to(track, {
                xPercent: -50,
                repeat: -1,
                duration: 40,
                ease: "linear",
            });
        }, tickerRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = () => {
        animationRef.current?.pause();
    };

    const handleMouseLeave = () => {
        animationRef.current?.play();
    };

    return (
        <section className="bg-white dark:bg-black py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                    ● Testimonials
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                    What Our Clients Are Saying
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Let's see what our clients are saying about us
                </p>
            </div>

            {/* Ticker Section */}
            <div
                className="mb-20"
                ref={tickerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex w-max gap-8" ref={trackRef}>
                    {/* Original Set */}
                    {CASE_STUDIES.map((study, index) => (
                        <div key={`orig-${index}`} className="w-[400px] md:w-[600px] flex-shrink-0 bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm transition-transform duration-300 hover:scale-105">
                            <h3 className="font-bold text-gray-400 uppercase mb-4 tracking-wider">{study.client}</h3>
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">{study.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 mb-8">{study.description}</p>
                            {/* Image Placeholder */}
                            <div className="w-full h-48 md:h-64 bg-gray-100 dark:bg-gray-800 rounded-xl relative flex items-center justify-center overflow-hidden">
                                <div className="flex items-center gap-4 opacity-50">
                                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                                    <div className="w-0 h-0 border-l-[24px] border-l-transparent border-b-[48px] border-b-gray-300 dark:border-b-gray-700 border-r-[24px] border-r-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate Set for Loop */}
                    {CASE_STUDIES.map((study, index) => (
                        <div key={`dup-${index}`} className="w-[400px] md:w-[600px] flex-shrink-0 bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm transition-transform duration-300 hover:scale-105">
                            <h3 className="font-bold text-gray-400 uppercase mb-4 tracking-wider">{study.client}</h3>
                            <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">{study.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 mb-8">{study.description}</p>
                            {/* Image Placeholder */}
                            <div className="w-full h-48 md:h-64 bg-gray-100 dark:bg-gray-800 rounded-xl relative flex items-center justify-center overflow-hidden">
                                <div className="flex items-center gap-4 opacity-50">
                                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                                    <div className="w-0 h-0 border-l-[24px] border-l-transparent border-b-[48px] border-b-gray-300 dark:border-b-gray-700 border-r-[24px] border-r-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {REVIEWS.map((review, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
                            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg mb-6 flex items-center justify-center">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                </div>
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                {review.title}
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-grow">
                                {review.quote}
                            </p>
                            <div>
                                <p className="text-gray-900 dark:text-white font-semibold text-sm">{review.author}</p>
                                <p className="text-gray-400 dark:text-gray-500 text-xs">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
