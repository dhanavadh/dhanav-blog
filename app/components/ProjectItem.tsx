import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ProjectOf2024 = [
    {
        id: 1,
        name:"Artsgoz Frontend",
        status:"Completed",
        img: "./banner/artsgoz.png",
        description:"Contributing in creating website for Arts student. Main function in the site are related to article and querying professors’ name. Traffic is up to 3k/m.",
        technologies: "Next.js, TailwindCSS, Heroicons, Editorjs",
        github: "https://github.com/dhanavadh/Artsgoz-frontend",
        website: "https://www.arts.chula.ac.th/goz/",
        article: "/blogs/coding/artsgoz-frontend"
    },
    {
        id: 2,
        name:"Artsgoz Backend Server",
        status:"Completed",
        img: "./banner/artsgoz-backend.jpeg",
        description:"Experienced in creating backend server for Arts student. Using MongoDB and AWS S3 for the first time. The server is used to store articles and professors’ name.",
        technologies: "Express.js, AWS S3, MongoDB",
        github: "https://github.com/artsgoz/artsgoz-backend",
        website: "https://www.arts.chula.ac.th/goz/",
        article: "/blogs/coding/artsgoz-backend"
    }
]

const ProjectOf2025 = [
    {
        id: 1,
        name:"My Portfolio Remake",
        status:"Completed",
        img: "./banner/blog-1.svg",
        description:"I have been using my old portfolio for a long time. I decided to remake it with the adaptation of UI design principles. ",
        technologies: "Next.js, TailwindCSS, Heroicons, Editorjs",
        github: "https://github.com/dhanavadh/dhanav-main-blog",
        website: "/",
        article: "/blogs/coding/port-redesign"
    },
    {
        id: 2,
        name:"ใบฟ้า – แอปช่วยจัดตารางเรียน",
        status:"In Progress",
        img: "./banner/blog-4.svg",
        description:"The goal of this project is to design an app and a responsive website that help Arts students manage their curriculum because now students are managing their curriculum on paper.",
        technologies: "N/A",
        github: "/noentry",
        website: "/noentry",
        article: "/noentry"
    },
    {
        id: 3,
        name:"แผ่นหลังคา – Iconroof",
        status:"In Progress",
        img: "./banner/iconroof.png",
        description:"Maintenance the website with latest web technologies for the best experience of clients and the efficiency of SEO management.",
        technologies: "Next.js, TailwindCSS",
        github: "/noentry",
        website: "https://xn--72ca6bng5c5ell7l.com/",
        article: "/noentry"
    }
]


const ProjectItem = () => {
  return (
    <div>
        <div className='lg:flex gap-10 mt-4 max-w-screen items-start justify-center font-[family-name:var(--font-noto-sans)]'>
            <div className='lg:w-1/2 mt-6'>
                <p className='h1'>2025 Projects</p>
                {ProjectOf2025.map((item) => (
                <div className='lg:flex flex-row justify-between gap-2 border-b-2 border-neutral-200 py-4' key={item.id}>  
                    <div className='lg:hidden w-full h-32 mb-4'>
                        <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                    </div>                   
                    <div className='flex'>
                        <div className='lg:w-3/4 pr-4'>
                            {/* Main Project */}
                            <div>
                                <a className={item.status === "Completed" ? 'badge-blue' : item.status === "In Progress" ? 'badge-yellow' : 'badge-yellow'}>{item.status}</a>
                                <div className='mt-2'>
                                    <Link href={item.article} className='link-h3 my-1'>{item.name}</Link>
                                </div>
                                <p className='p w-full line-clamp-3'>{item.description}</p>                        
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
                        <div className='hidden lg:flex lg:w-1/4 ml-2'>
                            <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                        </div>
                    </div> 
                </div>
                ))}                         
            </div>                
            <div className='lg:w-1/2 mt-6'>
                <p className='h1'>2024 Projects</p>
                {ProjectOf2024.map((item) => (
                <div className='lg:flex flex-row justify-between gap-2 border-b-2 border-neutral-200 py-4' key={item.id}>  
                    <div className='lg:hidden w-full h-32 mb-4'>
                        <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                    </div>                   
                    <div className='flex'>
                        <div className='lg:w-3/4 pr-4'>
                            {/* Main Project */}
                            <div>
                                <a className={item.status === "Completed" ? 'badge-blue' : item.status === "In Progress" ? 'badge-yellow' : 'badge-yellow'}>{item.status}</a>
                                <div className='mt-2'>
                                    <Link href={item.article} className='link-h3 my-1'>{item.name}</Link>
                                </div>
                                <p className='p w-full line-clamp-3'>{item.description}</p>                        
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
                        <div className='hidden lg:flex lg:w-1/4 ml-2'>
                            <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                        </div>
                    </div> 
                </div>
                ))}                         
            </div>                         
        </div>
    </div>
  )
}

export default ProjectItem