import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'Figma. (nd.) Typography in design.',
        link: 'https://www.figma.com/resource-library/typography-in-design/#_5-most-popular-kinds-of-typefaces'
    },    
    {
        id: 2,
        name: 'W3C Web Accessibility Initiative (WAI). (2024.) Use of Color (Level A).',
        link: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html'
    },    

]

const BlogPage = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex min-h-3/4 min-w-full relative -z-[1]'>
          <img src='/banner/webremake.svg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>

        {/* Heading */}
        <div className='blog-heading'>          
          <p className='blog-reading'>10 minutes Reading</p>
          <p className='title'>Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX</p>
          <p className='sub-title-article mt-2'>จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง UX เลย ผมจะพาไปดูว่ากว่าจะมาเป็นพอร์ตเวอร์ชั่นปัจจุบันนั้น ผมเคยปรับเปลี่ยนพอร์ตของตัวเองมายังไงบ้าง</p>            
        </div>      


        {/* Paragraph */}  
          <div className='max-w-[1000px]'>
            <div className='paragraph'>
                <p>ครับ!</p>
              </div>    

              {/* Image Class */}
              <div className='blog-image-div'>
                <img src='/content/recap-port/img-3.png' className='blog-image-object'></img>
                <p className='image-description'>ภาพเว็บไซต์แรกของผม</p>
              </div>

              <div className='h1-blog'>
                <p>Hierarchy</p>
              </div>   
              <div className='paragraph-next-to-heading'>
                <p>ผม ในตอนนั้น ไม่รู้จักกับ design principles การสร้างเว็บของผมส่วนใหญ่ก็มาจากสิ่งที่เรียกว่า “ก็รู้สึกว่ามันเป็นแบบนี้” มาใช้ค่อนข้างเยอะ และสิ่งนี้มันสร้างประสบการณ์ที่ไม่ดีให้กับผู้ใช้งาน จากภาพข้างบนจะเห็นว่า การให้ความสำคัญกับข้อความโดยใช้ขนาดของตัวอักษรนั้น ไม่เหมาะสมเท่าไหร</p>
              </div>   
          </div> 

       

        {/* Author */}
        <Author />

        {/* Reference */}
        <div className='blog-reference'>
          <p className='h3'>Reference</p>
          {Reference.map((item) => (
            <ul className='p my-2 list-disc ml-4' key={item.id}>
            <li>
                <p>{item.name}</p>
                <Link href={item.link} className='link max-w-fit' target='_blank'>Get this reference →</Link>
            </li>
            </ul>      
          ))}    
        </div>  
        {/* Navigator */}          
    </div>
  )
}

export default BlogPage