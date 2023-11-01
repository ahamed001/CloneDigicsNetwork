import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
  
  return (
    <div>
      <div className='flex justify-around bg-slate-50 h-24'>
        <div>
          <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-20 mt-3 cursor-pointer' />
        </div>

        <div className='flex justify-evenly my-auto font-semibold'>
          <p className='px-5 font-normal cursor-pointer'>Home</p>
          <p className='px-5 cursor-pointer'>Cyber Bitss Security &#11163;</p>
          <p className='px-5 cursor-pointer'>Free Product</p>
          <p className='px-5 cursor-pointer'>About Us &#11163;</p>
          <p className='px-5 cursor-pointer'>Contact Us</p>
        </div>

        <div className='my-auto flex justify-between w-56'>
          <PiShoppingCartThin className="text-3xl cursor-pointer mx-2"/>
          <p className=' bg-slate-50 border border-black rounded-md cursor-pointer mx-2 px-4 py-1 hover:bg-slate-100'>My Account</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar