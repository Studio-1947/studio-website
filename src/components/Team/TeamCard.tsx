import React from 'react';
import { Link } from 'react-router-dom';
import type { TeamMember } from '../../data/teamData';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Link to={`/team/${member.slug}`} className="group block w-full h-full">
      <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl cursor-pointer bg-gray-900 border border-transparent dark:border-gray-800 transform-gpu translate-z-0">
        
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img 
            src={member.image} 
            alt={member.name}
            loading="lazy"
            decoding="async"
            style={{ willChange: 'transform' }}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 transform-gpu origin-center"
          />
          {/* Base gradient for readability always */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 pointer-events-none"></div>
          {/* Extra dark gradient that fades in on hover for the bio text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ willChange: 'opacity' }}></div>
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end z-10 text-left pointer-events-none">
          
          {/* Default Content (Moves up on hover) */}
          <div className="transition-transform duration-500 ease-out group-hover:-translate-y-[5.5rem] flex flex-col items-start gap-2 transform-gpu" style={{ willChange: 'transform' }}>
            <span className="inline-block px-3 py-1 text-[9px] font-bold tracking-widest uppercase text-white bg-black/40 rounded-full border border-white/20 shadow-sm transition-colors group-hover:bg-white/20">
              {member.role}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight drop-shadow-md leading-tight m-0">
              {member.name}
            </h3>
          </div>

          {/* Hidden Bio & Button (Fades in and slides up on hover) */}
          <div className="absolute bottom-5 left-5 right-5 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75 transform-gpu" style={{ willChange: 'opacity, transform' }}>
            <p className="text-xs text-gray-200 line-clamp-2 mb-4 leading-relaxed font-medium text-left">
              {member.bio}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-white text-xs font-bold tracking-widest uppercase relative after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-white group-hover:after:w-full after:transition-all after:duration-500 after:delay-200">
                View Profile
              </span>
              <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:-rotate-45 transform-gpu">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
