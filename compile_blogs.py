import json
import re

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_-]+', '-', text)
    text = text.strip('-')
    return text

def parse_blogs():
    with open('blogs.txt', 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    blogs = []
    current_blog = None
    state = 'SEARCHING' # SEARCHING, TITLE, AUTHOR, DATE, CONTENT
    
    languages = ['English', 'Hindi', 'Nepali', 'Bengali']
    
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        if line in languages:
            if current_blog and current_blog.get('content'):
                blogs.append(current_blog)
            
            current_blog = {'language': line, 'title': '', 'author': '', 'date': '', 'content': '', 'tags': []}
            state = 'TITLE'
            i += 1
            continue
            
        if not current_blog:
            i += 1
            continue
            
        if line == '' or line == '\u200b': # Ignore empty lines in metadata phase
            if state != 'CONTENT':
                i += 1
                continue
                
        if state == 'TITLE':
            # Accumulate title until we hit author or date or empty line
            if line.startswith('#'):
                current_blog['tags'].append(line)
            elif re.match(r'^[A-Z][a-zA-Z\s\.]+$', line) and len(line.split()) <= 3 and not "Parv" in line and not "Story" in line and not "Gender" in line:
                # Might be author
                pass
            
            # Since author/date format is relatively fixed, let's look ahead for Date format (e.g. Apr 2, 2025)
            # Find the date index
            date_idx = -1
            for j in range(i, min(i+10, len(lines))):
                if re.match(r'^[A-Z][a-z]{2}\s\d{1,2},\s\d{4}$', lines[j].strip()):
                    date_idx = j
                    break
            
            if date_idx != -1:
                title_lines = [lines[k].strip() for k in range(i, date_idx-1) if lines[k].strip() and not lines[k].strip().startswith('#') and lines[k].strip() != '\u200b']
                # The line before date is usually author
                author = lines[date_idx-1].strip()
                if title_lines and author in title_lines:
                    title_lines.remove(author)
                
                # Tags are words starting with #
                tags = [t for t in title_lines if t.startswith('#')]
                title_lines = [t for t in title_lines if not t.startswith('#')]
                
                # Title might be duplicate (sometimes title is repeated)
                # Remove duplicate halves
                full_title = " ".join(title_lines)
                half = len(full_title)//2
                if full_title[:half].strip() == full_title[half:].strip():
                    full_title = full_title[:half].strip()
                else: 
                     # Sometimes the title is repeated across lines
                     unique_titles = []
                     for t in title_lines:
                         if t not in unique_titles:
                             unique_titles.append(t)
                     full_title = " ".join(unique_titles)
                     
                current_blog['title'] = full_title
                current_blog['author'] = author
                current_blog['date'] = lines[date_idx].strip()
                current_blog['tags'] = tags
                
                state = 'CONTENT'
                i = date_idx + 1
                continue
                
        if state == 'CONTENT':
            if line != '\u200b':
                current_blog['content'] += line + '\n'
                
        i += 1
        
    if current_blog and current_blog.get('content'):
        blogs.append(current_blog)
        
    # Clean up contents and format output
    ts_content = "export interface BlogPost {\n  slug: string;\n  title: string;\n  author: string;\n  date: string;\n  language: string;\n  tags: string[];\n  excerpt: string;\n  coverImage: string;\n  content: string;\n}\n\n"
    ts_content += "export const blogs: BlogPost[] = [\n"
    
    for idx, blog in enumerate(blogs):
        title = blog['title'].replace('"', '\\"').replace('\u200b', '')
        author = blog['author'].replace('"', '\\"')
        date = blog['date']
        lang = blog['language']
        tags = json.dumps(blog['tags'])
        slug = slugify(title)
        if not slug:
            slug = f"blog-{idx}"
            
        content = blog['content'].strip().replace('`', '\\`').replace('$', '\\$')
        
        # Calculate an excerpt (first 100-150 chars)
        excerpt = content[:150].replace('\n', ' ').replace('"', '\\"') + "..."
        
        # Give a generic placeholder image for now, alternating a bit
        images = [
            'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop'
        ]
        img = images[idx % len(images)]
        
        ts_content += f"""  {{
    slug: "{slug}",
    title: "{title}",
    author: "{author}",
    date: "{date}",
    language: "{lang}",
    tags: {tags},
    excerpt: "{excerpt}",
    coverImage: "{img}",
    content: `
{content}
`
  }},
"""
    ts_content += "];\n"
    
    with open('src/data/blogData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Parsed {len(blogs)} blogs!")

if __name__ == "__main__":
    parse_blogs()
