import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="flex my-10 gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/dhanavadh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.png"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a> 
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://legacy.dhanav.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deprecated profile
        </a>       
      </footer>
    </div>
  )
}

export default Footer