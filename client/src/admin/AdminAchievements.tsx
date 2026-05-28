import { useState } from "react";
import { Trash2, Plus } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";
import type { Achievement } from "../types";

function AdminAchievements({ achievements, setAchievements }: { achievements: Achievement[]; setAchievements: (v: Achievement[]) => void }) {
  const [form, setForm] = useState({ student: "", title: "", desc: "", type: "Academic", year: "2081" });
  const types = ["Academic", "Sports", "Technology", "Cultural"];
  const add = () => {
    if (!form.student || !form.title) return;
    setAchievements([{ id: Date.now(), ...form }, ...achievements]);
    setForm({ student: "", title: "", desc: "", type: "Academic", year: "2081" });
  };
  return (
    <FadeIn>
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-5">
        <h3 className="font-bold text-gray-900 mb-4">Add Achievement</h3>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <input type="text" placeholder="Student name" value={form.student} onChange={e => setForm({ ...form, student: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
          <input type="text" placeholder="Award/achievement title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
        </div>
        <div className="grid sm:grid-cols-3 gap-3 mb-3">
          <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400">
            {types.map(t => <option key={t}>{t}</option>)}
          </select>
          <input type="text" placeholder="Year (e.g. 2081)" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
          <button onClick={add} className="flex items-center justify-center gap-1.5 py-2.5 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 transition-colors text-sm"><Plus size={15} />Add</button>
        </div>
        <input type="text" placeholder="Description..." value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
      </div>
      <div className="space-y-3">
        {achievements.map(a => (
          <div key={a.id} className="flex items-start justify-between gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
            <div><p className="font-bold text-gray-900 text-sm">{a.student}</p><p className="text-sm text-blue-700 font-semibold">{a.title}</p><p className="text-xs text-gray-500 mt-0.5">{a.desc}</p><div className="flex gap-2 mt-1"><Badge label={a.type} /><span className="text-xs text-gray-400">{a.year} B.S.</span></div></div>
            <button onClick={() => setAchievements(achievements.filter(x => x.id !== a.id))} className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors"><Trash2 size={14} /></button>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

export default AdminAchievements;