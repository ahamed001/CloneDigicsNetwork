import React from 'react'

const About = () => {
  
  return (
    <div className='bg-white pt-20'>
      <div className=' flex'>
        <div className='w-[40%] mx-auto px-20 py-10'>
          <div className=' text-left'>
            <p className=' text-cyan-400 font-extrabold text-sm'>WELCOME TO</p>
            <h1 className='text-4xl font-bold my-3'>About Company</h1>
            <p className=' text-gray-500 pt-8'>
              At BITSS.fr by BFIN SASU a Franch IT company, we are a leading cyber security company dedicated 
              to safeguarding or protecting your digital infrastructure. With a team of highly skilled experts 
              and state-of-the-art technologies, Our research over the years as may bitss ethicus. Whether you're 
              a small business, a large enterprise, or an individual, we have the expertise to protect your network, 
              servers, websites, and data from evolving cyber threats.
            </p>
          </div>

          <div className='flex my-6'>
            <div>
              <img src={require('../Assets/Target.png')} alt="" className='w-20 bg-white' />
            </div>
            <div className=' text-left mx-2'>
              <h1 className='text-2xl font-bold'>Our Mission</h1>
              <p className=' text-gray-500'>We offer comprehensive security solutions tailored to your specific needs</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <img src={require('../Assets/Eye.png')} alt="" className='w-16 bg-white' />
            </div>
            <div className='text-left'>
              <h1 className='text-2xl font-bold'>Our Vision</h1>
              <p className=' text-gray-500'>To provide our customer best security solution</p>
            </div>
          </div>
        </div>

        <div className='bg-white pb-16'>
          <img src={require('../Assets/About.png')} alt="" className='w-[600px] bg-white' />
          <div className='text-right'>
            <button className='px-10 py-4 my-8 bg-cyan-400 text-white hover:bg-cyan-500'>More About</button>
          </div>
        </div>

      </div>
      <div className='bg-blue-100 mt-10'>
        <div className=' flex mx-auto w-[80%] py-16'>
          
          <div className=' w-[40%] mx-auto px-1'>
            <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className=' w-52 my-3 mx-auto' />
            <p>Bitss protect your website, video site, network and server, and stop contact page spamming</p>
          </div>
          <div className='w-[40%] m-auto px-16 '>
            <h1 className='text-3xl font-semibold py-4'>BFIN SASU</h1>
            <p>Bitss HQ 8 rue dublin 34200 sète france</p>
            <p>support@bobosohomail.com</p>
            <p>+ 0033666100010</p>
          </div>
          
        </div>
      </div>
      
    </div>
    
  )
}

export default About 