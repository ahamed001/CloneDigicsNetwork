import React from 'react'
import { FaBarcode } from 'react-icons/fa'
import { TbBulb } from 'react-icons/tb'
import { IoDiamondOutline } from 'react-icons/io5'
import { LuAlarmClock } from 'react-icons/lu'

const Services = () => {
  return (
    <div className='bg-white pt-32'>
        <div>
            <p className=' text-sm font-medium text-gray-600 py-5'>BEST SERVICES</p>
            <h1 className='text-3xl font-semibold'>Our Services</h1>
        </div>
            
        <div className='flex text-left w-[80%] mx-auto mt-16'>
            <div className='mx-auto w-[350px]'>
                <div className='my-8 flex'>
                    <div>
                        <img src={require('../Assets/Support.png')} alt="" className='w-96 bg-white mr-4' />
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Best Support</h1>
                        <p className=' text-gray-500 py-4'>
                            Bitss support package includes : *Upgrading with new security measures through ongoning research. 
                            *Training. *Assistance in placing the software. The package is included in the initial software price. 
                            there after an affordable support pack
                        </p>
                    </div>
                </div>
                <div className='my-8 flex'>
                    <div>
                        <img src={require('../Assets/Awareness.png')} alt="" className='w-80 bg-white mr-4' />
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Security Awareness Training</h1>
                        <p className=' text-gray-500 py-4'>
                            Our cyber security experts engaging and tailored security awareness training programs educate your employees 
                            about the latest threats and equip them with practical skills to detect and mitigate potential risks.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-[350px]'>
                <div className='my-8 flex'>
                    <div>
                        <FaBarcode className=' text-5xl mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Quick Response</h1>
                        <p className=' text-gray-500 py-4'>
                            We recognize the urgency and critical nature of cyber incidents. Our dedicated incident response 
                            team is available around the clock to swiftly address any security breaches or threats that may arise. 
                            We understand the importance of immediate action, and we pride ourselves on our ability to respond rapidly, 
                            minimizing the impact and ensuring a timely resolution as 24/7 security monitoring.
                        </p>
                    </div>
                </div>
                <div className='my-8 flex'>
                    <div>
                        <TbBulb className=' text-5xl mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Real Solutions</h1>
                        <p className=' text-gray-500 py-4'>
                            Our approach is rooted in practicality and real-world applicability to your business data protection. 
                            Through our extensive experience and deep industry knowledge, we provide customized recommendations and 
                            strategies tailored to your specific requirements and secure digital assets.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto w-[350px]'>
                <div className='my-8 flex'>
                    <div>
                        <IoDiamondOutline className=' text-5xl mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Audits And Risk Assessments</h1>
                        <p className=' text-gray-500 py-4'>
                            Our experts evaluate your security controls, policies, and procedures to ensure adherence to industry 
                            regulations such as GDPR, HIPAA, and PCI DSS. By identifying gaps and providing actionable recommendations, 
                            we assist you in meeting compliance requirements effectively.
                        </p>
                    </div>
                </div>
                <div className='my-8 flex'>
                    <div>
                        <LuAlarmClock className=' text-6xl mr-4 mt-1'/>
                    </div>
                    <div>
                        <h1 className=' text-2xl font-semibold'>Secure Code Review And Application Security</h1>
                        <p className=' text-gray-500 py-4'>
                            Our meticulous code review process examines your applications to identify vulnerabilities at the source 
                            code level. We employ industry-leading tools and methodologies to uncover potential weaknesses that could 
                            be exploited by attackers.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services