import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TalkToUsModalProps {
 isOpen: boolean;
 onClose: () => void;
}

export default function TalkToUsModal({ isOpen, onClose }: TalkToUsModalProps) {
 const [form, setForm] = useState({ name: "", email: "", message: "" });
 const [submitted, setSubmitted] = useState(false);
 const nameRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
 if (isOpen) {
 setTimeout(() => nameRef.current?.focus(), 50);
 setForm({ name: "", email: "", message: "" });
 setSubmitted(false);
 }
 }, [isOpen]);

 useEffect(() => {
 const handleKeyDown = (e: KeyboardEvent) => {
 if (e.key === "Escape") onClose();
 };
 window.addEventListener("keydown", handleKeyDown);
 return () => window.removeEventListener("keydown", handleKeyDown);
 }, [onClose]);

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setSubmitted(true);
 };

 return (
 <AnimatePresence>
 {isOpen && (
 <>
 {/* Backdrop */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.2 }}
 className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
 onClick={onClose}
 />

                    {/* Modal */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="talk-modal-title"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2, type: "spring", damping: 25, stiffness: 300 }}
                            className="w-full max-w-lg pointer-events-auto"
                        >
                            <div className="bg-white dark:bg-[#121212] rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">

                                {/* Header */}
                                <div className="flex items-start justify-between p-8 pb-6">
                                    <div>
                                        <div className="w-8 h-1 bg-[#D60000] rounded-full mb-4" />
                                        <h2 id="talk-modal-title" className="text-2xl font-black text-gray-900 dark:text-white tracking-tight">
                                            Let's talk
                                        </h2>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                            Tell us what you're working on.
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                        aria-label="Close"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="px-8 pb-8">
                                    {submitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="py-8 text-center"
                                        >
                                            <div className="w-12 h-12 rounded-full bg-[#D60000]/10 flex items-center justify-center mx-auto mb-4">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4 10l4.5 4.5L16 6" stroke="#D60000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <p className="text-lg font-bold text-gray-900 dark:text-white">We'll be in touch.</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                Thanks for reaching out, {form.name.split(" ")[0]}.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="talk-name" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                                        Name
                                                    </label>
                                                    <input
                                                        id="talk-name"
                                                        ref={nameRef}
                                                        type="text"
                                                        required
                                                        value={form.name}
                                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                        placeholder="Your name"
                                                        className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D60000] focus:ring-1 focus:ring-[#D60000] transition-colors"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="talk-email" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                                        Email
                                                    </label>
                                                    <input
                                                        id="talk-email"
                                                        type="email"
                                                        required
                                                        value={form.email}
                                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                        placeholder="you@example.com"
                                                        className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D60000] focus:ring-1 focus:ring-[#D60000] transition-colors"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="talk-message" className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="talk-message"
                                                    required
                                                    rows={4}
                                                    value={form.message}
                                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                    placeholder="What are you working on?"
                                                    className="w-full px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#D60000] focus:ring-1 focus:ring-[#D60000] transition-colors resize-none"
                                                />
                                            </div>

 <button
 type="submit"
 className="w-full py-3 rounded-lg bg-[#D60000] text-white text-sm font-bold tracking-wide hover:bg-[#B80000] transition-colors duration-200"
 >
 Send Message
 </button>
 </form>
 )}
 </div>
 </div>
 </motion.div>
 </div>
 </>
 )}
 </AnimatePresence>
 );
}
