import { useState } from "react";
import {
  Send, CheckCircle, MapPin, PhoneCall, Mail, Clock,
  FileText, Sparkles, School, Heart,
  ChevronRight, Star, Users, Globe, Shield,
  Check, AlertCircle, MessageCircle,
  ArrowRight, GraduationCap,
} from "lucide-react";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import FadeIn from "../components/ui/FadeIn";
import type { Inquiry } from "../types";

interface AdmissionPageProps {
  onSubmit: (data: Omit<Inquiry, "id" | "date" | "status">) => void;
}

export default function AdmissionPage({ onSubmit }: AdmissionPageProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    msg: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.grade) return;
    onSubmit(form);
    setSubmitted(true);
  };

  const grades = [
    "Nursery",
    "KG",
    ...Array.from({ length: 8 }, (_, i) => `Class ${i + 1}`),
  ];

  const contactInfo = [
    {
      icon: <MapPin size={22} className="text-blue-600" />,
      title: "Visit Our Campus",
      lines: [
        "Janapriya Marg, Kathmandu-14",
        "Bagmati Province, Nepal",
      ],
      color: "border-l-blue-500",
    },
    {
      icon: <PhoneCall size={22} className="text-green-600" />,
      title: "Call Us",
      lines: ["+977-01-4567890", "+977-01-4567891"],
      color: "border-l-green-500",
    },
    {
      icon: <Mail size={22} className="text-purple-600" />,
      title: "Email Us",
      lines: ["info@dunai.edu.np", "principal@dunai.edu.np"],
      color: "border-l-purple-500",
    },
    {
      icon: <Clock size={22} className="text-amber-600" />,
      title: "Office Hours",
      lines: ["Sun–Fri: 10:00 AM – 4:00 PM", "Saturday: Closed"],
      color: "border-l-amber-500",
    },
  ];

  const socialLinks = [
    { Icon: FaFacebookF, label: "Facebook", color: "hover:bg-blue-600" },
    { Icon: FaYoutube, label: "YouTube", color: "hover:bg-red-600" },
    { Icon: FaTwitter, label: "Twitter", color: "hover:bg-sky-500" },
    { Icon: FaInstagram, label: "Instagram", color: "hover:bg-pink-600" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════════ PAGE HEADER ═══════════ */}
      <FadeIn>
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <GraduationCap size={14} />
            Admissions Open 2082 B.S.
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Join the{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Dunai Family
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto">
            Take the first step towards a brighter future for your child. 
            Fill the form below or reach out to us directly.
          </p>
        </div>
      </FadeIn>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
        
        {/* ═══════ LEFT: INFO & CONTACT ═══════ */}
        <div className="lg:col-span-1 space-y-6">
          {/* Admission Info Card */}
          <FadeIn delay={0.1}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <AlertCircle size={20} className="text-blue-600" />
                </div>
                <h3 className="font-extrabold text-gray-900">Admission Info</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Nursery to Class 8 admissions open",
                  "Merit-based with entrance evaluation",
                  "Scholarships for deserving students",
                  "Documents: TC, birth certificate, photos",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-green-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Contact Cards */}
          {contactInfo.map((item, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.08}>
              <div className={`bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${item.color}`}>
                <div className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">
                      {item.title}
                    </p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-sm text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Social Media */}
          <FadeIn delay={0.4}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 p-6">
              <p className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                <Heart size={16} className="text-red-500" />
                Connect With Us
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ Icon, label, color }, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 ${color} hover:text-white transition-all duration-300 shadow-sm`}
                    title={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Map Preview */}
          <FadeIn delay={0.45}>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="h-40 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center relative">
                <MapPin size={36} className="text-blue-400" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-white/80 backdrop-blur-sm">
                  <p className="text-xs font-bold text-gray-800">📍 Janapriya Marg, Kathmandu-14</p>
                </div>
              </div>
              <div className="p-3 text-center">
                <a
                  href="https://maps.google.com/?q=Kathmandu,Nepal"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  <Globe size={12} />
                  Open in Google Maps
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ═══════ RIGHT: ADMISSION FORM ═══════ */}
        <div className="lg:col-span-2">
          <FadeIn delay={0.2}>
            {submitted ? (
              /* Success State */
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-10 sm:p-14 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                  Inquiry Submitted Successfully!
                </h2>
                <p className="text-gray-500 text-lg mb-2">
                  Thank you for your interest in Dunai Boarding School.
                </p>
                <p className="text-gray-400 text-sm mb-8">
                  Our admissions team will contact you within{" "}
                  <span className="font-semibold text-blue-600">2 business days</span>.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setForm({ name: "", email: "", phone: "", grade: "", msg: "" });
                      setSubmitted(false);
                    }}
                    className="px-6 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm flex items-center gap-2">
                    <PhoneCall size={16} />
                    Call Us Now
                  </button>
                </div>
              </div>
            ) : (
              /* Form */
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 sm:p-8 lg:p-10">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <FileText size={20} className="text-blue-600" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                      Admission Inquiry Form
                    </h2>
                  </div>
                  <p className="text-gray-500 text-sm ml-13">
                    Fill in the details below and we'll get back to you soon.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                        Parent/Guardian Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                      />
                    </div>
                  </div>

                  {/* Phone & Grade Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="98XXXXXXXX"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                        Grade Applying For <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={form.grade}
                        onChange={(e) => setForm({ ...form, grade: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select grade</option>
                        {grades.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                      Additional Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Any specific questions or requirements..."
                      value={form.msg}
                      onChange={(e) => setForm({ ...form, msg: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm"
                  >
                    <Send size={16} />
                    Submit Inquiry
                    <ArrowRight size={16} />
                  </button>

                  {/* Trust note */}
                  <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                    <Shield size={12} />
                    Your information is safe and secure with us
                  </p>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </div>

      {/* ═══════════ BOTTOM CTA ═══════════ */}
      <FadeIn>
        <div className="mt-16 lg:mt-20 text-center py-10 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl border border-blue-200">
          <MessageCircle size={28} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-extrabold text-gray-900 mb-2">
            Prefer to Talk in Person?
          </h3>
          <p className="text-gray-600 max-w-lg mx-auto text-sm mb-4">
            Visit our campus during office hours. Our admission counselors will 
            guide you through the entire process and give you a tour of our facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <MapPin size={14} className="text-blue-500" />
              Janapriya Marg, Kathmandu-14
            </span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-600">
              <Clock size={14} className="text-amber-500" />
              Sun–Fri, 10 AM – 4 PM
            </span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}