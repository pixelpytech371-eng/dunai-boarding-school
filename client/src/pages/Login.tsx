import { useState } from "react";
import { Shield } from "lucide-react";
import FadeIn from "../components/ui/FadeIn";

function LoginPage({ onLogin }: { onLogin: () => void }) {
  const [user, setUser] = useState(""); const [pass, setPass] = useState(""); const [err, setErr] = useState("");
  const handle = () => { if (user === "admin" && pass === "janapriya2082") { onLogin(); } else setErr("Invalid credentials. Try admin / janapriya2082"); };
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <FadeIn>
        <div className="w-full max-w-sm bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
          <div className="text-center mb-7">
            <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center mx-auto mb-3 shadow-lg"><Shield size={26} className="text-white" /></div>
            <h2 className="text-xl font-extrabold text-gray-900">Admin Login</h2>
            <p className="text-sm text-gray-400 mt-1">Shree Janapriya Secondary School</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Username</label>
              <input type="text" value={user} onChange={e => setUser(e.target.value)} placeholder="admin" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-600 block mb-1">Password</label>
              <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••••••" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" onKeyDown={e => e.key === "Enter" && handle()} />
            </div>
            {err && <p className="text-xs text-red-600 font-medium bg-red-50 px-3 py-2 rounded-lg">{err}</p>}
            <button onClick={handle} className="w-full py-3 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-md">Sign In</button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Demo: admin / janapriya2082</p>
        </div>
      </FadeIn>
    </div>
  );
}

export default LoginPage;