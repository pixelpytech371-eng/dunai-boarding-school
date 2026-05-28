import { useState } from "react";
import {
  Star, Trophy, Award, Medal, Sparkles, Quote,
  ChevronRight, Calendar, GraduationCap, TrendingUp,
  Flame, Crown, Target, Heart, Users, School,
} from "lucide-react";
import type { Achievement } from "../types";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";

// Achievement type configurations
const typeConfig: Record<string, {
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  badgeColor: string;
  gradient: string;
}> = {
  Academic: {
    icon: <GraduationCap size={18} />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
    gradient: "from-blue-400 to-indigo-500",
  },
  Sports: {
    icon: <Trophy size={18} />,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    badgeColor: "bg-orange-100 text-orange-700",
    gradient: "from-orange-400 to-red-500",
  },
  Technology: {
    icon: <Target size={18} />,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    badgeColor: "bg-purple-100 text-purple-700",
    gradient: "from-purple-400 to-violet-500",
  },
  Cultural: {
    icon: <Heart size={18} />,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    borderColor: "border-pink-200",
    badgeColor: "bg-pink-100 text-pink-700",
    gradient: "from-pink-400 to-rose-500",
  },
};

export default function AchievementsPage({ achievements }: { achievements: Achievement[] }) {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [filter, setFilter] = useState("All");

  const types = ["All", "Academic", "Sports", "Technology", "Cultural"];
  
  const filtered = filter === "All"
    ? achievements
    : achievements.filter((a) => a.type === filter);

  // Sort by year (newest first)
  const sorted = [...filtered].sort((a, b) => parseInt(b.year) - parseInt(a.year));

  // Calculate stats
  const totalAchievements = achievements.length;
  const uniqueStudents = [...new Set(achievements.map(a => a.student))].length;
  const goldMedals = achievements.filter(a => 
    a.title.toLowerCase().includes("gold") || 
    a.title.toLowerCase().includes("first") || 
    a.title.toLowerCase().includes("winner") ||
    a.title.toLowerCase().includes("champion")
  ).length;

  // Detail Modal
  if (selectedAchievement) {
    const config = typeConfig[selectedAchievement.type] || typeConfig["Academic"];
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <FadeIn>
          <button
            onClick={() => setSelectedAchievement(null)}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-8 transition-colors group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Achievements
          </button>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            <div className={`h-2 bg-gradient-to-r ${config.gradient}`} />

            <div className="grid lg:grid-cols-5">
              {/* Left: Student Photo */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 p-8 sm:p-12 flex flex-col items-center justify-center text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
                
                <div className="relative">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden mx-auto mb-6 ring-8 ring-white/5">
                    <img
                      src={selectedAchievement.photo}
                      alt={selectedAchievement.student}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1 mb-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedAchievement.student}
                    </h2>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${config.badgeColor}`}>
                      {selectedAchievement.type}
                    </span>
                  </div>

                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Details */}
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-14">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-lg`}>
                      {config.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Achievement • {selectedAchievement.year} B.S.
                      </span>
                    </div>
                  </div>

                  <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4 tracking-tight">
                    {selectedAchievement.title}
                  </h1>

                  <div className={`p-6 rounded-2xl ${config.bgColor} border ${config.borderColor} mb-6`}>
                    <div className="flex gap-4">
                      <div className={`w-1 flex-shrink-0 rounded-full bg-gradient-to-b ${config.gradient}`} />
                      <div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {selectedAchievement.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <Quote size={24} className="text-gray-300 absolute top-4 left-4" />
                    <blockquote className="pl-8 text-gray-600 italic">
                      "This achievement wouldn't have been possible without the support of my teachers 
                      and the excellent facilities at our school. I'm proud to be a student of 
                      Dunai Boarding School."
                    </blockquote>
                    <p className="text-right text-sm text-gray-500 mt-3 font-semibold">
                      — {selectedAchievement.student}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`h-2 bg-gradient-to-r ${config.gradient}`} />
          </div>
        </FadeIn>
      </div>
    );
  }

  // Main Grid View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Crown size={14} />
            Hall of Fame
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Shining Stars
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-2xl mx-auto">
            Celebrating the brilliant achievements of our students who make us proud 
            every single day.
          </p>
        </div>
      </FadeIn>

      {/* ═══════════ STATS ═══════════ */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-12 lg:mb-16 max-w-2xl mx-auto">
          {[
            { value: totalAchievements, label: "Total Achievements", icon: <Award size={18} className="text-yellow-600" /> },
            { value: uniqueStudents, label: "Brilliant Students", icon: <Users size={18} className="text-blue-600" /> },
            { value: goldMedals, label: "Gold & First Place", icon: <Medal size={18} className="text-amber-600" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-3">
                {stat.icon}
              </div>
              <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
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
                  ? "bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-lg shadow-yellow-500/25 scale-105"
                  : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 border border-gray-200 shadow-sm"
              }`}
            >
              {t === "All" && "🏆"} {t}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* ═══════════ ACHIEVEMENTS GRID ═══════════ */}
      {sorted.length === 0 ? (
        <FadeIn>
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Trophy size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg font-medium">No achievements in this category</p>
            <p className="text-gray-400 text-sm mt-1">Try selecting a different category</p>
          </div>
        </FadeIn>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {sorted.map((a, i) => {
            const config = typeConfig[a.type] || typeConfig["Academic"];
            return (
              <FadeIn key={a.id} delay={i * 0.08}>
                <div
                  onClick={() => setSelectedAchievement(a)}
                  className={`group cursor-pointer bg-white rounded-2xl border ${config.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                >
                  {/* Student Photo Section */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={a.photo}
                      alt={a.student}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Year badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        {a.year} B.S.
                      </span>
                    </div>

                    {/* Type badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-gradient-to-r ${config.color} text-white shadow-lg`}>
                        {config.icon}
                        {a.type}
                      </span>
                    </div>

                    {/* Student name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-extrabold text-lg drop-shadow-lg">
                        {a.student}
                      </p>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={10}
                            className="text-yellow-400 fill-yellow-400 drop-shadow"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                      {a.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-3">
                      {a.desc}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <Badge label={a.type} />
                      <span className="flex items-center gap-1 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        View Details
                        <ChevronRight size={12} />
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      )}

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <FadeIn>
        <div className="mt-16 lg:mt-20 text-center py-10 px-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl border border-yellow-200">
          <Flame size={28} className="text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-extrabold text-gray-900 mb-2">
            Your Child Could Be Next!
          </h3>
          <p className="text-gray-600 max-w-lg mx-auto text-sm">
            At Dunai Boarding School, we nurture talent and celebrate every achievement. 
            Join us and watch your child shine.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}