
import { type ServiceItem } from "../../data/servicesData";

interface ServiceItemCardProps {
  item: ServiceItem;
  isSelected: boolean;
  onToggle: (id: string) => void;
}

export default function ServiceItemCard({ item, isSelected, onToggle }: ServiceItemCardProps) {
  return (
    <div 
      className={`relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer flex flex-col h-full ${
        isSelected 
          ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-500 shadow-md' 
          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
      }`}
      onClick={() => onToggle(item.id)}
    >
      {/* Selection Checkbox */}
      <div className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
        isSelected 
          ? 'bg-blue-600 border-blue-600' 
          : 'border-gray-300 dark:border-gray-600'
      }`}>
        {isSelected && (
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        )}
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white pr-8 mb-2">
        {item.title}
      </h3>
      
      {item.price && (
        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
          {item.price}
        </p>
      )}

      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mt-auto whitespace-pre-line">
        {item.description}
      </p>
    </div>
  );
}
