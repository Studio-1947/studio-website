// MIGRATION GUIDE: Sanity CMS Setup for Your Existing Blogs

## Quick Setup

### 1. Install Dependencies

```bash
npm install @sanity/client @portabletext/react
```

### 2. Environment Variables

Add to your `.env.local`:

```
VITE_SANITY_PROJECT_ID=wn1gjhox
VITE_SANITY_DATASET=production
```

### 3. Import Our Adapter

The files have been created in `src/lib/`:
- `sanity.client.ts` - Sanity configuration
- `sanityAdapter.ts` - Data transformation layer

### 4. Update Your Components

Choice 1: Migrate to Sanity (Recommended)
- Keep your existing components as-is
- Update your component hooks to fetch from Sanity adapter

Choice 2: Keep Local Data
- Continue using your `blogData.ts` + add Sanity later
- No changes needed right now

---

## Option A: Use Sanity as Data Source (No Component Changes)

### Update `Blogs.tsx`:

```tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { fetchAllBlogs } from '../../lib/sanityAdapter';
import { BlogPost } from '../../data/blogData';

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      const blogData = await fetchAllBlogs();
      setBlogs(blogData);
      setLoading(false);
    };
    loadBlogs();
  }, []);

  // Rest of your existing code stays the same...
  // Just replace `import { blogs } from ...` with the fetched data above
};
```

### Update `BlogPost.tsx`:

```tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { fetchBlogBySlug } from '../../lib/sanityAdapter';
import { BlogPost as BlogPostType } from '../../data/blogData';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      if (slug) {
        const blogData = await fetchBlogBySlug(slug);
        setBlog(blogData);
        setLoading(false);
      }
    };
    loadBlog();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blog) return <div>Blog not found</div>;

  // Rest of your existing code stays the same...
};
```

### Update `LatestBlogs.tsx`:

```tsx
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllBlogs } from "../lib/sanityAdapter";
import { BlogPost } from "../data/blogData";

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await fetchAllBlogs();
      setBlogs(data);
    };
    loadBlogs();
  }, []);

  // Rest of your existing code stays the same...
  // Just replace `import { blogs } from ...` with the code above
}
```

---

## Option B: Hybrid Approach (Keep Local, Add Sanity Later)

If you want to keep your local data for now:

1. Keep `blogData.ts` as is
2. When ready to migrate, update each component one at a time
3. The adapter files are there waiting when you need them

---

## Migrating Your Existing Blogs to Sanity

### Step 1: Open Sanity Studio

```bash
cd path/to/studio-website-cms
npm run dev
# Opens at http://localhost:3334
```

### Step 2: Create Blog Posts in Sanity

For each blog in your `blogData.ts`:

1. Click "Create" → "Blog Post"
2. Fill in:
   - **Title**: Your blog title
   - **Slug**: Auto-generated from title (matches your current slug)
   - **Author**: Create author if needed
   - **Published At**: Set to your date
   - **Main Image**: Upload your cover image
   - **Categories**: Add relevant categories
   - **Excerpt**: Your excerpt text
   - **Body**: Copy/paste your markdown or text content

### Step 3: Test Fetch

Once you have 1-2 blogs in Sanity, update one of your components to test:

```tsx
import { fetchAllBlogs } from '../../lib/sanityAdapter';

useEffect(() => {
  fetchAllBlogs().then(blogs => {
    console.log('Fetched blogs:', blogs);
  });
}, []);
```

Check browser console to confirm data is loading.

---

## Gradual Migration Path

1. **Week 1**: Set up Sanity (✓ Done)
2. **Week 2**: Create 2-3 blogs in Sanity Studio
3. **Week 3**: Update one component to use `sanityAdapter.ts`
4. **Week 4**: Migrate remaining blogs & components
5. **Week 5**: Archive your `blogData.ts`

---

## Troubleshooting

### "Cannot fetch blogs"
- Verify project ID in `.env.local`
- Check Sanity Studio has published blog posts
- Check browser console for detailed error

### "Data format mismatch"
- The adapter transforms Sanity data to match your BlogPost interface
- If body content looks wrong, check your portable text configuration

### "Images not loading"
- Ensure images are uploaded in Sanity Studio
- Try opening image URL directly in browser
- Check CORS settings in Sanity (Project Settings > API)

---

## Benefits of Using Sanity

✅ Update blogs without code changes
✅ Manage rich text with portable editor
✅ Schedule future posts
✅ Team collaboration
✅ Version history
✅ CDN-cached content delivery
✅ Real-time preview
✅ Mobile-friendly admin

---

## Next Steps

1. Choose Option A or B above
2. If Option A: Start updating your components
3. If Option B: Keep local data + plan migration timeline
4. Create your first blog in Sanity Studio
5. Test the adapter fetch functions

Need help with any step? Let me know!
