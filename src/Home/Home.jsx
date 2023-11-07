import React from 'react'

const Home = () => {
  
  return (
    <div className='Hero lg:h-[88vh] pb-10 md:pb-0 text-slate-50 text-left md:flex justify-around'>

      <div className=' md:w-[45%] md:my-28 pt-5 px-5 md:px-0'>
        <div>
          <h1 className=' text-5xl font-bold my-4'>Welcome to BITSS.fr</h1>
        </div>

        <div>
          <p className=' text-2xl font-semibold my-1'>Your Trusted Cyber Security Partner</p>
          <p className=' text-sm font-normal'>Cyber Security Services</p>
        </div>

        <div className=' bg-slate-600 bg-opacity-50 mt-10 mb-5 p-4 rounded-lg'>
          <p className='py-2'>Bitss by BFIN – a French leading cyber security research company dedicated to stop:</p>
          <p className='py-2'>
            Stop Network, server, website Database theft, intrusion, hacking, website hostage 
            ransom demands, data theft, client data theft, pirating website payments, spamming from 
            website contact page to name a few security features.
          </p>
          <p className='py-2'>
            Bitss has five unique cyber secuity systems that protect Networks, servers, websites, video sites, and contact page spamming.
          </p>
          <p className='py-2'>
            Whether you’re a small business, a large enterprise, or an individual, Bitss is affordable. 
          </p>
        </div>

        <div className='md:flex justify-center'>
          <p className='mx-5 md:my-0 my-4 px-10 h-12 flex items-center rounded-full bg-orange-100 text-orange-500 hover:text-white hover:bg-orange-400 transition-all ease-in-out'>Learn More</p>
          <p className='mx-5 md:my-0 my-4 px-10 h-12 flex items-center rounded-full bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-all ease-in-out'>Contact Us</p>
        </div>
      </div>

      <div className='border-l-[16px] border-r-[16px] border-t-[16px] lg:border-b-0 border-b-[16px] md:h-[560px] md:w-[350px] mx-2 md:mx-0 md:rounded-t-3xl rounded-3xl lg:rounded-b-none bg-slate-200 border-white md:mt-24 mt-10'>
        <div className='border border-white bg-slate-50 rounded-b-xl h-5 w-[60%] mx-auto flex'>
          <p className=' bg-black h-1 w-8 my-auto mx-auto'/>
        </div>
        <div>
          <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-40 my-4 mx-auto' />
        </div>
        <div className='text-black text-center font-semibold my-5'>
          <p>Protect your website, video & administration sites with Bitss.</p>
        </div>
        <div className='text-black px-10 text-sm font-medium md:pb-0 pb-5'>
          <ul className=' list-disc'>
            <li className='py-1'>Stop Data / Client Theft</li>
            <li className='py-1'>Stops Video Content Theft</li>
            <li className='py-1'>Stop Intrusion</li>
            <li className='py-1'>Stop Hacking Ransom Demmands</li>
            <li className='py-1'>Stop Spamming from Websites Contact Page</li>
            <li className='py-1'>Protect your Online Revenue and Data Assets</li>
            <li className='py-1'>Protect your Client Base</li>
          </ul>
        </div>
      </div>
      

    </div>
  )
}

export default Home