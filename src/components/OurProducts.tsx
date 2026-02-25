const PRODUCTS = [
    {
        title: "Doptor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
    },
    {
        title: "Aangan",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
    },
   
];

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
                        we care about for everyone so we build product only for local enthusiasts.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {PRODUCTS.map((product, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group">

                            {/* Logo/Icon Placeholder */}
                            <div className="flex gap-2 mb-6 opacity-60">
                                <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600 rounded-sm"></div>
                                <div className="w-8 h-8 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-b-[32px] border-b-gray-400 dark:border-b-gray-600 border-r-[16px] border-r-transparent"></div>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                {product.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
                                {product.description}
                            </p>

                            {/* Large Image Placeholder */}
                            <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-2xl relative flex items-center justify-center overflow-hidden">
                                <div className="flex items-center gap-4 opacity-30">
                                    <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                                    <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[64px] border-b-gray-300 dark:border-b-gray-600 border-r-[32px] border-r-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
