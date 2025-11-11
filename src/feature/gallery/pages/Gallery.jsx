import React from 'react'
import ThumbnailSection from '@/components/ThumbnailSection'
import galleryData from '../../landing/data/gallery.json'
import { Marquee } from '@/components/ui/marquee'
import GalleryTab from '../components/GalleryTab'

const Gallery = () => {
  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center justify-center shadow-lg w-full max-w-5xl mx-auto relative">
          <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
            Gallery Kami
          </h1>
        </div>
      </ThumbnailSection>

      <section className="relative text-[#0b1437] px-6 md:px-0 py-24 overflow-hidden">
            <div className="relative mb-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div className="text-center md:text-left px-4 md:px-10">
                <h2 className="text-2xl md:text-[36px] font-bold mb-3">
                  Galeri Kegiatan BKK
                </h2>
                <p className="text-[#373642] text-lg max-w-2xl mx-auto md:mx-0">
                  Cuplikan kegiatan BKK SMKN 1 Purwosari dalam membangun koneksi antara sekolah dan dunia industri.
                </p>
              </div>
      
              <button className="border border-yellow-400 text-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-white transition">
                Lihat Semua Galeri
              </button>
      
              <img
                src="/svg/dot-patterns.svg"
                alt="Dot pattern"
                className="absolute -top-15 -right-30 w-[300px] pointer-events-none"
              />
            </div>
      
            <Marquee pauseOnHover className="[--duration:25s]">
              {galleryData.map((gallery) => (
                <div
                  key={gallery.id}
                  className="w-[588px] h-[253px] rounded-xl overflow-hidden shadow-md mx-3 flex-shrink-0"
                >
                  <img
                    src={gallery.image}
                    alt={gallery.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Marquee>
             <Marquee reverse pauseOnHover className="[--duration:25s]">
              {galleryData.map((gallery) => (
                <div
                  key={gallery.id}
                  className="w-[588px] h-[253px] rounded-xl overflow-hidden shadow-md mx-3 flex-shrink-0"
                >
                  <img
                    src={gallery.image}
                    alt={gallery.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </section>

          <GalleryTab />
    </div>
  )
}

export default Gallery
