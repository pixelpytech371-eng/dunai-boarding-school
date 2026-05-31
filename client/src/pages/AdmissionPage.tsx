import { useState } from "react";
import {
  Send, CheckCircle, MapPin, PhoneCall, Mail, Clock,
  FileText, Heart, Check, AlertCircle,
  MessageCircle, ArrowRight, GraduationCap, Shield, Leaf,
} from "lucide-react";
import {
  FaFacebookF, FaYoutube, FaTwitter, FaInstagram,
} from "react-icons/fa";
import FadeIn from "../components/ui/FadeIn";
import type { Inquiry } from "../types";
import { useLanguage } from "../hooks/useLanguage";

interface AdmissionPageProps {
  onSubmit: (data: Omit<Inquiry, "id" | "date" | "status">) => void;
}

export default function AdmissionPage({ onSubmit }: AdmissionPageProps) {
  const translations = {
    en: {
      joinDunai: "Join the",
      dunaiFamily: "Dunai Family",
      heroDesc: "Take the first step towards a brighter future for your child in the heart of Dolpa. Fill the form below or reach out to us directly.",
      admissionInfo: "Admission Info",
      admission1: "Nursery to Class 8 admissions open",
      admission2: "~350 students enrolled (IEMIS)",
      admission3: "English-medium modern education",
      admission4: "Boarding (hostel) facilities available",
      admission5: "Documents: TC, birth certificate, photos",
      whyChoose: "Why Choose Us",
      why1: "Eco-Club with WWF Nepal & Shey Phoksundo National Park",
      why2: "STEAM learning (Science, Tech, Engineering, Arts, Math)",
      why3: "Safe hostel for students from remote villages",
      why4: "Supported by DESERT & Friends of Dolpa",
      visitCampus: "Visit Our Campus",
      callUs: "Call Us",
      emailUs: "Email Us",
      officeHours: "Office Hours",
      hoursLine1: "Sun–Fri: 10:00 AM – 4:00 PM",
      hoursLine2: "Saturday: Closed",
      openMaps: "Open in Google Maps",
      connectWithUs: "Connect With Us",
      inquirySubmitted: "Inquiry Submitted Successfully!",
      thankYou: "Thank you for your interest in Dunai Boarding School.",
      contactWithin: "Our admissions team will contact you within",
      businessDays: "2 business days",
      submitAnother: "Submit Another Inquiry",
      callNow: "Call Us Now",
      admissionForm: "Admission Inquiry Form",
      formDesc: "Fill in the details below and we'll get back to you soon.",
      parentName: "Parent/Guardian Name",
      emailAddress: "Email Address",
      phoneNumber: "Phone Number",
      gradeApplying: "Grade Applying For",
      selectGrade: "Select grade",
      additionalMessage: "Additional Message",
      messagePlaceholder: "Any specific questions or requirements...",
      submitInquiry: "Submit Inquiry",
      safeInfo: "Your information is safe and secure with us",
      talkPerson: "Prefer to Talk in Person?",
      talkDesc: "Visit our campus in Dunai, Dolpa. Our admission counselors will guide you through the process and show you our facilities.",
      address: "Thuli Bheri-3, Dunai, Dolpa",
    },
    ne: {
      joinDunai: "जोडिनुहोस्",
      dunaiFamily: "दुनै परिवारमा",
      heroDesc: "डोल्पाको मुटुमा आफ्नो बच्चाको उज्ज्वल भविष्यतर्फ पहिलो कदम चाल्नुहोस्। तलको फारम भर्नुहोस् वा हामीलाई सिधै सम्पर्क गर्नुहोस्।",
      admissionInfo: "भर्ना जानकारी",
      admission1: "नर्सरीदेखि कक्षा ८ सम्म भर्ना खुल्ला",
      admission2: "~३५० विद्यार्थी भर्ना (IEMIS)",
      admission3: "अंग्रेजी-माध्यम आधुनिक शिक्षा",
      admission4: "आवासीय (होस्टल) सुविधा उपलब्ध",
      admission5: "कागजात: TC, जन्म दर्ता, फोटो",
      whyChoose: "हामीलाई किन छान्नुहोस्",
      why1: "WWF नेपाल र शे-फोक्सुण्डो राष्ट्रिय निकुञ्जसँग इको-क्लब",
      why2: "STEAM सिकाइ (विज्ञान, प्रविधि, इन्जिनियरिङ, कला, गणित)",
      why3: "दुर्गम गाउँका विद्यार्थीहरूको लागि सुरक्षित होस्टल",
      why4: "DESERT र Friends of Dolpa द्वारा समर्थित",
      visitCampus: "हाम्रो क्याम्पस भ्रमण गर्नुहोस्",
      callUs: "हामीलाई कल गर्नुहोस्",
      emailUs: "हामीलाई इमेल गर्नुहोस्",
      officeHours: "कार्यालय समय",
      hoursLine1: "आइत–शुक्र: बिहान १०:०० – दिउँसो ४:००",
      hoursLine2: "शनिबार: बन्द",
      openMaps: "गुगल म्यापमा खोल्नुहोस्",
      connectWithUs: "हामीसँग जोडिनुहोस्",
      inquirySubmitted: "जानकारी सफलतापूर्वक पेश भयो!",
      thankYou: "दुनै बोर्डिङ स्कूलमा तपाईंको चासोको लागि धन्यवाद।",
      contactWithin: "हाम्रो भर्ना टोलीले तपाईंलाई",
      businessDays: "२ कार्य दिनभित्र",
      submitAnother: "अर्को पेश गर्नुहोस्",
      callNow: "अहिले कल गर्नुहोस्",
      admissionForm: "भर्ना जानकारी फारम",
      formDesc: "तलको विवरण भर्नुहोस् र हामी चाँडै तपाईंलाई सम्पर्क गर्नेछौं।",
      parentName: "अभिभावकको नाम",
      emailAddress: "इमेल ठेगाना",
      phoneNumber: "फोन नम्बर",
      gradeApplying: "भर्ना हुन चाहेको कक्षा",
      selectGrade: "कक्षा छान्नुहोस्",
      additionalMessage: "थप सन्देश",
      messagePlaceholder: "कुनै विशेष प्रश्न वा आवश्यकताहरू...",
      submitInquiry: "जानकारी पेश गर्नुहोस्",
      safeInfo: "तपाईंको जानकारी हामीसँग सुरक्षित छ",
      talkPerson: "व्यक्तिगत रूपमा कुरा गर्न चाहनुहुन्छ?",
      talkDesc: "दुनै, डोल्पामा हाम्रो क्याम्पस भ्रमण गर्नुहोस्। हाम्रा भर्ना सल्लाहकारहरूले तपाईंलाई प्रक्रियामा मार्गदर्शन गर्नेछन् र हाम्रा सुविधाहरू देखाउनेछन्।",
      address: "ठूलीभेरी-३, दुनै, डोल्पा",
    },
  };

  const language = useLanguage();
  const t = translations[language];
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    msg: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.grade) return;
    onSubmit(form);
    setSubmitted(true);
  };

  const grades = [
    "Nursery", "KG",
    ...Array.from({ length: 8 }, (_, i) => `Class ${i + 1}`),
  ];

  const contactInfo = [
    {
      icon: <MapPin size={20} className="text-blue-600" />,
      title: t.visitCampus,
      lines: ["Thuli Bheri Municipality-3, Dunai", "Dolpa, Karnali Province, Nepal"],
      color: "border-l-blue-500",
    },
    {
      icon: <PhoneCall size={20} className="text-green-600" />,
      title: t.callUs,
      lines: ["+977-9848303292"],
      color: "border-l-green-500",
    },
    {
      icon: <Mail size={20} className="text-purple-600" />,
      title: t.emailUs,
      lines: ["dunaiboarding2050@gmail.com"],
      color: "border-l-purple-500",
    },
    {
      icon: <Clock size={20} className="text-amber-600" />,
      title: t.officeHours,
      lines: [t.hoursLine1, t.hoursLine2],
      color: "border-l-amber-500",
    },
  ];

  const socialLinks = [
     { Icon: FaFacebookF, label: "Facebook", color: "hover:bg-blue-600", url: "https://www.facebook.com/profile.php?id=61560367036422" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* ═══════ HEADER ═══════ */}
      <FadeIn>
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            {t.joinDunai}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t.dunaiFamily}
            </span>
          </h1>
          <p className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto">
            {t.heroDesc}
          </p>
        </div>
      </FadeIn>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
        
        {/* ═══════ LEFT: INFO ═══════ */}
        <div className="lg:col-span-1 space-y-5">
          
          {/* Admission Info Card */}
          <FadeIn delay={0.1}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <AlertCircle size={20} className="text-blue-600" />
                </div>
                <h3 className="font-extrabold text-gray-900">{t.admissionInfo}</h3>
              </div>
              <ul className="space-y-2.5">
                {[t.admission1, t.admission2, t.admission3, t.admission4, t.admission5].map((item, i) => (
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

          {/* School Highlights */}
          <FadeIn delay={0.15}>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <Leaf size={20} className="text-green-600" />
                </div>
                <h3 className="font-extrabold text-gray-900 text-sm">{t.whyChoose}</h3>
              </div>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>• {t.why1}</li>
                <li>• {t.why2}</li>
                <li>• {t.why3}</li>
                <li>• {t.why4}</li>
              </ul>
            </div>
          </FadeIn>

          {/* Contact Cards */}
          {contactInfo.map((item, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.08}>
              <div className={`bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition-all duration-300 border-l-4 ${item.color}`}>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</p>
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-xs text-gray-600">{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}

          {/* Social Media */}
          <FadeIn delay={0.5}>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl border border-gray-200 p-5">
              <p className="font-bold text-gray-900 text-sm mb-3 flex items-center gap-2">
                <Heart size={14} className="text-red-500" />
                {t.connectWithUs}
              </p>
              <div className="flex gap-2">
                {socialLinks.map(({ Icon, label, color, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-500 ${color} hover:text-white transition-all duration-300 shadow-sm`}
                    title={label}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ═══════ RIGHT: FORM ═══════ */}
        <div className="lg:col-span-2">
          <FadeIn delay={0.2}>
            {submitted ? (
              /* Success State */
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-10 sm:p-14 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                  {t.inquirySubmitted}
                </h2>
                <p className="text-gray-500 text-lg mb-2">{t.thankYou}</p>
                <p className="text-gray-400 text-sm mb-8">
                  {t.contactWithin}{" "}
                  <span className="font-semibold text-blue-600">{t.businessDays}</span>.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setForm({ name: "", email: "", phone: "", grade: "", msg: "" });
                      setSubmitted(false);
                    }}
                    className="px-6 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg text-sm"
                  >
                    {t.submitAnother}
                  </button>
                  <a
                    href="tel:+977-9848303292"
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-all text-sm flex items-center gap-2"
                  >
                    <PhoneCall size={16} />
                    {t.callNow}
                  </a>
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
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900">{t.admissionForm}</h2>
                  </div>
                  <p className="text-gray-500 text-sm">{t.formDesc}</p>
                </div>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                        {t.parentName} <span className="text-red-500">*</span>
                      </label>
                      <input type="text" placeholder={t.parentName} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">{t.emailAddress}</label>
                      <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                        {t.phoneNumber} <span className="text-red-500">*</span>
                      </label>
                      <input type="tel" placeholder="98XXXXXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-1.5">
                        {t.gradeApplying} <span className="text-red-500">*</span>
                      </label>
                      <select value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white">
                        <option value="">{t.selectGrade}</option>
                        {grades.map((g) => (<option key={g} value={g}>{g}</option>))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-1.5">{t.additionalMessage}</label>
                    <textarea rows={4} placeholder={t.messagePlaceholder} value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white resize-none" />
                  </div>

                  <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm">
                    <Send size={16} />
                    {t.submitInquiry}
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                    <Shield size={12} />
                    {t.safeInfo}
                  </p>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </div>

      {/* ═══════ FULL WIDTH MAP ═══════ */}
      <FadeIn delay={0.4}>
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="h-64 sm:h-72 lg:h-80 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.4946307021605!2d82.89713577309936!3d28.95175198683272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39bd0a02a79df19f%3A0xd79cb8c283393cc3!2sDunai%20Boarding%20School!5e0!3m2!1sen!2snp!4v1780057600355!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dunai Boarding School Location"
            />
          </div>
          <div className="p-3 text-center border-t border-gray-100 bg-gray-50">
            <a
              href="https://www.google.com/maps/search/Dunai+Boarding+School,+Thuli+Bheri,+Dunai,+Dolpa,+Nepal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <MapPin size={12} />
              {t.openMaps}
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <FadeIn>
        <div className="mt-16 lg:mt-20 text-center py-10 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl border border-blue-200">
          <MessageCircle size={28} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-extrabold text-gray-900 mb-2">{t.talkPerson}</h3>
          <p className="text-gray-600 max-w-lg mx-auto text-sm mb-4">{t.talkDesc}</p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="flex items-center gap-1.5 text-gray-600">
              <MapPin size={14} className="text-blue-500" />
              {t.address}
            </span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-600">
              <Clock size={14} className="text-amber-500" />
              {t.hoursLine1}
            </span>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}