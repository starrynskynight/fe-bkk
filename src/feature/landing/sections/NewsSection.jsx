import React from "react";
import NewsCard from "../components/NewsCard";
import newsData from "../data/news.json";

const NewsSection = () => {
  return (
    <section className="bg-[#f8f9ff] py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#0b1437] mb-2">
              Berita dan Informasi Terkini
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Dapatkan berita terbaru seputar kegiatan BKK SMKN 1 Purwosari,
              informasi lowongan kerja, dan kerja sama dengan dunia industri.
            </p>
          </div>
          <a
            href="#"
            className="text-yellow-500 border border-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-[#0b1437] transition"
          >
            Lihat Semua Berita
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        <img
          src="/svg/dot-patterns.svg"
          alt=""
          className="absolute top-5 -right-50 w-[448px] pointer-events-none"
        />
      </div>
    </section>
  );
};

export default NewsSection;
