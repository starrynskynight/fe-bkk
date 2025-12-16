import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  const contacts = [
    {
      icon: <Mail size={28} />,
      title: "Email",
      detail: "informasi@smkn1purwosari.sch.id",
    },
    {
      icon: <MapPin size={28} />,
      title: "Lokasi",
      detail: (
        <>
          Jl. Raya Purwosari No. 1, Kec Purwosari,
          <br />
          Kab Pasuruan, Jawa Timur 67162
        </>
      ),
    },
    {
      icon: <Phone size={28} />,
      title: "No. Telepon",
      detail: "(0343) 613747",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Ada Kendala? <span className="text-blue-800">Hubungi Kami</span>
      </h2>
      <div className="w-16 h-[2px] bg-blue-800 mx-auto my-3 rounded"></div>
      <p className="max-w-2xl mx-auto text-gray-500 mb-12">
        Kami hadir untuk mendukung kelancaran pencarian pekerjaan Anda. Jika ada
        kendala atau pertanyaan, silakan hubungi tim kami melalui kontak yang
        tersedia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl border border-gray-100 p-8 flex flex-col items-center"
          >
            <div
                className="w-20 h-20 flex items-center justify-center rounded-full relative mb-4"
                style={{
                    background: "radial-gradient(circle at center, #4656D4 0%, #0E1947 100%)", 
                    boxShadow: "0 0 0 5px #fff, 0 0 0 10px #0E1947", 
                }}
                >
                <div className="text-white text-2xl">{item.icon}</div>
            </div>
            <h3 className="font-semibold text-gray-900 text-lg mb-1">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
