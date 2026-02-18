import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResult {
    id: string;
    title: string;
    path: string;
    category: 'Page' | 'Section' | 'Action';
    icon?: React.ReactNode;
}

const items: SearchResult[] = [
    { id: '1', title: 'Home', path: '/', category: 'Page' },
    { id: '2', title: 'About Us', path: '/about', category: 'Page' },
    { id: '3', title: 'Products', path: '/products', category: 'Page' },
    { id: '4', title: 'Solutions', path: '/solutions', category: 'Page' },
    { id: '5', title: 'Collabs', path: '/collabs', category: 'Page' },
    { id: '6', title: 'Initiative', path: '/initiative', category: 'Page' },
    { id: '7', title: 'Say Hello', path: '/contact', category: 'Page' },
    { id: '8', title: 'Featured Work', path: '/#featured', category: 'Section' },
    { id: '9', title: 'The Studio', path: '/#studio', category: 'Section' },
    { id: '10', title: 'Toggle Theme', path: 'action:theme', category: 'Action' },
];

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredItems.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredItems[selectedIndex]) {
                    handleSelect(filteredItems[selectedIndex]);
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredItems, selectedIndex, onClose]);

    // Scroll selected item into view
    useEffect(() => {
        if (listRef.current && listRef.current.children[selectedIndex]) {
            listRef.current.children[selectedIndex].scrollIntoView({
                block: 'nearest',
            });
        }
    }, [selectedIndex]);


    const handleSelect = (item: SearchResult) => {
        if (item.path.startsWith('action:')) {
            if (item.path === 'action:theme') {
                // Find existing theme toggle button and click it to toggle theme
                // This is a workaround since we don't have direct access to the theme context here easily without refactoring
                const themeBtn = document.querySelector('button[aria-label="Toggle Theme"]') as HTMLButtonElement | null;
                if (themeBtn) themeBtn.click();
            }
        } else {
            window.location.href = item.path;
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    {/* Modal Wrapper for Centering */}
                    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2, type: 'spring', damping: 25, stiffness: 300 }}
                            className="w-full max-w-xl pointer-events-auto"
                        >
                            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[60vh]">

                                {/* Input Header */}
                                <div className="flex items-center p-4 border-b border-gray-100 dark:border-gray-800 relative">
                                    <svg className="w-5 h-5 text-gray-400 absolute left-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        className="w-full pl-10 pr-4 py-2 bg-transparent text-lg text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none"
                                        placeholder="Search..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                    />
                                    <div className="hidden sm:flex text-xs text-gray-400 border border-gray-200 dark:border-gray-700 rounded px-1.5 py-0.5 ml-2">
                                        ESC
                                    </div>
                                </div>

                                {/* Results List */}
                                {filteredItems.length > 0 ? (
                                    <ul ref={listRef} className="overflow-y-auto p-2 scrollbar-hide">
                                        {filteredItems.map((item, index) => (
                                            <li
                                                key={item.id}
                                                onClick={() => handleSelect(item)}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-colors ${selectedIndex === index
                                                    ? 'bg-gray-100 dark:bg-gray-800 text-primary'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {/* Icon based on category */}
                                                    <div className={`p-1.5 rounded-md ${selectedIndex === index
                                                        ? 'bg-primary/10 text-primary'
                                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                                                        }`}>
                                                        {item.category === 'Page' && (
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                        )}
                                                        {item.category === 'Section' && (
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                                            </svg>
                                                        )}
                                                        {item.category === 'Action' && (
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                            </svg>
                                                        )}
                                                    </div>
                                                    <span className="font-medium">{item.title}</span>
                                                </div>
                                                <span className="text-xs text-gray-400 uppercase tracking-wider">{item.category}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                                        <p>No results found for "{query}"</p>
                                    </div>
                                )}

                                {/* Footer - Hide on mobile */}
                                <div className="hidden sm:flex px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 justify-end gap-4">
                                    <span className="flex items-center gap-1">
                                        <kbd className="font-sans px-1 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">↩</kbd>
                                        to select
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <kbd className="font-sans px-1 py-0.5 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800">↑↓</kbd>
                                        to navigate
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
