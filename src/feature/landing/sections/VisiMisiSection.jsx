import React from "react";
import visionMissionData from "../data/visiMisi.json";
import VisiMisiCard from "../components/VisiMisiCard";

const VisiMisiSection = () => {
  return (
    <section className="relative bg-[#0b1437] text-white px-6 md:px-12 lg:px-20 py-8 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-[36px] font-bold mb-3">
            Visi dan Misi BKK SMKN 1 PURWOSARI
          </h2>
          <p className="text-[#E2DEDC] mb-8 text-lg">
            Berkomitmen mencetak lulusan kompeten dan berdaya saing tinggi
            melalui kerja sama erat antara sekolah dan dunia industri.
          </p>

          <div className="space-y-5 mt-8" >
            {visionMissionData.map((item, index) => (
              <VisiMisiCard key={index} {...item} />
            ))}
          </div>
        </div>

        <div className="relative flex flex-col px-4">
          <div className="relative -top-16">
            <img
              src="/images/visi-misi.png" 
              alt="Siswa BKK"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisiSection;
