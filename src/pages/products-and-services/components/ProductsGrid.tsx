import React from "react";
import { Link } from "react-router-dom";
import { productsGridData, productColorConfig } from "../../../data/productsData";

const ProductsGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {productsGridData.map((product) => {
        const colors = productColorConfig[product.accentColor];
        const bgObjectPosition =
          product.slug === "data-analysis" ? "center 38%" : "center";
        return (
          <Link
            key={product.slug}
            to={`/products-and-services/${product.slug}`}
            className="group relative rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white"
          >
            {/* Background image with focal framing so product device shots stay recognizable */}
            <img
              src={product.backgroundImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.18] group-hover:opacity-[0.24] transition-all duration-500 group-hover:scale-[1.03]"
              style={{ objectPosition: bgObjectPosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/78 via-white/66 to-white/52" />

            <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[280px]">
              <div className="flex items-start justify-between mb-auto">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${colors.badge}`}
                >
                  {product.category}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2 ${colors.iconBg}`}
                >
                  <svg
                    className={`w-4 h-4 ${colors.iconText}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
                  {product.name}
                </h2>
                <p className="text-gray-500 leading-relaxed">
                  {product.tagline}
                </p>
                <span
                  className={`inline-flex items-center gap-2 mt-6 text-sm font-bold ${colors.accentText}`}
                >
                  Explore Platform
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
