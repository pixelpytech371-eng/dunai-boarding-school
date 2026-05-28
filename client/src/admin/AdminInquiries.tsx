import { Trash2, FileText, Mail, PhoneCall } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import type { Inquiry } from "../types";
import MessageSquareIcon from "../components/ui/MessageSquareIcon";

function AdminInquiries({ inquiries, setInquiries }: { inquiries: Inquiry[]; setInquiries: (v: Inquiry[]) => void }) {
  const mark = (id: number, status: string) => setInquiries(inquiries.map(q => q.id === id ? { ...q, status } : q));
  return (
    <FadeIn>
      <div className="space-y-4">
        {inquiries.length === 0 && <div className="text-center py-16 text-gray-400"><FileText size={40} className="mx-auto mb-2 opacity-30" /><p>No inquiries yet.</p></div>}
        {inquiries.map(q => (
          <div key={q.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div><p className="font-bold text-gray-900">{q.name}</p><p className="text-sm text-gray-500">{q.grade} • {q.date}</p></div>
              <div className="flex gap-2 items-center">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${q.status === "Pending" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>{q.status}</span>
                {q.status === "Pending" && <button onClick={() => mark(q.id, "Contacted")} className="text-xs font-semibold px-3 py-1 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">Mark Contacted</button>}
                <button onClick={() => setInquiries(inquiries.filter(x => x.id !== q.id))} className="p-1.5 hover:bg-red-50 text-red-400 rounded-lg transition-colors"><Trash2 size={14} /></button>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <p className="text-gray-600 flex gap-1"><Mail size={13} className="mt-0.5 text-blue-400 shrink-0" />{q.email}</p>
              <p className="text-gray-600 flex gap-1"><PhoneCall size={13} className="mt-0.5 text-blue-400 shrink-0" />{q.phone}</p>
              {q.msg && <p className="text-gray-600 flex gap-1"><MessageSquareIcon />{q.msg}</p>}
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

export default AdminInquiries;