import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
const initiatives = [
    {
        id: 'local-design',
        title: 'Local Design',
        description: 'Empowering communities through context-aware and sustainable design practices that honor local heritage and environmental realities.',
        href: 'https://www.localdesign.in/',
        image: 'https://images.unsplash.com/photo-1541888075840-0c466046e033?q=80&w=2000&auto=format&fit=crop', // Replace with actual image later
        video: '/gif/localdesignstomp.mp4',
        color: 'from-amber-500/20 to-orange-600/20'
    },
    {
        id: 'sirf-local',
        title: 'Sirf Local',
        description: 'A dedicated platform showcasing exclusively local products, artisans, and experiences, fostering micro-economies and cultural pride.',
        href: 'https://www.sirflocal.in/',
        image: 'https://images.unsplash.com/photo-1558522195-e1201b090344?q=80&w=2000&auto=format&fit=crop', // Replace with actual image later
        color: 'from-emerald-500/20 to-teal-600/20'
    }
];

export default function Initiative() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={containerRef}>
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Initiatives</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Pioneering meaningful change through localized, sustainable, and culturally rooted projects.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {initiatives.map((initiative, index) => (
                        <motion.div
                            key={initiative.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                            onMouseEnter={() => setHoveredCard(initiative.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="relative group rounded-[2.5rem] overflow-hidden bg-gray-900/40 border border-white/10 backdrop-blur-xl aspect-[4/5] md:aspect-square flex flex-col"
                        >
                            {/* Card Link Overlay */}
                            <a href={initiative.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20" aria-label={`View ${initiative.title}`} />

                            {/* Background Image/Video & Gradient */}
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.div
                                    animate={{ 
                                        scale: hoveredCard === initiative.id ? 1.05 : 1,
                                    }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 group-hover:bg-black/40" />
                                    <div className={`absolute inset-0 bg-gradient-to-b ${initiative.color} mix-blend-overlay z-10 transition-opacity duration-500 opacity-50 group-hover:opacity-80`} />
                                    {initiative.video ? (
                                        <video
                                            src={initiative.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <img 
                                            src={initiative.image} 
                                            alt={initiative.title} 
                                            className="w-full h-full object-cover"
                                        />
                                    )}
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full justify-end">
                                <motion.div
                                    animate={{ 
                                        y: hoveredCard === initiative.id ? -10 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight drop-shadow-md">
                                        {initiative.title}
                                    </h2>
                                    
                                    <div className="overflow-hidden">
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ 
                                                opacity: hoveredCard === initiative.id ? 1 : 0.7,
                                                height: hoveredCard === initiative.id ? 'auto' : '3rem'
                                            }}
                                            transition={{ duration: 0.3 }}
                                            className="text-gray-300 text-lg leading-relaxed line-clamp-2 md:line-clamp-none"
                                        >
                                            {initiative.description}
                                        </motion.p>
                                    </div>

                                    {/* Action Button */}
                                    <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between">
                                        <span className="text-sm uppercase tracking-widest font-semibold text-white/70 group-hover:text-white transition-colors">
                                            Explore
                                        </span>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <svg className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Ambient Glow on hover */}
                            <div className={`absolute inset-0 z-0 bg-gradient-to-tr ${initiative.color} opacity-0 group-hover:opacity-20 transition-opacity duration-1000 blur-2xl`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
