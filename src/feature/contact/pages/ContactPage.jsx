import React from 'react'
import ContactSection from '../components/ContactSection'
import ThumbnailSection from '@/components/ThumbnailSection'
import ContactFormSection from '../components/ContactForm'

const ContactPage = () => {
  return (
    <div>
        <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
            <div className="bg-[#0B1437] p-5 rounded-lg flex items-center justify-center shadow-lg w-full max-w-5xl mx-auto relative">
                <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
                    Hubungi Kami
                </h1>
            </div>
        </ThumbnailSection>
        <ContactSection />
        <ContactFormSection />
    </div>
  )
}

export default ContactPage
