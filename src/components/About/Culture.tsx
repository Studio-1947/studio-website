import React from 'react';

const cultureValues = [
  {
    title: 'Co-Creation',
    description: 'Isolation kills creativity. We bring diverse perspectives together to build solutions that are honest, inclusive, and enduring.',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop', // Hands holding/teamwork
  },
  {
    title: 'Dignity of Labour',
    description: 'No role is too small. We honor the craft and the human behind it, making respect the non-negotiable baseline of our work.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', // Team working together
  },
  {
    title: 'Work-Life Balance',
    description: 'Burnout builds nothing. We work a strict 5-day week and fully disconnect from Dec 20 to Jan 5. Rest fuels our creativity.',
    image: 'https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?q=80&w=800&auto=format&fit=crop', // Outdoors, relaxing, away from computer
  },
];

const Culture: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section: Left Title, Right Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-end mb-16 lg:mb-20">
          <div>
            <span className="block text-gray-400 dark:text-gray-500 font-medium text-lg mb-4">
              Our Culture
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
              At the heart of our work are three core values
            </h2>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed font-light">
              Our diverse team of strategists and creators crafts tailored solutions to elevate your online presence. We don't just deliver results; we nurture an environment where strategy meets humanity.
            </p>
          </div>
        </div>

        {/* 3-Column Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cultureValues.map((value, index) => (
            <div 
              key={index}
              className="group relative h-[400px] sm:h-[450px] w-full overflow-hidden bg-gray-900 flex flex-col justify-end"
            >
              {/* Background Image */}
              <img 
                src={value.image} 
                alt={value.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Text Content */}
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-sm">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Culture;
