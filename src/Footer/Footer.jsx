import React from 'react'

const Footer = () => {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className='bg-white'>
      <div>
        <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-72 my-4 mx-auto' />
      </div>
      <div className='bg-blue-950 h-36 flex justify-around'>
        <p className='text-white my-auto'>Copyright &copy; {currentYear} bitss.fr | All Rights Reserved</p>
        <div className='my-auto'>
          <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-10 my-4 mx-auto bg-white' />
          <p className='text-white text-sm'>BITSS.FR BY BFIN SASU</p>
        </div>
        <div className='my-auto'>
          <p className='text-white'>Cookie Policy Contact Us</p>
        </div>
      </div>
    </div>
  )
}

export default Footer