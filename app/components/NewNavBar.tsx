"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const NavLink = [
    {name: 'Home', href: '/', target: `_self`}, 
    {name: 'Projects', href: '/projects', target: `_self`},
    {name: 'Blogs', href: '/blogs', target: `_self`}, 
    {name: 'Experience', href: '/experience', target: `_self`}, 
    {name: 'About me', href: '/about', target: `_self`}
]

const navtext = [
    `flex font-medium text-white link`,
    `flex font-medium text-black link`
  ]

const btnDec = [
    `text-white`,
    `text-black`,
]
const TitleName = [
    `h3 text-white`,
    `h3 text-black`,
]

const NewNavbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    const [color, setColor ] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 50){
            setColor(true)
        }else {
            setColor(false)
        }        

    }
    useEffect(() => {
      window.addEventListener('scroll', changeColor);
    }) 
    

  return (
    <nav>
            <div className="flex flex-col items-center justify-center font-[family-name:var(--font-noto-sans)] text-white">
                <div className="flex justify-between flex-col">                    
                    <div className={color ? 'navbar-active' : 'navbar'}>                    
                        <div className="flex items-center transition-colors duration-300">
                            <Link className="cursor-pointer" href='/'>
                                <p className={color ? TitleName[1] : TitleName[0]}>Dhanavadh Saito        
                                </p>    
                            </Link>
                        </div>                    
                        <div className="items-center hidden space-x-8 lg:flex">
                        {NavLink.map((index) => (
                            <Link
                                key={index.name}
                                href={index.href}
                                className={`${color ? 'nav-link' : 'nav-link-main'} ${hoveredIndex !== null && hoveredIndex !== index ? 'hovered' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {index.name}
                            </Link>
                        ))}
                            
                        </div>

                        <div className="hidden lg:flex items-center py-2 px-4">
                            <Link href='https://github.com/dhanavadh' className={`link-noapply-color ${color ? TitleName[1] : TitleName[0]}`}>Github</Link>
                        </div>
                        <div className="flex lg:hidden">
                            <button onClick={() => setIsOpen(true)} className='hover:underline hover:underline-offset-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        {/* Mobile Menu */}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-start justify-center backdrop-blur-3xl bg-neutral-200/50 font-[family-name:var(--font-noto-sans)]">
          <DialogPanel className="flex flex-col w-screen px-6 md:px-32">
            <div className="flex justify-between items-center py-2">                
                <Link href='/' className="h3" onClick={() => setIsOpen(false)}>Dhanavadh Saito</Link>
                <button onClick={() => setIsOpen(false)}>
                    <Image src='/icons/close_w.svg' width={36} height={36} alt='menu'></Image>
                </button>
            </div>
            <div className="flex flex-col mt-2">
            {NavLink.map((index) => (
                <Link
                key={index.name}
                href={index.href}
                className={`nav-mobile ${hoveredIndex !== null && hoveredIndex !== index ? 'hovered' : ''} py-2 font-medium`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setIsOpen(false)}>
                {index.name}
            </Link>
            ))}
            </div>                
          </DialogPanel>
        </div>
        </Dialog>
    </nav>
  )
}

export default NewNavbar