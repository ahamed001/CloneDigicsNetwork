import React from 'react'

const Succeed = () => {
  return (
    <div className='bg-white'>
        <div className='w-[30%] mx-auto my-28 pt-16'>
            <h1 className='text-4xl text-purple-800'>What's More? We Can Help You Succeed.</h1>
        </div>
        <div className='flex text-left w-[80%] mx-auto pb-20'>
            <div className='mx-10 w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Brain.png')} alt="" className='w-16 pt-2 bg-white' />
                <h1 className=' text-2xl py-2 font-semibold text-purple-800 hover:text-black ease-in-out'>Great advices</h1>
                <p className=' text-gray-500 font-medium py-4'>Customized Security Solutions with our top-notch cyber defense</p>
            </div>
            <div className='mx-10 w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Brake.png')} alt="" className='w-16 pt-4 bg-white' />
                <h1 className=' text-2xl font-semibold py-2 text-purple-800 hover:text-black ease-in-out'>Extreme security</h1>
                <p className=' text-gray-500 font-medium py-4'>Proactive Threat Monitoring and personal cyber protection</p>
            </div>
            <div className='mx-10 w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Bell.png')} alt="" className='w-16 bg-white' />
                <h1 className=' text-2xl font-semibold py-2 text-purple-800 hover:text-black ease-in-out'>Notification alert</h1>
                <p className=' text-gray-500 font-medium py-4'>Employee Security Awareness Programs</p>
            </div>
            <div className='mx-10 w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Screen.png')} alt="" className='w-16 pt-4 bg-white' />
                <h1 className=' text-2xl font-semibold py-2 text-purple-800 hover:text-black ease-in-out'>Regular analytic</h1>
                <p className=' text-gray-500 font-medium py-4'>Contonual Security Enhancements</p>
            </div>
        </div>
        <div className='DotMap h-80 text-slate-50 text-left flex'>
            
        </div>
    </div>
  )
}

export default Succeed