// lib/blogs.ts

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Accepts HTML string or rendered content
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  category: string;
  coverImage: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "nextjs-fullstack-performance-guide",
    title: "How We Achieve Sub-Second Load Times with Next.js & React",
    excerpt:
      "A deep dive into static generation, server-side rendering, and image optimization strategies for maximum Core Web Vitals performance.",
    content: `
      <h2>The Core Web Vitals Challenge</h2>
      <p>In modern web development, performance isn't just a technical metric—it directly impacts user retention and search engine rankings. When building platforms for transformational growth, every millisecond counts.</p>
      
      <h3>1. Server-Side Rendering vs. Static Export</h3>
      <p>By leveraging static rendering at build time using Next.js App Router, pages load almost instantaneously because the HTML is pre-built and cached at the CDN edge.</p>

      <h3>2. Optimizing Media Assets</h3>
      <p>Images often account for more than 60% of a web page's total weight. Modern formats like WebP/AVIF paired with explicit sizing attributes prevent Layout Shifts (CLS).</p>
      
      <blockquote>
        "Optimizing Core Web Vitals isn't optional anymore; it's the foundation of modern SEO and user conversion."
      </blockquote>

      <h3>3. Clean Code & Modular Architecture</h3>
      <p>Keeping bundle sizes minimal by dynamically importing heavy interactive components ensures fast First Contentful Paint (FCP) and Interaction to Next Paint (INP) metrics.</p>
    `,
    date: "July 24, 2026",
    readTime: "5 min read",
    author: {
      name: "Rohit Chauhan",
      role: "Lead Full-Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    category: "Web Development",
    coverImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "ai-overviews-seo-strategy-2026",
    title: "Dominating Search in the Era of AI Overviews",
    excerpt:
      "How to structure your technical SEO and content pipeline to feature prominently in AI-generated search summaries.",
    content: `
      <h2>The Shift in Search Engine Behavior</h2>
      <p>Search engines have evolved beyond simple keyword matching. Today's algorithms prioritize entity relationships, structured data, and authoritative source references.</p>

      <h3>Key Strategies for AI Search Optimization</h3>
      <ul>
        <li><strong>Structured Schema Data:</strong> Give AI crawlers explicit JSON-LD metadata about your organization, services, and articles.</li>
        <li><strong>Direct Value Answers:</strong> Structure headings and opening paragraphs to concisely answer intent-driven questions upfront.</li>
        <li><strong>Authoritative Backlinks:</strong> Quality domain references continue to validate brand credibility across algorithm updates.</li>
      </ul>
    `,
    date: "July 18, 2026",
    readTime: "4 min read",
    author: {
      name: "The Viks Labs Team",
      role: "Performance Marketing Strategy",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    category: "SEO & Growth",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}