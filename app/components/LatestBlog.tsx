import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Blog = [
    {
        id:1,
        name:"เมื่อผมเอาความรู้ UX/UI มาปรับปรุง Portfolio ของผม", 
        description:"ความรู้เรื่อง User Experience นับว่าสำคัญมากสำหรับการพัฒนาเว็บไซต์ ผมจึงเอาความรู้เรื่อง UX/UI Design Principles มาปรับปรุง Portfolio ของตัวเอง", 
        badge:"UI Design",
        img:"/banner/blog-1.svg",
        link:"/blogs/coding/port-redesign"
    },
    {
        id:2,
        name:"Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX",
        description:"จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง UX เลย ผมจะพาไปดูว่ากว่าจะมาเป็นพอร์ตเวอร์ชั่นปัจจุบันนั้น ผมเคยปรับเปลี่ยนพอร์ตของตัวเองมายังไงบ้าง",
        badge:"UI Design",
        img:"/banner/webremake.svg",
        link:"/blogs/coding/recap-port"
    },
    // {
    //     id:3,
    //     name:"日本における就職活動", 
    //     description:"現在、日本の就職活動、いわゆる「就活」についていえば、多くの学生がインターンシップに参加することがよく見られ、卒業後すぐに働く学生もよく見られる。だが、タイの状況を見ると、学生の就活に対する関心は日本ほど高くないように思われる。", 
    //     badge:"Japanese Culture",
    //     img:"/banner/blog-2.svg",
    //     link:"/blogs/other/shukatsu"
    // },
]

const LatestBlog = () => {
  return (
    <div className=''>
        {Blog.map((item) => (
            <div className='flex max-h-1/2 relative my-4 -z[1] ' key={item.id}>
            <img src={item.img} className='h-full w-full absolute object-cover -z-[1] brightness-[40%] rounded-xl'></img>                        
            <div className='mx-4 mt-6 w-full mb-4 -z'>            
                <a className={item.badge === "UI Design" ? 'badge-blue' : item.badge === "Coding" ? 'badge-pink' : 'badge-yellow'}>{item.badge}</a>
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