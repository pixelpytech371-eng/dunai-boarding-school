import {
  FileText, ArrowRight, Check, Users, UserCheck, Star, Award,
  Info, BookOpen, Bell, Calendar,  Quote, Play,
  ChevronRight, Sparkles, GraduationCap, MapPin, PhoneCall,
  Globe, Shield, Zap, Trophy, 
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";
import HomeBlogSection from "../components/Homeblogsection";
import type { Notice, Achievement, BlogPost, Page } from "../types";
import HeroImage from "../assets/images/hero.jpg";
import PrincipalImage from "../assets/images/Lokendra.jpg";
import HomeGalleryPreview from "../components/HomeGallaryPreview";
import HomeAchievementsPreview from "../components/HomeAchievementsPreview";
import type { Photo } from "../types";
import {
  SEED_NOTICES,
  SEED_PHOTOS,
  SEED_ACHIEVEMENTS,
  SEED_FACULTY,
  SEED_INQUIRIES,
  SEED_BLOGS
} from "../data/seedData";
import HomeNoticesPreview from "../components/HomeNoticesPreview";
import HomeQuickLinks from "../components/HomeQuickLinks";

interface HomePageProps {
  setPage: (p: Page) => void;
  notices: Notice[];
  achievements: Achievement[];
  blogs: BlogPost[];
  photos: Photo[];
}

const STATS = [
  { label: "Students", value: "300+", icon: <Users size={22} /> },
  { label: "Teachers", value: "10+", icon: <UserCheck size={22} /> },
  { label: "Years of Excellence", value: "30+", icon: <Star size={22} /> },
  { label: "Achievements", value: "50+", icon: <Award size={22} /> },
];

const QUICK_LINKS = [
  { page: "about" as Page, icon: <Info size={20} />, title: "About Us", desc: "Our history, vision, and the message from our principal.", color: "blue" },
  { page: "academics" as Page, icon: <BookOpen size={20} />, title: "Academic Programs", desc: "Explore classes, programs, and student activities.", color: "indigo" },
  { page: "faculty" as Page, icon: <Users size={20} />, title: "Faculty & Staff", desc: "Meet our dedicated team of educators.", color: "teal" },
  { page: "notices" as Page, icon: <Bell size={20} />, title: "Notice Board", desc: "Latest notices, holidays, and announcements.", color: "amber" },
  { page: "achievements" as Page, icon: <Award size={20} />, title: "Achievements", desc: "Celebrating our students' brilliant accomplishments.", color: "green" },
  { page: "admission" as Page, icon: <FileText size={20} />, title: "Admission", desc: "Inquire about joining Shree Janapriya.", color: "rose" },
];

export default function HomePage({ setPage, notices, achievements, blogs, photos }: HomePageProps) {
  const go = (p: Page) => { setPage(p); window.scrollTo(0, 0); };

  return (
    <div className="overflow-x-hidden">
<section className="relative min-h-screen flex items-center overflow-hidden">
  {/* Full width background image */}
  <div className="absolute inset-0">
    <img
      src={HeroImage}
      alt="School building"
      className="w-full h-full object-cover"
    />
    {/* Dark gradient overlay for text readability */}
    <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/80 to-slate-900/60" />
    <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-slate-900/30" />
  </div>

  {/* Subtle pattern overlay */}
  {/* <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
  /> */}

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
          <span>Est. 2050 B.S.</span>
          <span className="w-1 h-1 rounded-full bg-blue-400" />
          <span>Dunai, Nepal</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight">
          Dunai{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-linear-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
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
          since 2050 B.S.
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
            <span>30+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Right: Feature Cards */}
      <div
        className="relative lg:ml-auto hidden lg:block"
        style={{ animation: "heroSlideUp 0.8s ease 0.2s both" }}
      >
       
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300/60 z-10">
    <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
    <div className="w-5 h-8 rounded-full border-2 border-blue-300/40 flex justify-center pt-1.5">
      <div className="w-1 h-2 rounded-full bg-blue-300/60 animate-bounce" />
    </div>
  </div> */}
</section>

      <section className="relative bg-white -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group relative p-5 sm:p-6 rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
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
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-blue-50 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRINCIPAL'S MESSAGE ═══════════════════ */}
{/* ═══════════════════ PRINCIPAL'S MESSAGE ═══════════════════ */}
<section className="relative py-14 lg:py-20 overflow-hidden">
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50" />
  
  {/* Decorative blobs */}
  <div className="absolute top-10 right-10 w-56 h-56 bg-blue-200/20 rounded-full blur-3xl" />
  <div className="absolute bottom-10 left-10 w-56 h-56 bg-indigo-200/20 rounded-full blur-3xl" />

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeIn>
      <div className="relative">
        {/* Floating quote icon */}
        <div className="absolute -top-5 left-6 sm:left-10 z-20">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/25 rotate-3">
            <Quote size={20} className="text-white" />
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-200/30 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            
            {/* ═══ LEFT: PHOTO ═══ */}
            <div className="lg:col-span-4 relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
              {/* Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 30%, #ffffff 1px, transparent 1px), radial-gradient(circle at 80% 70%, #ffffff 1px, transparent 1px)`,
                  backgroundSize: '40px 40px, 60px 60px',
                }}
              />

              {/* Content - Centered */}
              <div className="relative h-full flex flex-col items-center justify-center p-6 sm:p-8 text-center min-h-[280px] lg:min-h-full">
                {/* Photo */}
                <div className="relative mb-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-[3px] border-white/30 shadow-xl overflow-hidden">
                    <img
                      src={PrincipalImage}
                      alt="Principal Lokendra Jaisi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status dot */}
                  <div className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white" />
                </div>

                {/* Info */}
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-0.5">
                  Lokendra Jaisi
                </h3>
                <p className="text-blue-200 text-xs font-semibold">
                  Principal
                </p>
              </div>
            </div>

            {/* ═══ RIGHT: MESSAGE ═══ */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full" />
                <div>
                  <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                    A Personal Note
                  </p>
                  <h3 className="text-base sm:text-lg font-extrabold text-gray-900">
                    Message from the Principal
                  </h3>
                </div>
              </div>

              {/* Quote */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-5 border border-blue-100 mb-4">
                <blockquote className="text-sm text-gray-700 leading-relaxed italic font-medium">
                  "Warm greetings and welcome to our official school website. I am 
                  <span className="font-bold text-blue-700"> Lokendra Jaisi</span>, 
                  the Principal. At our school, we are dedicated to providing a nurturing 
                  environment where academic excellence meets character development. We look 
                  forward to working together for our students' bright future."
                </blockquote>
              </div>

              {/* Secondary text - shorter */}
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-4">
                Our mission goes beyond classroom learning — we aim to foster creativity, 
                critical thinking, and strong values in every child. We believe that a 
                strong partnership between school and home is the key to student success.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-2.5">
                <button
                  onClick={() => go("about")}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Read Our Story
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => go("admission")}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 bg-white text-gray-700 text-xs sm:text-sm font-semibold rounded-lg border-2 border-gray-200 hover:border-green-300 hover:text-green-700 hover:bg-green-50 transition-all hover:-translate-y-0.5"
                >
                  Apply Now
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  </div>
</section>

      <HomeGalleryPreview photos={photos} setPage={setPage} />

      {/* ═══════════════════ QUICK LINKS ═══════════════════ */}

      <HomeQuickLinks links={QUICK_LINKS} setPage={setPage} />

      {/* ═══════════════════ LATEST NOTICES ═══════════════════ */}

      <HomeNoticesPreview notices={notices} setPage={setPage} />

      
      <HomeAchievementsPreview achievements={achievements} setPage={setPage} />

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
              Admissions Open for 2083 B.S.
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to Join the{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">
                DBS Family
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
                ThuliBheri Municiapility-3, Dunai, Dolpa, Nepal
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall size={14} />
                +977-01-4567890
              </span>
              <span className="flex items-center gap-2">
                <Globe size={14} />
                www.dbs.edu.np
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