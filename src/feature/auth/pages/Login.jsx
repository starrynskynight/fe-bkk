import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const Login = () => {
  const { login, loading, error } = useAuth();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [localError, setLocalError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    try {
      await login(form);
    } catch (err) {
      setLocalError(err.message || "Gagal masuk");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: form */}
        <div className="bg-white rounded-xl shadow-lg p-10">
          <div className="flex items-start justify-between mb-6">
            <div>
              <img src="/images/logo-bkk.png" alt="Logo" className="h-8 mb-4" />
              <h2 className="text-2xl font-semibold">Login</h2>
            </div>
            <div className="text-sm text-gray-500">Belum punya akun? <Link to="/signup" className="text-yellow-500">Daftar</Link></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="nama@contoh.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Masukkan password"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" name="remember" checked={form.remember} onChange={handleChange} />
                <span>Ingat saya</span>
              </label>
              <Link to="/forgot" className="text-yellow-500">Lupa password?</Link>
            </div>

            {(localError || error) && (
              <div className="text-sm text-red-500">{localError || error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition disabled:opacity-60"
            >
              {loading ? "Memproses..." : "Login"}
            </button>
          </form>

          <div className="mt-6 text-xs text-gray-500">Dengan masuk Anda menyetujui <a href="#" className="text-yellow-500">Syarat & Ketentuan</a></div>
        </div>

        {/* Right: illustration */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full max-w-xl">
            <img src="/images/about.png" alt="Ilustrasi" className="w-full rounded-xl shadow-md object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
