import Image from 'next/image'
import React from 'react'

const Blogs = () => {
  return (
    <div className='head-page-relative items-start mx-16 md:mx-32'>
        <div className='flex gap-2 border-b-2 pb-4 border-neutral-900'>
            <div className=''>
                <p className='text-body mb-2'>Blogs</p>       
                <p className='title mb-1'>Here it is my playground!</p>
                <p className='sub-title text-gray-400'>This is my notebook to keep the things I'm working around.</p>                
            </div>            
        </div>
        
        {/* Note */}
        <div className='mt-4 px-4 py-2 border-l-4 border-pink-500'>
            <div className='flex items-center gap-2 mb-1'>
            <Image
                    aria-hidden
                    src="/icons/info.svg"
                    alt="GitRepo"
                    width={18}
                    height={18}
                />
            <p className='text-lg font-bold'>Note</p>
            </div>
            <p className='text-base'>Contents are mainly written in Thai 🇹🇭</p>
        </div>
    </div>
  )
}

export default Blogs