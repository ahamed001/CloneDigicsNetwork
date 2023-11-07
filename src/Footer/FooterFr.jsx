import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const FooterFr = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className='bg-white md:h-32 h-80'>
      <div className='bg-blue-900 md:h-28 h-72 md:flex md:justify-around'>
        <p className='text-white py-5 md:py-0 my-auto md:px-0 px-16 text-center'>Copyright &copy; {currentYear} bitss.fr | Tous droits réservés</p>
        <div className=' my-5 md:my-auto'>
          <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-10 my-4 mx-auto bg-white' />
          <p className='text-white text-sm md:px-0 px-10 text-center'>BITSS.FR BY BFIN SASU</p>
        </div>
        <div className=' my-5 md:my-auto'>
          <p className='text-white md:px-0 px-10 text-center'>Politique de cookies Contactez-nous</p>
        </div>
        <div className='flex justify-around my-5 md:my-auto'> 
          <FaFacebook className='text-gray-200 text-xl mx-3 hover:text-[#1877F2] cursor-pointer'/>
          <FaTwitter className='text-gray-200 text-xl mx-3 hover:text-[#1DA1F2] cursor-pointer'/>
          <FaLinkedinIn className='text-gray-200 text-xl mx-3 hover:text-[#1DA1F2] cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default FooterFr