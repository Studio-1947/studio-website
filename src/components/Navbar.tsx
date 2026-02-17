import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThemeToggle from './ThemeToggle';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftPillRef = useRef<HTMLDivElement>(null);
    const rightPillRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "+=300",
                scrub: 1,
            }
        });

        if (leftPillRef.current && rightPillRef.current) {
            // Animate using transforms for performance (composite layer vs layout)
            tl.fromTo(leftPillRef.current,
                { x: "-15vw" },
                {
                    x: "0%",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderRightWidth: 0,
                    paddingRight: "2rem", // Animate to final padding
                    duration: 1,
                    ease: "power2.inOut"
                }, 0
            );

            tl.fromTo(rightPillRef.current,
                { x: "15vw" },
                {
                    x: "0%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderLeftWidth: 0,
                    paddingLeft: "2rem",
                    duration: 1,
                    ease: "power2.inOut"
                }, 0
            );
        }
    }, { scope: containerRef });

    const leftLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Search', href: '#' },
        { name: 'Say Hello', href: '/contact' },
    ];

    const rightLinks = [
        { name: 'Products', href: '/products' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'Collabs', href: '/collabs' },
    ];

    const allLinks = [...leftLinks, ...rightLinks];

    // Increased padding and adjusted max-width for "proper screen fill"
    const pillBaseClass = "flex items-center space-x-10 px-12 py-5 bg-gray-900/80 dark:bg-black/80 backdrop-blur-3xl border border-gray-200/10 dark:border-white/10 text-gray-100 transition-colors duration-300";

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-6 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none"
            >
                <div ref={containerRef} className="flex items-stretch pointer-events-auto origin-center w-full justify-center">
                    {/* Left Pill */}
                    <div
                        ref={leftPillRef}
                        className={`${pillBaseClass} rounded-full hidden lg:flex`}
                        style={{
                            // Initial styles matching GSAP 'from' state
                            borderTopRightRadius: '9999px',
                            borderBottomRightRadius: '9999px',
                            borderRightWidth: '1px',
                            transform: 'translateX(-15vw)'
                        }}
                    >
                        <a href="/" className="mr-8 block">
                            <img src="/logo.svg" alt="Studio 1947" className="h-10 w-auto object-contain" />
                        </a>
                        <div className="flex space-x-6">
                            {leftLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium hover:text-primary transition-colors">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Pill */}
                    <div
                        ref={rightPillRef}
                        className={`${pillBaseClass} rounded-full hidden lg:flex`}
                        style={{
                            borderTopLeftRadius: '9999px',
                            borderBottomLeftRadius: '9999px',
                            borderLeftWidth: '1px',
                            transform: 'translateX(15vw)'
                        }}
                    >
                        <div className="flex space-x-6 items-center">
                            {rightLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium hover:text-primary transition-colors">
                                    {link.name}
                                </a>
                            ))}
                            <div className="pl-6 ml-6 border-l border-gray-700">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Nav Container - Wider */}
                    <div className="lg:hidden w-full flex justify-between items-center px-6 py-4 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-white/10 pointer-events-auto min-w-[92vw] mx-auto">
                        <a href="/" className="text-xl font-bold text-white">
                            Studio <span className="text-primary">1947</span>
                        </a>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-primary focus:outline-none"
                            >
                                {isOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-3xl transition-all duration-500 lg:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
                    }`}
            >
                {allLinks.map((link, index) => (
                    <a
                        key={link.name}
                        href={link.href}
                        style={{ transitionDelay: `${index * 50}ms` }}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl font-bold text-white hover:text-primary transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        {link.name}
                    </a>
                ))}
                {/* <button
                    className="absolute top-8 right-8 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button> */}
            </div>
        </>
    );
}
