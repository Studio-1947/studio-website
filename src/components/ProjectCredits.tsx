import React from 'react';
import { Link } from 'react-router-dom';

const nameToSlug: Record<string, string> = {
  "Anjali": "anjali-chetri",
  "Anjali Chetri": "anjali-chetri",
  "Ankita": "ankita-chettri",
  "Ankita Chettri": "ankita-chettri",
  "Nikhil Rai": "nikhil-rai",
  "Nikhil Raj": "nikhil-raj-subba",
  "Nikhil Subba": "nikhil-raj-subba",
  "Nikhil Raj Subba": "nikhil-raj-subba",
  "Pinaki": "pinaki-roy",
  "Pinaki Roy": "pinaki-roy",
  "Rabi": "rabiul-islam",
  "Rabiul Islam": "rabiul-islam",
  "Rahul": "rahul-chettri",
  "Rahul Chettri": "rahul-chettri",
  "Sankhadipta": "sankhadipta-bose",
  "Sankha": "sankhadipta-bose",
  "Sankhadipta Bose": "sankhadipta-bose",
  "Santam": "santam-kumai",
  "Santam Kumai": "santam-kumai",
  "Subhayu": "subhayu-bhattacharjee",
  "Subhayu Bhattacharjee": "subhayu-bhattacharjee",
  "Soumajit": "soumajit-das",
  "Somu": "soumajit-das",
  "Soumajit Das": "soumajit-das",
  "Soumic": "soumic-sarkar",
  "Soumic Sarkar": "soumic-sarkar",
  "Subhendu": "subhendu-kundu",
  "Subhendu Kundu": "subhendu-kundu"
};

export interface ProjectRole {
  role: string;
  members: string;
}

export interface ProjectCreditsProps {
  client: string;
  roles: ProjectRole[];
  accentColor?: string;
  light?: boolean;
}

export default function ProjectCredits({ client, roles, accentColor = "#1A1A1A", light = false }: ProjectCreditsProps) {
  return (
    <section className={`py-12 md:py-16 border-t ${light ? 'border-white/10' : 'border-gray-100'} mt-12`}>
      <div className="grid md:grid-cols-4 gap-12 md:gap-8">
        <div className="md:col-span-1">
          <h3 className={`text-[10px] font-black tracking-[0.2em] uppercase mb-4 ${light ? 'text-white/40' : 'text-gray-400'}`}>
            Client
          </h3>
          <p className={`text-xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>{client}</p>
        </div>
        
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {roles.map((r, i) => (
              <div key={i}>
                <h4 
                  className="text-[10px] font-black tracking-[0.2em] uppercase mb-3" 
                  style={{ color: accentColor }}
                >
                  {r.role}
                </h4>
                <p className={`text-sm font-medium leading-relaxed ${light ? 'text-white/80' : 'text-gray-700'}`}>
                  {r.members.split(",").map((name, index, arr) => {
                    const trimmedName = name.trim();
                    const baseName = trimmedName.split("(")[0].trim();
                    const slug = nameToSlug[baseName];
                    const isLast = index === arr.length - 1;
                    
                    const content = slug ? (
                      <Link 
                        to={`/team/${slug}`}
                        className="hover:underline transition-colors duration-200"
                        style={{ textDecorationColor: accentColor }}
                        title={`View profile`}
                      >
                        {trimmedName}
                      </Link>
                    ) : (
                      <span>{trimmedName}</span>
                    );

                    return (
                      <React.Fragment key={index}>
                        {content}
                        {!isLast && ", "}
                      </React.Fragment>
                    );
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
