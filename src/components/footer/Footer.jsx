import React from 'react'
import FooterHeader from './components/FooterHeader'
import FooterContent from './components/FooterContent'

const Footer = () => {
  return (
    <div className='p-16'>
      <FooterHeader />
      <hr className='border-t border-[#C1C7CD] my-6 md:my-12' />
      <FooterContent />
      <hr className='border-t border-[#C1C7CD] my-6 md:my-12' />
      <div className="flex justify-center md:justify-start items-center text-sm inter">
        <p>MiJurnal @ 2025. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
