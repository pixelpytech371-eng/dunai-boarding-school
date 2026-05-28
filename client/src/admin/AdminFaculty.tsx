import { useState } from "react";
import { Trash2, Plus } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import type { Faculty } from "../types";

function AdminFaculty({ faculty, setFaculty }: { faculty: Faculty[]; setFaculty: (v: Faculty[]) => void }) {
  const [form, setForm] = useState({ name: "", subject: "", photo: "", bio: "" });
  const add = () => {
    if (!form.name || !form.subject) return;
    const idx = Math.floor(Math.random() * 70) + 1;
    setFaculty([...faculty, { id: Date.now(), ...form, photo: form.photo || `https://i.pravatar.cc/150?img=${idx}` }]);
    setForm({ name: "", subject: "", photo: "", bio: "" });
  };
  return (
    <FadeIn>
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-5">
        <h3 className="font-bold text-gray-900 mb-4">Add Faculty Member</h3>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <input type="text" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <input type="text" placeholder="Subject taught" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Bio / qualifications" value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} className="sm:col-span-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <button onClick={add} className="flex items-center justify-center gap-1.5 py-2.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-sm"><Plus size={15} />Add</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {faculty.map(f => (
          <div key={f.id} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <img src={f.photo} alt={f.name} className="w-10 h-10 rounded-full object-cover border-2 border-blue-100" />
              <div><p className="font-bold text-gray-900 text-sm">{f.name}</p><p className="text-xs text-blue-600">{f.subject}</p></div>
            </div>
            <button onClick={() => setFaculty(faculty.filter(x => x.id !== f.id))} className="p-1.5 hover:bg-red-50 text-red-500 rounded-lg transition-colors shrink-0"><Trash2 size={14} /></button>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

export default AdminFaculty;