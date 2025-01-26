import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const AuthorWithPom = () => {
  return (
    <div className='blog-author'>
          <p className='h3 mb-2'>Crafted by</p>
        <div className='flex gap-4 md:flex-row flex-col'>
            <div className='flex items-center'>
                <Image src='/profile.jpg' alt='writer-img' width={64} height={64} className='rounded-full brightness-110'></Image>
                <div className='ml-3'>
                <p className='h4'>Dhanavadh Saito</p>
                <Link href='/about' className='link'>@dhanavadh</Link>
                </div>
            </div>            
            <div className='flex items-center'>
                <Image src='/banner/blog-3.svg' alt='writer-img' width={64} height={64} className='rounded-full brightness-110'></Image>
                <div className='ml-3'>
                <p className='h4'>Natnaree K.</p>
                <p>ปอม</p>
                </div>
            </div> 
        </div>           
    </div>
  )
}

export default AuthorWithPom