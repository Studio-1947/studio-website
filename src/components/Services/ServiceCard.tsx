import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  bgImage?: string;
  icon?: ReactNode;
  iconBg?: string;
  iconColor?: string;
}

export default function ServiceCard({ title, description, bgImage, icon, iconBg, iconColor }: ServiceCardProps) {
  return (
    <div className="min-w-[300px] md:min-w-[350px] lg:min-w-[calc((100%-3rem)/3)] lg:w-[calc((100%-3rem)/3)] bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-lg flex flex-col gap-4 snap-start group hover:border-blue-500/50 transition-colors duration-300">
      
      {icon && (
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBg || 'bg-gray-200'} ${iconColor || 'text-gray-900'} mb-2`}>
           {icon}
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
      
      {bgImage ? (
        <div className="mt-4 w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
          <img src={bgImage} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      ) : (
        <div className="mt-4 w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-12 h-12 bg-gray-300 dark:bg-gray-600 left-8 top-1/2 -translate-y-1/2"></div>
          <div className="absolute w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute w-0 h-0 border-l-[25px] border-r-[25px] border-b-[50px] border-l-transparent border-r-transparent border-b-gray-300 dark:border-b-gray-600 right-8 top-1/2 -translate-y-1/2"></div>
        </div>
      )}
       
       <Link to="/solutions" className="mt-auto pt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
          Learn More 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
       </Link>
    </div>
  );
}
