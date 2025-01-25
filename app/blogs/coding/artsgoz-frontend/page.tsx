import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'GitRepo: artsgoz-frontend',
        link: 'https://github.com/dhanavadh/Artsgoz-frontend'
    },    

]

const BlogArtsgozFE = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          {/* <img src='/banner/artsgoz.png' className='blog-banner'></img>                         */}
          <video width="full" autoPlay loop muted preload='auto' playsInline className='blog-banner'>
              <source src="/content/artsgoz/artsgoz.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>8 minutes Reading</p>
          <p className='title'>สำรวจหน้าบ้านของเว็บไซต์ Artsgoz</p>
          <p className='sub-title-article mt-2'>ผมจะพาชมครับว่ากว่าจะมาเป็นเว็บไซต์ กอศ อันใหม่ ผมต้องทำการบ้านยังไงบ้าง เว็บ artsgoz อาจนับว่าเป็น debut project ของผมเลยก็ว่าได้ครับ ทุกวันนี้ยังมีการปรับปรุงอยู่เรื่อย ๆ ครับ</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='max-w-[1000px]'>
          <div className='paragraph'>
            <p>สวัสดีครับ เทรุ ครับผม😄 วันนี้จะพามาพรีวิวโปรเจคในปี 2023-2024 นะครับ ก่อนอื่นเลย อยากให้ดูเว็บไซต์กอศ ปัจจุบันครับ <a href='https://www.arts.chula.ac.th/goz/' target='_blank' className='link-inline'>คลิกดูได้ที่นี่ครับ😁</a></p>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <video width="900" autoPlay loop muted preload='auto' playsInline>
              <source src="/content/artsgoz/artsgoz.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className='image-description'>เว็บไซต์ Artsgoz ปัจจุบันครับ ✨</p>
          </div>

          <div className='h1-blog'>
            <p>เว็บไซต์ Artsgoz คืออะไร?</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>เว็บไซต์ Artsgoz เป็นเว็บไซต์ของกรรมการนิสิตของคณะอักษรศาสตร์ (กอศ) มีไว้ให้นิสิตมาค้นหาชื่อย่ออาจารย์ กับอ่านบทความ เป็นฟังก์ชั่นหลัก ๆ ครับ จริง ๆ กอศ มีเว็บเก่า แต่เป็นแบบ CMS หรือ wordpress ครับ แต่ทีนี้ ปัญหาอยู่ที่ว่าเว็บไซต์ไม่ได้อัปเดต ไม่ได้มีใครทำอะไรเลย เลยเป็นเว็บร้าง </p>
          </div>          
          
          <div className='paragraph'>
            <p>ตอนผมอยู่ปี 2 ผมได้เข้าไปทำคณะกรรมการนิสิต ในฝ่ายสื่อและประชาสัมพันธ์ ผมเลยได้ดูแลสื่อของ กอศ และผมเห็นว่าเว็บมันร้าง ไม่ค่อยมีใครใช้ คอนเท้นก็ไม่อัปเดต ผมเลยเสนอทางคณะกรรมการไปว่าจะรีเมคเว็บใหม่ ใช้ React นะ อะไรก็ว่าไป </p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/artsgoz/img-1.png' className='blog-image-object'></img>
                <p className='image-description'>เว็บไซต์เก่าของ artsgoz</p>
          </div>
          <div className='paragraph'>
            <p>เว็บไซต์เดิมของ กอศ ผมไม่ได้มีภาพให้ชม เนื่องจากข้อมูลส่วนใหญ่ถูกลบไปหมดแล้วครับ</p>
          </div>

          <div className='h1-blog'>
            <p>ทำไมต้องทำใหม่?</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ผมต้องบอกก่อนว่าตอนนั้นผมใช้ cms ไม่เป็น คือถ้าจะสร้างเว็บไซต์ก็เขียนขึ้นมาใหม่เลย เพราะผมรู้สึกว่าการจัดการกับปลั๊กอินใน Wordpress ตอนนั้นมันยุ่งยากมากครับ และไม่ยืดหยุ่น แต่ก็มีข้อดีนะครับที่คนเขียนโค้ดไม่เป็นก็เข้ามาอัปคอนเท้นได้</p>
          </div>
          <div className='paragraph'>
            <p>อีกเรื่องคือภาพลักษณ์ขององค์กรครับ ในตอนนั้นผมและที่ประชุมก็เห็นพ้องกันเรื่องต้องการให้ภาพลักษณ์ของแบรนด์ดีขึ้นด้วยการมีเว็บไซต์ที่ใช้เทคโนโลยีทันสมัย (เหมือนคณะวิศวะ หรือ คณะแพทย์) ด้วยเหตุนี้ก็เลยทำให้ผมได้เข้ามาทำเว็บใหม่ครับ</p>
          </div>

          <div className='blog-image-div'>
                <img src='/content/artsgoz/img-2.png' className='blog-image-object'></img>
                <p className='image-description'>เว็บไซต์ปัจจุบัน</p>
          </div>

          <div className='paragraph'>
            <div className='pl-4 border-l-4 border-pink-500'>
              <p className='font-[family-name:var(--font-sarabun-medium)]'>Remarks</p>
              <p>ตอนนั้นปี 2023 ผมยังไม่เคยเรียน UX จริง ๆ จัง ๆ จึงทำให้หน้าเว็บออกมาอาจจะไม่ serve best experience ให้กับ user เท่าที่ควร</p>
            </div>
          </div>

          <div className='h1-blog'>
            <p>กว่าจะได้เป็นเว็บใหม่</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>จริง ๆ ก่อนที่หน้าตาเว็บไซต์จะเป็นปัจจุบัน ผมเคยทำเป็นอีกแบบที่ต่างกันออกไปเลยครับ</p>
          </div>

          <div className='blog-image-div'>
                <img src='/content/artsgoz/img-3.png' className='blog-image-object'></img>
                <p className='image-description'>Prototype ตัวแรก</p>
          </div>
          <div className='paragraph'>
            <p>ตัวเว็บไซต์ก่อนที่จะมาเป็นตัวปัจจุบันครับ คือตามที่ผมได้เขียนไปในตอนต้นว่า ผมในตอนนั้นไม่ได้มีความรู้เรื่อง ux เลย การสร้างอะไรออกมาก็เกิดจากสิ่งที่เรียกว่า “ก็มันเป็นแบบนี้” มาซะส่วนใหญ่</p>
          </div>        
          <div className='blog-image-div'>
                <img src='/content/artsgoz/img-4.png' className='blog-image-object'></img>
                <p className='image-description'>Prototype ตัวแรก</p>
          </div>
          <div className='paragraph'>
            <p>อีกทั้งเว็บไซต์เวอร์ชั่นแรก ไม่ได้ทำมาแบบ responsive design ด้วย เวลา user เปิดในโทรศัพท์อาจจะเจอปัญหาบางอย่างได้ครับ</p>
          </div>

          <div className='h1-blog'>
            <p>ฟังก์ชั่นเด่น ๆ ในเว็บใหม่</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>หลัก ๆ ของเว็บกอศใหม่คือ ค้นหาชื่ออาจารย์ กับ อ่าน/เขียนบทความครับ แต่ที่ทุกคนเห็นว่าคอนเท้นไม่ค่อยมี เพราะอะไรผมจะเล่าให้ฟังในส่วนถัดไปครับ</p>
          </div>
          <div className='h2-blog'>
            <p>ค้นหาชื่อย่ออาจารย์</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ต้องเล่าอย่างนี้ก่อนครับ ในระบบ reg จุฬา เวลาเรา query หาวิชาที่จะลงทะเบียนเรียน เราจะไม่เห็นชื่อเต็มอาจารย์ จะเห็นเป็นชื่อตัวอักษร 3 หลักครับ เช่น HKS, ATR แล้วทีนี้ นิสิตอยากรู้ว่าอาจารย์หรือสตาฟท่านไหนสอนก็จะมาค้นหาชื่อย่อในเว็บกอศครับ</p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/artsgoz/img-5.png' className='blog-image-object'></img>
                <p className='image-description'>หน้าค้นหาชื่ออาจารย์</p>
          </div>
          <div className='paragraph'>
            <p>เว็บเดิมของกอศก็มีนะครับ แต่มีปัญหาเรื่อง ฐานข้อมูลมีปัญหา ทำให้ไม่สามารถค้นหาชื่อย่ออาจารย์ได้ครับ ตอนนี้ทั้งเว็บทางการของคณะเองก็ค้นหาไม่ได้ครับ</p>
          </div>
          <div className='paragraph'>
            <p>แต่ยังโชคดีที่ผมยัง export ข้อมูลออกมาทัน แต่ก็เป็นข้อมูลที่ไม่ได้อัปเดตใหม่มาก เพราะในแต่ละปีก็จะมีอาจารย์เข้ามาใหม่เรื่อย ๆ ครับ ในเรื่องของการจัดการกับข้อมูลของอาจารย์ ผมจะเล่าใน ส่วนตอนทำ backend นะครับ</p>
          </div>
          <div className='paragraph'>
            <p>Query ชื่ออาจารย์ถือเป็นฟังก์ชั่นเด่น ๆ ของแอปนี้ได้เลยครับ เพราะ performance ใน search console ก็ให้ข้อมูลว่า เว็บไซต์กอศที่โชว์ขึ้นนั้น ขึ้นในคีย์เวิร์ดไหนบ้าง</p>
          </div>

          <div className='blog-image-div'>
                <img src='/content/artsgoz/img-6.png' className='blog-image-object'></img>
                <p className='image-description'>ยอด query จาก search console</p>
          </div>
          <div className='h2-blog'>
            <p>เขียน/อ่านบทความได้</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>อาจมีเสียงบอกว่า เว็บเก่าก็ทำได้ ไม่เห็นมีความจำเป็นต้องเปลี่ยนเลย จริง ๆ เว็บเก่ามีแค่สตาฟเท่านั้นที่สามารถเขียนบทความได้ครับ แต่เว็บใหม่ เพียงนิสิตล็อกอินเข้ามา ก็สามารถเขียนบทความได้แล้วครับ</p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/artsgoz/img-7.png' className='blog-image-object'></img>
                <p className='image-description'>หน้าบทความ</p>
          </div>
          
          <div className='h1-blog'>
            <p>drawback ในโปรเจคนี้</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ทาง กอศ อยากได้ลิงก์เป็น https://www.arts.chula.ac.th/goz/ แต่ตัว server เดิมยังเป็น ubuntu อยู่เลยทำให้รันพวกเว็บ node.js ไม่ได้ ทางแก้ในเรื่องนี้คือ เว็บกอศมี 2 url คือ https://artsgoz.netlify.app/ และ https://www.arts.chula.ac.th/goz/ โดยที่ ตัว arts.chula.ac.th/goz เป็นแค่ iframe ของตัวเว็บ netlify ครับ</p>
          </div>
          <div className='paragraph'>
            <p>อีกข้อคือ เรื่องของงบประมาณ เว็บไซต์ใหม่ ไม่ได้เสียค่าโดเมน ไม่ได้เสียค่าโฮสติ้ง ทุกอย่างใช้ free service อยู่ เลยทำให้ในบางครั้งเข้าเว็บไปแล้วอาจจะรออยู่หน้าโหลดนาน เพราะ backend server เป็นของฟรีครับ</p>
          </div>
          <div className='paragraph'>
            <p>กอศในปีถัดมายังไม่มีคนสานต่องานที่ลงตัวครับ ทำให้เว็บนิ่ง ไม่มีการประชาสัมพันธ์ใด ๆ เกี่ยวกับเว็บกอศเลยครับ</p>
          </div>
          <div className='paragraph'>
            <p>ข้อสุดท้าย ส่วนตัวของผม ผมมองว่าเว็บปัจจุบันยังไม่ได้มอบประสบการณ์ที่ดีให้กับผู้ใช้งานครับ ทั้งเรื่องของเว็บที่โหลดช้าและหน้าตา UI ที่ยังไม่ consistent</p>
          </div>

          <div className='h1-blog'>
            <p>สิ่งที่จะเปลี่ยนแปลงในปี 2025</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ปี 2025 นี้ ทางกอศมีแพลนที่จะทำหน้าเพจ รีวิวฝึกงาน ให้นิสิตที่เคยฝึกงานมารีวิวของตัวเองลงในเว็บไซต์ครับ แต่ปีนี้ผมอยู่ปี 3 ไม่ได้เป็นสมาชิก กอศ แล้ว แต่พวก source code หรือ งาน production ผมก็ยังช่วยดูแลอยู่ครับ แต่มีสมาชิกมาเพิ่มอีกคือ <a href='https://github.com/Akphawee' target='_blank' className='link-inline'>@akpawee</a> (เมจิก) และสมาชิกคนอื่น ๆ ก็จะเข้ามาช่วยดูในส่วนนี้ครับ และแพลนปี 2025 นี้เราก็จะยกเครื่องเว็บไซต์ใหม่ครับ ทั้งเปลี่ยนไปเขียนแบบ TypeScript และปรับปรุงหน้า UI นี่เป็นเรื่องสำคัญเลยครับ</p>
          </div>
          <div className='h1-blog'>
            <p>หากสนใจร่วมพัฒนา</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>หากใครเป็นนิสิตอักษร สนใจมาร่วมงานด้วยกันสามารถติดต่อผม หรือ เปิด pr ใน repo ได้เลยครับ หรือ คลิกที่นี่ <a href='https://github.com/dhanavadh/Artsgoz-frontend' target='_blank' className='link-inline'>@dhanavadh/Artsgoz-frontend</a></p>
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

export default BlogArtsgozFE