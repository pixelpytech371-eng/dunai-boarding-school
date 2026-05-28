import {
  GraduationCap,
  MapPin,
  PhoneCall,
  Mail,
  Globe,
} from "lucide-react";

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import type { Page } from "../types";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Academics", page: "academics" },
  { label: "Faculty", page: "faculty" },
  { label: "Gallery", page: "gallery" },
  { label: "Notices", page: "notices" },
  { label: "Achievements", page: "achievements" },
  { label: "Admission", page: "admission" },
  { label: "Contact", page: "contact" },
];

interface FooterProps {
  setPage: (p: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">

        {/* School Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <GraduationCap size={18} className="text-white" />
            </div>
            <span className="font-bold text-white">
              Shree Janapriya Secondary School
            </span>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Nurturing minds, building futures since 2045 B.S. in the heart of Kathmandu.
          </p>

          <div className="flex gap-3 mt-4">
            {[FaFacebookF, FaYoutube, FaTwitter, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          {NAV_LINKS.slice(0, 5).map((l) => (
            <button
              key={l.page}
              onClick={() => {
                setPage(l.page);
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors py-1"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* More Pages */}
        <div>
          <p className="text-white font-semibold mb-3">More Pages</p>
          {NAV_LINKS.slice(5).map((l) => (
            <button
              key={l.page}
              onClick={() => {
                setPage(l.page);
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors py-1"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-3">Contact</p>

          <div className="space-y-2 text-sm text-gray-400">
            <p className="flex gap-2">
              <MapPin size={15} className="shrink-0 mt-0.5 text-blue-400" />
              Janapriya Marg, Kathmandu-14, Nepal
            </p>

            <p className="flex gap-2">
              <PhoneCall size={15} className="shrink-0 text-blue-400" />
              +977-01-4567890
            </p>

            <p className="flex gap-2">
              <Mail size={15} className="shrink-0 text-blue-400" />
              info@janapriya.edu.np
            </p>

            <p className="flex gap-2">
              <Globe size={15} className="shrink-0 text-blue-400" />
              www.janapriya.edu.np
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
        <p>© 2082 B.S. Shree Janapriya Secondary School. All rights reserved.</p>
        <p>Affiliated to CDC Nepal | Reg. No. 045-SEB-0012</p>
      </div>
    </footer>
  );
}