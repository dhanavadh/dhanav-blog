import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Blog = [
    {
        id:1,
        name:"เมื่อเราใช้ความรู้เรื่อง Design Principles มาเขียนเว็บจะเป็นอย่างไร",
        description:"จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend",
        badge:"UI Design",
        link:"/blogs/coding/port-redesign",
        img:"/go.svg"
    },
    {
        id:2,
        name:"สร้าง backend server ด้วย free service ที่รองรับ traffic มากกว่า 3k ต่อเดือน",
        description:"ความรู้เรื่องหลักการออกแบบ รวมไปถึงการศึกษาผู้ใช้ ใช้กับเว็บไซต์",
        badge:"Coding",
        link:"/blogs/coding/port-redesign",
        img:"/dict.svg"
    },
    {
        id:3,
        name:"พุทธศาสนาและเจตจำนงเสรีบางประการ",
        description:"แนวคิดพุทธศาสนาเกี่ยวกับเจตจำนงเสรีนั้นมีจริงหรือไม่ และถ้ามีจริง มีผลต่อการทำความเข้าใจเรื่องการกระทำของมนุษย์หรือไม่?",
        badge:"Philosophy",
        link:"/blogs/other/buddhism-freewill",
        img:"/banner/buddhism.svg"
    },
]

const LatestBlog = () => {
  return (
    <div className='hover:shadow-lg shadow-white'>
        {Blog.map((item) => (
            <div className='flex max-h-1/2 relative my-4 -z[1]' key={item.id}>
            <img src={item.img} className='h-full w-full absolute object-cover -z-[1] brightness-[30%] rounded-xl'></img>                        
            <div className='mx-4 mt-32 w-full mb-4 -z'>            
                <a className={item.badge === "UI Design" ? 'badge-blue' : item.badge === "Coding" ? 'badge-pink' : 'badge-yellow'}>{item.badge}</a>
                <p className='h3 mt-1'>{item.name}</p>            
                <p className='p-white mb-2'>{item.description}</p>   
                <Link href={item.link} className='link-white'>อ่านต่อ →</Link>         
            </div>
        </div> 
        ))}        
    </div>
  )
}

export default LatestBlog