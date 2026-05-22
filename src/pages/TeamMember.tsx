import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { teamData } from '../data/teamData';
import Layout from '../components/Layout'; // Assuming Layout is in components

const TeamMember: React.FC = () => {
 const { slug } = useParams<{ slug: string }>();
 const navigate = useNavigate();
 
 const member = teamData.find(m => m.slug === slug);

 // Scroll to top when this page mounts
 useEffect(() => {
 window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
 }, [slug]);

 if (!member) {
 return (
 <Layout>
 <div className="min-h-screen flex items-center justify-center bg-gray-50">
 <div className="text-center">
 <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
 <p className="text-xl text-gray-600 mb-8">Team member not found.</p>
 <Link to="/about" className="text-amber-600 hover:text-amber-500 font-medium">
 &larr; Back to About
 </Link>
 </div>
 </div>
 </Layout>
 );
 }

 return (
 <Layout>
 <div className="min-h-screen bg-white pt-32 pb-24">
 {/* Back Link */}
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
 <button 
 onClick={() => navigate(-1)} 
 className="inline-flex items-center text-gray-500 hover:text-amber-600 transition-colors"
 >
 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
 </svg>
 Back
 </button>
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
 <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-2">
 {member.name}
 </h1>
 <p className="text-2xl text-amber-600 font-medium">
 {member.role}
 </p>
 
 {/* Location and Hobbies */}
 <div className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-gray-500">
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

 <div className="prose prose-lg max-w-none">
 {member.bio.split('\n\n').map((paragraph, idx) => (
 <p key={idx} className={idx === 0 ? "lead text-xl text-gray-500" : ""}>
 {paragraph}
 </p>
 ))}
 </div>

 </div>
 </div>
 </div>
 </div>
 </Layout>
 );
};

export default TeamMember;
