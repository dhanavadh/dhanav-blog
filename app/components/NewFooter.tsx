import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NewFooter = () => {
  return (
    <div>
        <footer className="flex flex-row flex-wrap items-start justify-start mx-12 my-4">          
            <div className='mr-24 flex flex-col'>
                <div>
                    <p>2025</p>
                    <p>Dhanavadh Saito</p>
                </div>
                <div className='md:flex gap-6 mt-6'>
                    <Link
                    className="flex items-center gap-2 hover:underline"
                    href="https://github.com/dhanavadh"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    GitHub
                    </Link>
                    <Link
                    className="flex items-center gap-2 hover:underline"
                    href="https://www.linkedin.com/in/dhanav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    LinkedIn
                    </Link>
                </div>
            </div>
        <div className='flex flex-col justify-center'>            
            <Link href='/' className='flex hover:underline'>Home</Link>
            <Link href='/blogs' className='flex hover:underline'>Projects</Link>
            <Link href='/blogs' className='flex hover:underline'>Blogs</Link>
            <Link href='/blogs' className='flex hover:underline'>Experience</Link>
            <Link href='/blogs' className='flex hover:underline'>About me</Link>
        </div>        
      </footer>
    </div>
  )
}

export default NewFooter