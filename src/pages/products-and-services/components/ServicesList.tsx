import React from "react";
import { solutionsData } from "../../../data/solutionsData";

const ServicesList: React.FC = () => {
  return (
    <div id="services" className="mt-24 md:mt-32 pt-24 border-t border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32">
            <span className="text-royal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
              Essential Services
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              Ready-to-deploy digital muscle.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Everything a local business needs to look premium and operate smoothly in the digital world.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col">
          {solutionsData.map((service, index) => (
            <div
              key={service.title}
              className={`group relative py-12 flex flex-col md:flex-row md:items-start gap-8 transition-all duration-500 ${
                index !== 0 ? "border-t border-gray-200" : ""
              }`}
            >
              <div className="flex-shrink-0 w-16 h-16 border border-gray-200 bg-white flex items-center justify-center text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 group-hover:text-gray-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
