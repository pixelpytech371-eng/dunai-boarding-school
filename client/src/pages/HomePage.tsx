import {
  FileText, ArrowRight, Check, Users, UserCheck, Star, Award,
  Info, BookOpen, Bell, Calendar, Heart, Quote, Play,
  ChevronRight, Sparkles, GraduationCap, MapPin, PhoneCall,
  Globe, Shield, Zap, Trophy, School, Building2,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";
import HomeBlogSection from "../components/Homeblogsection";
import type { Notice, Achievement, BlogPost, Page } from "../types";

interface HomePageProps {
  setPage: (p: Page) => void;
  notices: Notice[];
  achievements: Achievement[];
  blogs: BlogPost[];
}

const STATS = [
  { label: "Students", value: "1,200+", icon: <Users size={22} /> },
  { label: "Teachers", value: "60+", icon: <UserCheck size={22} /> },
  { label: "Years of Excellence", value: "37+", icon: <Star size={22} /> },
  { label: "Achievements", value: "200+", icon: <Award size={22} /> },
];

const QUICK_LINKS = [
  { page: "about" as Page, icon: <Info size={20} />, title: "About Us", desc: "Our history, vision, and the message from our principal.", color: "blue" },
  { page: "academics" as Page, icon: <BookOpen size={20} />, title: "Academic Programs", desc: "Explore classes, programs, and student activities.", color: "indigo" },
  { page: "faculty" as Page, icon: <Users size={20} />, title: "Faculty & Staff", desc: "Meet our dedicated team of educators.", color: "teal" },
  { page: "notices" as Page, icon: <Bell size={20} />, title: "Notice Board", desc: "Latest notices, holidays, and announcements.", color: "amber" },
  { page: "achievements" as Page, icon: <Award size={20} />, title: "Achievements", desc: "Celebrating our students' brilliant accomplishments.", color: "green" },
  { page: "admission" as Page, icon: <FileText size={20} />, title: "Admission", desc: "Inquire about joining Shree Janapriya.", color: "rose" },
];

export default function HomePage({ setPage, notices, achievements, blogs }: HomePageProps) {
  const go = (p: Page) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <div className="overflow-x-hidden">
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      {/* ═══════════════════ HERO SECTION - FULL WIDTH IMAGE ═══════════════════ */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Full width background image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1523050854058-8df90910e77f?w=1920&q=80"
      alt="School building"
      className="w-full h-full object-cover"
    />
    {/* Dark gradient overlay for text readability */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/30" />
  </div>

  {/* Subtle pattern overlay */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
  />

  {/* Floating orbs for subtle depth */}
  <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
  <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      {/* Left Content */}
      <div className="space-y-6" style={{ animation: "heroSlideUp 0.8s ease both" }}>
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-200 text-xs sm:text-sm font-semibold">
          <Sparkles size={14} className="text-yellow-400 animate-pulse" />
          <span>Est. 2045 B.S.</span>
          <span className="w-1 h-1 rounded-full bg-blue-400" />
          <span>Dunai, Nepal</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
          Dunai{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
              Boarding
            </span>
            {/* Underline decoration */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-blue-400/40"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path
                d="M0,6 Q25,0 50,6 Q75,12 100,6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
          </span>
          <br />
          <span className="text-blue-300">School</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-blue-100/90 leading-relaxed max-w-lg">
          Nurturing young minds with quality education, strong moral values, 
          and a passion for lifelong learning — shaping Nepal's future leaders 
          since 2045 B.S.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={() => go("admission")}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-white text-blue-900 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 text-sm sm:text-base overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FileText size={18} />
              Apply for Admission
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button
            onClick={() => go("about")}
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm sm:text-base hover:-translate-y-0.5"
          >
            <Play size={18} />
            Discover More
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-blue-200/70">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-green-400" />
            <span>CDC Nepal Affiliated</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy size={16} className="text-yellow-400" />
            <span>37+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Right: Feature Cards */}
      <div
        className="relative lg:ml-auto hidden lg:block"
        style={{ animation: "heroSlideUp 0.8s ease 0.2s both" }}
      >
        <div className="grid grid-cols-2 gap-4">
          {/* Feature Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mb-3">
              <GraduationCap size={20} className="text-green-400" />
            </div>
            <p className="text-white font-bold text-lg">Nursery – 8</p>
            <p className="text-blue-200/70 text-xs mt-1">Grade Levels</p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
              <Users size={20} className="text-blue-400" />
            </div>
            <p className="text-white font-bold text-lg">30:1</p>
            <p className="text-blue-200/70 text-xs mt-1">Student-Teacher Ratio</p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-3">
              <Star size={20} className="text-yellow-400" />
            </div>
            <p className="text-white font-bold text-lg">98%</p>
            <p className="text-blue-200/70 text-xs mt-1">Pass Rate</p>
          </div>

          {/* Feature Card 4 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3">
              <Award size={20} className="text-purple-400" />
            </div>
            <p className="text-white font-bold text-lg">200+</p>
            <p className="text-blue-200/70 text-xs mt-1">Achievements</p>
          </div>
        </div>

        {/* Admission badge */}
        <div className="mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-500/30 flex items-center justify-center animate-pulse">
            <Check size={20} className="text-green-400" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Admissions Open</p>
            <p className="text-blue-200/70 text-xs">Session 2082 B.S. — Limited Seats!</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300/60 z-10">
    <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
    <div className="w-5 h-8 rounded-full border-2 border-blue-300/40 flex justify-center pt-1.5">
      <div className="w-1 h-2 rounded-full bg-blue-300/60 animate-bounce" />
    </div>
  </div>
</section>

      {/* ═══════════════════ STATS BAR ═══════════════════ */}
      <section className="relative bg-white -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-black text-gray-900 tabular-nums">
                        {s.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
                        {s.label}
                      </p>
                    </div>
                  </div>
                  {/* Hover decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRINCIPAL'S MESSAGE ═══════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-50">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden">
                <div className="grid lg:grid-cols-5">
                  {/* Principal Photo Column */}
                  <div className="lg:col-span-2 relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 sm:p-12 flex flex-col items-center justify-center text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
                    <div className="relative">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white/30 shadow-2xl overflow-hidden mx-auto mb-6 ring-4 ring-white/10">
                        <img
                          src="https://i.pravatar.cc/300?img=68"
                          alt="Principal"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex justify-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                        Dr. Mohan Prasad Acharya
                      </h3>
                      <p className="text-blue-200 text-sm font-medium">
                        Principal
                      </p>
                      <p className="text-blue-300/70 text-xs mt-1">
                        M.Ed., Ph.D. in Educational Leadership
                      </p>
                      {/* Signature */}
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <p className="text-blue-200/70 text-xs italic">
                          "Education is the most powerful weapon<br />
                          which you can use to change the world"
                        </p>
                        <p className="text-blue-200/50 text-[10px] mt-2">— Nelson Mandela</p>
                      </div>
                    </div>
                  </div>

                  {/* Message Column */}
                  <div className="lg:col-span-3 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm mb-3">
                        <Quote size={16} />
                        Message from the Principal
                      </div>
                      <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic font-medium">
                        "At Shree Janapriya, we believe every child is a universe of 
                        possibilities waiting to unfold. Our mission transcends textbooks 
                        and examinations — we are committed to nurturing compassionate, 
                        curious, and capable individuals who will not only succeed in 
                        their careers but will also contribute meaningfully to our society 
                        and nation."
                      </blockquote>
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        For over three decades, our institution has stood as a beacon of 
                        quality education in Kathmandu. We blend traditional values with 
                        modern pedagogy, ensuring our students are rooted in Nepali culture 
                        while being globally competitive. Our dedicated faculty, state-of-the-art 
                        facilities, and vibrant learning environment create the perfect ecosystem 
                        for your child to thrive.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-4">
                        <button
                          onClick={() => go("about")}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors group"
                        >
                          Read Our Full Story
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                          onClick={() => go("admission")}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900 transition-colors group"
                        >
                          Start Admission Process
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════════ QUICK LINKS ═══════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <Zap size={14} />
                Explore Our School
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Everything You Need,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Right at Your Fingertips
                </span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Discover all the resources and information about Shree Janapriya 
                Secondary School in one place.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {QUICK_LINKS.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <button
                  onClick={() => go(c.page)}
                  className="group w-full text-left p-6 sm:p-7 rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-${c.color}-100 text-${c.color}-600 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    {c.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {c.desc}
                  </p>
                  <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                    <span>Explore</span>
                    <ChevronRight size={12} />
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ LATEST NOTICES ═══════════════════ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  <Bell size={14} />
                  Stay Updated
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                  Latest Notices
                </h2>
                <p className="text-gray-500 mt-2">
                  Important announcements and updates from the school administration
                </p>
              </div>
              <button
                onClick={() => go("notices")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 text-sm shadow-sm hover:shadow-md"
              >
                View All Notices
                <ArrowRight size={15} />
              </button>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {notices.slice(0, 4).map((n, i) => (
              <FadeIn key={n.id} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug">
                      {n.title}
                    </h3>
                    <Badge label={n.type} />
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    {n.body}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {n.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>Shree Janapriya Admin</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ACHIEVEMENTS ═══════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  <Trophy size={14} />
                  Our Pride
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                  Student Achievements
                </h2>
                <p className="text-gray-500 mt-2">
                  Celebrating the brilliance and hard work of our students
                </p>
              </div>
              <button
                onClick={() => go("achievements")}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-yellow-50 hover:border-yellow-300 hover:text-yellow-700 transition-all duration-300 text-sm shadow-sm hover:shadow-md"
              >
                View All Achievements
                <ArrowRight size={15} />
              </button>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.slice(0, 4).map((a, i) => (
              <FadeIn key={a.id} delay={i * 0.1}>
                <div className="group bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-yellow-100 rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Star size={18} className="text-yellow-600 fill-yellow-400" />
                  </div>
                  <p className="font-bold text-gray-900 mb-1">{a.student}</p>
                  <p className="text-sm font-semibold text-blue-700 mb-2 leading-snug">
                    {a.title}
                  </p>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                    {a.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge label={a.type} />
                    <span className="text-xs text-gray-400">{a.year} B.S.</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ STUDENT BLOG SECTION ═══════════════════ */}
      <HomeBlogSection posts={blogs} setPage={setPage} />

      {/* ═══════════════════ CTA BANNER ═══════════════════ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-blue-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-transparent to-transparent" />
        
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        />

        <FadeIn>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-200 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <GraduationCap size={16} />
              Admissions Open for 2082 B.S.
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to Join the{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                Janapriya Family
              </span>
              ?
            </h2>
            
            <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Give your child the gift of quality education in a nurturing 
              environment. Applications for the new academic session are now open.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => go("admission")}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl hover:bg-yellow-50 shadow-2xl shadow-blue-900/50 hover:shadow-yellow-500/30 transition-all duration-300 hover:-translate-y-1 text-base"
              >
                <FileText size={20} />
                Apply Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => go("contact")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 text-base"
              >
                <PhoneCall size={20} />
                Contact Us
              </button>
            </div>

            {/* Contact info row */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-blue-200/80">
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Janapriya Marg, Kathmandu-14
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall size={14} />
                +977-01-4567890
              </span>
              <span className="flex items-center gap-2">
                <Globe size={14} />
                www.janapriya.edu.np
              </span>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes heroSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}