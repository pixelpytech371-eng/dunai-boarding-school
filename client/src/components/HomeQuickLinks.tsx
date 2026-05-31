import { ChevronRight, Zap } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import type { Page } from "../types";

interface QuickLink {
  page: Page;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

interface HomeQuickLinksProps {
  links: QuickLink[];
  setPage: (p: Page) => void;
  title: string;
  subtitle: string;
  description: string;
  explore: string;
}

export default function HomeQuickLinks({ links, setPage , title, subtitle, description, explore }: HomeQuickLinksProps) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Zap size={14} />
              {title}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              {subtitle}{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {description}
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {links.map((c, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <button
                onClick={() => {
                  setPage(c.page);
                  window.scrollTo(0, 0);
                }}
                className="group w-full text-left p-6 sm:p-7 rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {c.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {c.desc}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span>{explore}</span>
                  <ChevronRight size={12} />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}