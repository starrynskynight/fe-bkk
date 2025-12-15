import React from 'react'

const VisiSection = () => {
  return (
    <section className="text-black px-6 md:px-12 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div>   
          <h2 className="text-3xl md:text-[68px] uppercase text-[#564F4F] font-semibold mb-4">
            VISI BKK SMKN 1 PURWOSARI
          </h2>
          <p className="text-black mb-8 leading-relaxed text-lg">
            Menjadi jembatan terpercaya antara dunia pendidikan dan dunia kerja profesional, dengan mencetak lulusan yang kompeten, terampil, dan berdaya saing global melalui kemitraan berkelanjutan dengan dunia industri dan masyarakat.
            BKK SMKN 1 Purwosari berkomitmen menjadi penghubung antara sekolah dan dunia kerja melalui kemitraan berkelanjutan dengan industri. Kami terus mendorong terciptanya lulusan yang kompeten, adaptif, dan siap bersaing di dunia profesional.
          </p>
        </div>

        <div className="relative w-full mx-auto">
          <div className="relative -top-16">
            <img
              src="/images/visi.png" 
              alt="visi"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisiSection
