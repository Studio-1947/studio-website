import { useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
    {
        id: 'hero',
        title: 'The Wheel that Shaped Us',
        content: ''
    },
    {
        id: 'child',
        title: '',
        content: "The rhythm of life began in the dust. Before we knew blueprints, we knew the wobble of a black water-pipe tyre. We learned momentum by chasing it with a stick, turning resourcefulness into a game. This was our first design lesson: that joy can be engineered from the simplest of materials."
    },
    {
        id: 'youth',
        title: '',
        content: "As we grew, the wheel grew with us. The thin, spoked cycle wheel became our freedom. It balanced the weight of groceries, school bags, and dreams. It taught us that utility doesn't have to be complex—it just has to be reliable, day after day."
    },
    {
        id: 'livelihood',
        title: '',
        content: "We hit the unyielding strength of tradition here. The massive wooden wheel of the Bail Gari carried more than harvest—it carried our heritage. Creaking under the weight of movement, it reminded us that the most powerful solutions are often the ones closest to the soil."
    },
    {
        id: 'craft',
        title: '',
        content: "Precision was found in the rhythmic spin of the tailor’s wheel. In every tailored cuff and hand-woven seam, the wheel was present, turning raw thread into craft. It showed us that true industry is built on the mastery of the human hand."
    },
    {
        id: 'studio',
        title: '',
        content: "This continuous, unbreaking circle is what inspires us. We don't just see a wheel; we see the story of a rooted life. A design system that came before use is what shapes our industry today. Studio 1947 is not just a name; it is a commitment to local, human-centered design, born from the very wheels that moved us forward."
    }
];

export default function Story() {
    const containerRef = useRef<HTMLDivElement>(null);
    const rightColumnRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Array to hold preloaded images
    const imagesRef = useRef<HTMLImageElement[]>([]);
    // GSAP object holding the frame state
    const frameCounter = useRef({ frame: 0 });

    const TOTAL_FRAMES = 176;

    useEffect(() => {
        // 1. Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        // Sync Lenis with GSAP's ticker
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        // 2. Preload Images
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (!canvas || !ctx) return;

        let loadedCount = 0;

        for (let i = 0; i < TOTAL_FRAMES; i++) {
            const img = new Image();
            const paddedIndex = (i + 1).toString().padStart(3, '0');
            img.src = `/New folder/ezgif-frame-${paddedIndex}.png`;

            img.onload = () => {
                loadedCount++;
                // Draw the first frame as soon as it's loaded to prevent empty canvas
                if (i === 0) {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
            };

            imagesRef.current.push(img);
        }

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    useGSAP(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const images = imagesRef.current;

        if (!canvas || !ctx || !rightColumnRef.current) return;

        // Drawing function
        const render = () => {
            if (!images[frameCounter.current.frame]) return;
            const currentImg = images[frameCounter.current.frame];

            // If the image is loaded, draw it
            if (currentImg.complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(currentImg, 0, 0, canvas.width, canvas.height);
            }
        };

        // Create GSAP Timeline for the frames
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: rightColumnRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5, // 0.5s scrub delay for smoothness
            }
        });

        // Animate the frame property
        tl.to(frameCounter.current, {
            frame: TOTAL_FRAMES - 1,
            snap: "frame", // Snap to whole numbers
            ease: "none",  // Linear progression
            onUpdate: () => render() // Render canvas on every update
        });

        return () => {
            // Explicitly kill the scrolltrigger timeline
            tl.kill();
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, { scope: containerRef });

    return (
        <Layout>
            <div className="bg-[#f4efe8] dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors duration-300" ref={containerRef}>
                <div className="flex flex-col md:flex-row w-full relative">

                    {/* Left Side: Sticky Canvas */}
                    <div className="w-full md:w-1/2 h-[50vh] md:h-screen md:sticky top-0 left-0 bg-black overflow-hidden border-b md:border-b-0 md:border-r border-[#d3c5b3] dark:border-gray-700 z-10 flex items-center justify-center">

                        <canvas
                            ref={canvasRef}
                            width={1080}
                            height={1080}
                            className="w-full h-full object-contain"
                        />

                        {/* Optional overlay gradient for styling */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Right Side: Scrolling Content */}
                    <div ref={rightColumnRef} className="w-full md:w-1/2 flex flex-col relative z-20">
                        {SECTIONS.map((sec, index) => (
                            <div
                                key={sec.id}
                                className="min-h-screen flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-24 border-b border-[#d3c5b3]/30 dark:border-gray-800/50 last:border-0"
                            >
                                {index === 0 ? (
                                    <div className="text-center md:text-left">
                                        <span className="text-[#a46f4b] dark:text-amber-500 font-semibold tracking-widest uppercase text-sm mb-6 block">
                                            Our Story
                                        </span>
                                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#3a2d24] dark:text-white tracking-tight leading-tight">
                                            {sec.title}
                                        </h1>
                                    </div>
                                ) : (
                                    <div className="relative">
                                        <span className="absolute -left-6 md:-left-8 top-1 text-[#a46f4b]/30 dark:text-amber-500/30 font-black text-4xl">
                                            {index}
                                        </span>
                                        <p className="text-xl md:text-2xl text-[#5c4a3d] dark:text-gray-300 leading-relaxed font-light">
                                            {sec.content}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    );
}
