import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Blog = [
    {
        id:1,
        name:"เมื่อผมเอาความรู้ UX/UI มาปรับปรุง Portfolio ของผม", 
        description:"ความรู้เรื่อง User Experience นับว่าสำคัญมากสำหรับการพัฒนาเว็บไซต์ ผมจึงเอาความรู้เรื่อง UX/UI Design Principles มาปรับปรุง Portfolio ของตัวเอง", 
        badge:"UI Design",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/blog-1.svg",
        link:"/blogs/coding/port-redesign"
    },
    {
        id: 2, 
        name:"ใบฟ้า – แอปช่วยจัดตารางเรียน",
        description:"เคยไหมครับที่เรียนไปสองปีแล้ว เหลืออีกสองปีก็จะเรียนจบ แต่ยังไม่รู้เลยว่าเราเรียนอะไรไปแล้วบ้าง เราเหลืออะไรที่ยังต้องเรียนอีก ยังลงได้อีกกี่หน่วยกิต วิชาบังคับเอกเรียนครบหรือยัง และคำถามอื่น ๆ ตามมากันหมด",
        badge:"UX Research",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/content/blueprint-proj/IMG_20250125_0001.jpeg",
        link:"/blogs/coding/blueprint-project"
        
    },
    {
        id: 3, 
        name:"สำรวจหน้าบ้านของเว็บไซต์ Artsgoz",
        description:"ผมจะพาชมครับว่ากว่าจะมาเป็นเว็บไซต์ กอศ อันใหม่ ผมต้องทำการบ้านยังไงบ้าง เว็บ artsgoz อาจนับว่าเป็น debut project ของผมเลยก็ว่าได้ครับ ทุกวันนี้ยังมีการปรับปรุงอยู่เรื่อย ๆ ครับ",
        badge:"Coding",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/artsgoz.png",
        link:"/blogs/coding/artsgoz-frontend"
        
    },
]

const LatestBlog = () => {
  return (
    <div className=''>
        {Blog.map((item) => (
            <div className='flex max-h-1/2 relative my-4 -z[1] ' key={item.id}>
            <img src={item.img} className='h-full w-full absolute object-cover -z-[1] brightness-[30%] rounded-xl'></img>                        
            <div className='mx-4 mt-6 w-full mb-4 -z'>            
                <a className={item.badge === "UI Design" ? 'badge-blue' : item.badge === "Coding" ? 'badge-pink' : 'badge-blue'}>{item.badge}</a>
                <p className='h3 text-white mt-1'>{item.name}</p>            
                <p className='p-white mt-1 mb-2 line-clamp-3'>{item.description}</p>   
                <Link href={item.link} className='link-white font-medium'>อ่านต่อ →</Link>         
            </div>
        </div> 
        ))}        
    </div>
  )
}

export default LatestBlog