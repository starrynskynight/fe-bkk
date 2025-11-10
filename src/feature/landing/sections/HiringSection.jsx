import React from "react";

const HiringSection = () => {
  return (
    <section className="bg-[#0C144D] text-white overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch justify-between">
        <div className="lg:w-[45%] flex flex-col justify-center px-6 py-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            Yuk, Mulai Langkah <br /> Kariermu Sekarang!
          </h2>
          <p className="text-gray-300 mb-6">
            Temukan peluang kerja sesuai keahlianmu di perusahaan mitra BKK SMKN
            1 Purwosari.
          </p>
          <button className="bg-[#FFC107] text-white font-semibold px-6 py-3 rounded-md w-fit hover:bg-yellow-400 transition">
            Lihat Lowongan Sekarang
          </button>
        </div>

        <div className="lg:w-[45%] flex justify-center items-center relative">
          <img
            src="/images/hiring.png"
            alt="We are hiring"
            className="shadow-lg w-full object-cover"
          />
        </div>

        <div className="lg:w-[20%] bg-[#FFC107] relative lg:flex items-center overflow-hidden">
          <img
            src="/svg/strip.svg"
            alt="Decorative stripes"
            className="absolute right-0 top-12 h-[130px] w-[700px] object-cover rotate-90"
          />
        </div>
      </div>
    </section>
  );
};

export default HiringSection;
