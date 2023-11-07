import React from 'react'
import { PiShoppingCartThin } from "react-icons/pi";

const NavbarFr = () => {
  
  return (
    <div>
      <div className='md:flex justify-around bg-slate-50 md:h-24'>
        <div>
          <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-20 md:mt-3 cursor-pointer' />
        </div>

        <div className='md:flex justify-evenly my-auto font-semibold text-left md:text-center'>
          <p className='px-5 font-normal cursor-pointer py-1 md:py-0'>Maison</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>Sécurité Cyber Bitss &#11163;</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>Produit gratuit</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>Qui sommes-nous &#11163;</p>
          <p className='px-5 cursor-pointer py-1 md:py-0'>Contactez-nous</p>
        </div>

        <div className='my-auto flex md:justify-between justify-around py-5 md:py-0 w-56'>
          <PiShoppingCartThin className="text-3xl cursor-pointer mx-2"/>
          <p className=' bg-slate-50 border border-black rounded-md cursor-pointer mx-2 px-4 py-1 hover:bg-slate-100'>Mon Compte</p>
        </div>
      </div>
    </div>
  )
}

export default NavbarFr