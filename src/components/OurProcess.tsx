const STEPS = [
    {
        number: "01",
        title: "Discovery",
        description: "We dive deep into your brand, market, and audience to uncover key insights and define clear, actionable project objectives."
    },
    {
        number: "02",
        title: "Strategy",
        description: "We craft a comprehensive roadmap that aligns your business goals with user needs, establishing a strong foundation for success."
    },
    {
        number: "03",
        title: "Design",
        description: "Our creative team translates strategy into intuitive, visually stunning interfaces that engage users and elevate your brand identity."
    },
    {
        number: "04",
        title: "Development",
        description: "We bring designs to life using cutting-edge technologies, building robust, scalable, and high-performing digital solutions."
    },
    {
        number: "05",
        title: "Testing",
        description: "Rigorous quality assurance ensures every feature works flawlessly across all devices and platforms before we push it live."
    },
    {
        number: "06",
        title: "Launch",
        description: "We seamlessly deploy your product to the world, providing ongoing support and optimization to guarantee long-term impact."
    }
];

export default function OurProcess() {
    return (
        <section className="bg-white dark:bg-gray-900 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                        ● Our Process
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        We Do More Than Just Build
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg">
                        We build products with love & care so that you get the best of it
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {STEPS.map((step, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-black group-hover:dark:bg-white group-hover:text-white group-hover:dark:text-black transition-colors duration-300">
                                <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white group-hover:dark:text-black">{step.number}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
