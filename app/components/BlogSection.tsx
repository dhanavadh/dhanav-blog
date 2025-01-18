import Link from 'next/link'
import React from 'react'

const OtherArticles = [
    {
        id: 1, name:"Buddhist Philosophy", description:"หนึ่งในปัญหาที่เกิดการตั้งคำถามกับพุทธศาสนาคือเรื่อง เจตจำนงเสรี (free will) และ นิยัตินิยม (determinism) ประเด็นศึกษาดังกล่าวมีการศึกษาที่หลากหลายและนำเสนอในมุมมองที่แตกต่างกันไป การยกประเด็นศึกษาเรื่องเจตจำนงเสรีในพุทธศาสนานั้น อาจเป็นเนื่องมาจากที่ว่าพุทธศาสนาไม่ได้มีมุมมองหรือให้นิยมที่ชัดเจนว่าเป็นโลกทัศน์ที่มนุษย์มีเจตจำนงเสรี", 
        badge:"Buddhist Philosophy",
        link:"/blogs/other/buddhism-freewill"
    },
    {
        id: 2, name:"New Religion Movement – Heaven’s Gate",
        description:"Heaven’s Gate เป็นกลุ่มศาสนาเกิดใหม่ หรือ New Religion Movement และเป็นที่รู้จักอย่างกว้างขวางจากเหตุการณ์อัตวินิบาตกรรมหมู่ของกลุ่มคนที่มีความเชื่อทางศาสนาที่เมือง Rancho Santa Fe มลรัฐ California สหรัฐอเมริกา",
        badge:"Religious philosophy",
        link:"/blogs"
    },
    {
        id: 3, name:"日本における就職活動", 
        description:"現在、日本の就職活動、いわゆる「就活」についていえば、多くの学生がインターンシップに参加することがよく見られ、卒業後すぐに働く学生もよく見られる。だが、タイの状況を見ると、学生の就活に対する関心は日本ほど高くないように思われる。", 
        badge:"Japanese Culture",
        link:"/blogs"
    }
]

const CodingArticles = [
    {
        id: 1, name:"เมื่อผมต้อง Redesign เว็บคณะใหม่",
        description:"ความรู้เรื่องหลักการออกแบบ รวมไปถึงการศึกษาผู้ใช้ ใช้กับเว็บไซต์",
        badge:"UI Design",
        link:"/blogs/coding/port-redesign"
    }
]

const BlogSection = () => {
  return (
    <div className='md:flex flex-row gap-4 mt-4 min-w-screen items-start justify-center font-[family-name:var(--font-noto-sans)]'>            
            <div className='flex-col-1 md:w-1/2 mt-4 w-full'>
                <p className='h1'>Coding Related Articles</p>
                {CodingArticles.map((article) => (
                    <div className='border-b-2 border-neutral-800 py-4' key={article.id}>         
                    <a className='badge-orange mr-2'>{article.badge}</a>                                           
                    <p className='h3 my-1' >{article.name}</p>
                        <p className='p mb-2 text-base truncate' >{article.description}</p>
                        <Link className='link' href={article.link}>Read More →</Link>
                </div>
                ))}                
            </div>
            <div className='flex-col-1 md:w-1/2 mt-4 w-full'>
                <p className='h1'>Other Articles</p>
                {OtherArticles.map((article) => (
                    <div className='border-b-2 border-neutral-800 py-4' key={article.id}>         
                    <a className='badge-green mr-2'>{article.badge}</a>                                           
                    <p className='h3 my-1' >{article.name}</p>
                        <p className='p mb-2 text-base truncate' >{article.description}</p>
                        <Link className='link' href={article.link}>Read More →</Link>
                </div>
                ))}               
            </div>
        </div>
    
  )
}

export default BlogSection