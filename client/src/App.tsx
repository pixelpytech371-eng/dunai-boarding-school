import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import FacultyPage from "./pages/FacultyPage";
import GalleryPage from "./pages/GalleryPage";
import NoticesPage from "./pages/NoticesPage";
import AchievementsPage from "./pages/AchievementsPage";
import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import BlogPage from "./pages/BlogPage";
import  AdminPanel  from "./admin/AdminPanel";
import { useLanguage } from "./hooks/useLanguage";
import {
  SEED_NOTICES,
  SEED_PHOTOS,
  SEED_ACHIEVEMENTS,
  SEED_FACULTY,
  SEED_INQUIRIES,
  SEED_BLOGS
} from "./data/seedData";
import type { Notice, Photo, Achievement, Faculty, Inquiry, Page } from "./types";

const footerTranslations = {
  en: {
    schoolName: "Dunai Boarding School",
    footerDesc: "Nurturing young minds with quality education and strong values since 2050 B.S.",
    quickLinks: "Quick Links",
    getInTouch: "Get In Touch",
    footerAddress: "ThuliBheri Municipality-3, Dunai, Dolpa, Nepal",
    footerRights: "© 2083 B.S. Dunai Boarding School. All rights reserved.",
    madeWith: "Made with",
    inNepal: "in Nepal",
    navHome: "Home",
    navAbout: "About",
    navAcademics: "Academics",
    navFaculty: "Faculty",
    navGallery: "Gallery",
    navBlog: "Blog",
    navNotices: "Notices",
    navAchievements: "Achievements",
    navAdmission: "Admission",
  },
  ne: {
    schoolName: "दुनै बोर्डिङ स्कूल",
    footerDesc: "२०५० सालदेखि गुणस्तरीय शिक्षा र बलियो मूल्यमान्यताका साथ युवा दिमागहरूलाई हुर्काउँदै।",
    quickLinks: "द्रुत लिङ्कहरू",
    getInTouch: "सम्पर्कमा रहनुहोस्",
    footerAddress: "ठूलीभेरी नगरपालिका-३, दुनै, डोल्पा, नेपाल",
    footerRights: "© २०८३ साल। दुनै बोर्डिङ स्कूल। सर्वाधिकार सुरक्षित।",
    madeWith: "साथ बनाइएको",
    inNepal: "नेपालमा",
    navHome: "गृहपृष्ठ",
    navAbout: "बारेमा",
    navAcademics: "शैक्षिक",
    navFaculty: "शिक्षक",
    navGallery: "ग्यालरी",
    navBlog: "ब्लग",
    navNotices: "सूचना",
    navAchievements: "उपलब्धि",
    navAdmission: "भर्ना",
  },
};

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  // State management for all data
  const [notices, setNotices] = useState<Notice[]>(SEED_NOTICES);
  const [photos, setPhotos] = useState<Photo[]>(SEED_PHOTOS);
  const [achievements, setAchievements] = useState<Achievement[]>(SEED_ACHIEVEMENTS);
  const [faculty, setFaculty] = useState<Faculty[]>(SEED_FACULTY);
  const [inquiries, setInquiries] = useState<Inquiry[]>(SEED_INQUIRIES);
  const [blogPosts, setBlogPosts] = useState(SEED_BLOGS);

  const language = useLanguage();
const t = footerTranslations[language];

const footerNavLinks = [
  { label: t.navHome, page: "home" as Page },
  { label: t.navAbout, page: "about" as Page },
  { label: t.navAcademics, page: "academics" as Page },
  { label: t.navFaculty, page: "faculty" as Page },
  { label: t.navGallery, page: "gallery" as Page },
  { label: t.navBlog, page: "blog" as Page },
  { label: t.navNotices, page: "notices" as Page },
  { label: t.navAchievements, page: "achievements" as Page },
  { label: t.navAdmission, page: "admission" as Page },
];

  const handleAdmissionSubmit = (data: Omit<Inquiry, "id" | "date" | "status">) => {
    setInquiries([
      {
        id: Date.now(),
        ...data,
        date: new Date().toISOString().split("T")[0],
        status: "Pending",
      },
      ...inquiries,
    ]);
  };

  const showFooter = !["admin", "login"].includes(page);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar
        page={page}
        setPage={setPage}
        adminLoggedIn={adminLoggedIn}
        setAdminLoggedIn={setAdminLoggedIn}
      />

      <div className="pt-16">
        {page === "home" && (
          <HomePage setPage={setPage} notices={notices} achievements={achievements} blogs={blogPosts} photos={photos} />
        )}
        {page === "about" && <AboutPage />}
        {page === "academics" && <AcademicsPage />}
        {page === "faculty" && <FacultyPage faculty={faculty} />}
        {page === "gallery" && <GalleryPage photos={photos} />}
        {page === "notices" && <NoticesPage notices={notices} />}
        {page === "achievements" && <AchievementsPage achievements={achievements} />}
        {page === "admission" && (
          <AdmissionPage onSubmit={handleAdmissionSubmit} />
        )}
        {page === "contact" && <ContactPage />}
        {page === "blog" && <BlogPage posts={blogPosts} />}
        {page === "login" && (
          <Login
            onLogin={() => {
              setAdminLoggedIn(true);
              setPage("admin");
            }}
          />
        )}
        {page === "admin" && adminLoggedIn && (
          <AdminPanel
            notices={notices}
            setNotices={setNotices}
            photos={photos}
            setPhotos={setPhotos}
            achievements={achievements}
            setAchievements={setAchievements}
            faculty={faculty}
            setFaculty={setFaculty}
            inquiries={inquiries}
            setInquiries={setInquiries}
            blogs={blogPosts}
            setBlogs={setBlogPosts}
            onLogout={() => {
              setAdminLoggedIn(false);
              setPage("home");
            }}
          />
        )}
        {page === "admin" && !adminLoggedIn && (
          <Login
            onLogin={() => {
              setAdminLoggedIn(true);
              setPage("admin");
            }}
          />
        )}
      </div>

      {showFooter && <Footer setPage={setPage}  schoolName={t.schoolName} footerDesc={t.footerDesc} quickLinks={t.quickLinks} getInTouch={t.getInTouch} footerAddress={t.footerAddress} footerRights={t.footerRights} madeWith={t.madeWith} inNepal={t.inNepal} navLinks={footerNavLinks} />}
    </div>
  );
}