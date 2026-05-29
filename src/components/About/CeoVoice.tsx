import React from 'react';

const CeoVoice: React.FC = () => {
 return (
 <section className="bg-gray-50 py-24 sm:py-32 transition-colors duration-300">
 <div className="mx-auto max-w-7xl px-6 lg:px-8">
 <div className="mx-auto max-w-3xl text-center">

 {/* Quote Icon or Decorative Element */}
 <div className="mb-8 flex justify-center">
 <svg
 className="h-12 w-12 text-royal-600 opacity-50"
 fill="currentColor"
 viewBox="0 0 32 32"
 >
 <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
 </svg>
 </div>

 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
 A Word from Our CEO
 </h2>

 <div className="text-xl leading-relaxed text-gray-600 mb-12 relative z-10 space-y-5 text-center max-w-2xl mx-auto">
 <p>
 Inspired by free thought, Studio 1947 echoes the spirit of voices history left in the margins. Grounded in resilience, we weave together tradition and technology to shape futures led by people, not systems.
 </p>
 <p>
 We value wisdom that exists beyond privilege, bringing unseen perspectives into the light. We create fair, human-centered impact, because true progress begins when every voice has the power to shape what comes next.
 </p>
 </div>

 <div className="mt-8 flex flex-col items-center justify-center gap-y-4">
 {/* Signature Placeholder - Adjust text color/font as desired to mimic a signature, or replace with an img tag later */}
 <div className="mb-2">
 {/* This creates a space for a signature. User can replace the 'font-serif italic' text with an actual image file later. */}
 <img
 src="/aboutus/signature.svg"
 alt="Rabi . रबि . রবি"
 className="h-12 w-auto opacity-80 select-none block transform -rotate-2"
 />
 </div>

 <div className="text-base font-semibold text-gray-900">
 Rabi . रबि . রবি
 </div>
 <div className="text-sm text-gray-500 font-medium">
 Founder & CEO
 </div>
 </div>

 </div>
 </div>
 </section>
 );
};

export default CeoVoice;
