import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BlogCoding from './BlogElemet/BlogCoding'
import BlogOther from './BlogElemet/BlogOther'

const OtherArticles = [
    {
        id: 1, 
        name:"พุทธศาสนาและเจตจำนงเสรีบางประการ", 
        description:"แนวคิดพุทธศาสนาเกี่ยวกับเจตจำนงเสรีนั้นมีจริงหรือไม่ และถ้ามีจริง มีผลต่อการทำความเข้าใจเรื่องการกระทำของมนุษย์หรือไม่? แล้วถ้าเกิดพุทธศาสนาไม่มีเจตจำนงเสรี ผลของการรับผิดชอบเรื่องกรรมจะตกที่ใคร?", 
        badge:"Philosophy",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/buddhism.svg",
        link:"/blogs/other/buddhism-freewill"
    },
    // {
    //     id: 2, 
    //     name:"New Religion Movement – Heaven’s Gate",
    //     description:"Heaven’s Gate เป็นกลุ่มศาสนาเกิดใหม่ หรือ New Religion Movement และเป็นที่รู้จักอย่างกว้างขวางจากเหตุการณ์อัตวินิบาตกรรมหมู่ของกลุ่มคนที่มีความเชื่อทางศาสนาที่รัฐ California สหรัฐอเมริกา",
    //     badge:"Philosophy",
    //     img:"/banner/blog-3.svg",
    //     link:"/blogs/other/heavengate"
    // },
    {
        id: 3, 
        name:"日本における就職活動", 
        description:"現在、日本の就職活動、いわゆる「就活」についていえば、多くの学生がインターンシップに参加することがよく見られ、卒業後すぐに働く学生もよく見られる。だが、タイの状況を見ると、学生の就活に対する関心は日本ほど高くないように思われる。", 
        badge:"Japanese Culture",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/blog-2.svg",
        link:"/blogs/other/shukatsu"
    }
]

const CodingArticles = [
    
    {
        id: 1, 
        name:"เมื่อผมเอาความรู้ UX/UI มาปรับปรุง Portfolio ของผม",
        description:"ความรู้เรื่อง User Experience นับว่าสำคัญมากสำหรับการพัฒนาเว็บไซต์ ผมจึงเอาความรู้เรื่อง UX/UI Design Principles มาปรับปรุง Portfolio ของตัวเอง",
        badge:"UI Design",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/blog-1.svg",
        link:"/blogs/coding/port-redesign"
        
    },
    {
        id: 2, 
        name:"Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX",
        description:"จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend",
        badge:"UI Design",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/webremake.svg",
        link:"/blogs/coding/recap-port"
        
    },
    {
        id: 3, 
        name:"ใบฟ้า – แอปช่วยจัดตารางเรียน",
        description:"เคยไหมครับที่เรียนไปสองปีแล้ว เหลืออีกสองปีก็จะเรียนจบ แต่ยังไม่รู้เลยว่าเราเรียนอะไรไปแล้วบ้าง เราเหลืออะไรที่ยังต้องเรียนอีก ยังลงได้อีกกี่หน่วยกิต วิชาบังคับเอกเรียนครบหรือยัง และคำถามอื่น ๆ ตามมากันหมด",
        badge:"UX Research",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/content/blueprint-proj/IMG_20250125_0001.jpeg",
        link:"/blogs/coding/blueprint-project"
        
    },
    {
        id: 4, 
        name:"สำรวจหน้าบ้านของเว็บไซต์ Artsgoz",
        description:"ผมจะพาชมครับว่ากว่าจะมาเป็นเว็บไซต์ กอศ อันใหม่ ผมต้องทำการบ้านยังไงบ้าง เว็บ artsgoz อาจนับว่าเป็น debut project ของผมเลยก็ว่าได้ครับ ทุกวันนี้ยังมีการปรับปรุงอยู่เรื่อย ๆ ครับ",
        badge:"Coding",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/artsgoz.png",
        link:"/blogs/coding/artsgoz-frontend"
        
    },
    {
        id: 5, 
        name:"Artsgoz Backend Server – พรีวิว",
        description:"บทความนี้จะพาดูเทคโนโลยีที่ใช้ในการสร้างระบบหลังบ้านของเว็บ artsgoz พร้อมพาดู drawback ของการสร้าง backend server ด้วย free service",
        badge:"Coding",
        img:"http://stageengine.iconroof.co.th/public/asset/pers/banner/artsgoz-backend.jpeg",
        link:"/blogs/coding/artsgoz-backend"
        
    },
]

const BlogSection = () => {
  return (
    <div className='lg:flex gap-10 mt-4 max-w-screen items-start justify-center font-[family-name:var(--font-noto-sans)]'>            
            <div className='lg:w-1/2 mt-6'>
                <p className='h1'>Coding Related Articles</p>
                {CodingArticles.map((item) => (
                <div className='lg:flex flex-row justify-between gap-2 border-b-2 border-neutral-200 py-4' key={item.id}>  
                    <div className='lg:hidden w-full h-32 mb-4'>
                        <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                    </div>                   
                    <div className='flex'>
                        <div className='lg:w-3/4 pr-4'>
                            {/* Main Project */}
                            <div>
                                <a className={item.badge === "UI Design" ? 'badge-blue' : item.badge === "Coding" ? 'badge-pink' : 'badge-blue'}>{item.badge}</a>
                                <div className='mt-2'>
                                    <Link href={item.link} className='link-h3 my-1'>{item.name}</Link>
                                </div>
                                <p className='p w-full line-clamp-3'>{item.description}</p>                        
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
                    <div className='lg:hidden w-full h-32 mb-4'>
                        <img src={item.img} className='rounded-lg h-full w-full object-cover brightness-75'></img>
                    </div>                   
                    <div className='flex'>
                        <div className='lg:w-3/4 pr-4'>
                            {/* Main Project */}
                            <div>
                                <a className={item.badge === "UI Design" ? 'badge-blue' : item.badge === "Coding" ? 'badge-pink' : 'badge-yellow'}>{item.badge}</a>
                                <div className='mt-2'>
                                    <Link href={item.link} className='link-h3 my-1'>{item.name}</Link>
                                </div>
                                <p className='p w-full line-clamp-3'>{item.description}</p>                        
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
        </div>
    
  )
}

export default BlogSection