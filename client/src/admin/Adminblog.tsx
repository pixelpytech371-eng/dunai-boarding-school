import { useState } from "react";
import {
  Plus, Trash2, Edit3, RefreshCw, Star, Eye, EyeOff,
  BookOpen, Image as ImageIcon,
} from "lucide-react";
import Badge from "../components/ui/Badge";
import type { BlogPost } from "../types";

interface AdminBlogProps {
  posts: BlogPost[];
  setPosts: (v: BlogPost[]) => void;
}

const CATEGORIES = ["Essay", "Poetry", "Story", "Science", "Opinion"];

const EMPTY: Omit<BlogPost, "id" | "publishedAt"> = {
  title: "",
  author: "",
  authorClass: "",
  content: "",
  excerpt: "",
  category: "Essay",
  coverImage: "",
  featured: false,
};

export default function AdminBlog({ posts, setPosts }: AdminBlogProps) {
  const [form, setForm] = useState({ ...EMPTY });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [preview, setPreview] = useState<BlogPost | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ── Validation ──
  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.title.trim())   e.title   = "Title is required";
    if (!form.author.trim())  e.author  = "Author name is required";
    if (!form.content.trim()) e.content = "Content cannot be empty";
    if (!form.excerpt.trim()) e.excerpt = "Excerpt is required";
    return e;
  };

  // ── Save (create or update) ──
  const save = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    if (editingId !== null) {
      setPosts(
        posts.map((p) =>
          p.id === editingId
            ? { ...p, ...form }
            : p
        )
      );
      setEditingId(null);
    } else {
      const newPost: BlogPost = {
        id: Date.now(),
        ...form,
        publishedAt: new Date().toISOString().split("T")[0],
      };
      setPosts([newPost, ...posts]);
    }
    setForm({ ...EMPTY });
    setErrors({});
  };

  const startEdit = (post: BlogPost) => {
    setEditingId(post.id);
    setForm({
      title: post.title,
      author: post.author,
      authorClass: post.authorClass,
      content: post.content,
      excerpt: post.excerpt,
      category: post.category,
      coverImage: post.coverImage,
      featured: post.featured,
    });
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ ...EMPTY });
    setErrors({});
  };

  const deletePost = (id: number) => {
    if (window.confirm("Delete this post permanently?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  const toggleFeatured = (id: number) => {
    setPosts(posts.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p)));
  };

  // ── Field helper ──
  const Field = ({
    label, field, type = "text", placeholder, required = false,
  }: {
    label: string;
    field: keyof typeof form;
    type?: string;
    placeholder: string;
    required?: boolean;
  }) => (
    <div>
      <label className="text-xs font-semibold text-gray-600 block mb-1">
        {label}{required && " *"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={form[field] as string}
        onChange={(e) => {
          setForm({ ...form, [field]: e.target.value });
          setErrors({ ...errors, [field]: "" });
        }}
        className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all ${
          errors[field] ? "border-red-400 bg-red-50" : "border-gray-200"
        }`}
      />
      {errors[field] && (
        <p className="text-xs text-red-500 mt-1">{errors[field]}</p>
      )}
    </div>
  );

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      {/* ── Form panel (2/5 width) ── */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
          <h3 className="font-bold text-gray-900 mb-5 flex items-center gap-2">
            <BookOpen size={17} className="text-indigo-600" />
            {editingId !== null ? "Edit Post" : "Publish New Post"}
          </h3>

          <div className="space-y-3">
            <Field label="Post Title" field="title" placeholder="e.g. What the River Taught Me" required />

            <div className="grid grid-cols-2 gap-3">
              <Field label="Student Name" field="author" placeholder="Full name" required />
              <Field label="Class" field="authorClass" placeholder="e.g. Class 9" />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">
                Excerpt * <span className="text-gray-400 font-normal">(shown on cards)</span>
              </label>
              <textarea
                rows={2}
                placeholder="One or two sentences that hook the reader..."
                value={form.excerpt}
                onChange={(e) => { setForm({ ...form, excerpt: e.target.value }); setErrors({ ...errors, excerpt: "" }); }}
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none transition-all ${errors.excerpt ? "border-red-400 bg-red-50" : "border-gray-200"}`}
              />
              {errors.excerpt && <p className="text-xs text-red-500 mt-1">{errors.excerpt}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">
                Full Content * <span className="text-gray-400 font-normal">(blank line = new paragraph)</span>
              </label>
              <textarea
                rows={10}
                placeholder={"Write the student's full article here...\n\nLeave a blank line between paragraphs."}
                value={form.content}
                onChange={(e) => { setForm({ ...form, content: e.target.value }); setErrors({ ...errors, content: "" }); }}
                className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none font-mono transition-all ${errors.content ? "border-red-400 bg-red-50" : "border-gray-200"}`}
              />
              {errors.content && <p className="text-xs text-red-500 mt-1">{errors.content}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">
                <ImageIcon size={12} className="inline mr-1" />
                Cover Image URL <span className="text-gray-400 font-normal">(optional — Unsplash works great)</span>
              </label>
              <input
                type="url"
                placeholder="https://images.unsplash.com/..."
                value={form.coverImage}
                onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {form.coverImage && (
                <img
                  src={form.coverImage}
                  alt="preview"
                  className="mt-2 w-full rounded-xl object-cover border border-gray-100"
                  style={{ maxHeight: 120 }}
                  onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
                />
              )}
            </div>

            {/* Featured toggle */}
            <label className="flex items-center gap-3 cursor-pointer select-none p-3 rounded-xl bg-yellow-50 border border-yellow-100">
              <div
                onClick={() => setForm({ ...form, featured: !form.featured })}
                className={`w-10 h-6 rounded-full transition-colors relative ${form.featured ? "bg-yellow-400" : "bg-gray-300"}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${form.featured ? "left-5" : "left-1"}`} />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">Feature this post</p>
                <p className="text-xs text-gray-500">Shows as a hero banner on the Blog and Home page</p>
              </div>
            </label>

            {/* Action buttons */}
            <div className="flex gap-2 pt-1">
              <button
                onClick={save}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors text-sm"
              >
                <Plus size={15} />
                {editingId !== null ? "Update Post" : "Publish Post"}
              </button>
              {editingId !== null && (
                <button
                  onClick={cancelEdit}
                  className="px-4 py-2.5 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                  title="Cancel edit"
                >
                  <RefreshCw size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Posts list (3/5 width) ── */}
      <div className="lg:col-span-3 space-y-4">
        <p className="text-sm font-semibold text-gray-500 mb-2">
          {posts.length} post{posts.length !== 1 ? "s" : ""} published
        </p>

        {posts.length === 0 && (
          <div className="text-center py-16 text-gray-400 bg-white rounded-2xl border border-dashed border-gray-200">
            <BookOpen size={36} className="mx-auto mb-2 opacity-30" />
            <p className="text-sm font-medium">No posts yet. Publish the first one!</p>
          </div>
        )}

        {posts.map((post) => (
          <div
            key={post.id}
            className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all ${
              editingId === post.id ? "border-indigo-400 ring-2 ring-indigo-100" : "border-gray-100 hover:border-gray-200"
            }`}
          >
            <div className="flex gap-4 p-4">
              {/* Thumbnail */}
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-20 h-20 rounded-xl object-cover shrink-0 border border-gray-100"
                />
              ) : (
                <div className="w-20 h-20 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0 border border-indigo-100">
                  <BookOpen size={24} className="text-indigo-300" />
                </div>
              )}

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <Badge label={post.category} />
                  {post.featured && (
                    <span className="flex items-center gap-1 text-xs bg-yellow-100 text-yellow-700 font-semibold px-2 py-0.5 rounded-full">
                      <Star size={10} className="fill-yellow-500" /> Featured
                    </span>
                  )}
                  <span className="text-xs text-gray-400">{post.publishedAt}</span>
                </div>
                <p className="font-bold text-gray-900 text-sm leading-snug mb-0.5 line-clamp-1">
                  {post.title}
                </p>
                <p className="text-xs text-gray-500 mb-1 line-clamp-2">{post.excerpt}</p>
                <p className="text-xs text-indigo-600 font-semibold">
                  by {post.author} · {post.authorClass}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-1.5 shrink-0">
                <button
                  onClick={() => startEdit(post)}
                  className="p-2 rounded-lg hover:bg-indigo-50 text-indigo-600 transition-colors"
                  title="Edit"
                >
                  <Edit3 size={15} />
                </button>
                <button
                  onClick={() => setPreview(post)}
                  className="p-2 rounded-lg hover:bg-blue-50 text-blue-500 transition-colors"
                  title="Preview"
                >
                  <Eye size={15} />
                </button>
                <button
                  onClick={() => toggleFeatured(post.id)}
                  className={`p-2 rounded-lg transition-colors ${post.featured ? "text-yellow-500 hover:bg-yellow-50" : "text-gray-400 hover:bg-gray-50"}`}
                  title={post.featured ? "Unfeature" : "Feature"}
                >
                  <Star size={15} className={post.featured ? "fill-yellow-400" : ""} />
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="p-2 rounded-lg hover:bg-red-50 text-red-400 transition-colors"
                  title="Delete"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Quick preview modal ── */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          onClick={() => setPreview(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {preview.coverImage && (
              <img
                src={preview.coverImage}
                alt={preview.title}
                className="w-full object-cover rounded-t-2xl"
                style={{ maxHeight: 220 }}
              />
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Badge label={preview.category} />
                <span className="text-xs text-gray-400">{preview.publishedAt}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-1">{preview.title}</h2>
              <p className="text-sm text-indigo-600 font-semibold mb-4">
                by {preview.author} · {preview.authorClass}
              </p>
              <div className="space-y-4">
                {preview.content.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{para}</p>
                ))}
              </div>
              <button
                onClick={() => setPreview(null)}
                className="mt-6 flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                <EyeOff size={14} /> Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .line-clamp-1{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}
        .line-clamp-2{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}
      `}</style>
    </div>
  );
}