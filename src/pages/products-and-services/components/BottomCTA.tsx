import React from "react";
import { Link } from "react-router-dom";

const BottomCTA: React.FC = () => {
  return (
    <div className="mt-24 md:mt-32 rounded-3xl p-8 md:p-16 bg-gray-900 text-center relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1557683316-973673baf926?w=2000&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
          Have a vision? Let's build it to spec!
        </h3>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          None of our existing products quite fit your problem? We design and build
          bespoke platforms from the ground up.
        </p>
        <Link
          to="/about"
          className="inline-block px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-full font-bold transition-colors shadow-lg"
        >
          Talk to our team
        </Link>
      </div>
    </div>
  );
};

export default BottomCTA;
