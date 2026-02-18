import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import SearchModal from './SearchModal';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeSpoke, setActiveSpoke] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const leftPillRef = useRef<HTMLDivElement>(null);
    const rightPillRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);

    // Keyboard shortcut for search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Check if the target is an input or textarea to avoid triggering while typing
            const target = e.target as HTMLElement;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }

            if (e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsSearchOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

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

    interface NavLink {
        name: string;
        href: string;
        spokeIndex?: number;
        onClick?: () => void;
    }

    const leftLinks: NavLink[] = [
        { name: 'About Us', href: '/about' },
        // Search is now handled separately
        { name: 'Say Hello', href: '/contact' },
    ];

    // Spoke Mapping: 2 (Right/3oclock), 1 (1:30), 0 (12:00), 7 (10:30) - Anti-clockwise
    const rightLinks: NavLink[] = [
        { name: 'Products', href: '/products', spokeIndex: 2 },
        { name: 'Solutions', href: '/solutions', spokeIndex: 1 },
        { name: 'Collabs', href: '/collabs', spokeIndex: 0 },
        { name: 'Initiative', href: '/initiative', spokeIndex: 7 },
    ];

    const allLinks: NavLink[] = [
        ...leftLinks,
        { name: 'Search', href: '#', onClick: () => setIsSearchOpen(true) },
        ...rightLinks
    ];

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
                        <a
                            href="/"
                            className="mr-8 block group/logo"
                            onMouseEnter={() => setActiveSpoke(2)} // Default to 'Right' spoke on logo hover
                            onMouseLeave={() => setActiveSpoke(null)}
                        >
                            <Logo className="h-10 w-auto object-contain" activeSpoke={activeSpoke} />
                        </a>
                        <div className="flex space-x-6 items-center">
                            {leftLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-base font-medium hover:text-primary transition-colors">
                                    {link.name}
                                </a>
                            ))}

                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-base font-medium hover:text-primary transition-colors focus:outline-none flex items-center gap-2"
                                aria-label="Search"
                            >
                                <img src="/search-02.png" alt="Search" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" />
                                <span className="text-gray-500 text-sm hidden xl:inline-block font-sans">K</span>
                            </button>
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
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-medium hover:text-primary transition-colors"
                                    onMouseEnter={() => setActiveSpoke(link.spokeIndex ?? null)}
                                    onMouseLeave={() => setActiveSpoke(null)}
                                >
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
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-white hover:text-primary"
                            >
                                <img src="/search-02.png" alt="Search" className="w-5 h-5 invert dark:invert-0" />
                            </button>
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
                        onClick={(e) => {
                            if (link.onClick) {
                                e.preventDefault();
                                link.onClick();
                            }
                            setIsOpen(false);
                        }}
                        className={`text-3xl font-bold text-white hover:text-primary transition-all transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}
