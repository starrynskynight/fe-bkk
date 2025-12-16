import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Simple auth hook to separate logic; replace API calls with real endpoints
export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async ({ email, password, remember }) => {
    setLoading(true);
    setError(null);
    try {
      if (!email || !password) throw new Error("Email dan password harus diisi");

      // POST JSON to /api/login
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        // try parse error message
        let errMsg = res.statusText;
        try {
          const body = await res.json();
          if (body && body.message) errMsg = body.message;
        } catch (e) {
          // ignore
        }
        throw new Error(errMsg || `Login failed: ${res.status}`);
      }

      const data = await res.json();

      // expect { token, user } or similar
      const token = data.token || data.access_token || data?.data?.token;
      if (!token) throw new Error("Token tidak ditemukan dalam respon");

      if (remember) localStorage.setItem("bkk_token", token);
      else sessionStorage.setItem("bkk_token", token);

      // redirect to home
      navigate("/");
      return data;
    } catch (err) {
      setError(err.message || "Terjadi kesalahan saat login");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("bkk_token");
    sessionStorage.removeItem("bkk_token");
    navigate("/login");
  };

  const isAuthenticated = () => Boolean(localStorage.getItem("bkk_token") || sessionStorage.getItem("bkk_token"));

  // --- Signup and password reset (demo implementations using localStorage) ---
  const _getUsers = () => JSON.parse(localStorage.getItem("bkk_users") || "[]");
  const _saveUsers = (users) => localStorage.setItem("bkk_users", JSON.stringify(users));

  const signup = async ({ name, email, password }) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 800));
      if (!email || !password || !name) throw new Error("Semua field harus diisi");
      const users = _getUsers();
      if (users.find((u) => u.email === email)) throw new Error("Email sudah terdaftar");
      users.push({ name, email, password });
      _saveUsers(users);
      // auto navigate to login
      navigate("/login");
    } catch (err) {
      setError(err.message || "Gagal mendaftar");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const sendResetCode = async (email) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 700));
      const code = String(Math.floor(100000 + Math.random() * 900000));
      const expiresAt = Date.now() + 1000 * 60 * 15; // 15 minutes
      localStorage.setItem(`bkk_reset_${email}`, JSON.stringify({ code, expiresAt }));
      // In real app: send email. For demo, log to console
      // eslint-disable-next-line no-console
      console.info(`Reset code for ${email}: ${code}`);
      return { success: true };
    } catch (err) {
      setError(err.message || "Gagal mengirim kode");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const verifyResetCode = async (email, code) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 500));
      const raw = localStorage.getItem(`bkk_reset_${email}`);
      if (!raw) throw new Error("Kode tidak ditemukan atau kadaluarsa");
      const obj = JSON.parse(raw);
      if (Date.now() > obj.expiresAt) throw new Error("Kode kadaluarsa");
      if (obj.code !== String(code)) throw new Error("Kode tidak cocok");
      // mark verified
      localStorage.setItem(`bkk_reset_verified_${email}`, "1");
      return { success: true };
    } catch (err) {
      setError(err.message || "Verifikasi gagal");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email, newPassword) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 700));
      const verified = localStorage.getItem(`bkk_reset_verified_${email}`);
      if (!verified) throw new Error("Email belum terverifikasi untuk reset password");
      const users = _getUsers();
      const idx = users.findIndex((u) => u.email === email);
      if (idx === -1) throw new Error("Email tidak terdaftar");
      users[idx].password = newPassword;
      _saveUsers(users);
      // cleanup
      localStorage.removeItem(`bkk_reset_${email}`);
      localStorage.removeItem(`bkk_reset_verified_${email}`);
      navigate("/login");
      return { success: true };
    } catch (err) {
      setError(err.message || "Gagal reset password");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, logout, signup, sendResetCode, verifyResetCode, resetPassword, loading, error, isAuthenticated };
}