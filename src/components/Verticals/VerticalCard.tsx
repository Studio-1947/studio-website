
interface VerticalCardProps {
  title: string;
  description: string;
}

export default function VerticalCard({ title, description }: VerticalCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6  flex flex-col gap-4 text-left group hover:-translate-y-1 transition-transform duration-300">
      {/* Placeholder Image */}
      <div className="w-full aspect-square bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center relative overflow-hidden mb-2">
         {/* Abstract geometric shapes */}
         <div className="absolute w-16 h-16 bg-gray-200 dark:bg-gray-600 left-8 top-1/2 -translate-y-1/2"></div>
         <div className="absolute w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-overlay"></div>
         <div className="absolute w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-l-transparent border-r-transparent border-b-gray-200 dark:border-b-gray-600 right-8 top-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-overlay"></div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
