import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Project2025 = () => {
  return (
    <div>
        <div className='space-y-2 py-4'>
            <p className='h1'>2025 Projects</p>
            {/* Project 1*/}            
            <div className='lg:flex flex-row gap-2 border-b-2 border-neutral-900 py-4'> 
                <div className='lg:hidden w-full h-64 mb-2'>
                    <img src='./banner/artsgoz.png' className='rounded-lg h-full w-full object-cover'></img>
                </div>               
                <div>
                    {/* Main Project */}
                    <div>
                        <a className='badge-blue'>Completed</a>
                        <p className='h3 my-1'>My Portfolio Remake</p>
                        <p className='text-base'>I'm assigned to create a new website for Arts Student Committee. Due to the old ones was using Wordpress, The club wants the new ones with the latest web technologies. The mostly used function is querying the professors' name.</p>
                    </div>
                    {/* Used Technologies */}
                    <div>
                        <p className='h4 mt-2 font-semibold'>Used Technologies</p>
                        <div className='flex gap-2'>
                            <a className='text-base mt-1'>Next.js</a>
                            <a className='text-base mt-1'>TailwindCSS</a>
                        </div>
                    </div>

                    {/* Link to read more */}
                    <p className='h4 mt-2 font-semibold'>Read more about this</p>
                    <div className='flex gap-4'>
                        <Link
                            className="flex items-center link gap-2"
                            href="https://www.linkedin.com/in/dhanav/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >      
                            <Image
                                aria-hidden
                                src="/github-mark.svg"
                                alt="GitRepo"
                                width={16}
                                height={16}
                            />                  
                            GitRepo                        
                        </Link>                   
                        <Link
                            className="flex items-center link gap-2"
                            href="https://www.linkedin.com/in/dhanav/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >      
                            <Image
                                aria-hidden
                                src="/icons/website.svg"
                                alt="website"
                                width={16}
                                height={16}
                            />                  
                            Website                       
                        </Link>                   
                        <Link
                            className="flex items-center link gap-2"
                            href="https://www.linkedin.com/in/dhanav/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >      
                            <Image
                                aria-hidden
                                src="/icons/read.svg"
                                alt="Article"
                                width={16}
                                height={16}
                            />                  
                            Full Article               
                        </Link>                   
                    </div>
                    
                </div>
                <div className='hidden lg:flex h-64 w-1/2'>
                    <img src='./banner/artsgoz.png' className='rounded-lg h-full w-full object-cover'></img>
                </div>
            </div>

            {/* Project 2*/}

            <div className='lg:flex flex-row gap-2 border-b-2 border-neutral-900 py-4'>  
                <div className='lg:hidden flex w-full h-64 mb-2'>
                    <img src='./banner/iconroof.png' className='rounded-lg h-full w-full object-cover'></img>
                </div>              
                <div>
                    {/* Main Project */}
                    <div>
                        <a className='badge-yellow text-black'>In progress</a>
                        <p className='h3 my-1'>แผ่นหลังคา – Iconroof</p>
                        <p className='text-base'>I'm assigned to create a new website for Arts Student Committee. Due to the old ones was using Wordpress, The club wants the new ones with the latest web technologies. The mostly used function is querying the professors' name.</p>
                    </div>
                    {/* Used Technologies */}
                    <div>
                        <p className='h4 mt-2 font-semibold'>Used Technologies</p>
                        <div className='flex gap-2'>
                            <a className='text-base mt-1'>Express.js</a>
                            <a className='text-base mt-1'>AWS S3</a>
                            <a className='text-base mt-1'>MongoDB</a>
                        </div>
                    </div>

                    {/* Link to read more */}
                    <p className='h4 mt-2 font-semibold'>Read more about this</p>
                    <div className='flex gap-4'>
                        <Link
                            className="flex items-center link gap-2"
                            href="https://www.linkedin.com/in/dhanav/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >      
                            <Image
                                aria-hidden
                                src="/github-mark.svg"
                                alt="GitRepo"
                                width={16}
                                height={16}
                            />                  
                            GitRepo                        
                        </Link>                   
                        <Link
                            className="flex items-center link gap-2"
                            href="https://www.linkedin.com/in/dhanav/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >      
                            <Image
                                aria-hidden
                                src="/icons/website.svg"
                                alt="website"
                                width={16}
                                height={16}
                            />                  
                            Website                       
                        </Link>                   
                        <Link
                            className="flex items-center link gap-2"
                            href="https://www.linkedin.com/in/dhanav/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >      
                            <Image
                                aria-hidden
                                src="/icons/read.svg"
                                alt="Article"
                                width={16}
                                height={16}
                            />                  
                            Full Article               
                        </Link>                   
                    </div>
                    
                </div>
                <div className='hidden lg:flex h-64 w-1/2'>
                    <img src='./banner/iconroof.png' className='rounded-lg h-full w-full object-cover'></img>
                </div>
            </div>                        
        </div>
    </div>
  )
}

export default Project2025