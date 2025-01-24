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
          {/* <img src='/banner/blog-1.svg' className='blog-banner'></img>                         */}
          <video width="full" autoPlay loop muted preload='auto' playsInline className='blog-banner'>
              <source src="/content/port-redesign/blog-preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>N/A minutes Reading</p>
          <p className='title'>เมื่อผมเอาความรู้ UX/UI มาปรับปรุง Portfolio ของผม</p>
          <p className='sub-title-article mt-2'>จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง User Experience เลย มาสู่การรีเมคเว็บไซต์ของตัวเองให้เข้าถึง user ทุกคน ผมจึงรู้สึกว่าความรู้เรื่อง UX สำคัญมาก ๆ สำหรับนักพัฒนาเว็บ frontend</p>          
        </div>                                     
        {/* Paragraph */}   
        <div className='max-w-[1000px]'>
          <div className='paragraph'>
            <p>สวัสดีครับ เทรุนะครับ 😃 สำหรับบทความนี้เป็นภาคต่อกับบทความเรื่อง <a className='link-inline' href='/blogs/coding/recap-port'>Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX</a> ที่ผมได้เขียนไว้ครับ ผมได้ระบุถึงปัญหาที่พบเจอกับการออกแบบเว็บไซต์ในแต่ละครั้ง และชี้ให้เห็นถึง UX/UI Design Principle มีความสำคัญอย่างไรกับการสร้างหน้าเว็บไซต์หนึ่งขึ้นมาครับ</p>
          </div>   
          <div className='paragraph'>
            <p>ก่อนอื่นเลย ผมขอพรีวิวให้ชมก่อนครับ</p>
          </div>   

          {/* Video */}
          <div className='flex flex-col justify-center items-center'>
            <video width="900" autoPlay loop muted preload='auto' playsInline>
              <source src="/content/port-redesign/blog-preview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className='image-description'>ตัวอย่างเว็บไซต์ portfolio ใหม่ครับ ✨</p>
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
          <div className='paragraph'>
            <p>เมื่อผมมีข้อมูลพร้อมแล้ว ก็ถึงเวลาที่ต้องมาระดมไอเดีย อยากให้หน้า UI เราออกมาเป็นแบบไหน user เข้ามาเจอเว็บเราแล้วเขาจะทำอะไร ในส่วนถัดไปผมจะขอเริ่มอธิบายว่า ทำไมแต่ละหน้าเว็บถึงเป็นแบบนี้ และผมใช้อะไรมาช่วยจัดการ UI ในแต่ละหน้าครับ</p>
          </div>


          <div className='h1-blog'>
            <p>วันนี้จะพาไปชมอะไรบ้าง?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>จาก IA ข้างบน ทุกคนพอจะเห็นภาพคร่าว ๆ แล้วใช่ไหมครับว่า ข้อมูลที่อยู่ในนี้มีอะไรบ้าง ไม่ว่าจะเป็นหน้าแรก โปรเจค บทความ ประสบการณ์ และ ข้อมูลเกี่ยวกับผมแบบละเอียด ๆ หลังจากนี้ผมจะพาชมแต่ละ element ที่ผมได้สร้างขึ้น โดยผมจะพาดูตั้งแต่ Layout ยัน component แต่ละชิ้นเลยครับ อีกทั้งจะพาไปดูกว่าที่จะมาเป็นเว็บไซต์เวอร์ชั่นนี้ ผมต้องเทสอะไรบ้าง ซึ่งค่อนข้างเยอะพอสมควรครับ</p>
          </div>  
          <div className='paragraph'>
            <p>ก่อนที่ผมจะเข้าไปเล่าให้ฟังว่างานของผมประกอบขึ้นมาอย่างไรนั้น ผมอยากพาไปรู้จักกับ design patterns ครับ</p>
          </div>  

          <div className='h1-blog'>
            <p>Design Pattern ในงาน UI Design?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ผมมองว่า key element ในการ design ชิ้นงานออกมาให้กับ user อยู่ที่ design principle เราอาจจะต้องยังคำนึงว่าจะสร้าง visual hierarchy ยังไง อย่างไรก็ดี pattern ก็อาจเป็นเหมือนตัวเชื่อมให้ทำงานง่ายขึ้นเท่านั้นเองครับ อารมณ์เดียวกับ Design Pattern ใน OOP คือ มีก็ดีนะ จะได้ทำงานง่ายขึ้น แต่ไม่มีเราก็ยังทำงานได้ เป็นเหมือนคำแนะนำเท่านั้นเอง</p>
          </div>  
          <div className='paragraph'>
            <p>ในโปรเจคนี้ผมนำ design patterns มาใช้กับงานในหลาย ๆ ส่วนครับ จริง ๆ เยอะมาก แต่ผมอาจจะนำมาเล่าได้ไม่หมดครับ 😂 โดยที่จะเล่าถัดจากนี้ผมจะเล่า </p>
          </div>  

          <div className='h1-blog'>
            <p>มาจัดการกับ Page Layout กัน</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>การจัดการ layout ของแต่ละหน้าก็เหมือนเป็นการออกแบบของเราที่จะดึงดูดผู้ใช้อย่างไร แล้วเราจะออกแบบยังไงกันล่ะ visual hierarchy, visual flow หรือ focal point จะเข้ามาช่วยเราในส่วนนี้ครับ</p>
          </div>  

          <div className='h2-blog'>
            <p>Visual Hierarchy สำคัญอย่างไร?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>Visual Hierarchy หากพูดอย่างง่าย ๆ คือการจัดการลำดับความสำคัญของแต่ละ element อะไรสำคัญกว่าก็ทำให้มันดูโดดเด่นกว่า อาจใช้ขนาดของข้อความ หรือ สี เข้ามาช่วยจัดการ</p>
          </div> 

          <div className='blog-image-div'>
                <img src='/content/port-redesign/93e4a9b8-0381-430b-b67d-7311e094e114.png' className='blog-image-object'></img>
                <p className='image-description'>เว็บพอร์ตใหม่ที่ผมทำขึ้นครับ✨</p>
          </div>
          
          <div className='paragraph'>
            <p>ในหน้าแรกของผม แบ่ง layout เป็น 2 ส่วน คือส่วนข้อความ และ ส่วน navigation นำทางให้ user ไปยังหน้าอื่น ๆ โดยที่ในหน้าแรกผมได้แบ่ง ให้ฝั่งข้อมูลของผมมีขนาดที่ใหญ่กว่าอีกฝั่ง และแบ่งโดยการใช้ gap แบ่งช่องว่างให้ user อาจเดาได้ว่าในหน้านี้มี ทั้งสองเป็นคนละส่วนกัน</p>
          </div>  
          <div className='paragraph'>
            <p>การทำแบบนี้อาจเรียกว่าการ grouping ของสิ่งที่มันเหมือนกัน และ isolate ของสิ่งที่ต่างกันออกมา สิ่งนี้คือ proximity ใน gestalt principles นั่นเองครับ🥸 ซึ่งมาก็ได้เอามาใช้กับหน้าอื่น ๆ เพื่อจัดให้ element เป็นกลุ่ม ๆ เห็น relationship ของแต่ละสิ่งได้ครับ (Jenifer, 2010)</p>
          </div>  
          <div className='paragraph'>
            <p>Heading ข้างบน ผมมีการใช้ ขนาดตัวอักษรที่ใหญ่กว่าเพื่อดึงดูดสายตาผู้ใช้งาน ในหัวข้อ Reach me via ผมก็ใช้ขนาดของฟอนต์ที่ต่างกันออกไปเพื่อให้ user แยกออกว่าอะไรเป็นหัวข้อ อะไรเป็น subset สิ่งนี้ก็อาจเรียกว่าเป็นการใช้ visual hierarchy มาช่วยจัดการลำดับความสำคัญของข้อมูล</p>
          </div>            
          <div className='blog-image-div'>
                <img src='/content/port-redesign/dsad2131244e32ed2e312ed1.png' className='blog-image-object'></img>
                <p className='image-description'>ตัวอย่างหน้า blogs</p>
          </div>
          <div className='paragraph'>
            <p>อย่างในหน้า blogs ผมก็ได้ทำการแบ่งหัวข้อบทความ เป็นสอง column โดยที่ในแต่ละคอลัมน์มีขนาดเท่ากัน การแบ่งแบบนี้คือ ทำให้ user เห็นว่าสองคอลัมน์นี้ มีความสำคัญพอ ๆ กัน เป็น alternative choice ให้ user สามารถเลือกได้ตามความสนใจของตนเอง</p>
          </div>  

          <div className='h2-blog'>
            <p>Visual Flow?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ธรรมชาติมนุษย์ เวลาเข้าเว็บไซต์ก็อาจจะมีแนวโน้มที่ มองจากบนลงล่าง ซ้ายไปขวา อันนี้คือ flow ทั่ว ๆ ไปที่มนุษย์มักจะทำ visual flow คือ การกำหนดทิศทางนำสายตาให้กับ user เราจะให้ user มองไปทางไหน ทำอะไรต่อ แล้วเราจะกำหนด flow ให้ user ได้อย่างไร</p>
          </div> 

          <div className='blog-image-div'>
                <img src='/content/port-redesign/e-7408e9a02891.png' className='blog-image-object'></img>
                <p className='image-description'>ตัวอย่างการใช้สีชี้นำให้ user ทำตาม flow ที่เราตั้งไว้</p>
          </div>
          <div className='paragraph'>
            <p>Focal points ก็เป็นอีกหนึ่งอย่างที่มาใช้กำหนด visual flow ให้กับ user ครับ อย่างในหน้าแรกของผม ผมได้ใช้สีมาทำเป็น focal point นำทางให้ user ไปยังหน้าอื่นได้ focal points คือจุดโฟกัสที่ user จะต้องมองมาแน่ ๆ แต่ การมี focal points ที่มากเกินไปก็อาจจะลดทอนความสำคัญของสิ่งที่เราอยากจะโฟกัสได้</p>
          </div>  
          <div className='paragraph'>
            <p>ในส่วนถัดไปผมขอยกตัวอย่างการใช้ Design Pattern ที่ผมเอามาใช้ในโปรเจคนี้กันนะครับ</p>
          </div>  

          <div className='h2-blog'>
            <p>Visual Framework</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>visual framework เป็นอีกหนึ่ง design pattern ที่หลาย ๆ คนอาจจะคงเคยได้ยินกัน คือเวลาที่เราสร้างหน้าเว็บหลาย ๆ หน้า นั้น เราควรกำหนด layout หรือ margin ให้กับแต่ละหน้าให้ดูเหมือน ๆ กัน ใช่ไหมครับ สิ่งนี้แหละครับคือ visual framework คือสร้าง consistency ให้กับหน้าเว็บของเรา</p>
          </div> 
          <div className='paragraph'>
            <p>แล้วเราจะทำให้เหมือนกันทำไม? เพื่อให้ user รู้ครับว่าเรากำลังอยู่ในหน้าไหน และกำลังหาอะไรอยู่ อีกทั้งยังส่งผลในเรื่องภาพลักษณ์ของเว็บไซต์เราด้วยครับ</p>
          </div> 
          <div className='paragraph'>
            <p>ลองมาดูตัวอย่างการปรับใช้ visual framework ของผมนะครับ</p>
          </div> 
          <div className='blog-image-div'>
                <img src='/content/port-redesign/423rdewd32ew2d2.png' className='blog-image-object'></img>
                <p className='image-description'>ตัวอย่างหน้า Projects ที่กำหนด patterns ให้เหมือนกันทุก ๆ หน้า</p>
          </div>
          <div className='paragraph'>
            <p>ผมกำหนดขนาด margin แกน x หรือ ฝั่งซ้ายขวาไว้ที่ 8 rem สำหรับหน้าจอที่ขนาด min-width: 1024px ครับ หากขนาด device เล็กกว่านั้นผมจะปรับมาใช้เป็น 1.5 rem ครับ ส่วน margin top อยู่ที่ 4 rem ครับ และผมปรับแบบนี้ไว้กับทุก ๆ หน้าเพื่อคงความ consistency ไว้ครับ</p>
          </div> 
          <div className='blog-image-div'>
                <img src='/content/port-redesign/h98r32j92jd2309.png' className='blog-image-object'></img>
                <p className='image-description'>ตัวอย่างหน้า Experience ที่กำหนด patterns ให้เหมือนกันทุก ๆ หน้า</p>
          </div>

          <div className='paragraph'>
            <p>ส่วน Title ผมก็ทำให้เหมือนกันทั้งสามหน้าครับ ทั้งหน้า Projects, Blogs, และ Experience และ element รองลงมาผมก็แบ่งให้เป็น 2 คอลัมน์เหมือนกัน เพื่อคงความ consistency ไว้ครับ และเพื่อให้ user เกิดความชินกับ layout ที่ผมได้วางเอาไว้ครับ พูดอีกอย่างเหมือนให้เขารู้คาแรคเตอร์ของผมครับ</p>
          </div> 

          <div className='h2-blog'>
            <p>Titled Section</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>จริง ๆ ในส่วนของ Title นั้นก็อาจเรียกได้ว่าเป็นอีก 1 ใน design patterns เช่นเดียวกันครับ ในส่วนของ Title ผมก็เขียน Guide ไว้ให้ว่าคุณอยู่หน้านี้ ๆ นะ เพื่อบอกให้ user รู้ครับ</p>
          </div> 
          <div className='paragraph'>
            <p>Titled Section คือการที่แบ่งสัดส่วนของแต่ละหน้าโดยใช้ title มาบ่งบอก user ครับว่ากำลังอยู่หน้าไหน อย่างของผมในหน้า expreience ผมเขียนไว้ว่า “See how I grew up!” จริง ๆ ผมไม่อยากเขียนคำว่า Experience ไปเฉย ๆ เพราะการคิดแต่ละคำออกมาก็เป็นหนึ่งในกระบวนการ UX เช่นเดียวกัน</p>
          </div> 
          <div className='paragraph'>
            <p>ผมมองว่าคำที่ผมเขียนมานั้นผมอยากสร้าง characteristic feature ให้กับตัวหน้าเว็บไซต์ผมครับ อีกอย่างคือ ผทอยากได้รับ attention และอยากให้ user รู้จักผมมากกว่าคำแค่ว่า experience ครับ</p>
          </div> 

          <div className='h1-blog'>
            <p>Global Navigation</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>เราทำเว็บไซต์ขึ้นมามีข้อมูลอยู่หลายหมวดหมู่ เราจะทำยังไงให้ user เข้าถึงข้อมูลนั้น ๆ ได้อย่างง่าย ๆ ในเว็บไซต์ทั่วไปเรามักจะเห็น navigation bar หรือ footer ใช่ไหมครับ สิ่งนั้นก็เป็นหนึ่งใน components ที่ช่วยนำทาง และการที่ว่า ไม่ว่าเราจะเข้าหน้าไหน เราก็จะเจอ navbar หรือ footer นั้น สิ่งนั้นเรียกว่า global navigation ครับ</p>
          </div> 
          <div className='paragraph'>
            <p>จริง ๆ global navigation เป็นหนึ่งใน navigation model ครับ อย่างในหน้าแรกส่วนทางขวามือที่ผมได้เล่าไปในส่วน focal point อันนั้นก็เป็นอีกหนึ่งใน navigation model ครับ</p>
          </div> 
          <div className='paragraph'>
            <p>ในโปรเจคนี้ผมได้ทำ navbar และ footer เพื่อให้ user สามารถเลือกไปดูข้อมูลได้ตามความต้องการครับ</p>
          </div>          

          <div className='blog-image-div'>
                <img src='/content/port-redesign/32eh1u82378.png' className='blog-image-object'></img>
                <p className='image-description'>Navbar ในขนาด desktop</p>
          </div>

          <div className='paragraph'>
            <p>ข้างบนนี้เป็น navbar ในขนาด desktop size ครับ หาก min-width ต่ำกว่า 1024px ผมจะเปลี่ยนไปใช้แบบ popup navbar แทนครับ</p>
          </div> 


          <div className='flex flex-col justify-center items-center'>
            <video width="900" autoPlay loop muted preload='auto' playsInline>
              <source src="/content/port-redesign/navbar.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className='image-description'>Navbar แบบ popup สำหรับ mobile screen</p>
          </div>

          <div className='paragraph'>
            <p>จากตัวอย่างข้างบนนั้นคือ navbar ที่รองรับ responsive design ครับ และเมื่อ user เอาเมาส์ไปชี้ที่แต่ละหัวข้อ ก็มี action ตอบรับกลับมาเพื่อให้ user รู้ว่ากำลังทำอะไรอยู่ จากในคลิปคือ เมื่อชี้ที่หัวข้อ blog หัวข้ออื่นก็จะมี text ที่สีจางลง เพื่อเน้นให้ user รู้ว่ากำลังจะไปหน้า blog นะ ประมาณนี้ครับ</p>
          </div> 

          <div className='h1-blog'>
            <p>A/B Testing</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>กว่าจะมาเป็น final product ผมต้องจัดการกับ components ค่อนข้างเยอะเลยครับ ตอนร่าง wireframe เราร่างไปอีกแบบนึง พอมาลองมาเขียนจริงก็มีปรับแก้ไปหลายครั้งครับ ไม่ว่าจะตั้งแต่ เลือก theme หรือ จะในหน้า projects จะวางข้อมูลแบบไหนถึงจะเวิคกว่า รวมไปถึงรายละเอียดเล็ก ๆ น้อย ๆ แต่ก็น่าสนใจ ครับ</p>
          </div> 
          <div className='h2-blog'>
            <p>เรื่องของสี</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ตอนแรกผมสร้างเว็บมาเป็นรูปแบบ dark mode ครับ ทำเสร็จสรรพ ลองเอาไปให้เพื่อน ๆ หลาย ๆ คนเทส พบว่ามีปัญหาเรื่องความสบายตาครับ คือในโปรเจคนี้มีบทความให้อ่านด้วย หากจะต้องอ่านข้อมูลด้วยพื้นหลังสีดำ ตัดกับข้อความสีขาว เพื่อน ๆ หลาย ๆ คนรู้สึกว่าเกิดความไม่สบายตาครับ เลยทำให้ผมลองเปลี่ยนมาใช้สีโทนสว่างแทนครับ</p>
          </div> 
          <div className='blog-image-div'>
            <img src='/content/port-redesign/fe23rd2qd2.png' className='blog-image-object'></img>
            <p className='image-description'>หน้า Article ในเว็บรูปแบบ dark mode</p>
          </div>
          <div className='paragraph'>
            <p>คือ เรื่องของ dark mode หรือ โหมดปกติ มันเป็นเรื่องความชอบของแต่ละคนครับ แต่ผมมานึกถึงไว้ก่อนว่า user ของเราจะเป็นใครก็ได้ งั้นผมทำเป็นสีขาวก่อน ไว้ dark mode ค่อยทำต่อยอดในอนาคตครับ</p>
          </div>
          <div className='blog-image-div'>
            <img src='/content/port-redesign/3re2d23542ew2q3rf.png' className='blog-image-object'></img>
            <p className='image-description'>หน้า Article ในเว็บรูปแบบที่ปรับปรุงใหม่ครับ</p>
          </div>
          <div className='paragraph'>
            <p>จากภาพด้านบนเป็น บล็อกเวอร์ชั่นล่าสุดครับ นอกจากปรับสีแล้ว ผมปรับขนาดความกว้างของ ตัว paragraph ไว้ด้วยครับ เพราะ จุดโฟกัสของตามนุษย์ไม่ได้กว้างขนาดนั้น หากจะต้องมานั่งอ่านบทความที่ ความกว้างของ paragraph กว้างเกินไป อาจส่งผลให้ user เหนื่อยสายตาที่จะต้องกวาดตามอง</p>
          </div>
          <div className='paragraph'>
            <p>สังเกตเพิ่มเติม ในส่วนบทความผมใช้ตัวอักษรแบบมี loop เพื่อให้ อ่านได้ง่ายครับ หากเราจะใช้ typeface แบบไม่มี loop ก็อาจจะส่งผลแย่ต่อผู้อ่านครับ อารมณ์เดียวกับใช้ comic sans กับทั้งพารากราฟครับ</p>
          </div>

          <div className='h2-blog'>
            <p>ใช้สีจัดการกับ Visual Hierarchy</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ในลิสต์รายละเอียดเกี่ยวกับโปรเจค ในตอนแรก ผมใช้แค่ text size กับปรับให้เป็นตัวหนาเท่านั้น (อันที่ 2) แต่ก็ยังรู้สึกว่า มันยังดูเด่น ๆ อยู่ ทางแก้ของผมคือ ตัว body text จะถูกปรับให้จางกว่าตัว title/heading ครับ</p>
          </div> 

          <div className='blog-image-div'>
            <img src='/content/port-redesign/f34rijo0fj34.png' className='blog-image-object w-lg'></img>
            <p className='image-description'>ภาพเปรียบเทียบการใช้สีกับ Visual Hierarchy</p>
          </div>
          <div className='paragraph'>
            <p>อย่างตัวอย่างด้านบนนี้ จะเห็นได้ว่า อันหนึ่งจะดูข้อมูลได้ง่ายกว่า และไม่ได้ดูว่าทุกอย่างมันดูสำคัญเท่ากันหมด นั่นเป็นเพราะผมใช้สีเข้ามาช่วยในเรื่องของ visual hierarchy ครับ หากใน Figma บางคนอาจจะมีสี Primary และถ้าอยากได้สีไว้ใช้กับ body text ก็อาจจะปรับ HSL ในส่วน Lightness ครับ</p>
          </div>          
          <div className='blog-image-div'>
            <img src='/content/port-redesign/v5344egr3423.png' className='blog-image-object w-lg'></img>
            <p className='image-description'>ภาพหลังจากที่แก้ไขแล้ว</p>
          </div>
          <div className='paragraph'>
            <p>หลังจากที่ผมใช้สีเข้ามาช่วยจัดลำดับความสำคัญแล้ว ก็อาจจะช่วยให้ user สามารถดูหน้าเว็บได้สบายตามากขึ้นครับ</p>
          </div>
          <div className='h2-blog'>
            <p>Banner ในหน้า blog</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ตอนนั้นผมยังเลือกไม่ถูกครับว่า ในหน้า blog เราจะใส่ list แบบไหนดี ผมเลยลองสามแบบครับ แบบที่ 1 เป็น object รูปภาพแบนเนอร์ไปเลย แบบที่ 2 คือ มี title กับ detail และแบบที่ 3 คือ มีภาพอยู่ด้านท้ายครับ</p>
          </div> 
          <div className='blog-image-div'>
            <img src='/content/port-redesign/dasf2324q13rwq.png' className='blog-image-object'></img>
            <p className='image-description'>ภาพเปรียบเทียบการเลือกใช้ list</p>
          </div>
          <div className='h3-blog'>
            <p>แบบที่ 1 ฝั่งซ้าย</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>การใช้ภาพ หรือของที่ high-contrast นั้นจะดึงดูด user แต่ก็มีข้อเสียด้วยเหมือนกัน คือเราไม่ควรใช้จนมากเกินไป อย่างในบางครั้ง banner ก็ถูกใช้กับ ads การใช้รูปภาพที่บ่อยและเยอะเกินไป อาจทำให้ความสำคัญของ component นั้น ๆ ถูกลดความสำคัญลง (Jenifer, pp.134)</p>
          </div> 
          <div className='paragraph'>
            <p>อีกทั้ง การใช้รูปเป็นแบบทั้งก้อน stack กันหลาย ๆ ชั้น ผมอยากให้ลองจินตนาการว่าทั้งสองฝั่งเป็นแบบนี้ เราจะพบว่า แทบไม่มีพื้นที่โล่ง ๆ ให้กับ user การ clustering หรือ crowding อาจทำให้ user เกิดความอึดอัด ซึ่งอาจส่งผลไม่ดีกับ user (Jenifer, pp.492)</p>
          </div>
          <div className='h3-blog'>
            <p>แบบที่ 2 ฝั่งขวา</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ไม่มีภาพเลย ก็ไม่ดึงดูดให้ user สนใจ component นั้น ๆ เนื่องจากเราอยากให้ user เข้ามาอ่านบทความเรา การใช้ภาพมาช่วย draw attention จาก user นั้น ก็อาจจะดีกว่าไม่มีอะไรใด ๆ เลย</p>
          </div> 
          <div className='paragraph'>
            <p>หลังจากตัดสินใจได้ผมจึงเลือกแบบที่สาม และปรับ margin ระหว่าง text และ image กับ line clamp ให้เหลือเพียง 3 บรรทัดครับ ลองดูผลลัพธ์ด้านล่างนี้ครับ</p>
          </div>
          <div className='blog-image-div'>
            <img src='/content/port-redesign/mfdw2r3e4.png' className='blog-image-object'></img>
            <p className='image-description'>ผลลัพธ์ที่ได้หลังจากลองเปรียบเทียบกันแล้วครับ</p>
          </div>          

          <div className='h1-blog'>
            <p>การเลือกใช้คำ</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>การเลือกใช้คำ ก็เป็นอีกเรื่องสำคัญอีกเรื่องหนึ่งในกระบวนการ UX ครับ เราจะสื่อสาร ถ่ายทอดข้อมูลที่เรามีออกไปให้ user ของเราอย่างไรให้เกิด impression ที่ดีและมีประสิทธิภาพ อย่างตามที่ผมได้พูดไปในส่วนของ titled section</p>
          </div>           
          <div className='blog-image-div'>
            <img src='/content/port-redesign/320u89eq3qdw.png' className='blog-image-object w-lg'></img>
          </div>
          <div className='paragraph'>
            <p>อย่างในส่วนที่บอกว่าผมพูดภาษาอะไรได้บ้าง ผมมี 2 ตัวเลือก คือ แบบด้านบน กับแบบด้านล่างที่เป็นลิสต์ หลังจากการพิจารณาโดยที่ว่า ผมอยากให้ user เห็นแล้วรู้เรื่องทันที ผมจึงใช้แบบแรกครับ </p>
          </div>
          <div className='paragraph'>
            <p>สองอันนี้เป็นอันที่ผมคิดไม่ตกจริง ๆ ว่าจะเอาแบบไหนดี แต่ที่ไม่เลือกแบบที่สองเพราะ ผมไม่อยากทำเป็นลิสต์ครับ มันใช้พื้นที่ อยากให้ user ไม่ต้องเสียเวลากวาดสายตาลงมาทีละอัน</p>
          </div>

          <div className='h1-blog'>
            <p>สรุปภาพรวมครับ🫡</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>การที่ผมเริ่มทำพอร์ตใหม่ โดยนึกถึง user-centric design มาก่อนทำให้เราได้นึกถึงจุดประสงค์จริง ๆ ว่าเรากำลังทำอะไรเพื่อใคร ใครก็สามารถเขียนเว็บได้ แต่หากไม่ได้มีความรู้ ความเข้าใจใน user ของเรา เว็บของเราก็จะเป็นแค่เว็บแบบนั้น หากเรามีข้อมูลที่ดีและอยากถ่ายทอด แต่เราไม่มีความเข้าใจใน user เราไม่ได้ใช้ความรู้เรื่อง User Experience เข้ามา implement ด้วย การส่งสารถึงผู้รับสารก็อาจจะไม่มีประสิทธิภาพและไม่ได้เกิดผมดีให้กับทั้งผู้รับสาร (ที่เป็นเรา) และผู้ส่งสาร (user)</p>
          </div> 
          <div className='paragraph'>
            <p>UX สำหรับผมมันเป็นเรื่องของความเข้าใจในมนุษย์ และนำความเข้าใจก้อนนั้นมา จัดการกับข้อมูลของเราให้ส่งมือถึงผู้ใช้งานได้อย่างมีประสิทธิภาพครับ หากยก analogy มาว่า ทุกคนทำไข่เจียวได้ แต่ไม่ใช่ทุกคนที่จะทไข่เจียวได้อร่อยถูกใจปากคน ผมว่า UX ก็เหมือนกันครับ ทุกคนเขียนเว็บได้ แต่ไม่ใช่ทุกคนที่จะสื่อสารกับ user ของตัวเองได้อย่างมีประสิทธิภาพได้เท่ากัน UX นี่แหละจะคือตัวเชื่อมให้ทุกอย่างรวมกันออกมาอย่างมีประสิทธิภาพมากที่สุดครับ🥳</p>
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