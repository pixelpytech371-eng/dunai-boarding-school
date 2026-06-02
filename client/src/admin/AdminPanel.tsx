import React, { useState, useEffect } from "react";
import {
  BarChart2, Bell, Camera, Award, Users, FileText,
  Shield, LogOut, BookOpen,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";

import AdminNotices      from "./AdminNotices";
import AdminGallery      from "./AdminGallery";
import AdminAchievements from "./AdminAchievements";
import AdminFaculty      from "./AdminFaculty";
import AdminInquiries    from "./AdminInquiries";
import AdminBlog         from "./Adminblog";

import type {
  Notice, Photo, Achievement, Faculty, Inquiry, BlogPost,
} from "../types";

// ── Stat card ────────────────────────────────────────────────────────────────
function StatCard({
  label, value, icon, colorClasses,
}: { label: string; value: string | number; icon: React.ReactNode; colorClasses: string }) {
  return (
    <div className={`p-5 rounded-2xl border flex items-center gap-4 ${colorClasses}`}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/60 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-extrabold">{value}</p>
        <p className="text-xs font-semibold opacity-80">{label}</p>
      </div>
    </div>
  );
}

// ── Dashboard overview ───────────────────────────────────────────────────────
function Dashboard({
  notices, photos, achievements, inquiries, blogs,
}: {
  notices: Notice[]; photos: Photo[]; achievements: Achievement[];
  inquiries: Inquiry[]; blogs: BlogPost[];
}) {
  const pending = inquiries.filter((i) => i.status === "Pending").length;

  

  return (
    <FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
        <StatCard label="Notices"          value={notices.length}      icon={<Bell     size={20} className="text-blue-700"   />} colorClasses="border-blue-200   bg-blue-50   text-blue-900"   />
        <StatCard label="Gallery Photos"   value={photos.length}       icon={<Camera   size={20} className="text-purple-700" />} colorClasses="border-purple-200 bg-purple-50 text-purple-900" />
        <StatCard label="Achievements"     value={achievements.length} icon={<Award    size={20} className="text-yellow-700" />} colorClasses="border-yellow-200 bg-yellow-50 text-yellow-900" />
        <StatCard label="Blog Posts"       value={blogs.length}        icon={<BookOpen size={20} className="text-indigo-700" />} colorClasses="border-indigo-200 bg-indigo-50 text-indigo-900" />
        <StatCard label="Pending Inquiries" value={pending}            icon={<FileText size={20} className="text-red-700"    />} colorClasses="border-red-200    bg-red-50    text-red-900"    />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Recent notices */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Bell size={15} className="text-blue-600" /> Recent Notices
          </h3>
          {notices.slice(0, 5).map((n) => (
            <div key={n.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 gap-2">
              <p className="text-sm text-gray-700 truncate">{n.title}</p>
              <Badge label={n.type} />
            </div>
          ))}
          {notices.length === 0 && <p className="text-sm text-gray-400">No notices yet.</p>}
        </div>

        {/* Recent blog posts */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <BookOpen size={15} className="text-indigo-600" /> Recent Blog Posts
          </h3>
          {blogs.slice(0, 5).map((b) => (
            <div key={b.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 gap-2">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{b.title}</p>
                <p className="text-xs text-gray-400">{b.author} · {b.authorClass}</p>
              </div>
              <Badge label={b.category} />
            </div>
          ))}
          {blogs.length === 0 && <p className="text-sm text-gray-400">No posts yet.</p>}
        </div>

        {/* Recent inquiries */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm md:col-span-2">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FileText size={15} className="text-red-500" /> Recent Inquiries
          </h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {inquiries.slice(0, 4).map((q) => (
              <div key={q.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl gap-2">
                <div>
                  <p className="text-sm font-semibold text-gray-800">{q.name}</p>
                  <p className="text-xs text-gray-400">{q.grade} · {q.date}</p>
                </div>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${q.status === "Pending" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                  {q.status}
                </span>
              </div>
            ))}
          </div>
          {inquiries.length === 0 && <p className="text-sm text-gray-400">No inquiries yet.</p>}
        </div>
      </div>
    </FadeIn>
  );
}

// ── Tab config ────────────────────────────────────────────────────────────────
const TABS = [
  { id: "dashboard",    label: "Dashboard",    icon: <BarChart2 size={16} /> },
  { id: "blog",         label: "Blog",         icon: <BookOpen  size={16} /> },
  { id: "notices",      label: "Notices",      icon: <Bell      size={16} /> },
  { id: "gallery",      label: "Gallery",      icon: <Camera    size={16} /> },
  { id: "achievements", label: "Achievements", icon: <Award     size={16} /> },
  { id: "faculty",      label: "Faculty",      icon: <Users     size={16} /> },
  { id: "inquiries",    label: "Inquiries",    icon: <FileText  size={16} /> },
];

// ── AdminPanel ────────────────────────────────────────────────────────────────
interface AdminPanelProps {
  notices:      Notice[];      setNotices:      (v: Notice[]) => void;
  photos:       Photo[];       setPhotos:       (v: Photo[]) => void;
  achievements: Achievement[]; setAchievements: (v: Achievement[]) => void;
  faculty:      Faculty[];     setFaculty:      (v: Faculty[]) => void;
  inquiries:    Inquiry[];     setInquiries:    (v: Inquiry[]) => void;
  blogs:        BlogPost[];    setBlogs:        (v: BlogPost[]) => void;
  onLogout:     () => void;
}

export default function AdminPanel({
  notices, setNotices,
  photos, setPhotos,
  achievements, setAchievements,
  faculty, setFaculty,
  inquiries, setInquiries,
  blogs, setBlogs,
  onLogout,
}: AdminPanelProps) {
  const [tab, setTab] = useState("dashboard");

  useEffect(() => {
    Promise.all([
      fetch("/api/notices").then(r => r.json()),
      fetch("/api/photos").then(r => r.json()),
      fetch("/api/achievements").then(r => r.json()),
      fetch("/api/faculty").then(r => r.json()),
      fetch("/api/inquiries").then(r => r.json()),
      fetch("/api/blogs").then(r => r.json()),
    ]).then(([n, p, a, f, i, b]) => {
      setNotices(n);
      setPhotos(p);
      setAchievements(a);
      setFaculty(f);
      setInquiries(i);
      setBlogs(b);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <FadeIn>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center">
              <Shield size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-900">Admin Panel</h1>
              <p className="text-xs text-gray-500">Shree Janapriya Secondary School</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut size={15} /> Logout
          </button>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 flex-wrap bg-gray-100 p-1.5 rounded-2xl mb-8 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                tab === t.id
                  ? "bg-white text-indigo-700 shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* Tab content */}
      {tab === "dashboard"    && <Dashboard notices={notices} photos={photos} achievements={achievements} inquiries={inquiries} blogs={blogs} />}
      {tab === "blog"         && <AdminBlog         posts={blogs}          setPosts={setBlogs}           />}
      {tab === "notices"      && <AdminNotices      notices={notices}      setNotices={setNotices}       />}
      {tab === "gallery"      && <AdminGallery      photos={photos}        setPhotos={setPhotos}         />}
      {tab === "achievements" && <AdminAchievements achievements={achievements} setAchievements={setAchievements} />}
      {tab === "faculty"      && <AdminFaculty      faculty={faculty}      setFaculty={setFaculty}       />}
      {tab === "inquiries"    && <AdminInquiries    inquiries={inquiries}  setInquiries={setInquiries}   />}
    </div>
  );
}