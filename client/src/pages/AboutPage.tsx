import {
  Heart,
  Layers,
  Globe,
  Star,
  BookMarked,
  Clock,
  Award,
  Users,
  School,
  Quote,
  Shield,
  MapPin,
  Building,
  GraduationCap,
  Target,
  Eye,
  BookOpen,
  Landmark,
  Trophy,
  Gem,
  Sparkles,
  Crown,
  HandHeart,
} from "lucide-react";
import FadeIn from "../components/ui/FadeIn";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <School size={14} />
            About Our School
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Our Story,{" "}
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Our Values
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto">
            From a humble beginning with 45 students to over 1,200 today — a
            journey of dedication, vision, and unwavering commitment to
            education.
          </p>
        </div>
      </FadeIn>

      {/* ═══════════ FOUNDER SECTION - REDESIGNED ═══════════ */}
      <section className="mb-20 lg:mb-28">
        {/* Section Badge */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-amber-200">
              <Crown size={14} />
              Our Founding Father
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-2 tracking-tight">
              The Visionary Who{" "}
              <span className="bg-linear-to-r from-amber-500 to-yellow-600 bg-clip-text text-transparent">
                Started It All
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              A humble educator with an extraordinary dream — to bring quality
              education to every child, regardless of their background.
            </p>
          </div>
        </FadeIn>

        {/* Main Founder Card */}
        <FadeIn delay={0.1}>
          <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
            {/* Top decorative gradient bar */}
            <div className="h-2 bg-linear-to-r from-amber-400 via-yellow-500 to-amber-400" />

            <div className="grid lg:grid-cols-12">
              {/* Left: Image Column */}
              <div className="lg:col-span-5 relative bg-linear-to-br from-slate-800 via-slate-900 to-gray-900 p-8 sm:p-12 flex items-center justify-center">
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='0.8' fill='%23ffffff'/%3E%3C/svg%3E")`,
                  }}
                />
                {/* Subtle glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

                <div className="relative">
                  {/* Image frame */}
                  <div className="relative w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-80 mx-auto">
                    {/* Decorative frame */}
                    <div className="absolute -inset-3 rounded-2xl border-2 border-amber-400/30" />
                    <div className="absolute -inset-2 rounded-2xl border border-amber-400/20" />

                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=700&fit=crop&crop=face"
                        alt="Late Shri Hari Prasad Dhakal - Founder"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      {/* Bottom info bar */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                        <div className="inline-block px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full mb-2">
                          Founder
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-amber-400 rounded-full opacity-60" />
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-yellow-400 rounded-full opacity-60" />
                  <div className="absolute top-1/2 -right-5 w-3 h-3 bg-amber-300 rounded-full opacity-40" />
                </div>
              </div>

              {/* Right: Content Column */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14">
                {/* Name & Title */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Sparkles size={14} className="text-amber-600" />
                    </div>
                    <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                      Founder & First Principal
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-1 tracking-tight">
                    Late Shri
                  </h3>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-3">
                    Hari Prasad Dhakal
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star
                        size={12}
                        className="text-yellow-500 fill-yellow-500"
                      />
                      2001 – 2045 B.S.
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-blue-500" />
                      Dhading, Nepal
                    </span>
                  </div>
                </div>

                {/* Biography */}
                <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                  <p>
                    <span className="font-semibold text-gray-800">
                      Late Shri Hari Prasad Dhakal
                    </span>{" "}
                    was not just an educator — he was a{" "}
                    <span className="text-amber-700 font-medium">
                      revolutionary
                    </span>{" "}
                    who believed that education was the most powerful tool for
                    social transformation. Born into a humble farming family in
                    Dhading district, he walked two hours each day to attend
                    school — an experience that shaped his lifelong commitment
                    to making education accessible.
                  </p>

                  <div className="flex gap-4 items-start">
                    <div className="w-1 h-full min-h-[80px] bg-gradient-to-b from-amber-400 to-yellow-400 rounded-full flex-shrink-0" />
                    <div className="space-y-3">
                      <p>
                        After earning his Master's degree in Education from
                        Tribhuvan University with distinction, he taught across
                        Kathmandu Valley for over 15 years. During this time, he
                        witnessed a painful reality —{" "}
                        <span className="text-gray-800 font-medium">
                          quality education was a privilege, not a right
                        </span>
                        . Children from poor families were denied opportunities
                        simply because of their economic status.
                      </p>
                      <p>
                        This injustice ignited a fire in him. In{" "}
                        <span className="font-bold text-amber-700">
                          2045 B.S.
                        </span>
                        , with his life savings of just NPR 25,000 and support
                        from five like-minded community leaders, he rented three
                        small rooms in Kalimati and opened the doors of
                        <span className="font-bold text-amber-700">
                          {" "}
                          Shree Janapriya Secondary School
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border border-amber-200 rounded-2xl p-6 mb-8">
                  <Quote
                    size={28}
                    className="text-amber-300 absolute top-4 left-4"
                  />
                  <div className="pl-10">
                    <blockquote className="text-gray-700 italic font-medium leading-relaxed text-lg">
                      "Education is not about filling a vessel, but about
                      kindling a flame. Our duty is not just to teach, but to
                      inspire young minds to dream, to question, and to
                      contribute to the world with compassion and courage."
                    </blockquote>
                    <p className="text-right text-sm text-amber-700 font-bold mt-4">
                      — Late Shri Hari Prasad Dhakal
                    </p>
                  </div>
                </div>

                {/* Legacy Stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Students First Year",
                      value: "45",
                      icon: <Users size={16} />,
                    },
                    {
                      label: "Years as Principal",
                      value: "13",
                      icon: <Clock size={16} />,
                    },
                    {
                      label: "Students Today",
                      value: "1,200+",
                      icon: <GraduationCap size={16} />,
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center p-3 rounded-xl bg-gradient-to-br from-gray-50 to-amber-50 border border-amber-100"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center mx-auto mb-2 text-amber-700">
                        {stat.icon}
                      </div>
                      <p className="text-lg sm:text-xl font-extrabold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom decorative bar */}
            <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />

            {/* Floating badge */}
            <div className="absolute top-6 right-6 hidden lg:flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-1.5 rounded-full shadow-lg text-xs font-semibold text-gray-600">
              <HandHeart size={12} className="text-amber-500" />
              Education Pioneer
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ═══════════ HISTORY TIMELINE ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Clock size={14} />
              Our Journey
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              From Humble Beginnings to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 md:-translate-x-px" />

          <div className="space-y-12 lg:space-y-16">
            {[
              {
                year: "2045 B.S.",
                title: "The Foundation",
                icon: <Building size={20} className="text-white" />,
                color: "from-blue-500 to-blue-700",
                content:
                  "Shree Janapriya Secondary School was established by Late Shri Hari Prasad Dhakal with just 3 rented classrooms, 45 students, and 5 teachers. The school was founded with a vision to provide quality education to children from all economic backgrounds.",
              },
              {
                year: "2050 B.S.",
                title: "First Batch Graduates",
                icon: <GraduationCap size={20} className="text-white" />,
                color: "from-green-500 to-green-700",
                content:
                  "The first batch of SLC (now SEE) students appeared for their examinations. All 18 students passed with distinction, establishing the school's reputation for academic excellence. The school's enrollment grew to over 200 students.",
              },
              {
                year: "2058 B.S.",
                title: "A New Chapter",
                icon: <BookOpen size={20} className="text-white" />,
                color: "from-purple-500 to-purple-700",
                content:
                  "After the passing of founder Shri Hari Prasad Dhakal, Dr. Mohan Prasad Acharya took over as Principal. Under his leadership, the school expanded its infrastructure, adding a science laboratory and library wing.",
              },
              {
                year: "2065 B.S.",
                title: "Expansion & Growth",
                icon: <Landmark size={20} className="text-white" />,
                color: "from-indigo-500 to-indigo-700",
                content:
                  "The school moved to its current campus at Janapriya Marg, Kathmandu-14. New buildings were constructed to accommodate over 600 students. The school introduced computer education and expanded extracurricular activities.",
              },
              {
                year: "2072 B.S.",
                title: "Modernization Era",
                icon: <Trophy size={20} className="text-white" />,
                color: "from-orange-500 to-orange-700",
                content:
                  "Major infrastructure upgrades including a modern computer lab with 40 computers, upgraded science laboratories, and a library with over 5,000 books. Student enrollment crossed 1,000 for the first time.",
              },
              {
                year: "2078 B.S.",
                title: "National Recognition",
                icon: <Award size={20} className="text-white" />,
                color: "from-red-500 to-red-700",
                content:
                  "The school received the 'Model School' designation from the Ministry of Education. Students won multiple national-level competitions in science, sports, and literature. First batch of students appeared in SEE under the new grading system with outstanding results.",
              },
              {
                year: "2082 B.S.",
                title: "Today & Beyond",
                icon: <Target size={20} className="text-white" />,
                color: "from-teal-500 to-teal-700",
                content:
                  "Today, Shree Janapriya stands as one of Kathmandu's premier secondary schools with over 1,200 students and 60+ dedicated teachers. We continue to innovate with digital learning initiatives while staying true to our founding values of accessibility, quality, and character development.",
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div
                  className={`flex items-start gap-4 md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex md:w-1/2" />
                  <div className="relative flex items-center justify-center z-10 flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg shadow-blue-500/20`}
                    >
                      {item.icon}
                    </div>
                  </div>
                  {/* Content card */}
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}
                  >
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
                      <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MISSION & VISION ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission */}
          <FadeIn>
            <div className="h-full bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Target size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Our Mission</h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  To provide holistic, quality education that nurtures
                  intellectual curiosity, moral values, and practical skills —
                  enabling every student to contribute meaningfully to Nepal and
                  the world.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    "Academic excellence through innovative teaching methods",
                    "Character development rooted in Nepali values",
                    "Practical skills for the modern world",
                    "Inclusive education for all economic backgrounds",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-blue-100"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Star size={10} className="text-white fill-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Vision */}
          <FadeIn delay={0.12}>
            <div className="h-full bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <Eye size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-extrabold mb-4">Our Vision</h3>
                <p className="text-indigo-100 leading-relaxed mb-6">
                  To be the leading center of learning in Nepal — known for
                  academic excellence, inclusive education, and the production
                  of responsible, globally-aware citizens and future leaders.
                </p>
                <ul className="space-y-3 text-sm">
                  {[
                    "Recognized nationally for educational innovation",
                    "Producing leaders in every field",
                    "Bridging traditional values with global perspectives",
                    "A model institution for sustainable education",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-indigo-100"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Star size={10} className="text-white fill-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ SCHOOL MOTTO ═══════════ */}
      <FadeIn>
        <section className="mb-20 lg:mb-28">
          <div className="bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_70%)]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 text-blue-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/10">
                <Gem size={14} />
                Our Motto
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  "ज्ञान, अनुशासन, सेवा"
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-300 font-semibold mb-4">
                Gyan, Anushasan, Sewa
              </p>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                <span className="text-blue-400 font-semibold">
                  Knowledge (ज्ञान)
                </span>{" "}
                — The light that illuminates the path to understanding.
                <br />
                <span className="text-indigo-400 font-semibold">
                  Discipline (अनुशासन)
                </span>{" "}
                — The foundation upon which all success is built.
                <br />
                <span className="text-purple-400 font-semibold">
                  Service (सेवा)
                </span>{" "}
                — The highest purpose of education is to serve humanity.
              </p>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ═══════════ CORE VALUES ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Heart size={14} />
              What We Stand For
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              Our Core Values
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: <Heart size={22} className="text-red-600" />,
              title: "Integrity",
              color: "from-red-50 to-red-100 border-red-200",
              desc: "We instill honesty and ethical conduct in every aspect of life, preparing students to be principled citizens.",
            },
            {
              icon: <Layers size={22} className="text-blue-600" />,
              title: "Excellence",
              color: "from-blue-50 to-blue-100 border-blue-200",
              desc: "We set high standards and celebrate every achievement, encouraging continuous growth and improvement.",
            },
            {
              icon: <Globe size={22} className="text-green-600" />,
              title: "Inclusivity",
              color: "from-green-50 to-green-100 border-green-200",
              desc: "We welcome every child regardless of background, creating a diverse and supportive learning community.",
            },
            {
              icon: <Shield size={22} className="text-purple-600" />,
              title: "Resilience",
              color: "from-purple-50 to-purple-100 border-purple-200",
              desc: "We teach students to face challenges with courage and to learn from every experience, good or bad.",
            },
          ].map((value, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className={`h-full bg-gradient-to-br ${value.color} border rounded-2xl p-6 sm:p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════ CAMPUS & FACILITIES ═══════════ */}
      <section className="mb-20 lg:mb-28">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Building size={14} />
              Our Campus
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900">
              World-Class Facilities
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Modern Classrooms",
              desc: "Spacious, well-ventilated classrooms equipped with smart boards and comfortable seating for optimal learning.",
              icon: <School size={20} className="text-blue-600" />,
            },
            {
              title: "Science Laboratories",
              desc: "Fully equipped Physics, Chemistry, and Biology labs with modern apparatus for hands-on experimentation.",
              icon: <BookOpen size={20} className="text-green-600" />,
            },
            {
              title: "Computer Lab",
              desc: "40+ computers with high-speed internet, coding tools, and multimedia resources for digital literacy.",
              icon: <Target size={20} className="text-purple-600" />,
            },
            {
              title: "Library",
              desc: "A treasure trove of 5,000+ books in Nepali and English, with reading zones and digital catalog.",
              icon: <BookMarked size={20} className="text-amber-600" />,
            },
            {
              title: "Sports Ground",
              desc: "Large playground for football, cricket, volleyball, and athletics with dedicated coaching staff.",
              icon: <Trophy size={20} className="text-red-600" />,
            },
            {
              title: "Auditorium Hall",
              desc: "A 300-seat multipurpose hall for cultural programs, seminars, examinations, and school assemblies.",
              icon: <Landmark size={20} className="text-indigo-600" />,
            },
          ].map((facility, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {facility.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {facility.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ═══════════ CLOSING STATEMENT ═══════════ */}
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto py-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
            <GraduationCap size={28} className="text-white" />
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            For over <span className="font-bold text-blue-700">37 years</span>,
            Shree Janapriya Secondary School has been more than just an
            educational institution — we are a family dedicated to nurturing the
            leaders, thinkers, and changemakers of tomorrow. We invite you to be
            part of our continuing story.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <MapPin size={14} className="text-blue-500" />
            <span>Janapriya Marg, Kathmandu-14, Nepal</span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
