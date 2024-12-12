import React from 'react'

const projects = [
    {id: "1", name: "Artsgoz Website", status: "Commercial", description: "A commercial project distributed by Arts Student Committee, joined as a full-stack contributor", links: "https://artsgoz.netlify.app/", img: 'https://legacy.dhanav.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fartsgoz_scr.a64ed4dd.png&w=3840&q=75' },
    {id: "3", name: "Iconroof – ระแนงบังตา", status: "Commercial", description: "ดูแลทั้งหมดของเว็บไซต์เก่า (Wordpress) และเว็บไซต์ปัจจุบัน รวมไปถึงจัดการ Search SEO และดูแล Ads", links: "https://iconroof.dhanav.me/", img: './iconroof.dhanav.me_.png' },
    {id: "2", name: "Japanese–Thai Dictionary", status: "In Progress", description: "A personal experiment aiming to create a Japanese–Thai Dictionary with Golang. Contributing with @akphawee", links: "https://github.com/dhanavadh/mydict-Dictionary", img: 'https://legacy.dhanav.me/_next/static/media/aw2.5c329596.svg' },
    {id: "4", name: "Go Dict", status: "Planned", description: "Fetching Dict Dataset by Golang", links: "/", img: './go.svg' },
]

const ProjectComponent = () => {
  return (
    <div className='font-[family-name:var(--font-noto-sans)]' id='product'>
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex mx-10 sm:mx-32 py-10'>
                    {projects.map((item) => (
                        <li key={item.id} className='mx-2 rounded-xl hover:shadow-xl'>
                            <div className='grid w-full shadow-lg hover:shadow-2xl duration-300'>
                            <div className='grid h-96 w-80 items-center  '>
                                <div className='relative h-96'>
                                    <img src={item.img} className='w-full h-full rounded-lg object-cover absolute brightness-50' alt={item.name}></img>                                    
                                    <div className='absolute bottom-1 px-4 py-2'>
                                        <div className='mb-1'>
                                            <a className='text-white text-sm px-2 py-1 bg-pink-500 rounded-2xl'>{item.status}</a>    
                                        </div>                                        
                                        <p className='text-2xl font-medium text-white'>{item.name}</p>
                                        <p className='mt-1 text-white whitespace-normal'>{item.description}</p>
                                        <div className='my-2'>
                                            <a className='text-lg font-medium text-white hover:underline hover:underline-offset-2'　href={item.links} target='_blank'>See Projects →</a>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProjectComponent