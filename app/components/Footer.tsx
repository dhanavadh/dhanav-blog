import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="flex mt-5 mb-10 gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 link"
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
          @dhanavadh
        </Link>
        <Link
          className="flex items-center gap-2 link"
          href="https://www.linkedin.com/in/dhanav/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/Linkedin_icon.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          @dhanav
        </Link>
        <a
          className="flex items-center gap-2 link"
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