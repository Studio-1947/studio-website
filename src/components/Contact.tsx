import { ArrowRight, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Contact() {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    return (
        <section className="bg-white dark:bg-gray-900 py-32 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center text-center">

                    <p className="text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase mb-8">
                        Got a project in mind?
                    </p>

                    <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
                        Let's make something <br className="hidden md:block" />
                        <span className="text-gray-400">great together.</span>
                    </h2>

                    <div className="mt-16 group">
                        <button
                            onClick={() => setIsContactModalOpen(true)}
                            className="inline-flex items-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform text-lg font-medium"
                        >
                            Start a Project
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>

                    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 text-left md:text-center w-full max-w-4xl border-t border-gray-100 dark:border-gray-800 pt-12">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Email</h4>
                            <p className="text-gray-500 dark:text-gray-400">hello@studio1947.io</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Phone</h4>
                            <p className="text-gray-500 dark:text-gray-400">+917207680813</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Studio</h4>
                            <p className="text-gray-500 dark:text-gray-400">Mirik, Darjeeling</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Socials</h4>
                            <div className="flex gap-4 md:justify-center">
                                <a
                                    href="https://www.instagram.com/1947.io/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.facebook.com/1947.io/?ref=PROFILE_EDIT_xav_ig_profile_page_web#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/studio1947/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
            <ContactModal 
                isOpen={isContactModalOpen} 
                onClose={() => setIsContactModalOpen(false)} 
            />
        </section>
    );
}
