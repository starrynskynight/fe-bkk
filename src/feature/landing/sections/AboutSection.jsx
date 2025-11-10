import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-[#0E1947] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
          <h2 className="text-3xl md:text-[36px] font-bold mb-4">
            Tentang BKK SMKN 1 PURWOSARI
          </h2>
          <p className="text-[#E2DEDC] mb-8 leading-relaxed text-lg">
            Didirikan di bawah naungan SMKN 1 Purwosari, BKK (Bursa Kerja Khusus)
            berperan sebagai penghubung antara dunia pendidikan dan dunia industri.
            Kami berkomitmen membantu lulusan menapaki karier terbaiknya melalui
            pelatihan, bimbingan, serta kerja sama strategis dengan berbagai
            perusahaan ternama. Dengan jaringan mitra industri yang luas dan
            pendekatan profesional, BKK SMKN 1 Purwosari terus berupaya menciptakan
            generasi siap kerja, berkompeten, dan berdaya saing tinggi di era modern.
          </p>

          <button className="bg-[#FFC107] text-white px-6 py-2.5 font-semibold rounded-md hover:scale-105 transition-transform duration-500 ease-in-out">
            Baca Selengkapnya
          </button>
        </div>

        <div className="relative w-full mx-auto">
          <div className="relative -top-16">
            <img
              src="/images/about.png" 
              alt="Gedung SMKN 1 Purwosari"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
