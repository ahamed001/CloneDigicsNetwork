import React from 'react'

const WhyBitssFr = () => {
  return (
    <div className='bg-white md:pt-40 pt-10 md:pb-12 pb-0'>
        <div className='md:w-[80%] w-[90%] mx-auto md:flex'>
            <div className='mx-auto'>
                <img src={require('../Assets/WhyBitss.png')} alt="" className='w-96 pt-8 bg-white' />
            </div>
            <div className=' text-left md:w-[50%] w-full mx-auto shadow-xl rounded-xl py-6 md:px-8 px-4'>
                <h1 className=' text-sm font-bold'>POURQUOI CHOISIR BITSS POUR VOTRE CYBERSÉCURITÉ ?</h1>
                <p className='py-6'>
                    Sécurisez vos actifs en ligne, votre site web de vente au détail, de service ou de contenu vidéo, 
                    vos serveurs réseau, votre espace d'hébergement cloud, votre site web, un serveur dédié et la page 
                    de contact du site.
                </p>
                <ul className=' list-disc px-6'>
                    <li>Prévenir</li>
                    <li>Vol de données de site web</li>
                    <li>Vol de données clients du site web</li>
                    <li>Intrusion</li>
                    <li>Piratage et demandes de rançon sur les sites de vente au détail</li>
                    <li>Les sites d'administration sont détournés avec des demandes de rançon</li>
                    <li>Arrêter le spam depuis la page de contact du site web</li>
                    <li>
                        La recherche continue de Bitss en matière de cybersécurité garantit que votre logiciel Bitss est 
                        constamment mis à jour avec les dernières techniques de cybersécurité pour protéger vos actifs commerciaux
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
                    <span className='font-extrabold text-gray-400'>____</span> 
                    Nous avons l'expertise pour protéger votre réseau, vos serveurs, vos sites web et vos données contre les 
                    menaces cybernétiques en constante évolution 
                    <span className='font-extrabold text-gray-400'>____</span>
                </h1>
                <p className='py-6 md:pr-12 text-sm'>
                    Chez BITSS.fr par BFIN, nous sommes bien plus qu'un simple fournisseur de cybersécurité. Nous sommes votre 
                    partenaire de confiance pour atteindre le succès en garantissant la résilience et la sécurité de vos actifs 
                    numériques. Notre approche globale, nos solutions personnalisées et notre engagement envers l'excellence font 
                    de nous un acteur à part.
                </p>
                <div className='flex'>
                    <p className='my-4 px-10 h-12 flex items-center rounded-full bg-blue-100 text-blue-500 hover:text-white hover:bg-blue-500 transition-all ease-in-out'>En savoir plus</p>
                </div>
               
            </div>
        </div>

        <div className='bg-blue-500 md:py-24 py-10'>
        <div className=' md:flex mx-auto md:w-[80%] w-full text-white text-left'>
          
          <div className='md:w-[60%] w-full mx-auto md:px-1 px-5 md:text-5xl text-2xl md:py-4 py-0 md:border-r-[1px] border-white'>
            <h1 className=' py-3'>Prêt à commencer ?</h1>
            <h1> C'est Rapide, Sécurisé et Sans Couture : Découvrez la Puissance de la Cybersécurité de Bitss.fr</h1>
          </div>
          <div className=' m-auto md:px-10 px-5 md:mx-10 py-5 md:py-0'>
            <h1 className='text-lg font-semibold md:py-1 py-2'>Bitss by BFIN SASU</h1>
            <p>8 rue dublin 34200 sète france</p>
            <p>support@bobosohomail.com</p>
            <p>+ 0033666100010</p>
            <div>
                <p className='md:my-5 mt-5 md:px-10 px-5 w-48 md:w-56 h-12 flex items-center rounded-full text-sm font-semibold bg-orange-400 hover:text-white hover:bg-orange-500 transition-all ease-in-out'>Obtenez une consultation gratuite</p>
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

export default WhyBitssFr