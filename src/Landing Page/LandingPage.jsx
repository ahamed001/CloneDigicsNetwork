import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
        <div className=' LandingPage sm:h-[100vh] h-[130vh]'>

            <div className=' md:w-[45%] lg:ml-[800px] md:ml-[500px] sm:ml-[200px] sm:py-20 py-10 px-5 md:px-0'>
                <div className='text-center'>
                    <h1 className=' text-5xl font-bold my-4 text-blue-300'>Welcome to BITSS.fr</h1>
                </div>

                <div className=' text-purple-400 text-center'>
                    <p className=' text-2xl font-semibold my-1'>Your Trusted Cyber Security Partner</p>
                    <p className=' text-sm font-normal'>Cyber Security Services</p>
                </div>

                <div className=' bg-slate-300 bg-opacity-50 mt-10 mb-5 p-4 rounded-lg text-gray-600'>
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

                <div>
                    <p className='text-2xl font-semibold text-red-300 my-5 md:mx-5 text-center'>Choose your preferred language to Continue to the website</p>
                
                    <div className='md:flex justify-center'>
                        <Link to={'/English'}>
                            <div className='flex justify-center mx-2 md:my-0 my-4 px-10 h-12 items-center rounded-full bg-purple-100 text-purple-500 hover:text-white hover:bg-purple-400 transition-all ease-in-out'>
                                <img src={require('../Assets/UK.png')} alt="UK Flag" className='w-8 mr-2 cursor-pointer' />
                                <p>English</p>
                            </div>
                        </Link>
                        <Link to={'/French'}>
                            <div className='mx-2 md:my-0 my-4 px-10 h-12 flex justify-center items-center rounded-full bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-all ease-in-out'>
                                <img src={require('../Assets/France.png')} alt="France Flag" className='w-8 mr-2 cursor-pointer' />
                                <p>French</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LandingPage