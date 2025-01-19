import Image from 'next/image'
import React from 'react'
import ExperienceSection from '../components/ExperienceSection'

const Experience = () => {
  return (
    <div className='head-page-relative'>
    <div className='lg:flex flex-row'>
        <div className='flex gap-2 border-b-2 pb-4 border-neutral-900'>
            <div className=''>
                <p className='text-body mb-2'>Experience</p>       
                <p className='title mb-1'>See how I grew up!</p>
                <p className='sub-title text-gray-400'>I always value every experience that comes into my life, as it helps me grow and become a better version of myself.</p>                
            </div>                              
        </div>
    </div>    
    <ExperienceSection />
    </div>
    
  )
}

export default Experience