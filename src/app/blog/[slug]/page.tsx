// app/blog/[slug]/page.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/libs/blog";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. MUST HAVE for static HTML exports (`output: 'export'`)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | The Viks Labs`,
    description: post.excerpt,
  };
}

// 3. Dynamic Article Page Component
export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-slate-50 min-h-screen text-slate-900 font-sans pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#00a859] hover:underline mb-8"
        >
          <ArrowLeft size={14} />
          <span>Back to All Articles</span>
        </Link>

        {/* Article Header */}
        <header className="space-y-6 mb-10">
          <span className="inline-block bg-[#00a859]/10 text-[#00a859] text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-gray-200">
            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={44}
                height={44}
                className="rounded-full object-cover border border-gray-200"
              />
              <div>
                <p className="text-sm font-bold text-slate-900">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#00a859]" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#00a859]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Feature Image */}
        <div className="relative h-[320px] sm:h-[450px] w-full rounded-3xl overflow-hidden mb-12 shadow-xl border border-gray-200">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 900px"
            className="object-cover"
          />
        </div>

        {/* Article HTML Content */}
        <div
          className="prose prose-slate max-w-none 
            prose-headings:font-bold prose-headings:text-slate-900
            prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-sm sm:prose-p:text-base prose-p:mb-6
            prose-li:text-slate-700 prose-li:text-sm sm:prose-li:text-base
            prose-blockquote:border-l-4 prose-blockquote:border-[#00a859] prose-blockquote:bg-emerald-50/50 prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-slate-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Bottom Call-To-Action */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h3 className="text-xl font-bold">Need custom engineering or marketing execution?</h3>
            <p className="text-xs text-slate-400">
              Let's build high-performance web applications optimized for scale and speed.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-[#00a859] hover:bg-emerald-600 text-white font-bold text-xs px-6 py-3.5 rounded-xl transition-all shrink-0 shadow-lg"
          >
            Schedule Consultation
          </Link>
        </div>

      </div>
    </article>
  );
}