"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const NavLink = [
    {name: 'Home', href: '/'}, 
    {name: 'Projects', href: '/projects'},
    {name: 'Blogs', href: '/blogs'}, 
    {name: 'Experience', href: '/experience'}, 
    {name: 'About me', href: '/about'}
]

const Navbar = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false)
    

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between h-12 w-full font-[family-name:var(--font-noto-sans)] px-6 md:px-32 border-b-2 border-neutral-200 bg-neutral-50">
            <Link href='/' className='flex items-center'>
            {/* <Image src='./icon.svg' alt='logo' width={48} height={48} className='p-0.5 mr-2'/>   */}
            <p className='h3'>Dhanavadh Saito        
            </p>    
            
            </Link>
            <div className='hidden lg:flex p items-center h-full space-x-8 py-2 px-4'>
            {NavLink.map((index) => (
                <Link
                    key={index.name}
                    href={index.href}
                    className={`nav-link ${hoveredIndex !== null && hoveredIndex !== index ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {index.name}
                </Link>
            ))}
        </div>
        <div className="hidden lg:flex items-center py-2 px-4">
            <Link href='https://github.com/dhanavadh' className='link'>Github</Link>
        </div>
        <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(true)} className='hover:underline hover:underline-offset-2'>
                <Image src='/icons/menu_w.svg' width={36} height={36} alt='menu'></Image>
            </button>
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

export default Navbar