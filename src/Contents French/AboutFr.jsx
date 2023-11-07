import React from 'react'

const AboutFr = () => {
  
  return (
    <div className='bg-white md:pt-20'>
      <div className=' md:flex'>
        <div className='md:w-[40%] mx-auto md:px-20 px-5 py-10'>
          <div className=' text-left'>
            <p className=' text-cyan-400 font-extrabold text-sm'>BIENVENUE SUR</p>
            <h1 className='md:text-4xl text-3xl font-bold my-3'>À propos de l'entreprise</h1>
            <p className=' text-gray-500 md:pt-8 pt-2'>
              À BITSS.fr par BFIN SASU, une entreprise informatique française, nous sommes une entreprise de 
              cybersécurité de premier plan dédiée à la protection de votre infrastructure numérique. Avec une 
              équipe d'experts hautement qualifiés et des technologies de pointe, notre recherche au fil des années 
              nous a permis de développer Bitss Ethicus. Que vous soyez une petite entreprise, une grande entreprise 
              ou un particulier, nous avons l'expertise nécessaire pour protéger votre réseau, vos serveurs, vos sites 
              web et vos données contre les menaces cybernétiques en constante évolution.
            </p>
          </div>

          <div className='flex my-6'>
            <div>
              <img src={require('../Assets/Target.png')} alt="" className='w-20 bg-white' />
            </div>
            <div className=' text-left mx-2'>
              <h1 className='text-2xl font-bold'>Notre Mission</h1>
              <p className=' text-gray-500'>Nous proposons des solutions de sécurité complètes adaptées à vos besoins spécifiques</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <img src={require('../Assets/Eye.png')} alt="" className='w-16 bg-white' />
            </div>
            <div className='text-left'>
              <h1 className='text-2xl font-bold'>Notre Vision</h1>
              <p className=' text-gray-500'>Fournir à nos clients la meilleure solution de sécurité</p>
            </div>
          </div>
        </div>

        <div className='bg-white pb-16 '>
          <img src={require('../Assets/About.png')} alt="" className='w-[600px] bg-white' />
          <div className='text-right'>
            <button className='px-10 py-4 md:my-8 bg-cyan-400 text-white hover:bg-cyan-500'>Plus d'informations sur</button>
          </div>
        </div>

      </div>
      <div className='bg-blue-100 md:mt-10'>
        <div className=' md:flex mx-auto md:w-[80%] md:py-16 pb-8'>
          
          <div className=' md:w-[40%] w-[90%] mx-auto md:px-1'>
            <img src={require('../Assets/bitss_icon.png')} alt="Bitss Icon" className=' w-52 my-3 mx-auto' />
            <p>Bitss protège votre site web, site vidéo, réseau et serveur, et arrête le spam depuis la page de contact</p>
          </div>
          <div className='md:w-[40%] w-[90%] m-auto md:px-16 '>
            <h1 className='text-3xl font-semibold py-4'>BFIN SASU</h1>
            <p>Bitss HQ 8 rue dublin 34200 sète france</p>
            <p>support@bobosohomail.com</p>
            <p>+0033666100010</p>
          </div>
          
        </div>
      </div>
      
    </div>
    
  )
}

export default AboutFr