// This adapter maps your existing BlogPost interface to Sanity data
// It transforms Sanity blog documents into your app's BlogPost format

import { sanityClient } from './sanity.client'
import type { BlogPost } from '../data/blogData'

// GROQ queries
const ALL_BLOGS_QUERY = `
  *[_type == "blog"] | order(coalesce(publishedAt, _createdAt) desc) {
    _id,
    title,
    "slug": slug.current,
    "excerpt": coalesce(excerpt, ""),
    publishedAt,
    _createdAt,
    "author": coalesce(author->name, authorName),
    language,
    tags,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      hotspot,
      crop
    },
    categories[] -> {
      title,
      slug
    }
  }
`

const BLOG_BY_SLUG_QUERY = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    _createdAt,
    "author": coalesce(author->name, authorName),
    language,
    tags,
    mainImage {
      asset -> {
        url,
        metadata {
          dimensions {
            height,
            width
          }
        }
      },
      hotspot,
      crop
    },
    body,
    categories[] -> {
      title,
      slug
    }
  }
`

// Transform Sanity blog to your BlogPost format
function transformSanityToBlogPost(sanityBlog: any): BlogPost {
  // Convert portable text body to plain text string
  const contentText = sanityBlog.body
    ?.map((block: any) => {
      if (block._type === 'block') {
        return block.children?.map((child: any) => child.text).join('') || ''
      }
      return ''
    })
    .join('\n\n') || ''

  return {
    slug: sanityBlog.slug,
    title: sanityBlog.title,
    author: sanityBlog.author || 'Studio 1947',
    date: new Date(sanityBlog.publishedAt || sanityBlog._createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    language: sanityBlog.language || 'English',
    tags: sanityBlog.tags || sanityBlog.categories?.map((cat: any) => cat.title) || [],
    excerpt: sanityBlog.excerpt,
    coverImage: sanityBlog.mainImage?.asset?.url || '/logo.svg',
    content: contentText,
  }
}

// Fetch all blogs from Sanity
export async function fetchAllBlogs(): Promise<BlogPost[]> {
  try {
    const sanityBlogs = await sanityClient.fetch(ALL_BLOGS_QUERY)
    return sanityBlogs.map(transformSanityToBlogPost)
  } catch (error) {
    console.error('Error fetching blogs from Sanity:', error)
    return []
  }
}

// Fetch single blog by slug from Sanity
export async function fetchBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const sanityBlog = await sanityClient.fetch(BLOG_BY_SLUG_QUERY, { slug })
    if (!sanityBlog) return null
    return transformSanityToBlogPost(sanityBlog)
  } catch (error) {
    console.error(`Error fetching blog "${slug}" from Sanity:`, error)
    return null
  }
}
