import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'N/A',
        link: '/'
    },    

]

const BlogHeavengate = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 max-w-full relative -z-[1]'>
          <img src='/banner/blog-3.svg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>N/A minutes Reading</p>
            <p className='title'>New Religion Movement – Heaven’s Gate</p>
            <p className='sub-title-article mt-2'>Heaven’s Gate เป็นกลุ่มศาสนาเกิดใหม่ หรือ New Religion Movement และเป็นที่รู้จักอย่างกว้างขวางจากเหตุการณ์อัตวินิบาตกรรมหมู่ของกลุ่มคนที่มีความเชื่อทางศาสนาที่เมือง Rancho Santa Fe มลรัฐ California สหรัฐอเมริกา</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='paragraph'>
          <p></p>
        </div>   
        
        {/* Author */}
        <Author />

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

export default BlogHeavengate