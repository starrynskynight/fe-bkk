import React from "react";
import PartnersCard from "../../../feature/landing/components/PartnersCard";
import partnersData from "../../landing/data/partners.json";

const PartnersList = () => {
  return (
    <section className="relative bg-[#f8f9ff] text-[#0b1437] px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      <div
        className="absolute top-10 right-0 w-[448px] h-[58px] bg-no-repeat bg-contain bg-right-top pointer-events-none"
        style={{
          backgroundImage: "url('/svg/dot-patterns.svg')",
          backgroundAttachment: "local" 
        }}
      ></div>

      <div className="text-left mb-12 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Perusahaan yang Menjalin Kerja Sama
        </h2>
        <p className="text-[#373642] max-w-2xl text-lg">
          Tingkatkan potensi kemitraan Anda bersama SMKN 1 Purwosari melalui
          kerja sama strategis yang menghadirkan solusi inovatif dan
          berorientasi pada kesuksesan bersama.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {partnersData.map((partner, index) => (
          <PartnersCard key={index} {...partner} />
        ))}
      </div>
    </section>
  );
};

export default PartnersList;
