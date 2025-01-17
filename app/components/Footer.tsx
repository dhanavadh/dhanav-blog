import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col pt-5 pb-10 flex-wrap items-center justify-center bg-black">          
        <p className='font-medium text-white pb-4'>2025 – Dhanavadh Saito</p>
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