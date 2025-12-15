import React from "react";
import ImageClip from "../components/ImageClip";

const AboutUsSection = () => {
  return (
    <section className="text-black px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>
            <h2 className="text-lg md:text-[20px] text-[#FFC107] tracking-[0.5em] mb-4">
                Sedikit
            </h2>
            <h2 className="text-3xl md:text-[48px] uppercase font-semibold mb-4">
                Tentang Kami
            </h2>
            <p className="text-black mb-8 leading-relaxed text-lg">
                Didirikan di bawah naungan SMKN 1 Purwosari, BKK (Bursa Kerja Khusus)
                berperan sebagai penghubung antara dunia pendidikan dan dunia industri.
                Kami berkomitmen membantu lulusan menapaki karier terbaiknya melalui
                pelatihan, bimbingan, serta kerja sama strategis dengan berbagai
                perusahaan ternama. Dengan jaringan mitra industri yang luas dan
                pendekatan profesional, BKK SMKN 1 Purwosari terus berupaya menciptakan
                generasi siap kerja, berkompeten, dan berdaya saing tinggi di era modern.
            </p>

            <button
                class="bg-[#FFC107] text-white font-semibold px-8 py-3 tracking-[0.05em]
                        [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] shadow-md hover:scale-105 
                        transition-transform duration-300 ease-in-out"
                >
                BACA SETERUSNYA
            </button>
        </div>
        
        <div className="relative w-full mx-auto">
         <ImageClip />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
