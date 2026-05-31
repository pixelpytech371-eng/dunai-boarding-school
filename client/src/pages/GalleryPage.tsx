import { useState } from "react";
import  Badge  from "../components/ui/Badge";
import type { Photo } from "../types";
import FadeIn from "../components/ui/FadeIn";

function GalleryPage({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Event", "Academic", "Sports"];
  const filtered = filter === "All" ? photos : photos.filter(p => p.category === filter);
 
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <FadeIn><h1 className="text-4xl font-extrabold text-gray-900 mb-2">Photo Gallery</h1>
        <p className="text-gray-500 mb-6 text-lg">Moments that define us.</p></FadeIn>
      <FadeIn>
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${filter === c ? "bg-blue-700 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-700"}`}>{c}</button>
          ))}
        </div>
      </FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p, i) => (
          <FadeIn key={p.id} delay={i * 0.07}>
            <div className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img src={p.url} alt={p.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-sm font-semibold">{p.caption}</p>
                </div>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-700 truncate">{p.caption}</p>
                <Badge label={p.category} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}


export default GalleryPage;