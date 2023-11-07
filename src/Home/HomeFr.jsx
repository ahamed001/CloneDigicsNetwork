import React from 'react'

const HomeFr = () => {
  
  return (
    <div className='Hero lg:h-[88vh] pb-10 md:pb-0 text-slate-50 text-left md:flex justify-around'>

      <div className=' md:w-[45%] md:my-8 pt-5 px-5 md:px-0'>
        <div>
          <h1 className=' text-5xl font-bold my-4'>Bienvenue sur BITSS.fr</h1>
        </div>

        <div>
          <p className=' text-2xl font-semibold my-1'>Votre partenaire de confiance en cybersécurité</p>
          <p className=' text-sm font-normal'>Services de cybersécurité</p>
        </div>

        <div className=' bg-slate-600 bg-opacity-50 mt-10 mb-5 p-4 rounded-lg'>
          <p className='py-2'>Bitss par BFIN - une entreprise de recherche en cybersécurité de premier plan en France dédiée à stopper :</p>
          <p className='py-2'>
            Stopper le vol de données réseau, de serveur, de site web, les intrusions, le piratage, les demandes de rançon pour la 
            prise en otage de site web, le vol de données, le vol de données client, la piraterie des paiements du site web, le spam à 
            partir de la page de contact du site web, pour n'en citer que quelques-unes des fonctionnalités de sécurité.
          </p>
          <p className='py-2'>
            Bitss dispose de cinq systèmes de cybersécurité uniques qui protègent les réseaux, les serveurs, les sites web, les 
            sites vidéo et l'envoi de spams depuis la page de contact.
          </p>
          <p className='py-2'>
            Que vous soyez une petite entreprise, une grande entreprise ou un particulier, Bitss est abordable.
          </p>
        </div>

        <div className='md:flex justify-center'>
          <p className='mx-5 md:my-0 my-4 px-10 h-12 flex items-center rounded-full bg-orange-100 text-orange-500 hover:text-white hover:bg-orange-400 transition-all ease-in-out'>Apprendre davantage</p>
          <p className='mx-5 md:my-0 my-4 px-10 h-12 flex items-center rounded-full bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-all ease-in-out'>Nous contacter</p>
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
          <p>Protégez votre site web, vos sites vidéo et d'administration avec Bitss.</p>
        </div>
        <div className='text-black px-10 text-sm font-medium md:pb-0 pb-5'>
          <ul className=' list-disc'>
            <li className='py-1'>Arrêtez le vol de données / de clients</li>
            <li className='py-1'>Empêche le vol de contenu vidéo</li>
            <li className='py-1'>Arrêter l'intrusion</li>
            <li className='py-1'>Arrêter les demandes de rançon pour piratage</li>
            <li className='py-1'>Arrêter le spam depuis la page de contact des sites web</li>
            <li className='py-1'>Protégez vos revenus en ligne et vos actifs de données</li>
            <li className='py-1'>Protégez votre base de clients</li>
          </ul>
        </div>
      </div>
      

    </div>
  )
}

export default HomeFr