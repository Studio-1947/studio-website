import { ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <section className="bg-white dark:bg-black py-32 border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center text-center">

                    <p className="text-sm md:text-base text-gray-400 font-medium tracking-widest uppercase mb-8">
                        Got a project in mind?
                    </p>

                    <h2 className="text-5xl md:text-8xl font-bold tracking-tight text-gray-900 dark:text-white mb-12">
                        Let's make something <br className="hidden md:block" />
                        <span className="text-gray-400">great together.</span>
                    </h2>

                    {/* Email Input */}
                    <div className="w-full max-w-md mt-16 group">
                        <div className="relative flex items-center">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all pl-6 pr-16"
                            />
                            <button
                                className="absolute right-2 p-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-transform"
                                aria-label="Submit email"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 text-left md:text-center w-full max-w-4xl border-t border-gray-100 dark:border-gray-800 pt-12">
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Email</h4>
                            <p className="text-gray-500 dark:text-gray-400">hello@studio1947.io</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Phone</h4>
                            <p className="text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Studio</h4>
                            <p className="text-gray-500 dark:text-gray-400">Washington, DC</p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-2">Socials</h4>
                            <div className="flex gap-4 md:justify-center">
                                <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">Li</a>
                                <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">Tw</a>
                                <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">In</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
