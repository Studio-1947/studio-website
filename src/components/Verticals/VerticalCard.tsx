import { Link } from 'react-router-dom';

interface VerticalCardProps {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export default function VerticalCard({ title, description, href, linkText }: VerticalCardProps) {
  const content = (
    <>
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
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {href && linkText && (
        <div className="mt-auto pt-2 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
          {linkText}
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      )}
    </>
  );

  const cardClasses = "bg-white dark:bg-gray-800 rounded-2xl p-6 h-full flex flex-col gap-4 text-left group hover:-translate-y-1 hover:shadow-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300";

  return href ? (
    <Link to={href} className={cardClasses}>
      {content}
    </Link>
  ) : (
    <div className={cardClasses}>
      {content}
    </div>
  );
}
