import { Link } from 'react-router-dom';
import { productsGridData, productColorConfig } from '../data/productsData';

export default function OurProducts() {
  return (
    <section className="bg-white dark:bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-5">
              Our Products
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
              Software we build<br />for real problems.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors shrink-0"
          >
            See all products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {productsGridData.map((product) => {
            const colors = productColorConfig[product.accentColor];
            return (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group relative rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-xl transition-all duration-400 hover:-translate-y-1 bg-white dark:bg-gray-900 min-h-[220px] flex flex-col"
              >
                {/* Subtle background image */}
                <div
                  className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05] group-hover:opacity-[0.12] dark:group-hover:opacity-[0.08] transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${product.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90 dark:from-gray-900/70 dark:to-gray-900/90" />

                <div className="relative z-10 p-6 flex flex-col flex-1">
                  <span className={`self-start inline-block px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-auto ${colors.badge}`}>
                    {product.category}
                  </span>
                  <div className="mt-8">
                    <h3 className="text-xl font-black text-gray-900 dark:text-white leading-tight mb-2">
                      {product.name}
                    </h3>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${colors.accentText} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      Learn more
                      <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
