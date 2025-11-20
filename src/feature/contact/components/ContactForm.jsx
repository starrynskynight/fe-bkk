import React, { useState } from "react";
import { Mail, Phone, MessageCircleMore, User, ArrowRight } from "lucide-react";
import InputField from "@/components/common/InputField"; 
import TextareaField from "@/components/common/TextareaField";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    email: "",
    telepon: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto items-start">
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
          <iframe
            title="Lokasi SMK Negeri 1 Purwosari"
            src="https://www.google.com/maps?q=SMK+Negeri+1+Purwosari,+Pasuruan&output=embed"
            className="w-full h-[400px] md:h-[640px]"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-white rounded-2xl">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Formulir Kontak
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Ada yang Ingin Ditanyakan?
          </h2>
          <p className="text-gray-500 mb-8">
            Jangan ragu! Tulis pesanmu di sini, kami akan segera merespons untuk membantumu.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <InputField
              label="Nama Lengkap"
              name="nama_lengkap"
              placeholder="Masukkan nama lengkap Anda"
              value={formData.nama_lengkap}
              onChange={handleChange}
              required
              icon={<User className="text-gray-400" size={18} />}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Email"
                name="email"
                placeholder="Masukkan email Anda"
                value={formData.email}
                onChange={handleChange}
                required
                icon={<Mail className="text-gray-400" size={18} />}
              />
              <InputField
                label="No. Telepon"
                name="telepon"
                placeholder="Masukkan nomor telepon"
                value={formData.telepon}
                onChange={handleChange}
                required
                icon={<Phone className="text-gray-400" size={18} />}
              />
            </div>

            <TextareaField
              label="Pesan atau Pertanyaan"
              name="pesan"
              placeholder="Tulis pesan atau pertanyaan Anda"
              value={formData.pesan}
              onChange={handleChange}
              required
              icon={<MessageCircleMore className="text-gray-400" size={18} />}
              textarea
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white font-medium py-3 rounded-xl hover:bg-blue-800 transition-all duration-300"
            >
              Kirim Pertanyaan <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
