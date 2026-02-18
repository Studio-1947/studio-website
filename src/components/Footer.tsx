import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import GoldenSprinkles from './GoldenSprinkles';


export default function Footer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date, timeZone: string) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            timeZone,
            hour12: false
        }).format(date);
    };

    const footerLinks = [
        { title: "Sitemap", links: ["Home", "Work", "Studio", "Contact"] },
        { title: "Socials", links: ["Twitter", "LinkedIn", "Instagram", "GitHub"] },
        { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] }
    ];

    return (
        <footer className="relative bg-gray-950 text-white pt-20 pb-10 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl font-bold tracking-tight"
                        >
                            <Logo className="h-10 w-auto text-white" />

                        </motion.h2>
                        <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                            Crafting digital experiences that merge timeless design with cutting-edge technology.
                        </p>
                        <div className="pt-8">
                            <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-gray-700 rounded-full hover:border-white">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Start a Project</span>
                                <span className="relative invisible">Start a Project</span>
                            </a>
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {footerLinks.map((section, idx) => (
                            <div key={section.title}>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4"
                                >
                                    {section.title}
                                </motion.h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIdx) => (
                                        <motion.li
                                            key={link}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: (idx * 0.1) + (linkIdx * 0.05) }}
                                        >
                                            <a href="#" className="text-gray-300 hover:text-white transition-colors hover:underline decoration-gray-700 underline-offset-4">
                                                {link}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Big Text */}
                <div className="border-t border-gray-800 pt-12 mt-12 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <GoldenSprinkles />
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-[12vw] leading-none font-bold text-center text-gray-900 dark:text-gray-800 select-none pointer-events-none"
                        style={{
                            background: 'linear-gradient(to bottom, #333 0%, #000 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            opacity: 0.3
                        }}
                    >
                        STUDIO 1947
                    </motion.h1>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-800 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Studio 1947. All rights reserved.</p>

                    <div className="flex items-center space-x-6 mt-4 md:mt-0">
                        <div className="flex items-center space-x-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>NY {formatTime(time, 'America/New_York')}</span>
                        </div>
                        <div className="hidden md:block w-px h-3 bg-gray-800" />
                        <div className="flex items-center space-x-2">
                            <span>LON {formatTime(time, 'Europe/London')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
