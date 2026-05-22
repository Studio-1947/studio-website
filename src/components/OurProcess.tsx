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
 <section className="bg-white py-24 lg:min-h-screen lg:flex lg:items-center border-b border-gray-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

 {/* Header */}
 <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
 <span className="inline-block py-1.5 px-4 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs lg:text-sm font-semibold tracking-widest uppercase mb-6">
 ● Our Process
 </span>
 <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-6">
 We Do More Than Just Build
 </h2>
 <p className="text-gray-500 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
 We build products with love & care so that you get the best of it
 </p>
 </div>

 {/* Grid Layout */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 {STEPS.map((step, index) => (
 <div key={index} className="bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 md:hover:shadow-xl transition-all duration-300 group">
 <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6 lg:mb-8 md:group-hover:bg-black transition-colors duration-300">
 <span className="text-xl lg:text-2xl font-bold text-gray-900 md:group-hover:text-white">{step.number}</span>
 </div>
 <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
 {step.title}
 </h3>
 <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
 {step.description}
 </p>
 </div>
 ))}
 </div>

 </div>
 </section>
 );
}
