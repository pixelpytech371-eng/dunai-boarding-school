import  {Bell, Camera, Award, FileText, Newspaper} from  "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";
import type { Notice, Photo, Achievement, Inquiry } from "../types";
import StatCard from "../components/ui/StatCard";

function AdminDashboard({ notices, photos, achievements, inquiries }: { notices: Notice[]; photos: Photo[]; achievements: Achievement[]; inquiries: Inquiry[] }) {
 

  

  const pending = inquiries.filter(i => i.status === "Pending").length;
  return (
    <FadeIn>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Notices Posted" value={notices.length} icon={<Bell size={20} className="text-blue-700" />} color="border-blue-200 bg-blue-50 text-blue-900" />
        <StatCard label="Gallery Photos" value={photos.length} icon={<Camera size={20} className="text-purple-700" />} color="border-purple-200 bg-purple-50 text-purple-900" />
        <StatCard label="Achievements" value={achievements.length} icon={<Award size={20} className="text-yellow-700" />} color="border-yellow-200 bg-yellow-50 text-yellow-900" />
        <StatCard label="Pending Inquiries" value={pending} icon={<FileText size={20} className="text-red-700" />} color="border-red-200 bg-red-50 text-red-900" />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><Newspaper size={16} className="text-blue-600" />Recent Notices</h3>
          {notices.slice(0, 4).map(n => (
            <div key={n.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <p className="text-sm text-gray-700 truncate max-w-xs">{n.title}</p>
              <Badge label={n.type} />
            </div>
          ))}
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2"><FileText size={16} className="text-red-600" />Recent Inquiries</h3>
          {inquiries.slice(0, 4).map(q => (
            <div key={q.id} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
              <div><p className="text-sm font-semibold text-gray-800">{q.name}</p><p className="text-xs text-gray-400">{q.grade} • {q.date}</p></div>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${q.status === "Pending" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>{q.status}</span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
  
export default AdminDashboard;