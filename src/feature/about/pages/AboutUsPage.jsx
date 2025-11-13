import React from 'react'
import AboutUsSection from '../sections/AboutUsSection'
import ExecellenceSection from '../sections/ExecellenceSection'
import ThumbnailSection from '@/components/ThumbnailSection'
import MisiSection from '../sections/MisiSection'
import VisiSection from '../sections/VisiSection'

const AboutUsPage = () => {
  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center justify-center shadow-lg w-full max-w-5xl mx-auto relative">
          <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
            Tentang Kami
          </h1>
        </div>
      </ThumbnailSection>
      <AboutUsSection />
      <ExecellenceSection />
      <MisiSection />
      <VisiSection />
    </div>
  )
}

export default AboutUsPage
