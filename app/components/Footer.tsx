import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>           
        <footer className="flex flex-col py-10 flex-wrap items-center justify-center">          
        <div className='lg:flex my-4 gap-4 space-y-2 lg:space-y-0 justify-center border-l-4 border-blue-500 px-4'>            
            <Link href='/' className='flex link'>Home</Link>
            <Link href='/blogs' className='flex link'>Projects</Link>
            <Link href='/blogs' className='flex link'>Blogs</Link>
            <Link href='/blogs' className='flex link'>Experience</Link>
            <Link href='/blogs' className='flex link'>About me</Link>
        </div>
        <p className='font-medium py-4'>2025 – Dhanavadh Saito</p>

        <div className='md:flex gap-6'>
        <Link
          className="flex items-center gap-2 link my-1"
          href="https://github.com/dhanavadh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          @dhanavadh
        </Link>
        <Link
          className="flex items-center gap-2 link my-1"
          href="https://www.linkedin.com/in/dhanav/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/ln.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          @dhanav
        </Link>
        </div>      
      </footer>
    </div>
  )
}

export default Footer