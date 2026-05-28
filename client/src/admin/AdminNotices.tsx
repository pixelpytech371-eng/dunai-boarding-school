import { useState } from "react";
import { Plus, Edit3, Trash2, RefreshCw } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";
import type { Notice } from "../types";

function AdminNotices({ notices, setNotices }: { notices: Notice[]; setNotices: (v: Notice[]) => void }) {
  const [form, setForm] = useState({ title: "", body: "", type: "Exam" });
  const [editing, setEditing] = useState<number | null>(null);
  const types = ["Exam", "Event", "Holiday", "Meeting"];
 
  const save = () => {
    if (!form.title || !form.body) return;
    if (editing !== null) {
      setNotices(notices.map(n => n.id === editing ? { ...n, ...form } : n));
      setEditing(null);
    } else {
      setNotices([{ id: Date.now(), ...form, date: new Date().toISOString().split("T")[0] }, ...notices]);
    }
    setForm({ title: "", body: "", type: "Exam" });
  };
  const del = (id: number) => setNotices(notices.filter(n => n.id !== id));
  const edit = (n: Notice) => { setForm({ title: n.title, body: n.body, type: n.type }); setEditing(n.id); };
 
  return (
    <FadeIn>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">{editing !== null ? "Edit Notice" : "Add New Notice"}</h3>
          <div className="space-y-3">
            <input type="text" placeholder="Notice title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            <textarea rows={4} placeholder="Notice content..." value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" />
            <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
              {types.map(t => <option key={t}>{t}</option>)}
            </select>
            <div className="flex gap-2">
              <button onClick={save} className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-sm"><Plus size={15} />{editing !== null ? "Update" : "Post Notice"}</button>
              {editing !== null && <button onClick={() => { setEditing(null); setForm({ title: "", body: "", type: "Exam" }); }} className="px-4 py-2.5 bg-gray-100 text-gray-600 font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"><RefreshCw size={14} /></button>}
            </div>
          </div>
        </div>
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {notices.map(n => (
            <div key={n.id} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm">
              <div className="flex items-start justify-between gap-2 mb-1">
                <p className="font-bold text-gray-900 text-sm">{n.title}</p>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => edit(n)} className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-600 transition-colors"><Edit3 size={14} /></button>
                  <button onClick={() => del(n.id)} className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 transition-colors"><Trash2 size={14} /></button>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2 line-clamp-2">{n.body}</p>
              <div className="flex items-center gap-2"><Badge label={n.type} /><span className="text-xs text-gray-400">{n.date}</span></div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default AdminNotices;