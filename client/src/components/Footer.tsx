import {
 Heart,
} from "lucide-react";
import {
  FaFacebookF, FaYoutube, FaTwitter, FaInstagram,
} from "react-icons/fa";
import type { Page } from "../types";
import SchoolLogo from "../assets/images/logo.png";



interface FooterProps {
  setPage: (p: Page) => void;
   schoolName: string;
  footerDesc: string;
  quickLinks: string;
  getInTouch: string;
  footerAddress: string;
  footerRights: string;
  madeWith: string;
  inNepal: string;
  navLinks: { label: string; page: Page }[];
}

export default function Footer({ setPage, schoolName, 
  footerDesc, 
  quickLinks, 
  getInTouch, 
  footerAddress, 
  footerRights, 
  madeWith, 
  inNepal,
  navLinks  }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-md overflow-hidden shrink-0">
                <img
                  src={SchoolLogo}
                  alt="Dunai Boarding School"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-sm">{schoolName}</h3>
                <p className="text-xs text-gray-400">Est. 2050 B.S.</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {footerDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">{quickLinks}</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((l) => (
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
            <h4 className="text-white font-semibold text-sm mb-3">{getInTouch}</h4>
            <div className="space-y-2.5 text-sm text-gray-400">
              <p>{footerAddress}</p>
              <p>+977-01-4567890</p>
              <p>dunaiboarding2050@gmail.com</p>
              <p>info@dbs.edu.np</p>
              <div className="flex gap-3 pt-2">
                {[
  { Icon: FaFacebookF, url: "https://www.facebook.com/profile.php?id=61560367036422" },
].map(({ Icon, url }, i) => (
  <a
    key={i}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
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
  <p>© 2083 B.S. {schoolName}. {footerRights}</p>
  <p className="flex items-center gap-1">
    {madeWith} <Heart size={11} className="text-red-500 fill-red-500" /> {inNepal}{" "}
    <a 
      href="#" 
      className="font-semibold text-blue-400 hover:text-blue-300 transition-colors"
    >
      PixelpyTech
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}