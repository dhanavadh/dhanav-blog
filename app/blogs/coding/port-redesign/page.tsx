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

const BlogPortRemake = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          <img src='/banner/blog-1.svg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>N/A minutes Reading</p>
          <p className='title'>เมื่อผมเอา UX/UI Design Principles มาปรับปรุง Portfolio ของผม</p>
          <p className='sub-title-article mt-2'>จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend</p>          
        </div>                                     
        {/* Paragraph */}   
        <div className='max-w-[1000px]'>
          <div className='paragraph'>
            <p>สวัสดีครับ เทรุนะครับ 😃 สำหรับบทความนี้เป็นภาคต่อกับบทความเรื่อง <a className='link-inline' href='/blogs/coding/recap-port'>Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX</a> ที่ผมได้เขียนไว้ครับ ผมได้ระบุถึงปัญหาที่พบเจอกับการออกแบบเว็บไซต์ในแต่ละครั้ง และชี้ให้เห็นถึง UX/UI Design Principle มีความสำคัญอย่างไรกับการสร้างหน้าเว็บไซต์หนึ่งขึ้นมานั้น</p>
          </div>   
          {/* Image Class */}
          <div className='blog-image-div'>
                <img src='/content/recap-port/img-3.png' className='blog-image-object'></img>
                <p className='image-description'>ภาพเว็บไซต์แรกของผม</p>
          </div>

          <div className='paragraph'>
            <p>จากภาพด้านบนนี้คือเว็บไซต์พอร์ตโฟลิโอที่ผมเคยทำมา เป็นเว็บที่ผมสร้างขึ้นโดยที่ยังไม่รู้เรื่องหลักการออกแบบ รวมไปถึง ไม่ได้สนใจ user ด้วยครับ สำหรับรายละเอียดสามารถไปดูบล็อกผมเพิ่มเติมได้ครับ</p>
          </div>   
          <div className='paragraph'>
            <p>ในบทความนี้ผมจะมานำเสนอการนำ UX/UI Design Principles มา implement กับ เว็บไซต์ปัจจุบันของผมอย่างไรบ้างครับ จริง ๆ อยากเล่าถึง process ทั้งหมด ซึ่งส่วนตัวรู้สึกว่ามันเยอะมาก เช่น พอเวลาเราทำ element แต่ละอันออกมาแล้ว test แล้วมา reflex ดูอีกที ก็กลับไปแก้ ทำแบบนี้วนไปหลายรอบมากครับ UX มันต้อง test เยอะจริง</p>
          </div>  

          <div className='h1-blog'>
            <p>ทำไม UX ถึงสำคัญมากขนาดนั้น?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>คือผมว่า เราต้องมาเข้าใจก่อนว่า เรากำลังทำอะไร ให้ใคร ใครจะมาใช้งานอะไรกับผลิตภัณฑ์ของเรา สมมติว่าผมทำเว็บขายเทียนและเครื่องหอม ทำเว็บเสร็จ deploy ขึ้น production คนที่สนใจเทียนและเครื่องหอมอาจจะเข้ามาดูหน้าเว็บผม ระหว่างวินาทีแรกที่ user เข้ามาเห็นหน้าเว็บเรา วินาทีนั้นคือ พลังที่องค์ความรู้เรื่อง User Experience จะเข้ามาทำงานทันที</p>
          </div>  
          <div className='paragraph'>
            <p>วินาทีแรกที่ user เห็นนั้น อาจจะเกิดคำถามตามมาดังนี้</p>
            <div className='ml-12 my-2'>
              <ul className='list-disc'>
                <li>
                  <p>user จะเกิดความรู้สึกอย่างไรกับแบรนด์เรา?</p>
                </li>
                <li>
                  <p>เราจะนำเสนอภาพของแบรนด์เราให้ user เห็นอย่างไร?</p>
                </li>
                <li>
                  <p>user จะจดจำแบรนด์เราเป็นอย่างไร?</p>
                </li>
              </ul>
            </div>
            <p>และคำถามตามมาอื่น ๆ อีกมากมาย ใด ๆ ก็แล้วแต่ ความรู้เรื่อง ux จะเข้ามาตอบให้กับสิ่งเหล่านี้</p>
          </div>  
          <div className='paragraph'>
            <p>ยกตัวอย่างอีก ผมทำธุรกิจเกี่ยวกับเครื่องหอม และในตลาดมีแบรนด์คู่แข่งอยู่มากมาย แล้วถ้าผมไม่ได้ลงทุนในเรื่อง ux ผมอยากจะสร้างอะไรก็สร้าง อยากให้เว็บเป็นไปตามที่ตัวเองชอบ ฟอนต์ขนาดเท่านี้ ๆ ผมไม่ได้มานึกถึงว่า ลูกค้าจะเข้าเว็บไซต์ผ่านช่องทางไหน อาจจะคอม หรือ มือถือ แต่ทำแบบคอมไปก่อนละกัน</p>
          </div>
          <div className='paragraph'>
            <p>จากตัวอย่างข้างต้นคือ ผมแทบจะไม่ได้เข้าใจ user เลย คิดเองทำเอง ผลลัพธ์คือ อาจจะออกมาแย่ หากลูกค้าที่เข้ามา เขาใช้มือถือล่ะ แต่เว็บผมไม่รองรับ responsive design นะ ปัญหาเกิดแล้ว?! user อาจจะอ่านไม่รู้เรื่อง เกิด impression ที่ไม่ดี ละออกจากเว็บไปดูเว็บอื่น ผมเสียลูกค้าไป 😨</p>
          </div>          

          <div className='blog-image-div'>
                <img src='/content/port-redesign/213172f1-12ce-4eac-97f7-cd1d1e48a18e.png' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>ตัวอย่างการจัดการ text ที่ไม่เหมาะสมกับอุปกรณ์ที่ user ใช้งาน</p>
          </div>
          <div className='paragraph'>
            <p>ผมมองว่าเราจะทำอะไรออกมาแต่ละอย่างคือ ควรเข้าใจคนที่เขาจะมาใช้สิ่งที่เราทำ จากตัวอย่างข้างบนคือ ผมต้องการให้ลูกค้าซื้อสินค้าของผม แต่ปัญหาของผมคือ เว็บไซต์ไม่ได้ออกแบบมาดี ไม่ได้สนใจ user ขนาดนั้น จึงทำให้ผมเสียลูกค้าไป การนำความรู้เรื่อง user experience มาใช้ก็จะเป็นทางออกให้กับปัญหาที่ผมเจออยู่ คือ achieving user's task!</p>
          </div>

          <div className='paragraph'>
            <p>ผมอาจจะศึกษาว่าลูกค้าเป็นใคร ชอบอะไร ทำไมเขาถึงมาดูหน้าเว็บไซต์ผม แล้วเขาจะมี interact อย่างไรกับเว็บไซต์ของผม กระบวนการที่ผมได้พูด ๆ ไปข้างต้นก็เป็นอีกหนึ่งในขั้นตอนของการศึกษาผู้ใช้ แต่ในบทความนี้ผมไม่ได้ลงรายละเอียดเกี่ยวกับ process ตรง ๆ</p>
          </div>
          <div className='paragraph'>
            <p>พอเราเข้าใจแล้วว่า user เราเป็นยังไง (อาจสร้าง persona, journey map, etc.) ก็มาถึงขั้นตอนระดมสมอง เทส ทำแบบนี้วน ๆ ไป จนกว่าจะได้ outcome ที่ดีที่สุดออกมาให้ user ของเราเพื่อให้ user ทำ task ได้สำเร็จ (เช่น อาจซื้อของกับร้านเรา)</p>
          </div>

          <div className='h1-blog'>
            <p>UX/UI ใน portfolio อันนี้ของผมเป็นมาอย่างไร?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ก่อนอื่น พอร์ตที่ผมรีเมคใหม่อันล่าสุดนี้ ผมได้เอาความรู้เรื่อง ux มาใช้กับงานของผม ยึดตาม design process แต่ด้วยที่ผมทำงานคนเดียว และระยะเวลาที่ผมมีค่อนข้างจำกัด ผมจึงไม่ได้ใช้ figma มาทำ prototype แต่เอาจาก wireframe ง่าย ๆ มาเขียนเป็นเว็บ แล้วมาลองเทสเลยว่าอะไรเวิคหรือไม่เวิค</p>
          </div>  


          <div className='blog-image-div'>
                <img src='/content/port-redesign/93e4a9b8-0381-430b-b67d-7311e094e114.png' className='blog-image-object'></img>
                <p className='image-description'>เว็บพอร์ตใหม่ที่ผมทำขึ้นครับ✨</p>
          </div>
          <div className='paragraph'>
            <p>ระหว่างที่นั่งทำก็เจอหลาย ๆ อย่าง คอยแก้ตรงนู้นตรงนี้ตลอด ก็ทำวนตาม process เรื่อย ๆ แต่ที่ผมต้องคอยนึกถึงเสมอคือ user ผมจะทำยังไงให้เขาอยู่กับเว็บผมได้นาน ทำอย่างไรให้เขาโอเค อยากรู้จักกับผม อยากอ่านงานของผม ในส่วนนี้ผมก็มาระดมไอเดีย ออกแบบโฟลว และกระบวนการอื่น ๆ ทำวน ๆ ไป จนได้งานที่ออกมาดูโอเคสำหรับตอนนี้</p>
          </div>
          <div className='paragraph'>
            <p>ในงานนี้ ผมอาจจะเน้นอธิบายเรื่อง ui design เป็นส่วนใหญ่ โดยผมก็ได้นำหลักการออกแบบต่าง ๆ รวมไปถึง patterns มาปรับใช้กับงาน ซึ่งหลาย ๆ คนอาจจะเคยได้ยิน เช่น gestalt principles หรือ common region และอื่น ๆ</p>
          </div>

          <div className='h1-blog'>
            <p>IA ในโปรเจคนี้มีอะไรบ้าง ?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>Information Architecture หรือ การจัดระเบียบข้อมูล เรามีข้อมูลอยู่ก้อนหนึ่งเราจะจัดการและแบ่งยังไงให้เป็นหมวดหมู่ได้อย่างมีประสิทธิภาพ หากยกตัวอย่างเว็บไซต์ข่าว จะเห็นได้ว่ามีการจัดการหมวดหมู่ประเภทของข่าว แบ่งโครงสร้างได้เป็นสัดส่วนอย่างชัดเจน</p>
          </div>  
          <div className='paragraph'>
            <p>ในโปรเจคนี้ เนื่องจากเป็นเพียงเว็บที่ใช้เก็บผลงานของผมเท่านั้น ตัวข้อมูลที่มีอาจจะไม่ได้มีความซับซ้อนขนาดนั้น หากเป็นงานที่สเกลใหญ่กว่านี้ การวาง IA ก็อาจจะช่วยจัดการให้ข้อมูลอยู่ในกลุ่มที่เหมาะสม และ user เข้าถึงข้อมูลได้อย่างมีประสิทธิภาพ</p>
          </div>

          <div className='blog-image-div'>
            <img src='/content/port-redesign/IA-1.svg' className='blog-image-object'></img>
            <p className='image-description'>IA ที่ผมวางไว้แบบคร่าว ๆ ครับ</p>
          </div>

          <div className='paragraph'>
            <p>ในภาพคือผมแบ่งเป็น 4 ส่วนที่ อยากจะเก็บไว้ในเว็บไซต์ของตนเอง แต่ตอนทำงานจริง ผมได้ยุบ Participation กับ Certification ไว้เป็นหมวดหมู่เดียวกัน</p>
          </div>
          <div className='paragraph'>
            <p>ส่วนที่ผมเพิ่มมาใหม่จากพอร์ตเดิมคือ ส่วนของ Blogs เพราะผมรู้สึกว่าอยากให้คนเข้ามาอ่านงานเขียนของผม และถือโอกาสเก็บไว้เป็น showcase ของผมได้ครับ</p>
          </div>

          <div className='flex justify-center'>
            <video width="720" autoPlay loop preload="none">
              <source src="/content/port-redesign/navbar.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

export default BlogPortRemake