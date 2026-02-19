const INFO_CARDS = [
    {
        title: "We Do Branding From Scratch",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
    },
    {
        title: "We Always Create Design System for Expansion",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
    },
    {
        title: "Your Data Are Secured to Us",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
    },
    {
        title: "We Support Any Type of Transactions",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus."
    }
];

export default function ThingsYouNeedToKnow() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
                        ● What We Do?
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Things You Need to Know
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                        As a transparent agency we always want our clients to know how we work?, what we do? & how we do?
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {INFO_CARDS.map((card, index) => (
                        <div key={index} className="bg-white dark:bg-black p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {card.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
                                {card.description}
                            </p>
                            {/* Image Placeholder */}
                            <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-xl relative flex items-center justify-center overflow-hidden">
                                <div className="flex items-center gap-4 opacity-50">
                                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-sm"></div>
                                    <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                                    <div className="w-0 h-0 border-l-[24px] border-l-transparent border-b-[48px] border-b-gray-300 dark:border-b-gray-700 border-r-[24px] border-r-transparent"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
