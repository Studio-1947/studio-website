import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { TeamMember } from '../../data/teamData';

interface TeamCardProps {
  member: TeamMember;
}

const XIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl bg-gray-900">

      {/* Skeleton */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-black transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Photo */}
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Dark gradient to ensure panel is always readable */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

      {/* Frosted glass panel */}
      <div className="absolute bottom-3 left-3 right-3 rounded-2xl backdrop-blur-md bg-black/30 border border-white/15 p-4">

        {/* Name + arrow */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
            {member.name}
          </h3>
          <Link
            to={`/team/${member.slug}`}
            className="flex-shrink-0 text-white/70 hover:text-white transition-colors"
            aria-label={`View ${member.name}'s profile`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>

        {/* Role */}
        <p className="text-xs sm:text-sm font-bold text-white/90 mb-1.5">
          {member.role}
        </p>

        {/* Bio snippet */}
        <p className="text-xs text-white/65 line-clamp-2 leading-relaxed mb-3">
          {member.bio}
        </p>

        {/* Socials */}
        {(member.socials?.twitter || member.socials?.linkedin || member.socials?.website) && (
          <div className="flex items-center gap-3">
            {member.socials?.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-white transition-colors"
                aria-label="Twitter / X"
              >
                <XIcon />
              </a>
            )}
            {member.socials?.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            )}
            {member.socials?.website && (
              <a
                href={member.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 hover:text-white transition-colors"
                aria-label="Website"
              >
                <GlobeIcon />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
