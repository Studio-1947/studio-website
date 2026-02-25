import { useRef } from 'react';

const PROJECTS = [
    {
        client: "Client Name",
        category: "Branding",
        date: "Data Of Completion",
        color: "bg-gray-100 dark:bg-gray-800"
    },
    {
        client: "Client Name",
        category: "Branding",
        date: "Data Of Completion",
        color: "bg-gray-100 dark:bg-gray-800"
    },
    {
        client: "Client Name",
        category: "Branding",
        date: "Data Of Completion",
        color: "bg-gray-100 dark:bg-gray-800"
    }
];

export default function BuiltForImpact() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section ref={containerRef} className="bg-white dark:bg-black py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Sticky Left Content */}
                    <div className="w-full lg:w-1/3 lg:h-screen lg:sticky lg:top-24 flex flex-col justify-start">
                        <span className="inline-block py-1 px-3 w-fit rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                            ● Projects
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Built For Impact
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-10">
                            As a transparent agency we always want our clients to know how we work?, what we do? & how we do?
                        </p>

                        <button className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium w-fit hover:opacity-80 transition-opacity">
                            All Projects
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Scrollable Right Content */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-8 lg:gap-12">
                        {PROJECTS.map((project, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                {/* Large Image Area */}
                                <div className={`aspect-[4/3] w-full ${project.color} rounded-2xl relative overflow-hidden group flex items-center justify-center`}>
                                    <div className="flex items-center justify-center gap-4 opacity-30">
                                        <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                                        <div className="w-24 h-24 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                        <div className="w-0 h-0 border-l-[48px] border-l-transparent border-b-[96px] border-b-gray-300 dark:border-b-gray-600 border-r-[48px] border-r-transparent"></div>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="flex justify-between items-center text-sm md:text-base">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-gray-900 dark:text-white">{project.client}</span>
                                        <span className="text-gray-400 dark:text-gray-500">{project.category}</span>
                                    </div>
                                    <span className="text-gray-400 dark:text-gray-500 text-xs md:text-sm uppercase tracking-wide">
                                        {project.date}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
