import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'MongoDB. Brand Resources.',
        link: 'https://www.mongodb.com/company/newsroom/brand-resources'
    },    
    {
        id: 2,
        name: 'File:Amazon-S3-Logo.svg',
        link: 'https://commons.wikimedia.org/wiki/File:Amazon-S3-Logo.svg'
    },    
    {
        id: 3,
        name: 'GitRepo: artsgoz-backend',
        link: 'https://github.com/artsgoz/artsgoz-backend'
    },    

]

const BlogArtsgozBE = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          <img src='/banner/artsgoz-backend.jpeg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='bloh-reading'>4 minutes Reading</p>
          <p className='title'>Artsgoz Backend Server – พรีวิว</p>
          <p className='sub-title-article mt-2'>บทความนี้จะพาดูเทคโนโลยีที่ใช้ในการสร้างระบบหลังบ้านของเว็บ artsgoz พร้อมพาดู drawback ของการสร้าง backend server ด้วย free service</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='max-w-[1000px]'>
          <div className='paragraph'>
            <p>สวัสดีครับ จากบทความ <a className='link-inline' href='/blogs/coding/artsgoz-frontend'>สำรวจหน้าบ้านของเว็บไซต์ Artsgoz</a> ที่ผมได้พูดคร่าว ๆ เกี่ยวกับระบบหลังบ้านของเว็บไซต์กอศ หรือ artsgoz วันนี้ผมจะพามาพรีวิวระบบหลังบ้านให้ดูกันครับ</p>
          </div>   
          <div className='h1-blog'>
            <p>เทคโนโลยีที่ใช้งาน</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>เทคโนโลยีที่ใช้หลัก ๆ คือ Express.js สำหรับสร้าง route ไว้ยิง API, MongDB เป็นตัวเก็บพวก non-relational document database และ AWS S3 เป็น cloud storage ไว้เก็บพวก static file เช่น รูปภาพ ประมาณนี้ครับ ส่วนระบบ Auth ใช้ jsonwebtoken กับ firebase เป็นตัวเข้าสู่ระบบโดยใช้บัญชีกูเกิลครับ </p>
          </div>  
          <div className='blog-image-div'>
                <img src='/content/artsgoz/mongo.svg' className='blog-image-object'></img>
                <p className='image-description'>MongoDB/AWS S3</p>
          </div>
          <div className='h1-blog'>
            <p>Schema</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>พูดถึงเรื่องการกำหนด schema ให้กับฐานข้อมูลของเรา คือว่าเราจะเก็บข้อมูลอะไรบ้าง</p>
          </div>  
          <div className='paragraph'>
            <p>อย่างในโปรเจคนี้ผมมี schema อยู่ 6 อัน โดยที่แบ่งเป็น user, staff, notification, comment, blog, และ ajarn ครับ โดยตัว schema อาจารย์จะไม่ได้มีการยิง API ผ่านเว็บหน้าบ้านได้ ส่วนนี้ผมทำ docs ให้คนหลังบ้านยิง API เข้าโดยตรงเลยครับ</p>
          </div>
          <div className='h2-blog'>
            <p>ตัวอย่าง Schema ของ Ajarn</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>การที่ผมจะเก็บข้อมูลจำเป็นต้องมีอะไรบ้าง ผมก็ได้กำหนดไว้ว่าต้องมี ชื่อเต็ม ชื่อย่อ แผนก ไบโอ และตั้ง default profile image ไว้ให้เรียบร้อยแล้วครับ <a href='https://github.com/artsgoz/artsgoz-backend/blob/main/Schema/Ajarn.js' target='_blank' className='link-inline'>สามารถดูโค้ดฉบับเต็มได้ที่นี่</a></p>
          </div>  
          <div className='h1-blog'>
            <p>Deploy Backend Server</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ตัว backend server ที่เราได้สร้างไว้ถูก deploy บนเว็บที่ให้บริการเจ้าหนึ่ง ซึ่งสารมารถใช้ได้ฟรีครับ แต่จะมีข้อเสียคือจะช้า หากไม่มีใครเข้าใช้งานเว็บระยะเวลาหนึ่ง ตัว server ก็จะ shut down ตัวเองลงครับ ถ้ามีคนเข้ามาค่อยรันใหม่ อันนี้ถือเป็น drawback ของการใช้ free service ครับ</p>
          </div>  
          <div className='paragraph'>
            <p>อย่างไรก็ดี ในปี 2025 มีแพลนว่าจะย้ายตัว service ไปใช้ของ Azure ครับ แต่อาจจะต้องรอดูทางคณะกรรมการอีกทีว่าจะมีแนวทางจัดการอย่างไรครับ</p>
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

export default BlogArtsgozBE