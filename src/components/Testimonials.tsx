import { useRef, useEffect } from "react";
import gsap from "gsap";

const TESTIMONIALS = [
    {
        quote: "Studio 1947 delivered exceptional promotional designs for our cultural programmes. Their unique emphasis on visual storytelling added a fascinating, artistic layer to our work that we hadn't seen before.",
        author: "Suranya Aiyaar",
        role: "CEO",
        company: "Bhagyam Arts & Aesthetic",
        image: "/client/Suranya.avif"
    },
    {
        quote: "Working with the team has been a treat. They did an amazing job simplifying technical jargon into thoughtful illustrations, making our challenging concepts genuinely engaging and effective for our audience.",
        author: "Sharda Mohanty",
        role: "CEO",
        company: "AIcrowd",
        image: "/client/Sharda.avif"
    },
    {
        quote: "As a development organization, we often struggle to make abstract research accessible. Studio 1947 translated our complex vision into visually meaningful products that made our findings exciting and easy to understand.",
        author: "Mandvi Kulshreshtha",
        role: "Senior Program Adviser",
        company: "Friedrich-Ebert-Stiftung, India",
        image: "/client/Mandvi.avif"
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
                duration: 45,
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
                    Don't just take our word for it—hear from the people we've worked with.
                </p>
            </div>

            {/* Ticker Section */}
            <div
                className="mb-10 w-full"
                ref={tickerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="flex w-max gap-6 px-4" ref={trackRef}>
                    {/* First Half */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                        <div key={`first-${index}`} className="w-[320px] md:w-[450px] flex-shrink-0 bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm transition-colors hover:border-gray-200 dark:hover:border-gray-700 flex flex-col justify-between cursor-default">
                            <div className="mb-8">
                                <svg className="w-8 h-8 text-gray-300 dark:text-gray-700 mb-6" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.333 13.333c0-3.682 2.985-6.667 6.667-6.667V0c-7.364 0-13.333 5.97-13.333 13.333v13.333h13.333V13.333H9.333zM25.333 13.333c0-3.682 2.985-6.667 6.667-6.667V0c-7.364 0-13.333 5.97-13.333 13.333v13.333h13.333V13.333H25.333z" />
                                </svg>
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                {testimonial.image && (
                                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                                )}
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white mb-0.5">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{testimonial.role}</p>
                                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Second Half */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                        <div key={`second-${index}`} className="w-[320px] md:w-[450px] flex-shrink-0 bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm transition-colors hover:border-gray-200 dark:hover:border-gray-700 flex flex-col justify-between cursor-default">
                            <div className="mb-8">
                                <svg className="w-8 h-8 text-gray-300 dark:text-gray-700 mb-6" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M9.333 13.333c0-3.682 2.985-6.667 6.667-6.667V0c-7.364 0-13.333 5.97-13.333 13.333v13.333h13.333V13.333H9.333zM25.333 13.333c0-3.682 2.985-6.667 6.667-6.667V0c-7.364 0-13.333 5.97-13.333 13.333v13.333h13.333V13.333H25.333z" />
                                </svg>
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-medium">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                {testimonial.image && (
                                    <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                                )}
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white mb-0.5">{testimonial.author}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{testimonial.role}</p>
                                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
