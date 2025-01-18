import Link from 'next/link'
import React from 'react'

const projects = [
    {id: "1", name: "Artsgoz Website", status: "Commercial", description: "A commercial project distributed by Arts Student Committee, joined as a full-stack contributor", links: "https://artsgoz.netlify.app/", img: './banner/artsgoz.png' },
    {id: "3", name: "Iconroof – ระแนงบังตา", status: "Commercial", description: "ดูแลทั้งหมดของเว็บไซต์เก่า (Wordpress) และเว็บไซต์ปัจจุบัน รวมไปถึงจัดการ Search SEO และดูแล Ads", links: "https://iconroof.dhanav.me/", img: './iconroof.dhanav.me_.png' },
    {id: "2", name: "Japanese–Thai Dictionary", status: "In Progress", description: "A personal experiment aiming to create a Japanese–Thai Dictionary with Golang. Contributing with @akphawee", links: "https://github.com/dhanavadh/mydict-Dictionary", img: './dict.svg' },
    {id: "4", name: "Go Dict", status: "Planned", description: "Fetching Dict Dataset by Golang", links: "/", img: './go.svg' },
]

const ProjectGroup = () => {
  return (
    <div>
                <ul className='flex flex-col gap-3'>
                    {projects.map((item) => (
                        <li key={item.id} className='mx-2 rounded-xl hover:shadow-xl'>
                            <div className='grid shadow-lg hover:shadow-2xl duration-300'>
                            <div className='grid h-64 w-full md:w-96 items-center'>
                                <div className='relative h-64 -z-[1]'>
                                    <img src={item.img} className='w-full h-full rounded-lg object-cover absolute brightness-50' alt={item.name}></img>                                    
                                    <div className='absolute bottom-1 px-4 py-2'>
                                        <div className='mb-2'>
                                            <a className='text-white text-sm px-2 py-1 bg-pink-500 rounded-2xl'>{item.status}</a>    
                                        </div>                                        
                                        <p className='text-2xl font-medium text-white'>{item.name}</p>
                                        <p className='mt-1 text-white whitespace-normal'>{item.description}</p>
                                        <div className='my-2'>
                                            <a className='text-lg font-medium text-white hover:underline hover:underline-offset-2'　href={item.links} target='_blank'>See Project →</a>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            
                            </div>
                        </li>
                    ))}
                </ul>
                <div>
                {/* <div className='flex max-h-3/4 max-w-full relative'>
                    <img src='./banner/artsgoz.png' className='rounded-lg h-full w-full absolute object-cover -z-[1] brightness-[20%]'></img>                        
                    <div className='grid grid-rows mx-5 mt-24 md:mt-32'>
                        <p className='grid h1 text-[#F8E1EA] font-kanit'>“Quarter-life Crisis” จากวัยรุ่นสู่วัยผู้ใหญ่ วิกฤตของชีวิตที่มาโดยไม่มีสัญญาณเตือน</p>
                        <p className='grid p text-[#F8E1EA] font-normal'>สวัสดีปีใหม่ เผลอแป๊บเดียวก็เติบโตขึ้นมาอีกปีแล้วสินะ … เคยรู้สึกเหมือนกันไหมว่า เวลาบนโลกนี้ช่างผ่านไปรวดเร็วเสียจนไม่ทันได้ตั้งตัว ในขณะที่สิ่งต่าง ๆ รอบกายเปลี่ยนแปลงไปตลอดเวลา</p>
                        <div className='grid mb-5'>
                                <Link href='./' target='_blank' type='button' className='flex px-2 py-2 border-2 rounded-lg border-[#F8E1EA] w-fit mt-4 text-[#F8E1EA] text-base underline-thickness-1 hover:underline hover:bg-[#F8E1EA] hover:text-[#1F1F1F]
        `                           cursor-pointer transition-colors duration-300'>
                                    อ่านต่อได้ที่นี่                      
                                </Link>
                        </div>
                    </div>                    
                </div>                                    */}
            </div>
    </div>
  )
}

export default ProjectGroup