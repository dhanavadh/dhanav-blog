import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Author = () => {
  return (
    <div className='blog-author'>
          <p className='h3 mb-2'>Crafted by</p>
          <div className='flex items-center'>
            <Image src='/profile.jpg' alt='writer-img' width={64} height={64} className='rounded-full brightness-110'></Image>
            <div className='ml-3'>
              <p className='h4'>Dhanavadh Saito</p>
              <Link href='/about' className='link'>@dhanavadh</Link>
            </div>
          </div>            
        </div>
  )
}

export default Author