import React from 'react'

const WhyBitss = () => {
  return (
    <div className='bg-white py-40'>
        <div className='w-[80%] mx-auto flex'>
            <div className='mx-auto'>
                <img src={require('../Assets/WhyBitss.png')} alt="" className='w-96 pt-8 bg-white' />
            </div>
            <div className=' text-left w-[50%] mx-auto shadow-xl rounded-xl py-6 px-8'>
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

        <div className='w-[80%] mx-auto flex py-32'>
            <div className='mx-auto'>
                <img src={require('../Assets/Expertise.png')} alt="" className='w-96 pt-8 bg-white' />
            </div>
            <div className=' text-left w-[50%] m-auto py-6 text-gray-500'>
                <h1 className=' text-lg pr-8'>
                    <span className='font-extrabold text-gray-400'>____</span> We have the expertise to protect your network, servers, websites, and data from evolving cyber threats. <span className='font-extrabold text-gray-400'>____</span>
                </h1>
                <p className='py-6 pr-12 text-sm'>
                    At BITSS.fr by BFIN, we are more than just a cyber security provider. We are your trusted partner 
                    in achieving success by ensuring the resilience and security of your digital assets. Our comprehensive 
                    approach, personalized solutions, and commitment to excellence set us apart.
                </p>
                <div className='flex'>
                    <p className='my-4 px-10 h-12 flex items-center rounded-full bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-all ease-in-out'>Learn More</p>
                </div>
               
            </div>
        </div>

        <div className='bg-blue-500 py-24'>
        <div className=' flex mx-auto w-[80%] text-white text-left'>
          
          <div className='w-[60%] mx-auto px-1 text-5xl py-4 border-r-[1px] border-white'>
            <h1 className=' py-3'>Ready to get started?</h1>
            <h1 className=''> It's Swift, Secure, and Seamless: Experience the Power of Bitss.fr Cyber Security</h1>
          </div>
          <div className=' m-auto px-10 mx-10'>
            <h1 className='text-lg font-semibold py-1'>Bitss by BFIN SASU</h1>
            <p>8 rue dublin 34200 sète france</p>
            <p>support@bobosohomail.com</p>
            <p>+ 0033666100010</p>
            <div>
                <p className='my-5 px-10 h-12 flex items-center rounded-full text-sm font-semibold bg-orange-400 hover:text-white hover:bg-orange-500 transition-all ease-in-out'>GET A FREE CONSULT</p>
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