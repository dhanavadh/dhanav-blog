import React from 'react'

export const ProfileInfo = () => {
  return (
    <div className='grid min-h-40 max-w-5xl items-center justify-items-start sm:justify-center font-[family-name:var(--font-noto-sans)]'>
        <div className='mt-20 mx-10 sm:mx-40'>
          <p className='text-4xl font-medium text-gray-800'>Dhanavadh Saito</p>
          <p className='text-2xl font-normal text-gray-500'>ธนวัฒน์ ซาอิโตะ</p>
          <p>Nothing too much here but, I am a 3rd-year student currently majoring in Japanese language at the Faculty of Arts, Chulalongkorn University.</p>
        </div>
        <div className='mt-10 mx-10 sm:mx-40'>
          <p className='text-4xl font-medium text-gray-800'>Projects</p>          
        </div>
    </div>
  )
}
