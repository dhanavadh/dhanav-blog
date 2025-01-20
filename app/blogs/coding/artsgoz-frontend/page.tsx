import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'N/A',
        link: '/'
    },    

]

const BlogArtsgozFE = () => {
  return (
    <div className='mx-6 md:mx-32 font-[family-name:var(--font-noto-sans)]'>
        {/* Banner */}
        <div className='flex max-h-3/4 max-w-full relative -z-[1]'>
          <img src='/banner/artsgoz.png' className='h-full w-full absolute object-cover -z-[1] brightness-75 rounded-b-xl'></img>                        
          <div className='mx-6 mt-48 md:mt-64 w-full'>            
            <p className='p mb-2 text-end'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='mt-6 mb-10 border-l-4 border-blue-500 pl-4'>
            <p className='p mb-1'>N/A minutes Reading</p>
          <p className='title'>สำรวจหน้าบ้านของเว็บไซต์ Artsgoz</p>
          <p className='sub-title-article mt-2'>จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='paragraph'>
          <p>บทความยังไม่เผยแพร่</p>
        </div>   
        {/* Reference */}
        <div className='h3 border-l-4 border-blue-500 pl-4'>
          <p className='h3'>Reference</p>
          {Reference.map((item) => (
            <ul className='p my-2 list-disc ml-4' key={item.id}>
            <li>
                <p>{item.name}</p>
                <Link href={item.link} className='link' target='_blank'>Get this reference →</Link>
            </li>
            </ul>      
          ))}    
        </div>  
        {/* Navigator */}          
    </div>
  )
}

export default BlogArtsgozFE