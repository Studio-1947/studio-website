import type { ReactNode } from 'react';
import { Toaster } from 'sonner';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
 children: ReactNode;
 className?: string;
}

export default function Layout({ children, className = "bg-white" }: LayoutProps) {
 return (
 <div className={`flex flex-col min-h-screen text-gray-900 transition-colors duration-200 ${className}`}>
 <Navbar />
 <main className="flex-grow">
 {children}
 </main>
 <Footer />
 <Toaster position="bottom-center" richColors />
 </div>
 );
}
