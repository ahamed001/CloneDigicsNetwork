import React from 'react'

const FRCFr = () => {
  return (
    <div>
        <div className=' md:w-[50%] w-[90%] mx-auto border-l-4 border-orange-500 pl-4 py-2 md:my-20 my-5 text-left md:text-2xl text-lg'>
            Nous sommes une entreprise de recherche française engagée dans la protection de votre site web, site vidéo, 
            réseau et serveur en ligne, et dans la prévention du spam depuis la page de contact
        </div>
        <div className='md:flex justify-around text-left md:w-[75%] mx-auto'>

            <div className='md:w-[350px] p-4'>
                <div className=' bg-white my-4 pb-12 md:px-12 px-4 shadow-xl'>
                    <img src={require('../Assets/Security.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Sécurité de l'accès au réseau</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Bitss N propose des solutions de sécurité réseau renforcée, sécurisant vos bases de données réseau contre 
                        les accès non autorisés et protégeant les données sensibles. Le vol de données sensibles peut ruiner votre 
                        entreprise et celle de vos clients. Bitss est un logiciel téléchargé sur les serveurs réseau, le serveur passerelle 
                        et tous les autres serveurs du réseau pour une protection double ou triple, et est abordable pour les petites, moyennes 
                        et grandes entreprises.
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>LIRE LA SUITE &rarr;</p>
                </div>
                <div className=' bg-white my-4 pb-12 md:px-12 px-4 shadow-xl'>
                    <img src={require('../Assets/Chart.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Protection contre les logiciels malveillants et les arnaques</h1>
                    <p className=' text-gray-500 font-medium py-4'>Protégez vos systèmes contre les logiciels malveillants, les rançongiciels et les attaques de phishing</p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>LIRE LA SUITE &rarr;</p>
                </div>
            </div>

            <div className='md:w-[350px] p-4'>
                <div className=' bg-white my-4 pb-12 md:px-12 px-4 shadow-xl'>
                    <img src={require('../Assets/Sites.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Bitss WP protège tous les sites web, y compris les sites WordPress</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Protégez votre base de données d'administration, surveillez et bloquez les tentatives de connexion 
                        suspectes et les attaques par force brute. Prévenez le vol de données, le vol de contenu, la destruction 
                        de vidéos, les intrusions, le vol de données client, le piratage, les menaces de rançon et bloquez le spam 
                        depuis la page de contact du site web
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>LIRE LA SUITE &rarr;</p>
                </div>
                <div className=' bg-white my-4 pb-12 md:px-12 px-4 shadow-xl'>
                    <img src={require('../Assets/Chart.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Réponse aux incidents et expertise légale informatique</h1>
                    <p className=' text-gray-500 font-medium py-4'>Réagir rapidement aux incidents de sécurité, minimisant les dommages potentiels</p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>LIRE LA SUITE &rarr;</p>
                </div>
            </div>

            <div className='md:w-[350px] p-4'>
                <div className=' bg-white my-4 pb-12 md:px-12 px-4 shadow-xl'>
                    <img src={require('../Assets/Chart.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Sécurité de l'accès au serveur dédié</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Protégez votre base de données de serveur dédié, assurez l'intégrité et la confidentialité de vos serveurs 
                        dédiés, et sécurisez votre serveur pour arrêter les menaces tout en maintenant ses performances pour répondre 
                        à vos besoins commerciaux.
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>LIRE LA SUITE &rarr;</p>
                </div>
                <div className=' bg-white my-4 pb-12 md:px-12 px-4 shadow-xl'>
                    <img src={require('../Assets/Security.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Sécurité du Cloud et de la voie d'accès client</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Sécurisez les voies d'accès client pour prévenir les escroqueries et les accès non autorisés aux informations 
                        sensibles, et assurez une chiffrement des données fiable.
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>LIRE LA SUITE &rarr;</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FRCFr