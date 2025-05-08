import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex gap-6 flex-col md:flex-row mt-6'>
        <div>
            <p className='h3'>Reach me via</p>
            <div className='flex flex-col gap-1'>                    
                <Link
                className="flex items-center gap-2 link"
                href="mailto:dhanavadh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    aria-hidden
                    src="icons/mail.svg"
                    alt="mail"
                    width={16}
                    height={16}
                />
                dhanavadh@gmail.com
                </Link>
                <Link
                className="flex items-center gap-2 link"
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
                className="flex items-center gap-2 link"
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
        </div>
        <div>
            <p className='h3'>Attachment</p>
            <div className='flex flex-col gap-1'>                    
                <Link
                className="flex items-center gap-2 link"
                href="/asset/Resume-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                >
                <Image
                    aria-hidden
                    src="icons/read.svg"
                    alt="mail"
                    width={16}
                    height={16}
                />
                Resume
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact