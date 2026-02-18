import VerticalCard from "./VerticalCard";

const VERTICALS = [
  {
    title: "Our Collaborations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    title: "Our Products",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    title: "Our Solutions",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
  {
    title: "Our Initiatives",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  },
];

export default function Verticals() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-24 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content centered */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
             ● Our Verticals
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            We Not Just Only Build Products
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
             We work on multiple verticals from entrepreneur to local artisans
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {VERTICALS.map((vertical, index) => (
            <VerticalCard key={index} {...vertical} />
          ))}
        </div>

      </div>
    </section>
  );
}
