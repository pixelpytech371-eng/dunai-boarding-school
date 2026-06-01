import { ArrowRight, BookOpen, User, Calendar, Star } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import Badge from "./ui/Badge";
import type { Page } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";

interface HomeBlogSectionProps {
  setPage: (p: Page) => void;
}

interface BlogPost {
  id: number;
  title: string;
  author: string;
  author_class: string | null;
  content: string;
  excerpt: string;
  category: string;
  cover_image: string | null;
  published_at: string;
  featured: number;
  created_at: string;
}

export default function HomeBlogSection({
  setPage,
}: HomeBlogSectionProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/blogs/`
        );

        setPosts(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setPosts([]);
      }
    };

    fetchBlogs();
  }, []);

  const go = () => {
    setPage("blog");
    window.scrollTo(0, 0);
  };

  if (posts.length === 0) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-center py-10">
          <p className="text-gray-500">No blog posts available.</p>
        </div>
      </section>
    );
  }

  const featured = posts.find((p) => p.featured === 1);

  const rest = posts
    .filter((p) => p.id !== featured?.id)
    .slice(0, featured ? 2 : 3);

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-NP", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <FadeIn>
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BookOpen size={20} className="text-indigo-600" />
              <h2 className="text-2xl font-extrabold text-gray-900">
                Student Blog
              </h2>
            </div>

            <p className="text-gray-500 text-sm">
              Essays, poetry, and ideas from our students' own pens.
            </p>
          </div>

          <button
            onClick={go}
            className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-900 transition-colors"
          >
            All Posts <ArrowRight size={15} />
          </button>
        </div>
      </FadeIn>

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Featured */}
        {featured && (
          <FadeIn delay={0} className="lg:col-span-2">
            <div
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 h-full"
              style={{ minHeight: 280 }}
              onClick={go}
            >
              <img
                src={
                  featured.cover_image ||
                  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=70"
                }
                alt={featured.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              <span className="absolute top-4 left-4 flex items-center gap-1 bg-yellow-400 text-yellow-900 text-xs font-bold px-2.5 py-1 rounded-full shadow">
                <Star size={10} className="fill-yellow-800" />
                Featured
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge label={featured.category} />

                  <span className="text-white/60 text-xs flex items-center gap-1">
                    <Calendar size={11} />
                    {formatDate(featured.published_at)}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white leading-tight mb-1">
                  {featured.title}
                </h3>

                <p className="text-white/75 text-sm line-clamp-2 mb-2">
                  {featured.excerpt}
                </p>

                <p className="text-indigo-300 text-xs font-semibold">
                  by {featured.author}
                  {featured.author_class
                    ? ` · ${featured.author_class}`
                    : ""}
                </p>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Sidebar Posts */}
        <div className="flex flex-col gap-5">
          {rest.map((post, i) => (
            <FadeIn key={post.id} delay={0.1 + i * 0.07}>
              <div
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 cursor-pointer hover:-translate-y-0.5 flex gap-3 p-3"
                onClick={go}
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={
                      post.cover_image ||
                      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&q=60"
                    }
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-between min-w-0">
                  <div>
                    <Badge label={post.category} className="mb-1" />

                    <p className="font-bold text-gray-900 text-sm leading-snug group-hover:text-indigo-700 transition-colors line-clamp-2">
                      {post.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                      <User size={11} className="text-indigo-600" />
                    </div>

                    <p className="text-xs text-gray-500 truncate">
                      {post.author}
                      {post.author_class
                        ? ` · ${post.author_class}`
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <button
              onClick={go}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-dashed border-indigo-200 text-indigo-600 text-sm font-semibold hover:bg-indigo-50 hover:border-indigo-400 transition-all"
            >
              <BookOpen size={16} />
              Read All Posts
            </button>
          </FadeIn>
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}