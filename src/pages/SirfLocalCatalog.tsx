import { useState, useEffect, useMemo } from "react";
import { SERVICES_DATA, type ServiceItem } from "../data/servicesData";
import ServiceItemCard from "../components/SirfLocal/ServiceItemCard";
import CheckoutModal from "../components/SirfLocal/CheckoutModal";

export default function SirfLocal() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("selectedServices");
    if (saved) {
      try {
        setSelectedIds(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved selections", e);
      }
    }
  }, []);

  // Save to local storage whenever selection changes
  useEffect(() => {
    localStorage.setItem("selectedServices", JSON.stringify(selectedIds));
  }, [selectedIds]);

  const toggleSelection = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const selectedItems = useMemo(() => {
    return SERVICES_DATA.filter(item => selectedIds.includes(item.id));
  }, [selectedIds]);

  // Group services by category
  const categories = useMemo(() => {
    const groups: Record<string, ServiceItem[]> = {};
    SERVICES_DATA.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      // Filter by search query if exists
      if (!searchQuery || item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
        groups[item.category].push(item);
      }
    });
    return groups;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white pb-32">
      
      {/* Exclusive Banner */}
      <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-white text-center py-2 text-sm font-bold uppercase tracking-widest shadow-md z-40 relative">
        ✨ SirfLocal Exclusive Catalogue ✨
      </div>

      {/* Header */}
      {/* <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md">S</div>
              <div>
                <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
                  SirfLocal <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">CATALOGUE</span>
                </h1>
              </div>
           </div>
           
           <div className="hidden md:flex items-center gap-4 text-sm">
             <span className="text-yellow-600 dark:text-yellow-500 font-medium flex items-center gap-1">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               Premium Selection
             </span>
             <span className="text-gray-300">|</span>
             <span className="text-gray-500">Build your perfect package</span>
           </div>
        </div>
      </header> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
           <h2 className="text-4xl font-extrabold mb-4">Select Your Services</h2>
           <p className="text-gray-500 dark:text-gray-400 text-lg">
             Choose from our comprehensive range of services to build a custom solution for your business.
           </p>
           
           {/* Search */}
           <div className="mt-8 relative max-w-md mx-auto">
             <input 
               type="text" 
               placeholder="Search services..." 
               className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm transition-all"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
             <svg className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {Object.entries(categories).map(([category, items]) => (
            items.length > 0 && (
              <section key={category}>
                <h3 className="text-2xl font-bold mb-6 pl-2 border-l-4 border-blue-600">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map(item => (
                    <ServiceItemCard 
                      key={item.id} 
                      item={item} 
                      isSelected={selectedIds.includes(item.id)} 
                      onToggle={toggleSelection} 
                    />
                  ))}
                </div>
              </section>
            )
          ))}
        </div>

      </main>

      {/* Floating Checkout Bar */}
      {selectedIds.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 p-4 transition-transform duration-500 animate-slide-up">
           <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex flex-col">
                 <span className="text-sm text-gray-500 dark:text-gray-400">Selected Items</span>
                 <span className="text-2xl font-bold text-gray-900 dark:text-white">{selectedIds.length} <span className="text-base font-normal text-gray-500">services</span></span>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                Proceed to Checkout
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
           </div>
        </div>
      )}

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedItems={selectedItems} 
      />

    </div>
  );
}
