import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
  
  return (
    <div>
      <div className='md:flex justify-around bg-slate-50 md:h-24'>
        <div>
          <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-20 md:mt-3 cursor-pointer' />
        </div>

        <div className='md:flex justify-evenly my-auto font-semibold text-left md:text-center'>
          <p className='px-5 font-normal cursor-pointer py-1 md:py-0'>Home</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>Cyber Bitss Security &#11163;</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>Free Product</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>About Us &#11163;</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>Contact Us</p>
        </div>

        <div className='my-auto flex md:justify-between justify-around py-5 md:py-0 w-56'>
          <PiShoppingCartThin className="text-3xl cursor-pointer mx-2"/>
          <p className=' bg-slate-50 border border-black rounded-md cursor-pointer mx-2 px-4 py-1 hover:bg-slate-100'>My Account</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar