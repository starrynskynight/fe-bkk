import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const Signup = () => {
  const { signup, loading, error } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [localError, setLocalError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    if (!form.name || !form.email || !form.password) return setLocalError("Semua field harus diisi");
    if (form.password !== form.confirm) return setLocalError("Password dan konfirmasi tidak cocok");
    try {
      await signup({ name: form.name, email: form.email, password: form.password });
    } catch (err) {
      setLocalError(err.message || "Gagal mendaftar");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <img src="/images/logo-bkk.png" alt="Logo" className="h-8 mb-2" />
            <h2 className="text-xl font-semibold">Daftar</h2>
          </div>
          <div className="text-sm text-gray-500">Sudah punya akun? <Link to="/login" className="text-yellow-500">Masuk</Link></div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
            <input name="confirm" type="password" value={form.confirm} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>

          {(localError || error) && <div className="text-sm text-red-500 col-span-full">{localError || error}</div>}

          <div className="col-span-full">
            <button disabled={loading} className="w-full bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition disabled:opacity-60">
              {loading ? "Memproses..." : "Daftar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;