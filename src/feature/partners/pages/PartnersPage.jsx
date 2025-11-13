import React from 'react'
import GallerySlider from '../components/GallerySlider'
import ThumbnailSection from '@/components/ThumbnailSection'
import TrustedBy from '../components/TrustedBy'
import PartnersList from '../components/PartnersList'

const PartnersPage = () => {
  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center justify-center shadow-lg w-full max-w-5xl mx-auto relative">
          <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
            Mitra Kerja
          </h1>
        </div>
      </ThumbnailSection>   
      <GallerySlider />
      <TrustedBy />
      <PartnersList />
    </div>
  )
}

export default PartnersPage
