import {
   Users, GraduationCap, Award, Star,
   Heart, Quote,
  Briefcase, ChevronRight,
} from "lucide-react";
import { useState } from "react";
import FadeIn from "../components/ui/FadeIn";
import type { Faculty } from "../types";
import { useLanguage } from "../hooks/useLanguage";

// Subject icons mapping
const subjectIcons: Record<string, React.ReactNode> = {
  "Mathematics": <span className="text-blue-600 font-bold">∑</span>,
  "Science": <FlaskIcon />,
  "Nepali": <span className="text-red-600 font-bold">अ</span>,
  "English": <span className="text-indigo-600 font-bold">A</span>,
  "Social Studies": <GlobeIcon />,
  "Computer Science": <CodeIcon />,
};

const translations = {
  en: {
    ourTeam: "Our Team",
    meetOur: "Meet Our",
    educators: "Educators",
    facultyDesc: "Passionate, experienced, and dedicated teachers who inspire, guide, and nurture every child's potential.",
    backToTeachers: "Back to All Teachers",
    about: "About",
    teachingPhilosophy: "Teaching Philosophy",
    philosophy1: "Student-centered learning approach",
    philosophy2: "Encourages critical thinking",
    philosophy3: "Creates inclusive classroom environment",
    philosophy4: "Regular parent communication",
    philosophy5: "Uses modern teaching methods",
    philosophy6: "Mentors students beyond academics",
    yearsExp: "15+ Years",
    mastersDegree: "Masters Degree",
    viewProfile: "View Profile",
    noTeachers: "No teachers found.",
    tryDifferent: "Try a different search term.",
    heartOfSchool: "Our Teachers Are the Heart of Our School",
    heartDesc: "Every educator at Dunai Boarding School is carefully selected for their expertise, passion, and commitment to shaping young minds.",
    searchPlaceholder: "Search by name or subject...",
  },
  ne: {
    ourTeam: "हाम्रो टोली",
    meetOur: "भेट्नुहोस् हाम्रा",
    educators: "शिक्षकहरूलाई",
    facultyDesc: "हरेक बच्चाको क्षमतालाई प्रेरित, मार्गदर्शन र पोषण गर्ने जोशिलो, अनुभवी र समर्पित शिक्षकहरू।",
    backToTeachers: "सबै शिक्षकहरूमा फर्कनुहोस्",
    about: "बारेमा",
    teachingPhilosophy: "शिक्षण दर्शन",
    philosophy1: "विद्यार्थी-केन्द्रित सिकाइ दृष्टिकोण",
    philosophy2: "आलोचनात्मक सोचलाई प्रोत्साहन",
    philosophy3: "समावेशी कक्षाकोठा वातावरण सिर्जना",
    philosophy4: "नियमित अभिभावक संचार",
    philosophy5: "आधुनिक शिक्षण विधिहरूको प्रयोग",
    philosophy6: "शैक्षिकभन्दा बाहिर पनि विद्यार्थीहरूको मार्गदर्शन",
    yearsExp: "१५+ वर्ष",
    mastersDegree: "स्नातकोत्तर",
    viewProfile: "प्रोफाइल हेर्नुहोस्",
    noTeachers: "कुनै शिक्षक फेला परेन।",
    tryDifferent: "फरक खोज शब्द प्रयास गर्नुहोस्।",
    heartOfSchool: "हाम्रा शिक्षकहरू हाम्रो विद्यालयको मुटु हुन्",
    heartDesc: "दुनै बोर्डिङ स्कूलका हरेक शिक्षक उनीहरूको विशेषज्ञता, जोश र युवा दिमागहरूलाई आकार दिने प्रतिबद्धताको लागि सावधानीपूर्वक छानिएका छन्।",
    searchPlaceholder: "नाम वा विषय अनुसार खोज्नुहोस्...",
  },
};

// Small inline SVG icons (to avoid importing too many lucide icons)
function FlaskIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v6.5L4.46 16.5A2 2 0 0 0 6.14 20h11.72a2 2 0 0 0 1.68-3.5L15 9.5V3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// Color themes for subjects
const subjectColors: Record<string, { bg: string; border: string; text: string; badge: string; gradient: string }> = {
  "Mathematics": { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100 text-blue-700", gradient: "from-blue-50 to-blue-100" },
  "Science": { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", gradient: "from-emerald-50 to-emerald-100" },
  "Nepali": { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", badge: "bg-red-100 text-red-700", gradient: "from-red-50 to-red-100" },
  "English": { bg: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700", gradient: "from-indigo-50 to-indigo-100" },
  "Social Studies": { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-100 text-purple-700", gradient: "from-purple-50 to-purple-100" },
  "Computer Science": { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700", badge: "bg-cyan-100 text-cyan-700", gradient: "from-cyan-50 to-cyan-100" },
};

export default function FacultyPage({ faculty }: { faculty: Faculty[] }) {
  const [selectedTeacher, setSelectedTeacher] = useState<Faculty | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const language = useLanguage();
const t = translations[language];

  const filteredFaculty = faculty.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Stats
  const totalTeachers = faculty.length;
  const uniqueSubjects = [...new Set(faculty.map((f) => f.subject))].length;

  // Teacher Detail Modal
  if (selectedTeacher) {
    const colors = subjectColors[selectedTeacher.subject] || subjectColors["Mathematics"];
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <FadeIn>
          <button
            onClick={() => setSelectedTeacher(null)}
            className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 mb-8 transition-colors group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to All Teachers
          </button>

          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            {/* Top gradient bar */}
            <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />

            <div className="grid lg:grid-cols-5">
              {/* Left: Photo Column */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 p-8 sm:p-12 flex flex-col items-center justify-center text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />
                
                <div className="relative">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white/20 shadow-2xl overflow-hidden mx-auto mb-6 ring-8 ring-white/5">
                    <img
                      src={selectedTeacher.photo}
                      alt={selectedTeacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-1 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {selectedTeacher.name}
                    </h2>
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${colors.badge}`}>
                      {selectedTeacher.subject}
                    </span>
                  </div>

                  {/* Quick stats */}
                  <div className="flex justify-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={14} />
                      <span>{t.yearsExp}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award size={14} />
                      <span>{t.mastersDegree}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Details Column */}
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-14">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Quote size={18} className="text-blue-500" />
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      {t.about} {selectedTeacher.name.split(" ")[0]}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedTeacher.bio}
                  </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-gray-100">
                  <h3 className="font-bold text-gray-900 text-lg flex items-center gap-2">
                    <Star size={18} className="text-yellow-500 fill-yellow-500" />
                    {t.teachingPhilosophy}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      t.philosophy1,
                      t.philosophy2,
                      t.philosophy3,
                      t.philosophy4,
                      t.philosophy5,
                      t.philosophy6,
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />
          </div>
        </FadeIn>
      </div>
    );
  }

  // Main Faculty Grid View
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Users size={14} />
            {t.ourTeam}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            {t.meetOur}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t.educators}
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto">
            {t.facultyDesc}
          </p>
        </div>
      </FadeIn>

      

      {/* ═══════════ TEACHER CARDS GRID ═══════════ */}
      {filteredFaculty.length === 0 ? (
        <FadeIn>
          <div className="text-center py-20">
            <Users size={48} className="mx-auto mb-4 text-gray-300" />
            <p className="text-gray-400 text-lg">{t.noTeachers}</p>
            <p className="text-gray-400 text-sm">{t.tryDifferent}</p>
          </div>
        </FadeIn>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredFaculty.map((f, i) => {
            const colors = subjectColors[f.subject] || subjectColors["Mathematics"];
            return (
              <FadeIn key={f.id} delay={i * 0.07}>
                <div
                  onClick={() => setSelectedTeacher(f)}
                  className={`group cursor-pointer bg-gradient-to-br ${colors.gradient} border ${colors.border} rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative`}
                >
                  {/* Decorative element */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/30 rounded-full group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative">
                    {/* Photo & Info Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={f.photo}
                          alt={f.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
                        />
                        {/* Online indicator */}
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-extrabold text-gray-900 text-base sm:text-lg truncate group-hover:text-blue-700 transition-colors">
                          {f.name}
                        </h3>
                        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mt-1 ${colors.badge}`}>
                          {f.subject}
                        </span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">
                      {f.bio}
                    </p>

                    {/* View Profile Link */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200/50">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <GraduationCap size={14} />
                        <span>{t.mastersDegree}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                        {t.viewProfile}
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
        <div className="text-center mt-16 lg:mt-20 py-8 px-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
          <Heart size={28} className="text-red-400 mx-auto mb-4" />
          <h3 className="text-xl font-extrabold text-gray-900 mb-2">
            {t.heartOfSchool}
          </h3>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            {t.heartDesc}
          </p>
        </div>
      </FadeIn>
    </div>
  );
}