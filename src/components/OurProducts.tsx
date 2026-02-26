export default function OurProducts() {
    return (
        <section className="bg-white dark:bg-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                        ● Our Products
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        We Also Build Our Own In-House Products
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        We care about solving real problems, so we build products tailored for our community.
                    </p>
                </div>

                {/* Coming Soon Section */}
                <div className="flex items-center justify-center w-full py-16">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-12 text-center border border-gray-100 dark:border-gray-800 w-full max-w-2xl shadow-sm">
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 bg-black dark:bg-white rounded-full flex items-center justify-center animate-pulse">
                                <svg className="w-8 h-8 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Brewing Something Special
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-0">
                            Our team is currently working hard behind the scenes to launch some incredibly exciting new products. Stay tuned!
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
