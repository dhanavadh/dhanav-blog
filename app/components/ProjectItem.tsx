import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ProjectOf2024 = [
    {
        id: 1,
        name:"Artsgoz Frontend",
        status:"Completed",
        img: "./banner/artsgoz.png",
        description:"I'm assigned to create a new website for Arts Student Committee. Due to the old ones was using Wordpress, The club wants the new ones with the latest web technologies. The mostly used function is querying the professors' name.",
        technologies: "Next.js, TailwindCSS, Heroicons, Editorjs",
        github: "https://www.linkedin.com/in/dhanav/",
        website: "https://www.linkedin.com/in/dhanav/",
        article: "https://www.linkedin.com/in/dhanav/"
    },
    {
        id: 2,
        name:"Artsgoz Backend Server",
        status:"Completed",
        img: "./banner/artsgoz-backend.jpeg",
        description:"I'm assigned to create a new website for Arts Student Committee. Due to the old ones was using Wordpress, The club wants the new ones with the latest web technologies. The mostly used function is querying the professors' name.",
        technologies: "Express.js, AWS S3, MongoDB",
        github: "https://www.linkedin.com/in/dhanav/",
        website: "https://www.linkedin.com/in/dhanav/",
        article: "https://www.linkedin.com/in/dhanav/"
    }
]

const ProjectOf2025 = [
    {
        id: 1,
        name:"My Portfolio Remake",
        status:"Completed",
        img: "./banner/artsgoz.png",
        description:"I'm assigned to create a new website for Arts Student Committee. Due to the old ones was using Wordpress, The club wants the new ones with the latest web technologies. The mostly used function is querying the professors' name.",
        technologies: "Next.js, TailwindCSS, Heroicons, Editorjs",
        github: "https://www.linkedin.com/in/dhanav/",
        website: "https://www.linkedin.com/in/dhanav/",
        article: "https://www.linkedin.com/in/dhanav/"
    },
    {
        id: 2,
        name:"แผ่นหลังคา – Iconroof",
        status:"In Progress",
        img: "./banner/artsgoz-backend.jpeg",
        description:"I'm assigned to create a new website for Arts Student Committee. Due to the old ones was using Wordpress, The club wants the new ones with the latest web technologies. The mostly used function is querying the professors' name.",
        technologies: "Express.js, AWS S3, MongoDB",
        github: "https://www.linkedin.com/in/dhanav/",
        website: "https://www.linkedin.com/in/dhanav/",
        article: "https://www.linkedin.com/in/dhanav/"
    }
]


const ProjectItem = () => {
  return (
    <div>
        <div className='space-y-2 py-4'>
            <p className='h1'>2025 Projects</p>
            {ProjectOf2025.map((item) => (
                <div className='lg:flex flex-row gap-2 border-b-2 border-neutral-900 py-4' key={item.id}>  
                <div className='lg:hidden w-full mb-4'>
                    <img src={item.img} className='rounded-lg h-full w-full object-cover'></img>
                </div>                   
                <div>
                    {/* Main Project */}
                    <div>
                        <a className={item.status === "In Progress" ? 'badge-yellow' : 'badge-blue'}>{item.status}</a>
                        <p className='h3 my-1'>{item.name}</p>
                        <p className='p'>{item.description}</p>
                    </div>
                    {/* Used Technologies */}
                    <div>
                        <p className='h5 mt-2 font-semibold'>Used Technologies</p>
                        <div className='flex gap-2'>
                            <a className='p mt-1'>{item.technologies}</a>
                        </div>
                    </div>

                    {/* Link to read more */}
                    <p className='h5 mt-2 font-semibold'>Read more about this</p>
                    <div className='flex gap-4'>
                        <Link
                            className="flex items-center link gap-2"
                            href={item.github}
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
                            href={item.website}
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
                            href={item.article}
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
                <div className='hidden lg:flex w-1/2'>
                    <img src={item.img} className='rounded-lg h-full w-full object-cover'></img>
                </div>
            </div>
            ))}                    
            <p className='h1 pt-4'>2024 Projects</p> 
            {ProjectOf2024.map((item) => (
                <div className='lg:flex flex-row gap-2 border-b-2 border-neutral-900 py-4' key={item.id}>  
                <div className='lg:hidden w-full mb-4'>
                    <img src={item.img} className='rounded-lg h-full w-full object-cover'></img>
                </div>                   
                <div>
                    {/* Main Project */}
                    <div>
                        <a className={item.status === "In Progress" ? 'badge-yellow' : 'badge-blue'}>{item.status}</a>
                        <p className='h3 my-1'>{item.name}</p>
                        <p className='p'>{item.description}</p>
                    </div>
                    {/* Used Technologies */}
                    <div>
                        <p className='h5 mt-2 font-semibold'>Used Technologies</p>
                        <div className='flex gap-2'>
                            <a className='p mt-1'>{item.technologies}</a>
                        </div>
                    </div>

                    {/* Link to read more */}
                    <p className='h5 mt-2 font-semibold'>Read more about this</p>
                    <div className='flex gap-4'>
                        <Link
                            className="flex items-center link gap-2"
                            href={item.github}
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
                            href={item.website}
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
                            href={item.article}
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
                <div className='hidden lg:flex w-1/2'>
                    <img src={item.img} className='rounded-lg h-full w-full object-cover'></img>
                </div>
            </div>
            ))}            
        </div>
    </div>
  )
}

export default ProjectItem