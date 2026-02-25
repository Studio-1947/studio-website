import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';
import SearchModal from './SearchModal';

gsap.registerPlugin(ScrollTrigger);

interface DropdownItem {
    name: string;
    href: string;
    logo?: string;
}

interface NavLink {
    name: string;
    href: string;
    spokeIndex?: number;
    onClick?: () => void;
    dropdown?: DropdownItem[];
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeSpoke, setActiveSpoke] = useState<number | null>(null);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [expandedMobileLinks, setExpandedMobileLinks] = useState<string[]>([]);

    const containerRef = useRef<HTMLDivElement>(null);
    const leftPillRef = useRef<HTMLDivElement>(null);
    const rightPillRef = useRef<HTMLDivElement>(null);
    const navRef = useRef<HTMLElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

    const leftLinks: NavLink[] = [
        { name: 'About Us', href: '/about' },
        // Search is now handled separately
        { name: 'Blogs', href: '/blogs' },
    ];

    // Spoke Mapping: 2 (Right/3oclock), 1 (1:30), 0 (12:00), 7 (10:30) - Anti-clockwise
    const rightLinks: NavLink[] = [
        {
            name: 'Products',
            href: '#',
            spokeIndex: 2,
            dropdown: [
                { name: 'Doptor', href: '/products/doptor' },
                { name: 'Angan', href: '/products/angan' },
                { name: 'Data analysis dashboards', href: '/products/data-analysis' },
                { name: 'Social media dashboards', href: '/products/social-media' },
            ]
        },
        { name: 'Solutions', href: '/solutions', spokeIndex: 1 },
        {
            name: 'Collabs',
            href: '#',
            spokeIndex: 0,
            dropdown: [
                { name: 'Walking Project', href: '/collabs/walking-project', logo: '/collabs/walkingproject.png' },
                { name: 'Ai Crowd', href: '/collabs/ai-crowd', logo: '/collabs/aicrowd.png' },
                { name: 'Ecological Foundations', href: '/collabs/ecological-foundations', logo: '/collabs/ecologicalfoundation.png' },
            ]
        },
        {
            name: 'Initiative',
            href: '/initiative',
            spokeIndex: 7
        },
    ];

    const allLinks: NavLink[] = [
        ...leftLinks,
        { name: 'Search', href: '#', onClick: () => setIsSearchOpen(true) },
        ...rightLinks
    ];

    // Increased padding and adjusted max-width for "proper screen fill"
    const pillBaseClass = "flex items-center space-x-10 px-12 py-5 bg-gray-900/80 dark:bg-black/80 backdrop-blur-3xl border border-gray-200/10 dark:border-white/10 text-gray-100 transition-colors duration-300";

    const handleMouseEnter = (linkName: string, spokeIndex?: number) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHoveredLink(linkName);
        if (spokeIndex !== undefined) setActiveSpoke(spokeIndex);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredLink(null);
            setActiveSpoke(null);
        }, 300); // 300ms delay before hiding dropdown
    };

    const toggleMobileSubmenu = (name: string) => {
        setExpandedMobileLinks(prev =>
            prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
        );
    };

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
                        <Link
                            to="/"
                            className="mr-8 block group/logo"
                            onMouseEnter={() => setActiveSpoke(2)} // Default to 'Right' spoke on logo hover
                            onMouseLeave={() => setActiveSpoke(null)}
                        >
                            <Logo className="h-10 w-auto object-contain" activeSpoke={activeSpoke} />
                        </Link>
                        <div className="flex space-x-6 items-center">
                            {leftLinks.map((link) => (
                                <Link key={link.name} to={link.href} className="text-base font-medium hover:text-primary transition-colors">
                                    {link.name}
                                </Link>
                            ))}

                            {/* Search Button */}
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="text-base font-medium hover:text-primary transition-colors focus:outline-none flex items-center gap-2"
                                aria-label="Search"
                            >
                                <img src="/search-02.png" alt="Search" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" />
                                <span className="text-gray-500 text-sm hidden xl:inline-block font-sans"></span>
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
                                <div
                                    key={link.name}
                                    className="relative group"
                                    onMouseEnter={() => handleMouseEnter(link.name, link.spokeIndex)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {link.href === '#' ? (
                                        <div
                                            className={`text-base font-medium hover:text-primary transition-colors flex items-center gap-1 cursor-default ${hoveredLink === link.name ? 'text-primary' : ''}`}
                                        >
                                            {link.name}
                                            {link.dropdown && (
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-200 ${hoveredLink === link.name ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            to={link.href}
                                            className={`text-base font-medium hover:text-primary transition-colors flex items-center gap-1 ${hoveredLink === link.name ? 'text-primary' : ''}`}
                                        >
                                            {link.name}
                                            {link.dropdown && (
                                                <svg
                                                    className={`w-4 h-4 transition-transform duration-200 ${hoveredLink === link.name ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            )}
                                        </Link>
                                    )}

                                    {/* Desktop Dropdown */}
                                    {link.dropdown && (
                                        <div
                                            className={`absolute left-0 top-full pt-4 w-64 transition-all duration-300 transform origin-top ${hoveredLink === link.name ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
                                                }`}
                                        >
                                            <div className="bg-gray-900/95 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden shadow-xl p-2 flex flex-col gap-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        to={item.href}
                                                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                    >
                                                        {item.logo && (
                                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center p-1 shrink-0">
                                                                <img src={item.logo} alt="" className="w-full h-full object-contain filter drop-shadow-sm" />
                                                            </div>
                                                        )}
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pl-6 ml-6 border-l border-gray-700">
                                <ThemeToggle />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Nav Container - Wider */}
                    <div className="lg:hidden w-full flex justify-between items-center px-6 py-4 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-white/10 pointer-events-auto min-w-[92vw] mx-auto">
                        <Link to="/" className="block">
                            <Logo className="h-8 w-auto text-white" />
                        </Link>
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
                className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-3xl transition-all duration-500 lg:hidden flex flex-col ${isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'
                    }`}
            >
                <div className="flex flex-col items-center justify-center min-h-screen w-full p-8 space-y-6 overflow-y-auto">

                    {allLinks.map((link, index) => (
                        <div key={link.name} className="flex flex-col items-center w-full max-w-sm">
                            <div className="flex items-center justify-center w-full relative">
                                {link.href === '#' ? (
                                    <div
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                        onClick={(e) => {
                                            if (link.dropdown) {
                                                e.preventDefault();
                                                toggleMobileSubmenu(link.name);
                                            } else {
                                                if (link.onClick) {
                                                    e.preventDefault();
                                                    link.onClick();
                                                }
                                                setIsOpen(false);
                                            }
                                        }}
                                        className={`text-3xl font-bold text-white hover:text-primary transition-all transform cursor-pointer flex items-center gap-2 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <svg
                                                className={`w-6 h-6 transition-transform duration-300 ${expandedMobileLinks.includes(link.name) ? 'rotate-180' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        to={link.href}
                                        style={{ transitionDelay: `${index * 50}ms` }}
                                        onClick={(e) => {
                                            if (link.dropdown) {
                                                e.preventDefault();
                                                toggleMobileSubmenu(link.name);
                                            } else {
                                                if (link.onClick) {
                                                    e.preventDefault();
                                                    link.onClick();
                                                }
                                                setIsOpen(false);
                                            }
                                        }}
                                        className={`text-3xl font-bold text-white hover:text-primary transition-all transform cursor-pointer flex items-center gap-2 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <svg
                                                className={`w-6 h-6 transition-transform duration-300 ${expandedMobileLinks.includes(link.name) ? 'rotate-180' : ''}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        )}
                                    </Link>
                                )}
                            </div>

                            {/* Mobile Dropdown Items */}
                            {link.dropdown && (
                                <div
                                    className={`flex flex-col items-center space-y-4 w-full transition-all duration-300 overflow-hidden ${expandedMobileLinks.includes(link.name) ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                                        }`}
                                >
                                    {link.dropdown.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-xl font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-3"
                                        >
                                            {item.logo && (
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center p-1.5 shrink-0">
                                                    <img src={item.logo} alt="" className="w-full h-full object-contain filter drop-shadow-sm" />
                                                </div>
                                            )}
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
}

