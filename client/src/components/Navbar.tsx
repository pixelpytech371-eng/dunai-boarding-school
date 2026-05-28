import React, { useState } from "react";
import {
  Home, Info, BookOpen, Users, Image, Bell, Award,
  FileText, Phone, LogIn, LogOut, Menu, X,
  GraduationCap, Shield, PenTool,
} from "lucide-react";
import { useScrollY } from "../hooks/useInView";
import type { Page } from "../types";

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

export default function Navbar({ page, setPage, adminLoggedIn, setAdminLoggedIn }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const scrollY = useScrollY();
  const scrolled = scrollY > 10;

  const go = (p: Page) => {
    setPage(p);
    setOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur"
      }`}
    >
      {/* ── Desktop bar ── */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => go("home")} className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow">
            <GraduationCap size={20} className="text-white" />
          </div>
          <div className="leading-tight text-left">
            <p className="text-sm font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
              Shree Janapriya
            </p>
            <p className="text-[10px] text-gray-500 font-medium tracking-wide uppercase">
              Secondary School
            </p>
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
          {adminLoggedIn ? (
            <>
              <button
                onClick={() => go("admin")}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                <Shield size={15} /> Admin
              </button>
              <button
                onClick={() => { setAdminLoggedIn(false); go("home"); }}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                <LogOut size={15} /> Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => go("login")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-blue-700 text-white text-sm rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              <LogIn size={15} /> Admin Login
            </button>
          )}

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