import React from "react";

const ProductsHeader: React.FC = () => {
  return (
    <div className="max-w-3xl mb-20 md:mb-28">
      <span className="text-royal-600 font-semibold tracking-wider uppercase text-sm mb-4 block">
        Our Products & Services
      </span>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight mb-6">
        Solutions built for
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-600 to-indigo-600">
          real growth.
        </span>
      </h1>
      <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
        From bespoke software products built from the inside out, to essential digital 
        services that get your business noticed—we provide the tools you need to scale 
        elegantly without unnecessary complexity.
      </p>
    </div>
  );
};

export default ProductsHeader;
