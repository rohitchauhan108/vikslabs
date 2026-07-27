// app/blog/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../libs/blog";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata = {
  title: "Blog & Insights | The Viks Labs",
  description:
    "Explore our latest articles on Next.js, Web Development, SEO, and Performance Marketing strategies.",
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-[#00a859] tracking-wider uppercase bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-300/40">
            Insights & Engineering
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Latest News & Tech Articles
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Proven engineering practices, performance optimizations, and growth marketing blueprints from our lab.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Cover Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-[#a3e635] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-[#00a859]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-[#00a859]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#00a859] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer / Author */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <div className="text-left">
                      <p className="text-xs font-bold text-slate-900">{post.author.name}</p>
                      <p className="text-[10px] text-gray-400">{post.author.role}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#00a859] text-slate-700 group-hover:text-white flex items-center justify-center transition-colors"
                    aria-label="Read Post"
                  >
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}