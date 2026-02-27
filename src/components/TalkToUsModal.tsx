import React, { useState } from 'react';
import { toast } from 'sonner';
import { X } from 'lucide-react';

interface TalkToUsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TalkToUsModal({ isOpen, onClose }: TalkToUsModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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
        formData.append("subject", "Talk To Us - Query from Studio 1947 Website");
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
                className={`bg-white dark:bg-gray-900 rounded-3xl w-full max-w-lg p-8 relative shadow-2xl border border-gray-200 dark:border-gray-800 animate-in fade-in zoom-in duration-300 my-8 flex flex-col`}
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
                    <div className="flex flex-col items-center w-full py-8">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-600 dark:text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Thank You!</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-center">We have received your message and will get back to you shortly.</p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Talk to Us</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">Let's discuss how we can help you achieve your goals. Fill in your details below and we'll get in touch with you shortly.</p>

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
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
