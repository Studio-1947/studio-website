import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { blogs } from "../../data/blogData";
import { Share2 } from "lucide-react";
import { toast } from "sonner";
import { usePageMeta } from "../../hooks/usePageMeta";

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.slug === slug);

  usePageMeta({
    title: blog
      ? `${blog.title} – Studio 1947`
      : "Article Not Found – Studio 1947",
    description:
      blog?.excerpt ?? "Read the latest articles from the Studio 1947 journal.",
    ogImage:
      blog?.coverImage && blog.coverImage !== "/logo.svg"
        ? blog.coverImage
        : undefined,
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog?.title,
          text: blog?.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          toast.error("Unable to share. Try copying the link instead.");
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied to clipboard!");
      } catch {
        toast.error(
          "Could not copy link. Please copy it manually from the address bar.",
        );
      }
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-[70vh] flex flex-col items-center justify-center py-32 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="px-6 py-3 bg-royal-600 hover:bg-royal-700 text-white rounded-full font-semibold transition-colors"
          >
            Back to Journal
          </button>
        </div>
      </Layout>
    );
  }

  const contentBlocks = blog.content
    .trim()
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return (
    <Layout className="bg-[#F7F5F2]">
      <article className="bg-[#F7F5F2] pt-24 md:pt-32 pb-24 transition-colors duration-300 min-h-screen">
        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8 md:mb-12 transition-colors uppercase tracking-wider text-sm"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Journal
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-6 text-sm">
            <span className="text-gray-500 font-medium">
              {blog.date}
            </span>
            <span className="text-gray-400">•</span>
            {blog.language && blog.language !== "English" && (
              <>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-semibold">
                  {blog.language === "Hindi" 
                    ? "Hindi/हिंदी" 
                    : blog.language === "Nepali" 
                      ? "Nepali/नेपाली" 
                      : blog.language}
                </span>
                <span className="text-gray-400">•</span>
              </>
            )}
            <span className="text-gray-900 font-medium">
              Written by{" "}
              <span className="text-primary font-bold">
                {blog.author}
              </span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
            {blog.title}
          </h1>
        </header>

        {/* Hero Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="aspect-w-16 aspect-h-9 md:aspect-h-7 rounded-3xl overflow-hidden shadow-2xl relative">
            {blog.coverImage === "/logo.svg" ? (
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-royal-600 to-indigo-800 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-white/20 text-7xl md:text-8xl mb-6 block">
                  ✧
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-widest uppercase">
                  Studio 1947
                </span>
                <span className="text-royal-200 text-xl md:text-2xl font-light tracking-widest uppercase mt-4">
                  Blogs
                </span>
              </div>
            ) : (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-[300px] md:h-[500px] lg:h-[700px] object-cover"
              />
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto space-y-8 text-[18px] md:text-[20px] leading-[1.85] text-gray-800">
            {contentBlocks.map((block, idx) => {
              const blockText = block.trim();
              if (!blockText) return null;

              // 1. Detect Tag lines (e.g. "#Gender-Equality #Youth")
              const isTagLine = blockText.split(/\s+/).every(word => word.startsWith("#"));
              if (isTagLine) {
                return (
                  <div key={idx} className="flex flex-wrap gap-2 text-primary font-bold text-sm mb-4">
                    {blockText.split(/\s+/).map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                );
              }

              // 2. Detect Headings
              const isHeading =
                !blockText.includes("\n") &&
                blockText.length < 85 &&
                !blockText.endsWith(".") &&
                !blockText.endsWith("?") &&
                !blockText.endsWith("!") &&
                !blockText.endsWith("”") &&
                !blockText.endsWith("\"");

              const renderFormattedText = (text: string) => {
                if (!text.includes("*") && !text.includes("`")) {
                  return text;
                }
                const parts = text.split(/(\*.*?\*|`.*?`)/g);
                return parts.map((part, index) => {
                  if (part.startsWith("*") && part.endsWith("*")) {
                    return (
                      <em key={index} className="font-serif italic text-gray-950 bg-gray-100/60 px-1 rounded-sm font-medium">
                        {part.slice(1, -1)}
                      </em>
                    );
                  }
                  if (part.startsWith("`") && part.endsWith("`")) {
                    return (
                      <code key={index} className="font-mono text-sm text-primary bg-gray-100 px-1.5 py-0.5 rounded font-semibold">
                        {part.slice(1, -1)}
                      </code>
                    );
                  }
                  return part;
                });
              };

              if (isHeading) {
                const isH3 = blockText.startsWith("###");
                const HeadingTag = isH3 ? "h3" : "h2";
                const headingClass = isH3
                  ? "pt-3 text-xl md:text-2xl font-bold leading-tight text-gray-900 mt-6 mb-3"
                  : "pt-4 text-2xl md:text-3xl font-bold leading-tight tracking-tight text-gray-900 first:pt-0 mt-8 mb-4";

                return (
                  <HeadingTag
                    key={idx}
                    className={headingClass}
                  >
                    {renderFormattedText(blockText.replace(/^#+\s*/, ""))}
                  </HeadingTag>
                );
              }

              // 3. Detect List Blocks
              const isListBlock = 
                blockText.startsWith("●") || 
                blockText.startsWith("* ") || 
                blockText.includes("\n●") || 
                blockText.includes("\n* ");

              if (isListBlock) {
                const listItems = blockText
                  .split(/(?:^[●]\s*|^[*]\s+|(?:\n+[●]\s*|\n+[*]\s+))/g)
                  .map((item) => item.trim())
                  .filter(Boolean);

                return (
                  <ul key={idx} className="list-disc space-y-3 pl-5 my-6">
                    {listItems.map((item, itemIndex) => {
                      const itemText = item.replace(/\n+/g, " ").replace(/\s+/g, " ");
                      return (
                        <li
                          key={itemIndex}
                          className="leading-[1.8] text-gray-800 pl-1"
                        >
                          {renderFormattedText(itemText)}
                        </li>
                      );
                    })}
                  </ul>
                );
              }

              // 4. Default: Paragraph
              const paragraphText = blockText.replace(/\n+/g, " ").replace(/\s+/g, " ");
              return (
                <p
                  key={idx}
                  className="leading-[1.85] text-gray-800 mb-4"
                >
                  {renderFormattedText(paragraphText)}
                </p>
              );
            })}
          </div>

          {/* Share / Tags section (placeholder) */}
          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-6">
            <div className="flex gap-3">
              <span className="text-gray-500 font-medium">Tags:</span>
              <span className="text-primary font-medium">
                Culture
              </span>
              <span className="text-primary font-medium">
                Stories
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-medium">
                Share this article:
              </span>
              <button
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                title="Share article"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
