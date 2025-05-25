import React from 'react'

const notFound = () => {
  return (
    <div className='mx-6 md:mx-32 font-[family-name:var(--font-noto-sans)]'>
        {/* Banner */}
        <div className='flex max-h-3/4 max-w-full relative -z-[1]'>
          <img src='http://stageengine.iconroof.co.th/public/asset/pers/banner/blog-3.svg' className='h-full w-full absolute object-cover -z-[1] brightness-75 rounded-b-xl'></img>                        
          <div className='mx-6 mt-48 md:mt-64 w-full'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='mt-6 mb-10 border-l-4 border-blue-500 pl-4'>            
          <p className='title'>404 – Page Not Found</p>
          <p className='sub-title-article mt-2'>Sorry for the inconvenience, We cannot find the page you're looking for.</p>          
        </div>                                        
    </div>
  )
}

export default notFound