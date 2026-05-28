import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import FadeIn from "../components/ui/FadeIn";
import { MapPin, PhoneCall, Mail, Clock, Globe } from "lucide-react";


function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <FadeIn><h1 className="text-4xl font-extrabold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-12 text-lg">We'd love to hear from you.</p></FadeIn>
 
      <div className="grid lg:grid-cols-2 gap-10">
        <FadeIn>
          <div className="space-y-5">
            {[
              { icon: <MapPin size={20} />, title: "Address", lines: ["Janapriya Marg, Kathmandu-14", "Bagmati Province, Nepal"] },
              { icon: <PhoneCall size={20} />, title: "Phone", lines: ["+977-01-4567890", "+977-01-4567891"] },
              { icon: <Mail size={20} />, title: "Email", lines: ["info@janapriya.edu.np", "principal@janapriya.edu.np"] },
              { icon: <Clock size={20} />, title: "Office Hours", lines: ["Sun–Fri: 10:00 AM – 4:00 PM", "Saturday: Closed"] },
            ].map((c, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">{c.icon}</div>
                <div><p className="font-bold text-gray-900 text-sm mb-0.5">{c.title}</p>{c.lines.map((l, j) => <p key={j} className="text-sm text-gray-600">{l}</p>)}</div>
              </div>
            ))}
 
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
              <p className="font-bold text-gray-900 text-sm mb-3">Follow Us</p>
              <div className="flex gap-3">
                {[{ Icon: FaFacebookF, label: "Facebook", url: "#" }, { Icon: FaYoutube, label: "YouTube", url: "#" }, { Icon: FaTwitter, label: "Twitter", url: "#" }, { Icon: FaInstagram, label: "Instagram", url: "#" }].map(({ Icon, label, url }, i) => (
                  <a key={i} href={url} className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-white rounded-lg border border-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white transition-all"><Icon size={13} />{label}</a>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
 
        <FadeIn delay={0.15}>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-80 flex items-center justify-center border border-gray-200">
            <div className="text-center text-gray-500">
              <MapPin size={40} className="mx-auto mb-2 text-blue-400" />
              <p className="font-semibold text-gray-700">Janapriya Marg, Kathmandu-14</p>
              <p className="text-sm">Kathmandu, Bagmati Province, Nepal</p>
              <a href="https://maps.google.com/?q=Kathmandu,Nepal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-blue-600 hover:text-blue-800 underline"><Globe size={12} />Open in Google Maps</a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default ContactPage;
