import { useState } from "react";
import { type ServiceItem } from "../../data/servicesData";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: ServiceItem[];
  totalPrice?: string; // Calculated total if possible, otherwise mostly 'Custom'
}

export default function CheckoutModal({ isOpen, onClose, selectedItems }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission (e.g., API call, email, or WhatsApp redirection)
    console.log("Form Submitted:", { ...formData, selectedServices: selectedItems.map(i => i.title) });
    alert("Thank you! We will get back to you shortly.");
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get Started</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Form Section */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Your Details</h3>
              <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Project Details (Optional)</label>
                  <textarea 
                    name="details" 
                    rows={3} 
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    value={formData.details}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Summary</h3>
              <div className="space-y-3 mb-6 max-h-60 overflow-y-auto pr-2">
                {selectedItems.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-900 dark:text-white font-medium">{item.title}</span>
                    <span className="text-gray-500 dark:text-gray-400 tabular-nums">{item.price}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-auto">
                <div className="flex justify-between items-center text-lg font-bold text-gray-900 dark:text-white">
                  <span>Selected</span>
                  <span>{selectedItems.length} items</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            form="checkout-form"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-bold shadow-lg shadow-blue-500/30 transition-all hover:translate-y-0.5"
          >
            Submit Request
          </button>
        </div>

      </div>
    </div>
  );
}
