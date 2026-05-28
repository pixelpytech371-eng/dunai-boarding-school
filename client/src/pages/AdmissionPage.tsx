import { useState } from "react";
import { AlertCircle, Check, CheckCircle, Clock, MapPin, PhoneCall, Send } from "lucide-react";
import type { Inquiry } from "../types";
import FadeIn from "../components/ui/FadeIn";


function AdmissionPage({ onSubmit }: { onSubmit: (data: Omit<Inquiry, "id" | "date" | "status">) => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", grade: "", msg: "" });
  const [submitted, setSubmitted] = useState(false);
 
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.phone || !form.grade) return;
    onSubmit(form);
    setSubmitted(true);
  };
 
  const grades = ["Nursery", "KG", ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)];
 
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <FadeIn><h1 className="text-4xl font-extrabold text-gray-900 mb-2">Admission Inquiry</h1>
        <p className="text-gray-500 mb-12 text-lg">Take the first step towards a brighter future.</p></FadeIn>
 
      <div className="grid lg:grid-cols-2 gap-10">
        <FadeIn>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><AlertCircle size={18} className="text-blue-600" />Admission for 2082 B.S.</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><Check size={14} className="text-green-500 mt-0.5 shrink-0" />Applications accepted for Nursery to Class 10</li>
                <li className="flex gap-2"><Check size={14} className="text-green-500 mt-0.5 shrink-0" />Merit-based admission with entrance evaluation</li>
                <li className="flex gap-2"><Check size={14} className="text-green-500 mt-0.5 shrink-0" />Scholarship available for meritorious students</li>
                <li className="flex gap-2"><Check size={14} className="text-green-500 mt-0.5 shrink-0" />Documents: TC, birth certificate, citizenship of parents</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-3">Visit Us</h3>
              <p className="text-sm text-gray-600 mb-1"><MapPin size={13} className="inline mr-1 text-blue-600" />Janapriya Marg, Kathmandu-14</p>
              <p className="text-sm text-gray-600 mb-1"><Clock size={13} className="inline mr-1 text-blue-600" />Sun–Fri: 10:00 AM – 4:00 PM</p>
              <p className="text-sm text-gray-600"><PhoneCall size={13} className="inline mr-1 text-blue-600" />+977-01-4567890</p>
            </div>
          </div>
        </FadeIn>
 
        <FadeIn delay={0.15}>
          {submitted ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"><CheckCircle size={32} className="text-green-600" /></div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-2">Inquiry Submitted!</h3>
              <p className="text-gray-500 text-sm mb-6">Thank you! Our admissions team will contact you within 2 business days.</p>
              <button onClick={() => { setForm({ name: "", email: "", phone: "", grade: "", msg: "" }); setSubmitted(false); }} className="px-5 py-2 bg-blue-700 text-white rounded-xl text-sm font-semibold hover:bg-blue-800 transition-colors">Submit Another</button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-extrabold text-gray-900 mb-5">Fill in Your Details</h3>
              <div className="space-y-4">
                {[
                  { label: "Parent/Guardian Name *", key: "name", type: "text", placeholder: "Full name" },
                  { label: "Email Address *", key: "email", type: "email", placeholder: "your@email.com" },
                  { label: "Phone Number *", key: "phone", type: "tel", placeholder: "98XXXXXXXX" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="text-sm font-semibold text-gray-700 block mb-1">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                ))}
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1">Grade Applying For *</label>
                  <select value={form.grade} onChange={e => setForm({ ...form, grade: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white">
                    <option value="">Select grade</option>
                    {grades.map(g => <option key={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1">Additional Message</label>
                  <textarea rows={3} placeholder="Any specific questions or requirements..." value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" />
                </div>
                <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md hover:shadow-lg text-sm">
                  <Send size={16} /> Submit Inquiry
                </button>
              </div>
            </div>
          )}
        </FadeIn>
      </div>
    </div>
  );
}

export default AdmissionPage;
