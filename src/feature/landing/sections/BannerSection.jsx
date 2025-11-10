import React from "react";
import { TypingAnimation } from "@/components/ui/typing-animation"
import { AuroraText } from "@/components/ui/aurora-text"

const BannerSection = () => {
  return (
    <section className="bg-[#0E1947] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <h1 className="text-4xl md:text-[60px] font-extrabold leading-snug poppins">
            <AuroraText>
            Siap Sukses Bersama BKK SMKN 1 Purwosari
            </AuroraText>
          </h1>
          <p className="text-[#E2DEDC] mt-4 md:mt-6 max-w-lg text-lg">
            <TypingAnimation>
              Selamat datang di BKK SMKN 1 Purwosari! Bersama kami, wujudkan
              langkah awal menuju masa depan yang sukses dan berdaya saing di dunia kerja.
            </TypingAnimation>
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-[#FFC107] text-white px-5 py-2.5 font-semibold rounded-md hover:bg-yellow-300 transition">
              Lihat Lowongan
            </button>
            <button className="border border-[#FFC107] text-[#FFC107] px-5 py-2.5 font-semibold rounded-md hover:bg-yellow-400 hover:text-[#0b1437] transition">
              Baca Selengkapnya
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-lg mx-auto">
          <div className=" rounded-xl relative ">
            <img
              src="/images/banner.png"
              alt="Siswa BKK"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-[450px] border-b-2 border-[#FFC107] mt-6"></div>

      <div className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 items-start gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-[36px] font-semibold mb-4">Capaian Kami</h2>
            <p className="text-gray-300 max-w-md text-lg">
              Bersama perusahaan mitra, BKK SMKN 1 Purwosari membantu siswa dan alumni siap berkarier.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center lg:text-left">
            <div>
              <p className="text-4xl md:text-[64px] font-bold text-white">160</p>
              <p className="text-white text-lg">Perusahaan Mitra</p>
            </div>
            <div>
              <p className="text-4xl md:text-[64px] font-bold text-white">340</p>
              <p className="text-white text-lg">Alumni Tersalurkan</p>
            </div>
            <div>
              <p className="text-4xl md:text-[64px] font-bold text-white">300+</p>
              <p className="text-white text-lg">Siswa Aktif</p>
            </div>
            <div>
              <p className="text-4xl md:text-[64px] font-bold text-white">82M</p>
              <p className="text-white text-lg">Lowongan Aktif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
