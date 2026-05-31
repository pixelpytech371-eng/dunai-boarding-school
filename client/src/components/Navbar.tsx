import React, { useState, useEffect } from "react";
import {
  Home,
  Info,
  BookOpen,
  Users,
  Image,
  Bell,
  Award,
  FileText,
  LogIn,
  Menu,
  X,
  PenTool,
} from "lucide-react";
import { useScrollY } from "../hooks/useInView";
import type { Page } from "../types";
import SchoolLogo from "../assets/images/logo.png";

const translations = {
  en: {
    home: "Home",
    about: "About",
    academics: "Academics",
    faculty: "Faculty",
    gallery: "Gallery",
    blog: "Blog",
    notices: "Notices",
    achievements: "Achievements",
    admission: "Admission",
    admin: "Admin",
    name:"Dunai",
    schoolName: "Boarding School",
  },
  ne: {
    home: "गृहपृष्ठ",
    about: "हाम्रो बारेमा",
    academics: "शैक्षिक कार्यक्रम",
    faculty: "शिक्षकहरू",
    gallery: "ग्यालरी",
    blog: "ब्लग",
    notices: "सूचनाहरू",
    achievements: "उपलब्धिहरू",
    admission: "भर्ना",
    admin: "प्रशासन",
    name:"दुनै",
    schoolName: "बोर्डिङ स्कूल",
  },
};

export const NAV_LINKS = [
  { key: "home", page: "home" as Page, icon: <Home size={16} /> },
  { key: "about", page: "about" as Page, icon: <Info size={16} /> },
  { key: "academics", page: "academics" as Page, icon: <BookOpen size={16} /> },
  { key: "faculty", page: "faculty" as Page, icon: <Users size={16} /> },
  { key: "gallery", page: "gallery" as Page, icon: <Image size={16} /> },
  { key: "blog", page: "blog" as Page, icon: <PenTool size={16} /> },
  { key: "notices", page: "notices" as Page, icon: <Bell size={16} /> },
  {
    key: "achievements",
    page: "achievements" as Page,
    icon: <Award size={16} />,
  },
  {
    key: "admission",
    page: "admission" as Page,
    icon: <FileText size={16} />,
  },
];

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
  adminLoggedIn: boolean;
}

export default function Navbar({ page, setPage, adminLoggedIn }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ne">("en");

  const scrollY = useScrollY();
  const scrolled = scrollY > 10;

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "en" | "ne" | null;

    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const t = translations[language];

  const go = (p: Page) => {
    setPage(p);
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleLangChange = () => {
    const newLang = language === "en" ? "ne" : "en";
     localStorage.setItem("lang", newLang);
     setLanguage(newLang);
     window.dispatchEvent(new Event("languageChanged"));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 min-h-22 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
      }`}
    >
      {" "}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-22">
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 group"
        >
          {" "}
          <div className="w-9 h-9 bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow overflow-hidden">
            {" "}
            <img
              src={SchoolLogo}
              alt="School Logo"
              className="w-full h-full object-cover"
            />{" "}
          </div>
          <div className="leading-tight text-left">
            <h1 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
              <span className="text-blue-700 text-2xl underline font-extrabold">
                {t.name}
              </span>{" "}
              {t.schoolName}
            </h1>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => go(link.page)}
              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 ${
                page === link.page
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {t[link.key as keyof typeof t]}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={handleLangChange}
            className="relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 bg-gray-100 hover:bg-gray-200"
            aria-label="Change language"
          >
            <span
              className={`px-2 py-1 rounded-lg transition-all duration-300 ${
                language === "en"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              EN
            </span>

            <span className="w-px h-4 bg-gray-300" />

            <span
              className={`px-2 py-1 rounded-lg transition-all duration-300 ${
                language === "ne"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500"
              }`}
            >
              ने
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => go(link.page)}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                  page === link.page
                    ? "bg-blue-700 text-white"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {link.icon}
                <span>{t[link.key as keyof typeof t]}</span>
              </button>
            ))}

            {!adminLoggedIn && (
              <button
                onClick={() => go("login" as Page)}
                className="flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-xs font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <LogIn size={16} />
                <span>{t.admin}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
