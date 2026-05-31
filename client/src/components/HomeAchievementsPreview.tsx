import { ArrowRight, Trophy, GraduationCap, Target, Heart } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import type { Achievement, Page } from "../types";

interface HomeAchievementsPreviewProps {
  achievements: Achievement[];
  setPage: (p: Page) => void;
}

const typeConfig: Record<string, { icon: React.ReactNode; gradient: string }> = {
  Academic: { icon: <GraduationCap size={14} />, gradient: "from-blue-500 to-indigo-600" },
  Sports: { icon: <Trophy size={14} />, gradient: "from-orange-500 to-red-600" },
  Technology: { icon: <Target size={14} />, gradient: "from-purple-500 to-violet-600" },
  Cultural: { icon: <Heart size={14} />, gradient: "from-pink-500 to-rose-600" },
};

export default function HomeAchievementsPreview({ achievements, setPage }: HomeAchievementsPreviewProps) {
  const displayAchievements = achievements.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-yellow-200">
                <Trophy size={14} />
                Our Pride
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                Student{" "}
                <span className="bg-linear-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Celebrating the brilliance and hard work of our students
              </p>
            </div>
            <button
              onClick={() => {
                setPage("achievements");
                window.scrollTo(0, 0);
              }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 max-w-52"
            >
              View All Achievements
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {displayAchievements.map((a, i) => {
            const config = typeConfig[a.type] || typeConfig["Academic"];
            return (
              <FadeIn key={a.id} delay={i * 0.1}>
                <div
                  className="group cursor-pointer bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  onClick={() => {
                    setPage("achievements");
                    window.scrollTo(0, 0);
                  }}
                >
                  {/* Photo - Using aspect-square for proper face display */}
                  <div className="relative w-full aspect-6/4 md:aspect-4/5 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                    <img
                      src={a.photo}
                      alt={a.student}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Gradient overlay at bottom only */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-black/60 to-transparent" />

                    {/* Year badge */}
                    <div className="absolute top-2 right-2">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2 py-1 rounded-full shadow">
                        {a.year} B.S.
                      </span>
                    </div>

                    {/* Type badge */}
                    <div className="absolute top-2 left-2">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${config.gradient} text-white shadow`}>
                        {config.icon}
                        {a.type}
                      </span>
                    </div>

                    {/* Student name */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-extrabold text-sm drop-shadow-lg">
                        {a.student}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm mb-1.5 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                      {a.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                      {a.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}