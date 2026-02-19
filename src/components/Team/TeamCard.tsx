import React from 'react';
import { Link } from 'react-router-dom';
import type { TeamMember } from '../../data/teamData';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <Link to={`/team/${member.slug}`} className="group block">
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="aspect-w-3 aspect-h-4 relative">
          <img 
            src={member.image} 
            alt={member.name}
            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
          
          {/* Overlay Text on Hover - Optional for extra style */}
          <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
             <span className="text-white text-xs font-bold tracking-widest uppercase bg-black/50 px-2 py-1 backdrop-blur-sm">View Profile</span>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 transition-colors">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
            {member.role}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TeamCard;
