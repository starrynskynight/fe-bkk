import React from "react";
import { Marquee } from "@/components/ui/marquee";
import galleryData from "../data/gallery.json";

const GallerySection = () => {
  return (
    <section className="relative text-[#0b1437] px-6 md:px-0 py-20 overflow-hidden">
      <div className="relative mb-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left px-4 md:px-10">
          <h2 className="text-2xl md:text-[36px] font-bold mb-3">
            Galeri Kegiatan BKK
          </h2>
          <p className="text-[#373642] text-lg max-w-2xl mx-auto md:mx-0">
            Cuplikan kegiatan BKK SMKN 1 Purwosari dalam membangun koneksi antara sekolah dan dunia industri.
          </p>
        </div>

        <button className="border border-yellow-400 text-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-white transition">
          Lihat Semua Galeri
        </button>

        <img
          src="/svg/dot-patterns.svg"
          alt="Dot pattern"
          className="absolute -top-15 -right-30 w-[300px] pointer-events-none"
        />
      </div>

      <Marquee pauseOnHover className="[--duration:25s]">
        {galleryData.map((gallery) => (
          <div
            key={gallery.id}
            className="w-[588px] h-[253px] rounded-xl overflow-hidden shadow-md mx-3 flex-shrink-0"
          >
            <img
              src={gallery.image}
              alt={gallery.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default GallerySection;
