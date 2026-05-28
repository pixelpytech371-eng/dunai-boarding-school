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
import {
  SEED_NOTICES,
  SEED_PHOTOS,
  SEED_ACHIEVEMENTS,
  SEED_FACULTY,
  SEED_INQUIRIES,
  SEED_BLOGS
} from "./data/seedData";
import type { Notice, Photo, Achievement, Faculty, Inquiry, Page } from "./types";

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
          <HomePage setPage={setPage} notices={notices} achievements={achievements} blogs={blogPosts} />
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

      {showFooter && <Footer setPage={setPage} />}
    </div>
  );
}