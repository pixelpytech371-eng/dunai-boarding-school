import { ArrowRight, Camera, Sparkles } from "lucide-react";
import FadeIn from "./ui/FadeIn";
import type { Page } from "../types";
import { useEffect, useState } from "react";
import axios from "axios";

interface HomeGalleryPreviewProps {
  setPage: (p: Page) => void;
    ourGallery: string;
  glimpsesOf: string;
  schoolLife: string;
  galleryDesc: string;
  viewFullGallery: string;
}

interface Photo {
  id: number;
  url: string;
  caption: string;
  category: string;
  created_at: string;
}

export default function HomeGalleryPreview({
  setPage,
}: HomeGalleryPreviewProps) {
  const [displayPhotos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchAllPic = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/gallery`
        );

        setPhotos(Array.isArray(res.data) ? res.data : []);
        console.log("++++++++++++++++++++", res.data);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
        setPhotos([]);
      }
    };

    fetchAllPic();
  }, []);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 border border-blue-100">
                <Camera size={14} />
                {ourGallery}
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
                {glimpsesOf}{" "}
                <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {schoolLife}
                </span>
              </h2>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                {galleryDesc}
              </p>
            </div>

            <button
              onClick={() => {
                setPage("gallery");
                window.scrollTo(0, 0);
              }}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 max-w-46"
            >
              {viewFullGallery}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

        {displayPhotos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {/* Photo 1 - Large */}
            <FadeIn delay={0.1}>
              <div
                className="col-span-2 md:col-span-2 md:row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                onClick={() => {
                  setPage("gallery");
                  window.scrollTo(0, 0);
                }}
              >
                <img
                  src={displayPhotos[0].url}
                  alt={displayPhotos[0].caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                  <span className="inline-block text-[10px] font-bold text-white bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full mb-2">
                    {displayPhotos[0].category}
                  </span>

                  <p className="text-white text-sm sm:text-lg font-bold leading-snug">
                    {displayPhotos[0].caption}
                  </p>
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-lg bg-white/30 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Photos 2-5 */}
            {displayPhotos.slice(1, 5).map((photo, i) => (
              <FadeIn key={photo.id} delay={0.15 + i * 0.1}>
                <div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] border border-gray-100"
                  onClick={() => {
                    setPage("gallery");
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                    <span className="inline-block text-[10px] font-bold text-white bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full mb-1">
                      {photo.category}
                    </span>

                    <p className="text-white text-xs font-semibold leading-snug line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Photo 6 */}
            {displayPhotos[5] && (
              <FadeIn delay={0.5} className="hidden md:block">
                <div
                  className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] border border-gray-100"
                  onClick={() => {
                    setPage("gallery");
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={displayPhotos[5].url}
                    alt={displayPhotos[5].caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3">
                    <span className="inline-block text-[10px] font-bold text-white bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full mb-1">
                      {displayPhotos[5].category}
                    </span>

                    <p className="text-white text-xs font-semibold leading-snug line-clamp-2">
                      {displayPhotos[5].caption}
                    </p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        )}

        {displayPhotos.length === 0 && (
          <div className="flex items-center justify-center py-20">
            <p className="text-gray-500 text-sm">No gallery photos available.</p>
          </div>
        )}
      </div>
    </section>
  );
}