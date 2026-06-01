// @ts-nocheck
import  { useEffect, useState } from "react";
import { ArrowLeft, Calendar, BookOpen, User, Tag } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";
import type { BlogPost } from "../types";
import axios from "axios";

interface BlogPageProps {
  posts: BlogPost[];
}

const CATEGORIES = ["All", "Essay", "Poetry", "Story", "Science", "Opinion"];

// ── Full post reader ──────────────────────────────────────────────────────────
function PostReader({ post, onBack }: { post: BlogPost; onBack: () => void }) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Blog
      </button>

      {/* Cover */}
      <div className="rounded-2xl overflow-hidden mb-8 shadow-lg" style={{ aspectRatio: "16/7" }}>
        <img
          src={post.coverImage.replace("w=600", "w=900")}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <Badge label={post.category} />
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <Calendar size={12} /> {post.publishedAt}
        </span>
      </div>

      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
        {post.title}
      </h1>

      {/* Author chip */}
      <div className="flex items-center gap-3 mb-8 p-3 bg-blue-50 border border-blue-100 rounded-xl w-fit">
        <div className="w-9 h-9 rounded-full bg-blue-200 flex items-center justify-center">
          <User size={18} className="text-blue-700" />
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">{post.author}</p>
          <p className="text-xs text-gray-500">{post.authorClass}, Shree Janapriya</p>
        </div>
      </div>

      {/* Body — render each paragraph */}
      <article className="prose prose-gray max-w-none">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i} className="text-gray-700 leading-relaxed text-base mb-5 whitespace-pre-line">
            {para}
          </p>
        ))}
      </article>
    </div>
  );
}

// ── Blog card ─────────────────────────────────────────────────────────────────
function BlogCard({
  post,
  onRead,
  featured = false,
}: {
  post: BlogPost;
  onRead: (p: BlogPost) => void;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <div
        className="group relative max-w-screen rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 col-span-full"
        onClick={() => onRead(post)}
        style={{ aspectRatio: "21/7", minHeight: 220 }}
      >
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge label={post.category} />
            <span className="text-white/70 text-xs">{post.publishedAt}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 max-w-xl">
            {post.title}
          </h2>
          <p className="text-white/80 text-sm max-w-lg line-clamp-2 mb-3">{post.excerpt}</p>
          <p className="text-blue-300 text-xs font-semibold">
            by {post.author} · {post.authorClass}
          </p>
        </div>
        <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full shadow">
          Featured
        </span>
      </div>
    );
  }

  return (
    <div
      className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 overflow-hidden flex flex-col"
      onClick={() => onRead(post)}
    >
      <div className="overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <Badge label={post.category} />
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Calendar size={11} /> {post.publishedAt}
          </span>
        </div>
        <h3 className="font-extrabold text-gray-900 mb-1 leading-snug group-hover:text-blue-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-50">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <User size={12} className="text-blue-600" />
          </div>
          <p className="text-xs font-semibold text-gray-700">
            {post.author} · <span className="text-gray-400 font-normal">{post.authorClass}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Main BlogPage ─────────────────────────────────────────────────────────────
export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const [reading, setReading] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState([]);

    useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/blogs/`
        );

        setPosts(res.data || []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setPosts([]);
      }
    };

    fetchBlogs();
  }, []);

  if (reading) return <PostReader post={reading} onBack={() => setReading(null)} />;

  const featured = posts.filter((p) => p.featured);
  const filtered =
    filter === "All" ? posts : posts.filter((p) => p.category === filter);
  // Don't show featured posts twice in the grid
  const gridPosts =
    filter === "All" ? posts.filter((p) => !p.featured) : filtered;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FadeIn>
        <div className="flex items-center gap-2 mb-1">
          <BookOpen size={22} className="text-blue-700" />
          <h1 className="text-4xl font-extrabold text-gray-900">Student Blog</h1>
        </div>
        <p className="text-gray-500 mb-8 text-lg">
          Words written by our students — essays, poetry, stories, and ideas.
        </p>
      </FadeIn>

      {/* Category filter */}
      <FadeIn>
        <div className="flex gap-2 mb-10 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                filter === c
                  ? "bg-blue-700 text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {c !== "All" && <Tag size={12} />} {c}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Featured posts — only shown on "All" tab */}
      {filter === "All" && featured.length > 0 && (
        <div className="grid grid-cols-1 gap-6 mb-8">
          {featured.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <BlogCard post={p} onRead={setReading} featured />
            </FadeIn>
          ))}
        </div>
      )}

      {/* Regular grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(filter === "All" ? gridPosts : filtered).map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.07}>
            <BlogCard post={p} onRead={setReading} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
          <p className="font-medium">No posts in this category yet.</p>
        </div>
      )}

      <style>{`
        .line-clamp-2{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
        .line-clamp-3{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}
      `}</style>
    </div>
  );
}