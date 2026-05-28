import {
  MapPin, PhoneCall, Mail, Globe, Heart,
} from "lucide-react";
import {
  FaFacebookF, FaYoutube, FaTwitter, FaInstagram,
} from "react-icons/fa";
import type { Page } from "../types";
import SchoolLogo from "../assets/images/logo.png";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Academics", page: "academics" },
  { label: "Faculty", page: "faculty" },
  { label: "Gallery", page: "gallery" },
  { label: "Blog", page: "blog" },
  { label: "Notices", page: "notices" },
  { label: "Achievements", page: "achievements" },
  { label: "Admission", page: "admission" },
];

interface FooterProps {
  setPage: (p: Page) => void;
}

export default function Footer({ setPage }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-md overflow-hidden flex-shrink-0">
                <img
                  src={SchoolLogo}
                  alt="Dunai Boarding School"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-sm">Dunai Boarding School</h3>
                <p className="text-xs text-gray-400">Est. 2045 B.S.</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Nurturing young minds with quality education and strong values since 2045 B.S.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {NAV_LINKS.map((l) => (
                <button
                  key={l.page}
                  onClick={() => {
                    setPage(l.page);
                    window.scrollTo(0, 0);
                  }}
                  className="text-left text-sm text-gray-400 hover:text-blue-400 transition-colors py-1"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Get In Touch</h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <p>ThuliBheri Municipality-3, Dunai, Dolpa, Nepal</p>
              <p>+977-01-4567890</p>
              <p>info@dbs.edu.np</p>
              <div className="flex gap-3 pt-2">
                {[FaFacebookF, FaYoutube, FaTwitter, FaInstagram].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-gray-400 hover:text-white"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© 2082 B.S. Dunai Boarding School. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={11} className="text-red-500 fill-red-500" /> in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}