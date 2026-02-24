import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamData } from '../data/teamData';
import Layout from '../components/Layout'; // Assuming Layout is in components

const TeamMember: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const member = teamData.find(m => m.slug === slug);

  if (!member) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Team member not found.</p>
            <Link to="/" className="text-amber-600 hover:text-amber-500 font-medium">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-white dark:bg-gray-900 py-24">
         {/* Back Link */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-amber-600 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Team
            </Link>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
             
             {/* Image Column */}
             <div className="lg:col-span-5 relative">
               <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-2xl">
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover"
                 />
               </div>
               {/* Decorative Element */}
               <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-amber-600/30 rounded-xl hidden lg:block"></div>
             </div>

             {/* Content Column */}
             <div className="lg:col-span-7 space-y-8">
               <div>
                   <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
                     {member.name}
                   </h1>
                   <p className="text-2xl text-amber-600 font-medium">
                     {member.role}
                   </p>
                   
                   {/* Location and Hobbies */}
                   <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                     {member.location && (
                       <div className="flex items-center gap-2">
                         <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                         </svg>
                         {member.location}
                       </div>
                     )}
                     {member.hobbies && (
                       <div className="flex items-center gap-2">
                         <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                         </svg>
                         {member.hobbies}
                       </div>
                     )}
                   </div>
               </div>

               <div className="prose prose-lg dark:prose-invert max-w-none">
                 {member.bio.split('\n\n').map((paragraph, idx) => (
                   <p key={idx} className={idx === 0 ? "lead text-xl text-gray-500 dark:text-gray-300" : ""}>
                     {paragraph}
                   </p>
                 ))}
               </div>

               <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    {/* Social Placeholders */}
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-600 hover:text-white transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-amber-600 hover:text-white transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </button>
                  </div>
               </div>
             </div>
           </div>
         </div>
      </div>
    </Layout>
  );
};

export default TeamMember;
