import React from "react";
import { Marquee } from "@/components/ui/marquee";
import AlumniCard from "../components/AlumniCard";
import alumniData from "../data/alumni.json";

const AlumniSection = () => {
  return (
    <section className="relative bg-[#f3f5ff] text-[#0b1437] px-6 md:px-12 lg:px-20 py-16 pb-24 overflow-hidden">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-2xl md:text-[36px] font-bold mb-3">
          Cerita Alumni Kami
        </h2>
        <p className="text-[#373642] text-lg max-w-2xl mx-auto md:mx-0">
          Berbagai kisah sukses alumni SMKN 1 Purwosari yang kini telah bekerja
          di perusahaan mitra kami.
        </p>
      </div>

      <Marquee pauseOnHover className="[--duration:20s] gap-8">
        {alumniData.map((alumni, index) => (
          <AlumniCard key={index} {...alumni} />
        ))}
      </Marquee>

      <img
        src="/svg/dot-patterns.svg"
        alt=""
        className="absolute bottom-4 -left-50 w-[400px] opacity-60 pointer-events-none"
      />
    </section>
  );
};

export default AlumniSection;
