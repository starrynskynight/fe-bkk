import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const ForgotPassword = () => {
  const { sendResetCode, loading, error } = useAuth();
  const [email, setEmail] = useState("");
  const [localError, setLocalError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    try {
      await sendResetCode(email);
      setSuccess(true);
      // navigate to verify step
      navigate("/forgot/verify", { state: { email } });
    } catch (err) {
      setLocalError(err.message || "Gagal mengirim kode");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-4">
          <img src="/images/logo-bkk.png" alt="Logo" className="h-8 mb-2" />
          <h2 className="text-xl font-semibold">Lupa Password</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-gray-600">Masukkan email Anda, kami akan mengirim kode verifikasi untuk mereset password.</p>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-200 rounded-md px-3 py-2" placeholder="nama@contoh.com" />
          </div>

          {(localError || error) && <div className="text-sm text-red-500">{localError || error}</div>}

          {success && <div className="text-sm text-green-600">Kode verifikasi telah dikirim (cek console pada demo).</div>}

          <button disabled={loading} className="w-full bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition disabled:opacity-60">{loading ? "Mengirim..." : "Kirim Kode"}</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;