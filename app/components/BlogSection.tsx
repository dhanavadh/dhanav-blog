import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogCoding from './BlogElemet/BlogCoding'
import BlogOther from './BlogElemet/BlogOther'

const OtherArticles = [
    {
        id: 1, 
        name:"Buddhist Philosophy", 
        description:"หนึ่งในปัญหาที่เกิดการตั้งคำถามกับพุทธศาสนาคือเรื่อง เจตจำนงเสรี (free will) และ นิยัตินิยม (determinism) ประเด็นศึกษาดังกล่าวมีการศึกษาที่หลากหลายและนำเสนอในมุมมองที่แตกต่างกันไป การยกประเด็นศึกษาเรื่องเจตจำนงเสรีในพุทธศาสนานั้น อาจเป็นเนื่องมาจากที่ว่าพุทธศาสนาไม่ได้มีมุมมองหรือให้นิยมที่ชัดเจนว่าเป็นโลกทัศน์ที่มนุษย์มีเจตจำนงเสรี", 
        badge:"Buddhist Philosophy",
        img:"/banner/buddhism.svg",
        link:"/blogs/other/buddhism-freewill"
    },
    {
        id: 2, 
        name:"New Religion Movement – Heaven’s Gate",
        description:"Heaven’s Gate เป็นกลุ่มศาสนาเกิดใหม่ หรือ New Religion Movement และเป็นที่รู้จักอย่างกว้างขวางจากเหตุการณ์อัตวินิบาตกรรมหมู่ของกลุ่มคนที่มีความเชื่อทางศาสนาที่เมือง Rancho Santa Fe มลรัฐ California สหรัฐอเมริกา",
        badge:"Religious philosophy",
        img:"/banner/blog-3.svg",
        link:"/blogs/other/heavengate"
    },
    {
        id: 3, 
        name:"日本における就職活動", 
        description:"現在、日本の就職活動、いわゆる「就活」についていえば、多くの学生がインターンシップに参加することがよく見られ、卒業後すぐに働く学生もよく見られる。だが、タイの状況を見ると、学生の就活に対する関心は日本ほど高くないように思われる。", 
        badge:"Japanese Culture",
        img:"/banner/blog-2.svg",
        link:"/blogs/other/shukatsu"
    }
]

const CodingArticles = [
    
    {
        id: 1, 
        name:"เมื่อผมเอา UX/UI Design Principles มาปรับปรุง Portfolio ของผม",
        description:"จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend",
        badge:"UI Design",
        img:"/banner/blog-1.svg",
        link:"/blogs/coding/port-redesign"
        
    },
    {
        id: 2, 
        name:"Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX",
        description:"จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง UX เลย ผมจะพาไปดูว่ากว่าจะมาเป็นพอร์ตเวอร์ชั่นปัจจุบันนั้น ผมเคยปรับเปลี่ยนพอร์ตของตัวเองมายังไงบ้าง",
        badge:"UI Design",
        img:"/banner/webremake.svg",
        link:"/blogs/coding/recap-port"
        
    },
    {
        id: 3, 
        name:"สำรวจหน้าบ้านของเว็บไซต์ Artsgoz",
        description:"จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend",
        badge:"Coding",
        img:"/banner/artsgoz.png",
        link:"/blogs/coding/artsgoz-frontend"
        
    },
    {
        id: 4, 
        name:"Drawback ของการสร้าง backend server ด้วย free service",
        description:"จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend",
        badge:"UI Design",
        img:"/banner/artsgoz-backend.jpeg",
        link:"/blogs/coding/artsgoz-backend-drawback"
        
    },
]

const BlogSection = () => {
  return (
    <div className='lg:flex gap-8 mt-4 max-w-screen items-start justify-center font-[family-name:var(--font-noto-sans)]'>            
            <div className='lg:w-1/2 mt-6'>
                <p className='h1'>Coding Related Articles</p>
                {CodingArticles.map((item) => (
                <div className='lg:flex flex-row justify-between gap-2 border-b-2 border-neutral-200 py-4' key={item.id}>  
                    <div className='lg:hidden w-full h-32 mb-4'>
                        <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                    </div>                   
                    <div className='flex'>
                        <div className='lg:w-3/4'>
                            {/* Main Project */}
                            <div>
                                <a className={item.badge === "UI Design" ? 'badge-blue' : item.badge === "Coding" ? 'badge-pink' : 'badge-yellow'}>{item.badge}</a>
                                <p className='h3 my-1'>{item.name}</p>
                                <p className='p w-full'>{item.description}</p>                        
                            </div>

                            {/* Link to read more */}                    
                            <div className='flex gap-4 mt-2'>                                    
                                <Link
                                    className="flex items-center link gap-2"
                                    href={item.link}                                    
                                    >                                                
                                    Read More →               
                                </Link>                   
                            </div>
                                
                        </div>
                        <div className='hidden lg:flex lg:w-1/4 ml-2'>
                            <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                        </div>
                    </div> 
                </div>
                ))}      
                   
            </div>
            <div className='lg:w-1/2 mt-6'>
                <p className='h1'>Other Articles</p>
                {OtherArticles.map((item) => (
                <div className='lg:flex flex-row justify-between gap-2 border-b-2 border-neutral-200 py-4' key={item.id}>  
                    <div className='lg:hidden w-full h-32 mb-4 shadow-lg'>
                        <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                    </div>                   
                    <div className='flex'>
                        <div className='lg:w-3/4'>
                            {/* Main Project */}
                            <div>
                                <a className={item.badge === "UI Design" ? 'badge-blue' : item.badge === "Coding" ? 'badge-pink' : 'badge-yellow'}>{item.badge}</a>
                                <p className='h3 my-1'>{item.name}</p>
                                <p className='p'>{item.description}</p>                        
                            </div>

                            {/* Link to read more */}                    
                            <div className='flex gap-4 mt-2'>                                    
                                <Link
                                    className="flex items-center link gap-2"
                                    href={item.link}
                                    >                                                
                                    Read More →               
                                </Link>                   
                            </div>
                                
                        </div>
                        <div className='hidden lg:flex lg:w-1/4 ml-2 brightness-75'>
                            <img src={item.img} className='rounded-lg h-full w-full object-cover'></img>
                        </div>
                    </div> 
                </div>
                ))}           
                   
            </div>
        </div>
    
  )
}

export default BlogSection