import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogData";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export default function LatestBlogs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-gray-50 border border-gray-200 text-gray-600 text-xs font-semibold tracking-wide uppercase mb-6">
              Latest Blogs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Read Our Latest Blogs
            </h2>
            <p className="text-gray-500 text-lg">
              Get exclusive benefits and innovative solutions for brands. Stay
              updated with the latest design stories and insights.
            </p>
          </div>

          {/* View All Button */}
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors whitespace-nowrap"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {blogs
            .filter((b) => b.coverImage && b.coverImage !== "/logo.svg")
            .slice(0, 4)
            .map((blog, index) => (
              <CardContainer key={index} className="w-full h-full" containerClassName="w-full h-full py-4">
                <CardBody className="bg-gray-50 border border-black/[0.1] w-full h-full rounded-xl p-5 group/card flex flex-col">
                  <CardItem translateZ="100" className="w-full">
                    <Link to={`/blogs/${blog.slug}`} className="block w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100 relative">
                      {blog.coverImage && blog.coverImage !== "/logo.svg" ? (
                        <img
                          src={blog.coverImage}
                          alt={blog.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover/card:shadow-xl"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-royal-600 to-indigo-800 flex flex-col items-center justify-center p-6 text-center">
                          <span className="text-white/30 text-5xl mb-3 block">✧</span>
                          <span className="text-xl font-black text-white tracking-widest uppercase">Studio 1947</span>
                          <span className="text-royal-200 text-sm font-light tracking-widest uppercase mt-2">Blogs</span>
                        </div>
                      )}
                      {blog.language && (
                        <div className="absolute top-3 right-3 z-10">
                          <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/20">
                            {blog.language}
                          </span>
                        </div>
                      )}
                    </Link>
                  </CardItem>

                  <CardItem translateZ="50" className="w-full mt-5">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover/card:text-gray-600 transition-colors line-clamp-2">
                      <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                  </CardItem>

                  <CardItem as="p" translateZ="60" className="w-full text-gray-500 text-sm leading-relaxed line-clamp-3 mt-2 flex-1">
                    {blog.excerpt}
                  </CardItem>

                  <div className="flex justify-end mt-5">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      to={`/blogs/${blog.slug}`}
                      className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold"
                    >
                      Read Article →
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>
      </div>
    </section>
  );
}
