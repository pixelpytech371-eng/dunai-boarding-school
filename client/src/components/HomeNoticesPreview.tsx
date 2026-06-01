import { ArrowRight, Bell, Calendar } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import Badge from "./ui/Badge";
import type { Page } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";

interface HomeNoticesPreviewProps {
  setPage: (p: Page) => void;
  stayUpdated: string;
  latestNotices: string;
  noticesDesc: string;
  viewAllNotices: string;
  schoolName: string;
}

interface Notice {
  id: number;
  title: string;
  body: string;
  notice_date: string;
  type: string;
  created_at: string;
}

export default function HomeNoticesPreview({
  setPage,
    stayUpdated,
  latestNotices,
  noticesDesc,
  viewAllNotices,
  
}: HomeNoticesPreviewProps) {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/notice`
        );

        setNotices(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("Failed to fetch notices:", error);
        setNotices([]);
      }
    };

    fetchNotices();
  }, []);

  const displayNotices = notices.slice(0, 4);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-NP", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 lg:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                <Bell size={14} />
                {stayUpdated}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                {latestNotices}
              </h2>

              <p className="text-gray-500 mt-2">
                {noticesDesc}
              </p>
            </div>

            <button
              onClick={() => {
                setPage("notices");
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-2xl hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 text-sm shadow-sm hover:shadow-md max-w-46"
            >
              {viewAllNotices}
              <ArrowRight size={15} />
            </button>
          </div>
        </FadeIn>

        {displayNotices.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {displayNotices.map((n, i) => (
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
                      {formatDate(n.notice_date)}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-gray-300" />

                    <span>Dunai Boarding School</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-500 text-sm">
              No notices available at the moment.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}