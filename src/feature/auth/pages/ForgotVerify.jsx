import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const ForgotVerify = () => {
  const { verifyResetCode, loading, error } = useAuth();
  const loc = useLocation();
  const navigate = useNavigate();
  const email = loc.state?.email || "";
  const [code, setCode] = useState("");
  const [localError, setLocalError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    try {
      await verifyResetCode(email, code);
      navigate("/forgot/reset", { state: { email } });
    } catch (err) {
      setLocalError(err.message || "Verifikasi gagal");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <div className="mb-4">
          <img src="/images/logo-bkk.png" alt="Logo" className="h-8 mb-2" />
          <h2 className="text-xl font-semibold">Verifikasi Kode</h2>
        </div>

        <p className="text-sm text-gray-600 mb-4">Masukkan kode verifikasi yang telah dikirim ke <strong>{email}</strong>. (Demo: cek console.)</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Kode Verifikasi</label>
            <input value={code} onChange={(e) => setCode(e.target.value)} className="w-full border border-gray-200 rounded-md px-3 py-2" placeholder="6 digit kode" />
          </div>

          {(localError || error) && <div className="text-sm text-red-500">{localError || error}</div>}

          <div className="flex gap-2">
            <button disabled={loading} className="flex-1 bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition disabled:opacity-60">{loading ? "Memverifikasi..." : "Verifikasi"}</button>
            <Link to="/forgot" className="flex-1 text-center border border-gray-200 rounded-lg px-4 py-2">Kirim ulang kode</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotVerify;