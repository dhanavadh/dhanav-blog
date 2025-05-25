import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'N/A',
        link: ''
    },

]

const IconroofPage = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          <img src='http://stageengine.iconroof.co.th/public/asset/pers/banner/iconroof.png' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='bloh-reading'>2 minutes Reading</p>
          <p className='title'>ระแนงบังตา – Iconroof</p>
          <p className='sub-title-article mt-2'>Commercial Project ที่ผมทำงานอยู่กับบริษัทปัจจุบันนี้ครับ</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='max-w-[1000px]'>
            <div className='paragraph'>
                <div className='pl-4 border-l-4 border-yellow-500'>
                    <p className='font-[family-name:var(--font-sarabun-medium)]'>หมายเหตุ</p>
                    <p>โปรเจคนี้กำลังอยู่ในระหว่างการจัดทำนะครับ สามารถดูเว็บ production และ staging environment ได้ที่ลิงก์ด้านล่างนี้นะครับ</p>
                    <a href='https://iconroof.co.th/' target='_blank' className='link-inline mr-4'>Production Website</a>                  
                </div>
            </div>
          <div className='paragraph'>
            <p>สวัสดีครับ เทรุนะครับ สำหรับโปรเจคนี้เป็นโปรเจค Frontend Website ของบริษัท Iconroof ทำเกี่ยวกับระแนงและหลังคาบ้านครับ โดยหน้าที่ที่ผมได้รับในตอนนี้คือปรับปรุงเว็บไซต์ครับ</p>
          </div>   
          <div className='paragraph'>
            <p>ปัจจุบันได้มีการ launch ตัวเว็บไซต์ออกไปแล้ว เพื่อให้อยู่บน search console แต่ตัวเว็บนั้นยังอยู่ในระหว่างการพัฒนาครับ</p>
          </div>   
          <div className='h1-blog'>
            <p>เทคโนโลยีที่ใช้งาน</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>เทคโนโลยีที่ใช้หลัก ๆ คือ Next.js สำหรับจัดการตัวหน้าบ้านทั้งหมด ส่วน CSS ใช้ TailwindCSS ครับผม อีกทั้งยังใช้ module อื่น ๆ เข้ามาใช่จัดการ components บางส่วนในเว็บไซต์ครับ เช่น headless.ui หรือ slider ครับ</p>
          </div>            
          <div className='h1-blog'>
            <p>Futher Updates</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>หากเว็บไซต์เสร็จแล้ว หรือ มีความคืบหน้าในการอัปเดตอย่างไรผมจะมาเล่าให้ฟังกันต่อนะครับ 😁</p>
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
                <Link href={item.link} className='link' target='_blank'>Get this reference →</Link>
            </li>
            </ul>      
          ))}    
        </div>  
        {/* Navigator */}          
    </div>
  )
}

export default IconroofPage