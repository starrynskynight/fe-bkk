import React from 'react'

const MisiSection = () => {
  return (
    <section className="text-black px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="relative w-full mx-auto">
          <div className="relative -top-16">
            <img
              src="/images/misi.png" 
              alt="misi"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-[68px] text-[#564F4F] uppercase font-semibold mb-4">
            MISI BKK SMKN 1 PURWOSARI

          </h2>
          <p className="text-black mb-8 leading-relaxed text-lg">
            Membimbing dan memberdayakan siswa untuk mencapai tujuan karier mereka melalui kemitraan yang kuat, pelatihan, dan peluang penempatan kerja. Kami berkomitmen menghubungkan dunia pendidikan dengan dunia kerja, memastikan setiap lulusan siap, kompeten, dan percaya diri dalam bidang yang mereka pilih. Nilai utama kami profesionalisme, integritas, dan dedikasi menjadi dasar dalam setiap langkah yang kami lakukan.
            Melalui pelayanan yang terarah dan kerja sama dengan berbagai mitra industri, BKK SMKN 1 Purwosari berupaya menciptakan peluang kerja yang luas bagi siswa dan alumni, serta membentuk generasi yang siap terjun ke dunia kerja dengan kompetensi unggul.
          </p>
        </div>    
      </div>
    </section>
  )
}

export default MisiSection
