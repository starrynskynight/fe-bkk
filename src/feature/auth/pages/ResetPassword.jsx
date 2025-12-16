import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const ResetPassword = () => {
  const { resetPassword, loading, error } = useAuth();
  const loc = useLocation();
  const email = loc.state?.email || "";
  const [form, setForm] = useState({ password: "", confirm: "" });
  const [localError, setLocalError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    if (!form.password) return setLocalError("Password harus diisi");
    if (form.password !== form.confirm) return setLocalError("Password dan konfirmasi tidak cocok");
    try {
      await resetPassword(email, form.password);
    } catch (err) {
      setLocalError(err.message || "Gagal mereset password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-4">
          <img src="/images/logo-bkk.png" alt="Logo" className="h-8 mb-2" />
          <h2 className="text-xl font-semibold">Atur Ulang Password</h2>
        </div>

        <p className="text-sm text-gray-600 mb-4">Set password baru untuk <strong>{email}</strong>.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password Baru</label>
            <input name="password" type="password" value={form.password} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
            <input name="confirm" type="password" value={form.confirm} onChange={handleChange} className="w-full border border-gray-200 rounded-md px-3 py-2" />
          </div>

          {(localError || error) && <div className="text-sm text-red-500">{localError || error}</div>}

          <button disabled={loading} className="w-full bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition disabled:opacity-60">{loading ? "Memproses..." : "Reset Password"}</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;