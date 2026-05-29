import { useState } from "react";
import {
  Bell, Calendar, Pin, Clock, ChevronRight,
  Megaphone, PartyPopper, CalendarDays,
  Users, BookOpen, Volume2,
} from "lucide-react";
import type { Notice } from "../types";
import FadeIn from "../components/ui/FadeIn";

// Notice type configurations
const noticeConfig: Record<string, { 
  icon: React.ReactNode; 
  color: string; 
  bgColor: string;
  borderColor: string;
  accentColor: string;
  label: string;
}> = {
  Exam: {
    icon: <BookOpen size={18} />,
    color: "from-red-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
    borderColor: "border-red-200",
    accentColor: "bg-red-500",
    label: "Examination",
  },
  Event: {
    icon: <PartyPopper size={18} />,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    accentColor: "bg-blue-500",
    label: "Event",
  },
  Holiday: {
    icon: <CalendarDays size={18} />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    accentColor: "bg-green-500",
    label: "Holiday",
  },
  Meeting: {
    icon: <Users size={18} />,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
    borderColor: "border-amber-200",
    accentColor: "bg-amber-500",
    label: "Meeting",
  },
};

export default function NoticesPage({ notices }: { notices: Notice[] }) {
  const [filter, setFilter] = useState("All");
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);
  const [showPinned, setShowPinned] = useState(true);

  const types = ["All", "Exam", "Event", "Holiday", "Meeting"];

  const filtered = filter === "All" 
    ? notices 
    : notices.filter((n) => n.type === filter);

  // Sort notices by date (newest first)
  const sortedNotices = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get pinned/important notices (first 2 newest)
  const pinnedNotices = sortedNotices.slice(0, 2);
  const regularNotices = sortedNotices.slice(2);

  // Format date nicely
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get time ago
  const getTimeAgo = (dateStr: string) => {
    const now = new Date();
    const date = new Date(dateStr);
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  // Notice Detail Modal
  if (selectedNotice) {
    const config = noticeConfig[selectedNotice.type] || noticeConfig["Event"];
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <FadeIn>
          <button
            onClick={() => setSelectedNotice(null)}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-8 transition-colors group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Notices
          </button>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            {/* Top accent bar */}
            <div className={`h-2 bg-gradient-to-r ${config.color}`} />

            <div className="p-8 sm:p-12 lg:p-14">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${config.color} text-white`}>
                      {config.icon}
                      {config.label}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={12} />
                      {getTimeAgo(selectedNotice.date)}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight">
                    {selectedNotice.title}
                  </h1>
                </div>
              </div>

              {/* Date badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl mb-8">
                <Calendar size={16} className="text-blue-500" />
                <span className="text-sm font-semibold text-gray-700">
                  Published: {formatDate(selectedNotice.date)}
                </span>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className={`p-6 sm:p-8 rounded-2xl ${config.bgColor} border ${config.borderColor} mb-8`}>
                  <div className="flex gap-4">
                    <div className={`w-1 flex-shrink-0 rounded-full bg-gradient-to-b ${config.color}`} />
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedNotice.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`h-2 bg-gradient-to-r ${config.color}`} />
          </div>
        </FadeIn>
      </div>
    );
  }

  // Main Notices List View
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Megaphone size={14} />
            Stay Informed
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Notice{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Board
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto">
            All official announcements, updates, and important information 
            from the school administration.
          </p>
        </div>
      </FadeIn>

      {/* ═══════════ QUICK STATS ═══════════ */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 lg:mb-14">
          {[
            { label: "Total Notices", value: notices.length, icon: <Bell size={16} className="text-blue-600" /> },
            { label: "This Month", value: notices.filter(n => new Date(n.date).getMonth() === new Date().getMonth()).length, icon: <Calendar size={16} className="text-green-600" /> },
            { label: "Exams", value: notices.filter(n => n.type === "Exam").length, icon: <BookOpen size={16} className="text-red-600" /> },
            { label: "Upcoming Events", value: notices.filter(n => n.type === "Event").length, icon: <PartyPopper size={16} className="text-purple-600" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-3 sm:p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mx-auto mb-2">
                {stat.icon}
              </div>
              <p className="text-lg sm:text-xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* ═══════════ FILTER BUTTONS ═══════════ */}
      <FadeIn delay={0.15}>
        <div className="flex justify-center gap-2 flex-wrap mb-10 lg:mb-14">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                filter === t
                  ? "bg-blue-700 text-white shadow-lg shadow-blue-500/25 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 border border-gray-200 shadow-sm"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* ═══════════ NOTICES LIST ═══════════ */}
      {sortedNotices.length === 0 ? (
        <FadeIn>
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Bell size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg font-medium">No notices found</p>
            <p className="text-gray-400 text-sm mt-1">
              Try selecting a different category
            </p>
          </div>
        </FadeIn>
      ) : (
        <>
          {/* Pinned Notices */}
          {showPinned && pinnedNotices.length > 0 && filter === "All" && (
            <div className="mb-8">
              <FadeIn>
                <div className="flex items-center gap-2 mb-4">
                  <Pin size={16} className="text-red-500" />
                  <h2 className="text-lg font-extrabold text-gray-900">Important Notices</h2>
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                </div>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-4">
                {pinnedNotices.map((n, i) => {
                  const config = noticeConfig[n.type] || noticeConfig["Event"];
                  return (
                    <FadeIn key={n.id} delay={i * 0.1}>
                      <div
                        onClick={() => setSelectedNotice(n)}
                        className={`group cursor-pointer relative overflow-hidden rounded-2xl border ${config.borderColor} ${config.bgColor} p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                      >
                        {/* Pin indicator */}
                        <div className="absolute top-3 right-3">
                          <Pin size={14} className="text-red-400 fill-red-400" />
                        </div>

                        {/* Decorative blob */}
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/40 rounded-full group-hover:scale-150 transition-transform duration-500" />

                        <div className="relative">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${config.color} text-white`}>
                              {config.icon}
                              {config.label}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock size={11} />
                              {getTimeAgo(n.date)}
                            </span>
                          </div>

                          <h3 className="font-extrabold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                            {n.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-3">
                            {n.body}
                          </p>

                          <div className="flex items-center justify-between pt-3 border-t border-gray-200/50">
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <Calendar size={12} />
                              {formatDate(n.date)}
                            </span>
                            <span className="flex items-center gap-1 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                              Read More
                              <ChevronRight size={12} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          )}

          {/* All Notices */}
          <div className="space-y-4">
            {(filter !== "All" ? sortedNotices : regularNotices).map((n, i) => {
              const config = noticeConfig[n.type] || noticeConfig["Event"];
              return (
                <FadeIn key={n.id} delay={i * 0.05}>
                  <div
                    onClick={() => setSelectedNotice(n)}
                    className="group cursor-pointer bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-x-1"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {/* Left accent dot */}
                      <div className={`hidden sm:block w-2 h-2 rounded-full ${config.accentColor} flex-shrink-0 group-hover:scale-150 transition-transform duration-300`} />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${config.color} text-white`}>
                            {config.label}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center gap-1">
                            <Clock size={11} />
                            {getTimeAgo(n.date)}
                          </span>
                        </div>

                        <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-1">
                          {n.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                          {n.body}
                        </p>
                      </div>

                      {/* Right: Date & Arrow */}
                      <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1 flex-shrink-0">
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Calendar size={11} />
                          {n.date}
                        </span>
                        <ChevronRight size={16} className="text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </>
      )}

      {/* ═══════════ BOTTOM INFO ═══════════ */}
      <FadeIn>
        <div className="mt-12 lg:mt-16 text-center py-8 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
          <Volume2 size={24} className="text-blue-500 mx-auto mb-3" />
          <h3 className="text-lg font-extrabold text-gray-900 mb-2">
            Never Miss an Update
          </h3>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            All notices are also displayed on the school notice board and shared 
            with parents through our official communication channels.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}