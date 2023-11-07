import React from 'react'
import { MdOutlinePersonalInjury } from 'react-icons/md'
import { GiAchievement } from 'react-icons/gi'
import { PiCoffeeThin, PiRocketLight } from 'react-icons/pi'

const SucceedFr = () => {
  return (
    <div className='bg-white'>
        <div className='md:w-[35%] w-[90%] text-center mx-auto md:my-28 mb-10 pt-16'>
            <h1 className='md:text-4xl text-2xl text-purple-800'>Et quoi d'autre ? Nous pouvons vous aider à réussir.</h1>
        </div>
        <div className='md:flex justify-around text-left md:w-[80%] w-[90%] mx-auto pb-20'>
            <div className=' w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Brain.png')} alt="" className='w-16 pt-2 bg-white' />
                <h1 className=' text-2xl py-2 font-semibold text-purple-800 hover:text-black ease-in-out'>De précieux conseils</h1>
                <p className=' text-gray-500 font-medium py-4'>Solutions de sécurité personnalisées avec notre défense cybernétique de premier ordre</p>
            </div>
            <div className='w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Brake.png')} alt="" className='w-16 pt-4 bg-white' />
                <h1 className=' text-2xl font-semibold py-2 text-purple-800 hover:text-black ease-in-out'>Sécurité maximale</h1>
                <p className=' text-gray-500 font-medium py-4'>Surveillance proactive des menaces et protection personnelle contre les cyberattaques</p>
            </div>
            <div className='w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Bell.png')} alt="" className='w-16 bg-white' />
                <h1 className=' text-2xl font-semibold py-2 text-purple-800 hover:text-black ease-in-out'>Alerte de notification</h1>
                <p className=' text-gray-500 font-medium py-4'>Programmes de sensibilisation à la sécurité des employés</p>
            </div>
            <div className='w-64 px-3 hover:cursor-pointer'>
                <img src={require('../Assets/Screen.png')} alt="" className='w-16 pt-4 bg-white' />
                <h1 className=' text-2xl font-semibold py-2 text-purple-800 hover:text-black ease-in-out'>Analyse régulière</h1>
                <p className=' text-gray-500 font-medium py-4'>Améliorations constantes de la sécurité</p>
            </div>
        </div>
        <div className='DotMap h-80 text-slate-50 text-left flex'>
            <div className=' w-[80%] md:flex justify-around text-black m-auto '>
                <div className='flex my-5 md:my-0'>
                    <div className=' my-auto md:text-7xl text-5xl text-purple-800'>
                        <MdOutlinePersonalInjury />
                    </div>
                    <div>
                        <p className=' md:text-5xl text-4xl py-2 font-bold'>300+</p>
                        <p className='font-semibold'>Support Fourni</p>
                    </div>
                </div>

                <div className='flex my-5 md:my-0'>
                    <div className=' my-auto md:text-7xl text-5xl text-purple-800'>
                        <PiRocketLight/>
                    </div>
                    <div>
                        <p className='md:text-5xl text-4xl py-2 font-bold'>254+</p>
                        <p className=' font-semibold'>Système Sécurisé</p>
                    </div>
                </div>

                <div className='flex my-5 md:my-0'>
                    <div className=' my-auto md:text-7xl text-5xl text-purple-800'>
                        <GiAchievement/>
                    </div>
                    <div>
                        <p className=' md:text-5xl text-4xl py-2 font-bold'>100%</p>
                        <p className=' font-semibold'>Certifié</p>
                    </div>
                </div>

                <div className='flex my-5 md:my-0'>
                    <div className=' my-auto md:text-7xl text-5xl text-purple-800'>
                        <PiCoffeeThin/>
                    </div>
                    <div>
                        <p className=' md:text-5xl text-4xl py-2 font-bold'>100%</p>
                        <p className=' font-semibold'>Satisfaction Clientèle</p>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default SucceedFr