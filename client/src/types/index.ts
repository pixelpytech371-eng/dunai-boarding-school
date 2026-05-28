export interface Notice {
  id: number;
  title: string;
  body: string;
  date: string;
  type: string;
}

export interface Photo {
  id: number;
  url: string;
  caption: string;
  category: string;
}

export interface Achievement {
  id: number;
  student: string;
  title: string;
  desc: string;
  type: string;
  year: string;
  photo: string;
}

export interface Faculty {
  id: number;
  name: string;
  subject: string;
  photo: string;
  bio: string;
}

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string;
  grade: string;
  msg: string;
  date: string;
  status: string;
}

export interface BlogPost {
  id: number;
  title: string;
  author: string;        // student's name
  authorClass: string;   // e.g. "Class 9"
  content: string;       // full article body — paragraphs separated by \n\n
  excerpt: string;       // short preview shown on cards
  category: string;      // "Essay" | "Poetry" | "Story" | "Science" | "Opinion"
  coverImage: string;
  publishedAt: string;   // ISO date string  "2025-04-10"
  featured: boolean;     // pinned to home page hero slot
}

export type Page =
  | "home"
  | "about"
  | "academics"
  | "faculty"
  | "gallery"
  | "notices"
  | "achievements"
  | "admission"
  | "contact"
  | "blog"
  | "login"
  | "admin";
