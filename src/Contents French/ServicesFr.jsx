import React from 'react'
import { FaBarcode } from 'react-icons/fa'
import { TbBulb } from 'react-icons/tb'
import { IoDiamondOutline } from 'react-icons/io5'
import { LuAlarmClock } from 'react-icons/lu'

const ServicesFr = () => {
  return (
    <div className='bg-white pt-32'>
        <div className='text-center'>
            <p className=' text-sm font-medium text-gray-600 py-5'>BEST SERVICES</p>
            <h1 className='text-3xl font-semibold'>Nos Services</h1>
        </div>
            
        <div className='md:flex justify-around text-left md:w-[80%] w-[90%] mx-auto mt-16'>
            <div className=' md:w-[350px]'>
                <div className='my-8 flex'>
                    <div>
                        <img src={require('../Assets/Support.png')} alt="" className='w-96 bg-white mr-4' />
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Meilleur Support</h1>
                        <p className=' text-gray-500 py-4'>
                            Le package de support Bitss comprend : * Mise à niveau avec de nouvelles mesures de 
                            sécurité grâce à la recherche continue. * Formation. * Assistance pour l'installation 
                            du logiciel. Le package est inclus dans le prix initial du logiciel. Ensuite, un pack de 
                            support abordable est proposé
                        </p>
                    </div>
                </div>
                <div className='my-8 flex'>
                    <div>
                        <img src={require('../Assets/Awareness.png')} alt="" className='w-80 bg-white mr-4' />
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Formation à la Conscience de la Sécurité</h1>
                        <p className=' text-gray-500 py-4'>
                            Nos experts en cybersécurité s'engagent dans des programmes de formation à la sensibilisation à 
                            la sécurité adaptés, qui permettent d'informer vos employés sur les dernières menaces et de les doter 
                            de compétences pratiques pour détecter et atténuer les risques potentiels.
                        </p>
                    </div>
                </div>
            </div>

            <div className=' md:w-[350px]'>
                <div className='my-8 flex'>
                    <div>
                        <FaBarcode className=' text-5xl md:mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Réponse Rapide</h1>
                        <p className=' text-gray-500 py-4'>
                            Nous reconnaissons l'urgence et la nature critique des incidents cybernétiques. Notre équipe 
                            dédiée à la gestion des incidents est disponible 24h/24 pour traiter rapidement toute violation 
                            de sécurité ou menace qui pourrait survenir. Nous comprenons l'importance de l'action immédiate, 
                            et nous sommes fiers de notre capacité à réagir rapidement, minimisant l'impact et garantissant une 
                            résolution rapide grâce à une surveillance de sécurité 24/7.
                        </p>
                    </div>
                </div>
                <div className='my-8 flex'>
                    <div>
                        <TbBulb className=' text-5xl md:mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Solutions Réelles</h1>
                        <p className=' text-gray-500 py-4'>
                            Notre approche est ancrée dans la praticité et l'applicabilité du monde réel pour la protection 
                            de vos données commerciales. Forts de notre vaste expérience et de notre connaissance approfondie 
                            de l'industrie, nous proposons des recommandations personnalisées et des stratégies adaptées à vos 
                            besoins spécifiques pour sécuriser vos actifs numériques.
                        </p>
                    </div>
                </div>
            </div>

            <div className=' md:w-[350px]'>
                <div className='my-8 flex'>
                    <div>
                        <IoDiamondOutline className=' text-5xl md:mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Audits et Évaluations des Risques</h1>
                        <p className=' text-gray-500 py-4'>
                            Nos experts évaluent vos contrôles de sécurité, politiques et procédures pour garantir le respect 
                            des réglementations de l'industrie telles que le GDPR, le HIPAA et le PCI DSS. En identifiant les 
                            lacunes et en fournissant des recommandations concrètes, nous vous aidons à satisfaire efficacement 
                            les exigences de conformité.
                        </p>
                    </div>
                </div>
                <div className='my-8 flex'>
                    <div>
                        <LuAlarmClock className=' md:text-6xl text-5xl md:mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Revues de Code Sécurisées et Sécurité des Applications</h1>
                        <p className=' text-gray-500 py-4'>
                            Notre processus minutieux de revue de code examine vos applications pour identifier les vulnérabilités 
                            au niveau du code source. Nous utilisons des outils et des méthodologies de pointe de l'industrie pour 
                            découvrir les faiblesses potentielles qui pourraient être exploitées par des attaquants.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ServicesFr