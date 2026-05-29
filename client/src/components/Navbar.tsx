import React, { useState } from "react";
import { Globe } from "lucide-react";
import {
  Home, Info, BookOpen, Users, Image, Bell, Award,
  FileText,  LogIn,  Menu, X,
   PenTool,
} from "lucide-react";
import { useScrollY } from "../hooks/useInView";
import type { Page } from "../types";
import SchoolLogo from "../assets/images/logo.png";

export const NAV_LINKS: { label: string; page: Page; icon: React.ReactNode }[] = [
  { label: "Home",         page: "home",         icon: <Home size={16} /> },
  { label: "About",        page: "about",        icon: <Info size={16} /> },
  { label: "Academics",    page: "academics",    icon: <BookOpen size={16} /> },
  { label: "Faculty",      page: "faculty",      icon: <Users size={16} /> },
  { label: "Gallery",      page: "gallery",      icon: <Image size={16} /> },
  { label: "Blog",         page: "blog",         icon: <PenTool size={16} /> },
  { label: "Notices",      page: "notices",      icon: <Bell size={16} /> },
  { label: "Achievements", page: "achievements", icon: <Award size={16} /> },
  { label: "Admission",    page: "admission",    icon: <FileText size={16} /> },
  // { label: "Contact",      page: "contact",      icon: <Phone size={16} /> },
];

interface NavbarProps {
  page: Page;
  setPage: (p: Page) => void;
  adminLoggedIn: boolean;
  setAdminLoggedIn: (v: boolean) => void;
}

export default function Navbar({ page, setPage, adminLoggedIn }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "ne">("en");
  const scrollY = useScrollY();
  const scrolled = scrollY > 10;

  const go = (p: Page) => {
    setPage(p);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed min-h-22 w-full items-center justify-center top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-22 ">
        {/* Logo */}
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow">
            <img src={SchoolLogo} alt="School Logo" className="w-full h-full object-cover" />
          </div>
          <div className="leading-tight text-left">
            <h1 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
              <span className="text-blue-700 text-2xl underline font-extrabold">Dunai</span> Boarding School
            </h1>
            
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.page}
              onClick={() => go(l.page)}
              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 ${
                page === l.page
                  ? "bg-blue-700 text-white shadow-sm"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
            
             {/* ═══ LANGUAGE SWITCHER ═══ */}
  <button
    onClick={() => setLanguage(language === "en" ? "ne" : "en")}
    className="relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 bg-gray-100 hover:bg-gray-200"
  >
    {/* EN option */}
    <span className={`px-2 py-1 rounded-lg transition-all duration-300 ${
      language === "en" 
        ? "bg-blue-600 text-white shadow-md" 
        : "text-gray-500"
    }`}>
      EN
    </span>
    
    {/* Divider */}
    <span className="w-px h-4 bg-gray-300" />
    
    {/* NE option */}
    <span className={`px-2 py-1 rounded-lg transition-all duration-300 ${
      language === "ne" 
        ? "bg-blue-600 text-white shadow-md" 
        : "text-gray-500"
    }`}>
      ने
    </span>
  </button>
          

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 grid grid-cols-3 gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.page}
                onClick={() => go(l.page)}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-xs font-medium transition-all ${
                  page === l.page
                    ? "bg-blue-700 text-white"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                {l.icon}
                <span>{l.label}</span>
              </button>
            ))}
            {!adminLoggedIn && (
              <button
                onClick={() => go("login")}
                className="flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-xs font-medium text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              >
                <LogIn size={16} />
                <span>Admin</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}