import React from 'react'

const WhyBitss = () => {
  return (
    <div className='bg-white md:pt-40 pt-10 md:pb-12 pb-0'>
        <div className='md:w-[80%] w-[90%] mx-auto md:flex'>
            <div className='mx-auto'>
                <img src={require('../Assets/WhyBitss.png')} alt="" className='w-96 pt-8 bg-white' />
            </div>
            <div className=' text-left md:w-[50%] w-full mx-auto shadow-xl rounded-xl py-6 md:px-8 px-4'>
                <h1 className=' text-sm font-bold'>WHY CHOOSE BITSS FOR YOUR CYBER SECURITY ?</h1>
                <p className='py-6'>
                    Secure your online assets, retail, servive or content video website, network servers, 
                    cloud hosting space with your website, a dedicated server and website contact page.
                </p>
                <ul className=' list-disc px-6'>
                    <li>Prevent</li>
                    <li>Website data theft</li>
                    <li>Website client data theft</li>
                    <li>Intrusion</li>
                    <li>Retail sites Haching and ransom demands</li>
                    <li>Administration sites from hyjacking with ransom demand</li>
                    <li>Stop website contact spamming</li>
                    <li>
                        Bitss ongoing research into cyber security ensures your bitss software is updated with the 
                        latest cyber security techniques to safegaurd your business assets
                    </li>
                </ul>
            </div>
        </div>

        <div className='w-[80%] mx-auto md:flex md:py-32 py-10'>
            <div className='mx-auto'>
                <img src={require('../Assets/Expertise.png')} alt="" className='w-96 pt-8 bg-white' />
            </div>
            <div className=' text-left md:w-[50%] w-full m-auto py-6 text-gray-500'>
                <h1 className=' text-lg md:pr-8'>
                    <span className='font-extrabold text-gray-400'>____</span> We have the expertise to protect your network, servers, websites, and data from evolving cyber threats. <span className='font-extrabold text-gray-400'>____</span>
                </h1>
                <p className='py-6 md:pr-12 text-sm'>
                    At BITSS.fr by BFIN, we are more than just a cyber security provider. We are your trusted partner 
                    in achieving success by ensuring the resilience and security of your digital assets. Our comprehensive 
                    approach, personalized solutions, and commitment to excellence set us apart.
                </p>
                <div className='flex'>
                    <p className='my-4 px-10 h-12 flex items-center rounded-full bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-all ease-in-out'>Learn More</p>
                </div>
               
            </div>
        </div>

        <div className='bg-blue-500 md:py-24 py-10'>
        <div className=' md:flex mx-auto md:w-[80%] w-full text-white text-left'>
          
          <div className='md:w-[60%] w-full mx-auto md:px-1 px-5 md:text-5xl text-2xl md:py-4 py-0 md:border-r-[1px] border-white'>
            <h1 className=' py-3'>Ready to get started?</h1>
            <h1> It's Swift, Secure, and Seamless: Experience the Power of Bitss.fr Cyber Security</h1>
          </div>
          <div className=' m-auto md:px-10 px-5 md:mx-10 py-5 md:py-0'>
            <h1 className='text-lg font-semibold md:py-1 py-2'>Bitss by BFIN SASU</h1>
            <p>8 rue dublin 34200 sète france</p>
            <p>support@bobosohomail.com</p>
            <p>+ 0033666100010</p>
            <div>
                <p className='md:my-5 mt-5 md:px-10 px-5 w-48 md:w-56 h-12 flex items-center rounded-full text-sm font-semibold bg-orange-400 hover:text-white hover:bg-orange-500 transition-all ease-in-out'>GET A FREE CONSULT</p>
            </div>
          </div>
          
        </div>
      </div>


        <div>
            <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className='w-72 my-2 mx-auto' />
        </div>
      
    </div>
  )
}

export default WhyBitss