import React from 'react'

const ExecellenceSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto text-black px-6 md:px-12 lg:px-20 py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">           
            <div className="flex flex-col justify-start space-y-6">
                <div>
                    <h2 className="text-lg md:text-[20px] text-[#FFC107] tracking-[0.5em] mb-2 uppercase">
                    Siapa Kita
                    </h2>
                    <h3 className="text-3xl md:text-[36px] uppercase font-semibold mb-4">
                    BKK SMKN 1 Purwosari
                    </h3>
                    <p className="text-black leading-relaxed text-lg">
                    BKK SMK Negeri 1 Purwosari adalah wadah resmi yang dibentuk oleh sekolah
                    untuk memfasilitasi lulusan dalam memperoleh pekerjaan, sekaligus
                    menjembatani kerja sama dengan berbagai perusahaan dan instansi.
                    </p>
                </div>

                <img
                    src="/images/image-ex1.jpg"
                    alt="BKK SMKN 1 Purwosari"
                    className="rounded-xl shadow-md"
                />
            </div>

            <div className="flex flex-col justify-end space-y-6">
                <div>
                    <h2 className="text-lg md:text-[20px] text-[#FFC107] tracking-[0.5em] mb-2 uppercase">
                    Mengapa Kita
                    </h2>
                    <h3 className="text-3xl md:text-[36px] uppercase font-semibold mb-4">
                    Keunggulan BKK SMKN 1 Purwosari
                    </h3>
                    <p className="text-black leading-relaxed text-lg">
                    BKK SMK Negeri 1 Purwosari memiliki berbagai keunggulan seperti jaringan luas,
                    pembinaan karier intensif, dan dukungan dari berbagai industri mitra strategis.
                    Kami membantu siswa menembus dunia kerja profesional dengan kompetensi unggul.
                    </p>
                </div>

                <img
                    src="images/image-ex2.jpg"
                    alt="Keunggulan BKK"
                    className="rounded-xl shadow-md"
                />
                <img
                    src="/svg/dot-patterns.svg"
                    alt=""
                    className="absolute bottom-50 left-24 w-[500px] pointer-events-none"
                />
            </div>
        </div>
    </section>
  )
}

export default ExecellenceSection
