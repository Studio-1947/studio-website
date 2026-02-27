import React, { useState } from 'react';
import { toast } from 'sonner';
import { X } from 'lucide-react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [] = useState(false);

    const handleClose = () => {
        onClose();
        setTimeout(() => setIsSuccess(false), 300);
    };


    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // Add required Web3Forms parameters
        formData.append("access_key", "ca0477c5-5671-437a-81b4-f297223a50d6");
        formData.append("subject", "New Contact from Studio 1947 Website");
        // Prevent default redirect
        formData.append("redirect", "false");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Message sent successfully!");
                setIsSuccess(true);
            } else {
                toast.error(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please check your connection and try again.");
            console.error("Web3Forms submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
            <div
                className={`bg-white dark:bg-gray-900 rounded-3xl w-full ${isSuccess ? 'max-w-5xl' : 'max-w-lg'} p-8 relative shadow-2xl border border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in duration-300 my-8 flex flex-col`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    aria-label="Close modal"
                >
                    <X className="w-6 h-6" />
                </button>

                {isSuccess ? (
                    <div className="flex flex-col items-center w-full">
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center mt-4">Thank You!</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">As promised, here is our presentation deck.(If you're in mobile please rotate your device to view the deck properly)</p>

                        <div className="w-full aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 mb-6 bg-gray-50 dark:bg-gray-950">
                            <iframe
                                style={{ border: "none" }}
                                width="100%"
                                height="100%"
                                src="https://embed.figma.com/deck/CPX3J2InN1Pa2WBGnAZXkJ/S1947_Pitch-Deck-2026?node-id=6001-29&viewport=-18567%2C-80%2C0.66&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 flex items-center justify-between gap-4 w-full max-w-sm">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mb-1">Presentation Password</span>
                                <span className="font-mono text-2xl font-bold tracking-widest text-gray-900 dark:text-white">1947</span>
                            </div>
                            <button
                                onClick={copyPassword}
                                className="p-3 rounded-xl bg-white dark:bg-gray-700 shadow-sm hover:scale-105 transition-all active:scale-95 text-gray-700 dark:text-white flex items-center justify-center"
                                aria-label="Copy password"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                            </button>
                        </div> */}
                    </div>
                ) : (
                    <>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Let's View Our Pitch Deck</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">Fill in your basic details, We collect only essential information for communication hygiene, and your details remain confidential.</p>

                        <div className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-3 rounded-xl mb-8 flex items-start sm:items-center gap-3 shadow-sm">
                            <div className="bg-white dark:bg-black p-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 shrink-0">
                                <span className="text-xl leading-none block flex items-center justify-center">✨</span>
                            </div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                <strong className="text-gray-900 dark:text-white">Bonus:</strong> Submit this form to get instant access to our exclusive <strong className="text-gray-900 dark:text-white">Pitch Deck presentation</strong>!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot Spam Protection */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="Your Name *"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone_number"
                                    id="number"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="Phone Number *"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                    placeholder="Email Address *"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}

                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-y"
                                    placeholder="Your Message "
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 px-6 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </div>
                                ) : (
                                    "View Now :)"
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
