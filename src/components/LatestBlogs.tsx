import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogData";

export default function LatestBlogs() {
    return (
        <section className="bg-white dark:bg-black py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-3xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold tracking-wide uppercase mb-6">
                            ● Latest Blogs
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Read Our Latest Blogs
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            Get exclusive benefits and innovative solutions for brands. Stay updates with the latest design stories and insights.
                        </p>
                    </div>

                    {/* View All Button */}
                    <Link to="/blogs" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors whitespace-nowrap">
                        View All <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {blogs.slice(0, 4).map((blog, index) => (
                        <Link to={`/blogs/${blog.slug}`} key={index} className="group cursor-pointer block">
                            {/* Image Placeholder / Cover Image */}
                            <div className="w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800 rounded-2xl mb-8 relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                                {blog.coverImage ? (
                                    <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="flex items-center gap-4 opacity-30">
                                        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-sm"></div>
                                        <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                        <div className="w-0 h-0 border-l-[32px] border-l-transparent border-b-[64px] border-b-gray-300 dark:border-b-gray-600 border-r-[32px] border-r-transparent"></div>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                {blog.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                                {blog.excerpt}
                            </p>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
