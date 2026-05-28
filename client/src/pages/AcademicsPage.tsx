import {
  CheckCircle, Cpu, GraduationCap, Heart, Star,
  BookOpen, BookMarked, Sparkles, Trophy, Users, Globe,
  FlaskConical, Monitor, Library, Music, Dumbbell,
  Palette, Code2, Lightbulb, Target, Rocket,
  Calendar, Clock, Zap, Brain, School,
  FileText, ArrowRight, Atom, Calculator, PenTool,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";

export default function AcademicsPage() {
  const programs = [
    {
      level: "Early Childhood",
      grade: "Nursery – KG",
      age: "3 – 5 years",
      desc: "Play-based learning that sparks curiosity and builds the foundation for lifelong learning through exploration, creativity, and social interaction in a warm, nurturing environment.",
      icon: <Heart size={24} />,
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
      iconBg: "bg-pink-100 text-pink-600",
      badgeBg: "bg-pink-500",
      highlights: ["Montessori-inspired activities", "Language & motor skill development", "Music, art & movement", "Social & emotional learning", "Indoor & outdoor play areas"],
    },
    {
      level: "Primary",
      grade: "Class 1 – 5",
      age: "6 – 11 years",
      desc: "Strong foundational education aligned with the national curriculum, emphasizing core subjects while nurturing creativity, critical thinking, and moral values.",
      icon: <BookOpen size={24} />,
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-600",
      badgeBg: "bg-blue-500",
      highlights: ["Nepali, English, Mathematics", "Science & Social Studies", "Computer basics", "Arts & Physical Education", "Moral & ethical education"],
    },
    {
      level: "Upper Primary",
      grade: "Class 6 – 8",
      age: "11 – 14 years",
      desc: "Advanced curriculum with specialized subjects, project-based learning, and preparation for secondary education with focus on analytical and problem-solving skills.",
      icon: <Cpu size={24} />,
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-violet-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100 text-purple-600",
      badgeBg: "bg-purple-500",
      highlights: ["Computer Science & Coding", "Advanced Mathematics", "Physics & Chemistry basics", "Research & project work", "Career exploration"],
    },
  ];

  const activities = [
    { name: "Annual Science Exhibition", icon: <FlaskConical size={16} />, category: "Academic" },
    { name: "Spelling Bee Competition", icon: <BookOpen size={16} />, category: "Academic" },
    { name: "Quiz Competition", icon: <Brain size={16} />, category: "Academic" },
    { name: "Math Olympiad Training", icon: <Calculator size={16} />, category: "Academic" },
    { name: "School Magazine", icon: <PenTool size={16} />, category: "Creative" },
    { name: "Music & Dance Club", icon: <Music size={16} />, category: "Creative" },
    { name: "Art & Craft Workshop", icon: <Palette size={16} />, category: "Creative" },
    { name: "Football Team", icon: <Trophy size={16} />, category: "Sports" },
    { name: "Cricket Team", icon: <Trophy size={16} />, category: "Sports" },
    { name: "Volleyball Team", icon: <Dumbbell size={16} />, category: "Sports" },
    { name: "Eco & Gardening Club", icon: <Globe size={16} />, category: "Community" },
    { name: "Computer & Coding Club", icon: <Code2 size={16} />, category: "Technology" },
  ];

  const facilities = [
    {
      icon: <School size={24} className="text-blue-600" />,
      title: "Modern Classrooms",
      desc: "Spacious, well-ventilated classrooms with comfortable seating, whiteboards, and learning aids for optimal engagement.",
      stats: "Smart Setup",
    },
    {
      icon: <FlaskConical size={24} className="text-green-600" />,
      title: "Science Laboratory",
      desc: "Well-equipped lab with modern apparatus for Physics, Chemistry, and Biology experiments and hands-on learning.",
      stats: "Practical Learning",
    },
    {
      icon: <Monitor size={24} className="text-purple-600" />,
      title: "Computer Lab",
      desc: "Dedicated computer room with modern systems, internet access, and supervised learning for digital literacy.",
      stats: "Tech Enabled",
    },
    {
      icon: <Library size={24} className="text-amber-600" />,
      title: "Library",
      desc: "Rich collection of 3,000+ books in Nepali and English with comfortable reading spaces for young readers.",
      stats: "3,000+ Books",
    },
    {
      icon: <Trophy size={24} className="text-red-600" />,
      title: "Playground",
      desc: "Large outdoor space for football, cricket, volleyball, athletics, and supervised physical activities.",
      stats: "Sports Zone",
    },
    {
      icon: <Music size={24} className="text-indigo-600" />,
      title: "Activity Hall",
      desc: "Multipurpose hall for cultural programs, music classes, indoor games, and school assemblies.",
      stats: "Creative Space",
    },
  ];

  const examResults = [
    { year: "2080 B.S.", passRate: "98%", distinction: "42%", students: "65", exam: "Class 8 Final" },
    { year: "2079 B.S.", passRate: "96%", distinction: "38%", students: "58", exam: "Class 8 Final" },
    { year: "2078 B.S.", passRate: "95%", distinction: "35%", students: "52", exam: "Class 8 Final" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Sparkles size={14} />
            Academic Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Building Strong{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Foundations
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A nurturing learning environment from Nursery to Class 8, designed to develop 
            curious minds, strong character, and a lifelong love for learning.
          </p>
          
          {/* Grade range badge */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-2">
              <Heart size={16} className="text-pink-500" />
              <span className="text-sm font-bold text-gray-700">Nursery</span>
            </div>
            <div className="w-px h-5 bg-gray-300" />
            <ArrowRight size={14} className="text-gray-400" />
            <div className="w-px h-5 bg-gray-300" />
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-purple-500" />
              <span className="text-sm font-bold text-gray-700">Class 8</span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ═══════════ PROGRAM LEVELS - 3 CARDS ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <School size={14} />
              Our Programs
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              Three Stages of{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Development
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              Each stage is carefully designed to match your child's developmental needs, 
              ensuring a smooth and joyful learning journey.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div className={`group relative bg-gradient-to-br ${p.bgColor} border ${p.borderColor} rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full`}>
                {/* Decorative gradient blob */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${p.color} rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500`} />
                
                <div className="relative flex-1">
                  {/* Icon & Badge */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {p.icon}
                    </div>
                    <span className={`${p.badgeBg} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                      {p.grade}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
                    {p.level}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Clock size={14} />
                    <span>Age: {p.age}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                    {p.desc}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    {p.highlights.map((h, j) => (
                      <div key={j} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle size={10} className="text-white" />
                        </div>
                        {h}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`mt-6 h-1 rounded-full bg-gradient-to-r ${p.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════ ACADEMIC RESULTS ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15)_0%,_transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
            
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-white/10 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-white/10">
                  <Trophy size={14} />
                  Our Track Record
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-2">
                  Class 8 Final Results
                </h2>
                <p className="text-blue-200 max-w-2xl mx-auto">
                  Our students consistently achieve outstanding results, reflecting our 
                  commitment to academic excellence at every level.
                </p>
              </div>

              {/* Results cards */}
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                {examResults.map((result, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-sm font-bold text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                      {result.year}
                    </span>
                    <div className="mt-4 mb-2">
                      <span className="text-4xl sm:text-5xl font-black text-white">
                        {result.passRate}
                      </span>
                    </div>
                    <p className="text-blue-300 text-sm font-semibold mb-1">Pass Rate</p>
                    <p className="text-blue-400/60 text-xs">{result.exam}</p>
                    <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10">
                      <div>
                        <p className="text-white font-bold text-lg">{result.distinction}</p>
                        <p className="text-blue-300/70 text-xs">Distinction</p>
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">{result.students}</p>
                        <p className="text-blue-300/70 text-xs">Students</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ STUDENT ACTIVITIES & CLUBS ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Zap size={14} />
              Beyond the Classroom
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              Activities &{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Clubs
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              Holistic development through a diverse range of extracurricular activities 
              that nurture talents, build character, and create lasting memories.
            </p>
          </div>
        </FadeIn>

        {/* Activities by category */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              category: "Academic",
              color: "from-blue-500 to-blue-700",
              icon: <Brain size={20} className="text-white" />,
            },
            {
              category: "Creative",
              color: "from-pink-500 to-rose-600",
              icon: <Palette size={20} className="text-white" />,
            },
            {
              category: "Sports",
              color: "from-green-500 to-emerald-600",
              icon: <Trophy size={20} className="text-white" />,
            },
            {
              category: "Technology",
              color: "from-purple-500 to-violet-600",
              icon: <Code2 size={20} className="text-white" />,
            },
          ].map(({ category, color, icon }) => {
            const categoryActivities = activities.filter((a) => a.category === category);
            return (
              <FadeIn key={category} delay={0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
                  {/* Category header */}
                  <div className={`bg-gradient-to-r ${color} p-4 text-white`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        {icon}
                      </div>
                      <div>
                        <p className="font-bold">{category}</p>
                        <p className="text-xs text-white/70">
                          {categoryActivities.length} activities
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Activity list */}
                  <div className="p-4 space-y-1.5">
                    {categoryActivities.map((activity, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-default"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-gray-600">
                          {activity.icon}
                        </div>
                        <span className="text-sm text-gray-700 font-medium">
                          {activity.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* ═══════════ FACILITIES ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <School size={14} />
              Our Campus
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              Modern Learning{" "}
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Facilities
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-2">
              A safe, stimulating environment with modern amenities that enhance 
              the learning experience for every child.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {facilities.map((f, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.desc}</p>
                <span className="inline-block text-xs font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                  {f.stats}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════ TEACHING METHODOLOGY ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 lg:p-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white text-indigo-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm border border-indigo-100">
                <Lightbulb size={14} />
                Our Approach
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
                How We{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  Teach
                </span>
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto mt-2">
                Child-centered teaching methods that make learning engaging, 
                meaningful, and fun for every student.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                {
                  icon: <Lightbulb size={22} className="text-amber-600" />,
                  title: "Interactive Learning",
                  desc: "Engaging, hands-on lessons that make learning fun through experiments, discussions, and real-world applications.",
                },
                {
                  icon: <Users size={22} className="text-blue-600" />,
                  title: "Small Class Sizes",
                  desc: "Maximum 30 students per class ensuring personalized attention and better student-teacher interaction.",
                },
                {
                  icon: <Target size={22} className="text-green-600" />,
                  title: "Regular Assessment",
                  desc: "Continuous evaluation through monthly tests, projects, and presentations to track progress effectively.",
                },
                {
                  icon: <Globe size={22} className="text-purple-600" />,
                  title: "Digital Integration",
                  desc: "Smart boards, computer classes, and online resources that prepare students for the digital age.",
                },
              ].map((method, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto py-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25">
            <Rocket size={28} className="text-white" />
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
            Give Your Child the Best Start in Life
          </h3>
          <p className="text-gray-500 mb-6">
            Join the Dunai Boarding School family and watch your child grow into a 
            confident, curious, and capable young learner.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-700 text-white font-bold rounded-xl hover:bg-indigo-800 transition-all shadow-lg hover:shadow-xl text-sm">
              <FileText size={16} />
              Apply for Admission
            </button>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-bold rounded-xl border-2 border-indigo-200 hover:bg-indigo-50 transition-all text-sm">
              <Calendar size={16} />
              Schedule a Visit
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}