import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const HelipadSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);

    // Parallax effect for the image
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Smooth, slow translation for the image
    const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    // Staggered reveal for features
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Very smooth, classy ease
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-[90vh] flex items-center bg-black"
        >
            {/* Background Image Container - overflow hidden here, not on section */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{ y: yImage }}
                    className="absolute w-full h-[150%] -top-[25%] origin-center"
                >
                    <img
                        src="/aboutus/helipad.avif"
                        alt="Studio 1947 Helipad"
                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity dark:mix-blend-normal transition-transform duration-[2000ms] ease-out hover:scale-105"
                        loading="lazy"
                        decoding="async"
                    />
                </motion.div>

                {/* Elegant gradient overlays to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />
            </div>

            {/* Edge Blending Gradients - Placed outside the overflow-hidden box to bleed properly */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-gray-50 dark:from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

            {/* Content properly integrated over the image */}
            <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 w-full py-24 sm:py-32 mt-12 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Main Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-xl"
                        >
                            <h2 className="text-5xl font-light tracking-tight text-white sm:text-6xl mb-8 leading-tight">
                                Clarity in a <br />
                                <span className="font-semibold text-white">Complex World.</span>
                            </h2>
                            <p className="text-xl leading-relaxed text-gray-300 font-light mb-16">
                                Traditional consulting moves slowly and hides the real cost. We do the opposite. At <span className="font-medium text-white">Studio 1947</span>, communication stays direct, pricing stays transparent, and your money fuels the actual work rather than layers of overhead.
                            </p>
                        </motion.div>
                    </div>

                    {/* Minimalist Features List overlaid on the darker part of the image */}
                    <div className="lg:pt-20">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-8"
                        >
                            {[
                                {
                                    title: "Tangible Results",
                                    desc: "Solutions that solve real-world problems."
                                },
                                {
                                    title: "Forward Thinking",
                                    desc: "Exploring the edge of what’s possible in tech and design."
                                },
                                {
                                    title: "Co-Creation",
                                    desc: "A partnership model built on shared vision and shared success."
                                }
                            ].map((item, index) => (
                                <motion.div key={index} variants={itemVariants} className="group flex items-start gap-6 border-b border-white/10 pb-8 last:border-0 hover:border-white/30 transition-colors duration-500">
                                    <div className="mt-2.5 h-px w-8 bg-white/30 group-hover:bg-white transition-colors duration-500 shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 font-light leading-relaxed text-lg group-hover:text-gray-300 transition-colors duration-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HelipadSection;
