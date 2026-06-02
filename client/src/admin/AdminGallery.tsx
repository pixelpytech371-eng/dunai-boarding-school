import { useState, useEffect } from "react";
import { Trash2, Upload } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";
import Badge from "../components/ui/Badge";
import type { Photo } from "../types";

function AdminGallery({ photos, setPhotos }: { photos: Photo[]; setPhotos: (v: Photo[]) => void }) {
  const [form, setForm] = useState({ url: "", caption: "", category: "Event" });
  const cats = ["Event", "Academic", "Sports"];

  useEffect(() => {
  fetch("/api/photos")
    .then(res => res.json())
    .then(data => setPhotos(data));
}, []);

const add = async () => {  // ← Make async
  if (!form.caption) return;
  
  // 🔁 UPLOAD API CALL - use FormData for file upload
  const formData = new FormData();
  formData.append("caption", form.caption);
  formData.append("category", form.category);
  // If you add file input later:
  // formData.append("image", fileInput.files[0]);
  
  const res = await fetch("/api/photos", {
    method: "POST",
    body: formData,  // ← FormData, not JSON
  });
  const created = await res.json();
  setPhotos([created, ...photos]);
  setForm({ url: "", caption: "", category: "Event" });
};


 const del = async (id: number) => {  // ← New async function
  await fetch(`/api/photos/${id}`, { method: "DELETE" });
  setPhotos(photos.filter(ph => ph.id !== id));
};

  return (
    <FadeIn>
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-5">
        <h3 className="font-bold text-gray-900 mb-4">Add Photo</h3>
        <div className="grid sm:grid-cols-3 gap-3">
          <input type="text" placeholder="Caption" value={form.caption} onChange={e => setForm({ ...form, caption: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            {cats.map(c => <option key={c}>{c}</option>)}
          </select>
          <button onClick={add} className="flex items-center justify-center gap-1.5 py-2.5 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-sm"><Upload size={15} />Add Photo</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map(p => (
          <div key={p.id} className="relative group rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <img src={p.url} alt={p.caption} className="w-full object-cover" style={{ aspectRatio: "4/3" }} />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button onClick={() => del(p.id)} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"><Trash2 size={16} /></button>
            </div>
            <div className="px-3 py-2 bg-white"><p className="text-xs font-medium text-gray-700 truncate">{p.caption}</p><Badge label={p.category} /></div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

export default AdminGallery;