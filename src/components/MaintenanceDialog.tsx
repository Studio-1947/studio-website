import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MaintenanceDialogProps {
    isOpen: boolean;
    onReturnHome: () => void;
}

export default function MaintenanceDialog({ isOpen, onReturnHome }: MaintenanceDialogProps) {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Fallback for keyboard navigation
            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onReturnHome();
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => {
                document.body.style.overflow = '';
                window.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [isOpen, onReturnHome]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black">
                    {/* Animated Background Gradients & Noise */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 pointer-events-none overflow-hidden"
                    >
                        {/* Dark background base */}
                        <div className="absolute inset-0 bg-gray-950" />

                        {/* Accent colored glowing orbs (avoiding purple, using a dynamic neon/brand green or red) */}
                        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-rose-600/20 rounded-full blur-[120px] mix-blend-screen mix-blend-lighten" />
                        <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-amber-500/10 rounded-full blur-[100px] mix-blend-screen mix-blend-lighten" />

                        {/* Grain Texture (Brutalist element) */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />
                    </motion.div>

                    {/* Modal Content - Brutalist Typographic focus */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        // Sharp geometry: 0px or 2px border radius
                        className="relative w-full max-w-4xl bg-gray-900 border-t-2 border-l-2 border-r-2 border-b-8 border-white p-8 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center overflow-hidden"
                    >
                        {/* Constructivist/Brutalist decorative elements */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-rose-500 -translate-x-1 -translate-y-1" />
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-rose-500 translate-x-1 -translate-y-1" />

                        <div className="relative z-10 w-full flex flex-col items-center justify-center max-w-2xl mx-auto space-y-8">

                            {/* Massive Typographic Header */}
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                                    className="inline-flex items-center justify-center w-20 h-20 mb-4 bg-white text-black font-black text-3xl shrink-0"
                                >
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                </motion.div>

                                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                                    Site Under <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Maintenance</span>
                                </h1>
                            </div>

                            <div className="w-24 h-1 bg-white" />

                            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium max-w-xl mx-auto tracking-tight">
                                Our team is currently upgrading the studio. We will be back online shortly. <br /><span className="text-white mt-2 block">Only the home page is accessible at this time.</span>
                            </p>

                            {/* Action Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onReturnHome}
                                className="group relative mt-8 px-8 py-4 bg-white text-black font-bold text-lg uppercase tracking-wider overflow-hidden transition-all flex items-center gap-3"
                            >
                                <span className="relative z-10">Return to Operations</span>
                                <svg className="w-5 h-5 relative z-10 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <div className="absolute inset-0 bg-rose-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                            </motion.button>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
