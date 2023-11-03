import React from 'react'

const FRC = () => {
  return (
    <div>
        <div className=' w-[50%] mx-auto border-l-4 border-orange-500 px-4 py-2 my-20 text-left text-2xl'>
            We are a French research company committed to protecting your online website, 
            video site, network, server and stop contact page spamming
        </div>
        <div className='flex text-left w-[75%] mx-auto'>

            <div className='w-[350px] p-4 mx-auto'>
                <div className=' bg-white my-4 pb-12 px-12 shadow-xl'>
                    <img src={require('../Assets/Security.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Network Access Security</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Bitss N enforced network security solutions, secure your network databases from unauthorized 
                        access and protect sensitive data. The theft of sensitive data can ruin your bsuiness and that 
                        of your clients business. Bitss is a software that is uploaded into the network servers, gateway 
                        server and every other server witin the network for double triple protection and is affordable to 
                        small medium and large bsuiness.
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>READ MORE &rarr;</p>
                </div>
                <div className=' bg-white my-4 pb-12 px-12 shadow-xl'>
                    <img src={require('../Assets/Chart.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Malware and Scam Protection</h1>
                    <p className=' text-gray-500 font-medium py-4'>Shield your systems from malware, ransomware, and phishing attacks</p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>READ MORE &rarr;</p>
                </div>
            </div>

            <div className='w-[350px] p-4 mx-auto'>
                <div className=' bg-white my-4 pb-12 px-12 shadow-xl'>
                    <img src={require('../Assets/Sites.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Bitss WP protects all Website including WordPress sites</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Protect your admin database, monitor and block suspicious login attempts and brute-force attacks. And 
                        prevents data theft, content theft, video destruction, intrusion, client data theft, hacking, hostage 
                        ransom threats, and blocks spamming from website contact page
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>READ MORE &rarr;</p>
                </div>
                <div className=' bg-white my-4 pb-12 px-12 shadow-xl'>
                    <img src={require('../Assets/Chart.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Incident Response and Forensics</h1>
                    <p className=' text-gray-500 font-medium py-4'>Rapidly respond to security incidents, minimizing potential damages</p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>READ MORE &rarr;</p>
                </div>
            </div>

            <div className='w-[350px] p-4 mx-auto'>
                <div className=' bg-white my-4 pb-12 px-12 shadow-xl'>
                    <img src={require('../Assets/Chart.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Dedicated Server Access Security</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Protect your dedicated server database, ensure the integrity and confidentiality of your dedicated servers, 
                        and vaults your server to stop threats while maintaing its performance to build and serve your business needs.
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>READ MORE &rarr;</p>
                </div>
                <div className=' bg-white my-4 pb-12 px-12 shadow-xl'>
                    <img src={require('../Assets/Security.png')} alt="" className='w-16 pt-8 bg-white' />
                    <h1 className=' text-2xl font-semibold text-slate-800 py-2'>Cloud Protection and Client Login Pathway Security</h1>
                    <p className=' text-gray-500 font-medium py-4'>
                        Secure client login pathways to prevent scamming and unauthorized access to sensitive information 
                        and ensure reliable data encryption.
                    </p>
                    <p className='mt-4 font-bold text-sm hover:cursor-pointer hover:text-red-500'>READ MORE &rarr;</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FRC