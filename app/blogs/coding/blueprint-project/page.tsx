import Author from '@/app/components/BlogElemet/Author'
import AuthorWithPom from '@/app/components/BlogElemet/AuthorWithPom'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย. หลักสูตรปรับปรุง พ.ศ. 2561',
        link: 'https://www.arts.chula.ac.th/th/ba-education/ba-2561/'
    },    
    {
        id: 2,
        name: 'CU Get Reg',
        link: 'https://cugetreg.com/'
    },    
    {
        id: 3,
        name: 'Hunt, R. (2023, March 29). What is the UX Design Process? 5 Steps to Success. Interaction Design Foundation - IxDF.',
        link: 'https://www.interaction-design.org/literature/article/ux-design-process-guide'
    },    

]

const BlueprintProject = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          <img src='/content/blueprint-proj/IMG_20250125_0001.jpeg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>12 minutes Reading</p>
          <p className='title'>ใบฟ้า – แอปช่วยจัดตารางเรียน</p>
          <p className='sub-title-article mt-2'>เรียนไปปีสามแล้ว เหลืออีกปีเดียวจะจบ แต่ยังเรียนไม่ครบเลย ทำไงดี?</p>          
        </div>                                     
        {/* Paragraph */}        
        <div className='max-w-[1000px]'>
          <div className='paragraph'>
            <p>เคยไหมครับที่เรียนไปสองปีแล้ว เหลืออีกสองปีก็จะเรียนจบ แต่ยังไม่รู้เลยว่าเราเรียนอะไรไปแล้วบ้าง เราเหลืออะไรที่ยังต้องเรียนอีก ยังลงได้อีกกี่หน่วยกิต วิชาบังคับเอกเรียนครบหรือยัง และคำถามอื่น ๆ ตามมากันหมด</p>
          </div>
          <div className='paragraph'>
            <p>หลายคนอาจจะแก้ปัญหานี้ด้วยการเปิดหลักสูตรของตัวเองดู แล้วจดลงว่าต้องเรียนอะไรบ้าง ลิสต์ไว้ในโน๊ตหรืออื่น ๆ แต่มันจะดีกว่าไหม หากเพียงเราแค่กรอกรหัสนิสิตของตัวเอง ก็สามารถเลือกดูได้เลยว่าเราลงทะเบียนอะไรไปแล้วบ้าง</p>
          </div>
          <div className='paragraph'>
            <p>สวัสดีครับ เทรุนะครับ พบกันอีกแล้ว ในครั้งนี้ ผมจะมานำเสนอโปรเจคแก้ปัญหาตามที่ผมได้พูดไปข้างต้นครับ โดยก่อนที่เราจะได้ไอเดียนี้ ผมกับปอม (เพื่อนไม่สะดวกเปิดเผยตัวตนครับ) อยากทำโปรเจค UX สักโปรเจค แล้วมานั่งคิดถึงปัญหาที่เราเจอในชีวิตประจำวัน และเราอยากแก้ไขหรือทำให้สะดวกขึ้น ปอมจึงเสนอไอเดียเรื่องแอปตัวช่วยการลงทะเบียนเรียนมาครับ</p>
          </div>
          <div className='paragraph'>
            <p>ก่อนอื่นเราจะพาไปรู้จักกับหลักสูตรของคณะเรากันก่อนนะครับ</p>
          </div>

          <div className='h1-blog'>
            <p>ว่าด้วยเรื่องหลักสูตร</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ต้องเกริ่นก่อนว่า พวกเราสองคนเรียนอยู่คณะอักษรศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย แล้วในคณะเราจะแบ่งเป็นวิชาเอก โท มีทั้งเอกเดี่ยว เอกโท และยังต้องเรียนรายวิชาศึกษาทั่วไป หรือ Gened 4 หมวดหมู่ 12 หน่วยกิต และ GenLang คือเรียนเกี่ยวกับภาษา 12 หน่วยกิตครับ</p>
          </div>          
          
          <div className='paragraph'>
            <p>แต่ละหลักสูตร แต่ละเอกก็มีวิชาบังคับเอก วิชาเลือกเอก วิชาบังคับโท วิชาเลือกโท แตกต่างกันออกไป ซึ่งฟังมาถึงตอนนี้ อาจจะดูว่าอะไรหลายอย่างมันวุ่นวายใช่ไหมครับ คำตอบคือใช่ครับ ลองดูภาพด้านล่างอาจจะพอช่วยให้เข้าใจมากขึ้นครับ</p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/blueprint-proj/c32rd23edqj09.png' className='blog-image-object'></img>
                <p className='image-description'>ตารางหลักสูตรอักษรศาสตร์บัณฑิต ปี 2561 <a href='https://www.arts.chula.ac.th/th/ba-education/ba-2561/' target='blank' className='link-inline'>(https://www.arts.chula.ac.th/th/ba-education/ba-2561/)</a></p>
          </div>
          <div className='paragraph'>
            <p>ที่พวกเราต้องเรียนก็จะประมาณนี้ครับ หลาย ๆ คนเข้ามาเรียนใหม่ ๆ ก็อาจจะแพลนไว้เลยว่าเทอมนี้จะเรียนอะไร ๆ แต่บางคนก็ไม่ได้แพลนไว้แต่แรกครับ ลงเรียนตามเพื่อนไปก่อนก็มี หรือบางคน (ผมเอง) มารู้ตัวว่าอยู่ปี 3 แล้วแต่ยังไม่ได้เรียนวิชา GenEd อีกหลายหมวด GenLang ก็ยังไม่ได้เรียนเลยครับ</p>
          </div>
          <div className='paragraph'>
            <p>ด้วยเหตุดังกล่าว ทำให้ผมต้องมานั่งจัดตารางหลักสูตรของตัวเองใหม่ กลายเป็นว่าต้องมาเรียนหนัก ๆ ในปีท้าย ๆ เพราะตัวเองไม่ได้แพลนการเรียนไว้</p>
          </div>

          <div className='h1-blog'>
            <p>เจอปัญหาแล้ว เรามาหาวิธีแก้กันไหม?</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>พอเกิดปัญหาแบบนี้ ปอมก็เสนอไอเดียขึ้นมาว่า งั้นเราไม่ทำแอปที่ช่วยจัดการหลักสูตรให้นิสิตไปเลยล่ะ แบบ กรอกรหัสนิสิตเข้าไป ละก็เด้งขึ้นมาเลยว่าจะเลือกเอกอะไร สมมติถ้าเลือกเอกญี่ปุ่น ก็จะมีลิสต์โชว์ให้เลยว่าในปีนี้ ๆ ต้องเรียนอันนี้นะ และแนะนำว่าควรลง GenEd เทอมไหน แบบนี้จะเวิคไหม เพราะปัจจุบันก็ไม่ได้มีใครทำแอปจัดการหลักสูตรสำเร็จรูป มีแต่ช่วยจัดตารางเรียนแบบเป็นเทอม ๆ เช่น <a href='https://cugetreg.com/S/courses' target='blank' className='link-inline'>CU Get Reg</a></p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/blueprint-proj/f234fcews423.png' className='blog-image-object'></img>
                <p className='image-description'>หน้าเว็บไซต์ CU Get Reg</p>
          </div>
          <div className='paragraph'>
            <p>ผมรู้สึกว่าไอเดียของปอมมันว้าวมาก เลยอยากนำมาทำเป็นโปรเจค UX ครับ ด้วยความที่ปอมเคยผ่านประสบการณ์การเรียนเกี่ยวกับวิชา UX ของในคณะแล้ว ผมรู้สึกว่ามีความเป็นไปได้ที่จะทำ product อันนี้ออกมาเพื่อแก้ปัญหาให้กับนิสิตอักษรครับ หากในอนาคตเราทำกับนิสิตอักษรก่อนแล้วเทส แล้วมันเวิค เราอาจจะนำอันนี้ต่อยอดไปในระดับมหาลัยได้ครับ</p>
          </div>
          <div className='h1-blog'>
            <p>ทำไมต้องชื่อแอป ใบฟ้า?</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>จริง ๆ เราก็ไม่ได้ finalize ว่าจะเอาชื่อนี้ แต่เพราะ ใบฟ้า ทำให้เกิดเป็นไอเดียนี้ขึ้นมาครับ</p>
          </div>          
          <div className='paragraph'>
            <p>ใบฟ้าคือ ใบสีฟ้าที่นิสิตอักษรต้องไปกรอกข้อมูลว่าเราเรียนอะไรไปแล้วบ้างในแต่ละเทอมเทอมกับที่ปรึกษาของเราครับ พอเรานึกไอเดียการกรอกแบบฟอร์มอันนี้มา เราก็ขอยืมชื่อมาใช้ก่อนแล้วกัน ประมาณนี้ครับ😂</p>
          </div>

          <div className='h1-blog'>
            <p>มาเริ่ม ux design process กัน</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>คือผมกับปอมเรียนเรื่อง ux มากันคนละที่ ปอมเรียนที่คณะ ส่วนใหญ่ก็จะสอนเป็นภาษาไทย ส่วนผมเรียนออนไลน์ศัพท์ส่วนใหญ่จะเป็นอังกฤษ แต่ก็คุยกันรู้เรื่องอยู่ครับ 55</p>
          </div>          
          <div className='paragraph'>
            <p>process ที่เรารู้ ๆ ในการทำงาน ux กันก็คือ เริ่มที่ empathize define ideate prototype test ประมาณนี้ใช่ไหมครับ เราก็ใช้ design thinking framework นี้มาปรับใช้กับงานของเรากันครับ อีกทั้งในแต่ละกระบวนการยังมีรายละเอียดปลีกย่อยลงไปอีก</p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/blueprint-proj/Bspp2VGtYAc9QSnkYJizWZ1v5ZdpDfAhNRoiu9Ch.webp' className='blog-image-object'></img>
                <p className='image-description'>ภาพจาก Interaction Design Foundation : Design Thinking</p>
          </div>
          <div className='paragraph'>
            <p>อย่าลืมอีกหนึ่งข้อที่ว่า ตัว framework นี้ไม่ได้ทำเป็นสเตปแล้วจบ มันเป็นกระบวนการที่ทำวน ๆ บางทีเราอาจจะได้ข้อมูลมาแล้ว มา define ปัญหาได้แล้ว ได้ไอเดียแล้ว ในระหว่างกระบวนการนี้ ตอนที่เรากำลังคิดไอเดีย เราอาจจะลืมเก็บข้อมูลบางอย่างจาก user เราก็อาจจะจำเป็นต้องกลับไปเก็บข้อมูลเพิ่มเติม หรือ เราทำ prototype แล้ว เอาไปให้ user เทส ไม่ว่าจะวิธีไหน แต่ตอนเทสเจอปัญหา เราก็อาจจะต้องวนกลับมานั่งดูปัญหานั้น และ ปรับ ๆ กันต่อไป ดังนั้นเราจะเห็นได้ว่า design thinking อันนี้มันทำซ้ำ ๆ ไปเรื่อย ๆ เพื่อให้ได้ final product ออกมาได้ดีที่สุด</p>
          </div>
          <div className='paragraph'>
            <p>หลังจากเราพบปัญหาแล้วและเราก็รู้แล้วว่า user เราคือใคร ดังนั้น เริ่มทำความรู้จักกับ User ของเราเพิ่มเติมกันดีกว่าไหมครับ</p>
          </div>
          <div className='h1-blog'>
            <p>UX Research เริ่ม!</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ด้วยความที่ผมเพิ่งเรียนเรื่องเกี่ยวกับ ux จบ แล้วไปลงเรียนของ IxDF เพิ่ม ไฟมันมา อยากทำมาก เลยเริ่มเก็บข้อมูลเลยครับ</p>
          </div>
          <div className='paragraph'>
            <p>เรารู้ user ของเราแล้วว่าเป็นเด็กอักษรฯ ที่จะต้องมาใช้แอปของเรา เราก็ลงมือเก็บข้อมูลครับ ในการ research ก็ทำการสัมภาษณ์ครับ เราได้นิสิตอักษรหลากหลายชั้นปี มีเรียนคนละหลักสูตร แรก ๆ ก็สัมภาษณ์เพื่อนตัวเอง คนรู้จัก คนในคณะนี่แหละครับ การที่เราได้ข้อมูลที่หลากหลาย เก็บข้อมูลมาได้ประมาณ 11 คนครับในขั้นแรก แต่ละคนก็สัมภาษณ์เฉลี่ยอยู่ที่ประมาณ 15 นาที ครับ </p>
          </div>
          <div className='paragraph'>
            <p>เนื่องจากเราสัมภาษณ์แบบทางโทรศัพท์ ทำให้เราอาจจะไม่รู้ในเรื่องของความรู้สึก หรือ สีหน้าท่าทางระหว่างที่สัมภาษณ์ครับ</p>
          </div>
          <div className='paragraph'>
            <p>ในการสัมภาษณ์ก็ได้ถามเรื่องทั่วไปเช่นเป็นนิสิตอักษร ปีไหน หลักสูตรอะไร หลังจากนั้นถามเรื่องการวางแผนการเรียนครับ ถามเรื่องวิธีการวางแผน หรือมีเครื่องมือที่ใช้ไหม หลังจากนั้นก็ถามเจาะเรื่อย ๆ ครับ</p>
          </div>
          <div className='paragraph'>
            <p>แต่ที่ต้องระวังในการสัมภาษณ์เลยคือเรื่อง bias ครับ เวลาเราคิดคำถามอะไร บางทีเราเองก็อาจไม่รู้ตัวว่าคำถามที่เราถามไปนั้นมีไบแอสปนอยู่ไหม ดังนั้นผมจะวาง outline คำถามไว้ครับว่าจะถามประมาณไหน ๆ และให้เขาเล่ามาเท่าที่เขาอยากเล่า ปล่อยให้เขาเล่า เราก็เก็บข้อมูลครับ</p>
          </div>
          <div className='paragraph'>
            <p>การถามเรื่องชอบหรือไม่ชอบ หรือคำถาม yes/no บางทีก็อาจจะต้องระวังครับ การถามแบบนี้ไม่ใช่คำถามที่ถามแล้วจบ ควรถามถึงเหตุผลที่เขาให้มาและนำมาวิเคราะห์ครับ ตัวคำถามชอบหรือไม่ชอบนี่ ผมว่าเป็นคำถามที่น่าระวังเรื่องไบแอสครับ เราต้องคำนึงถึงบริบทในตอนนั้นที่ถาม user ด้วยว่าเขาคิดอะไรยังไง เพื่อหลีกเลี่ยงการเกิดไปแอสไปโดยที่เราอาจจะไม่รู้ตัวครับ</p>
          </div>
          
          
          <div className='h1-blog'>
            <p>ผลลัพธ์ที่ได้จากการสัมภาษณ์</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>จากการสัมภาษณ์ เราได้รู้จัก user ของเรา ได้เห็นวิธีการที่เขาวางแผนการเรียน ซึ่งมีหลากหลายรูปแบบมาก บางคนก็ไม่วางแผน วางแผนเป็นเทอมต่อเทอม บางคนก็บอกว่า วางเป็นระยะยาวเลย บางคนก็บอกว่าวางแผนตามความชอบของตัวเอง เลยวางแผนเป็นเทอม ๆ ไป เพราะคิดว่าความชอบของตัวเองจะเปลี่ยนไป</p>
          </div>
          <div className='paragraph'>
            <p>อีกทั้งยังพบว่าเครื่องมือที่แต่ละคนใช้วางแผนนั้นมีหลากหลาย ตั้งแต่กระดาษ ยันใช้แอปพลิเคชั่น CUGetReg (แอปวางแผนตารางเรียนแบบเป็นเทอมของนิสิตจุฬา) อีกทั้งยังได้เห็นปัจจัย และ สภาพแวดล้อมที่มีผลต่อการตัดสินใจลงทะเบียนเรียนในแต่ละเทอม ๆ ของ user แต่ละคนด้วยครับ</p>
          </div>
          <div className='paragraph'>
            <p>จริง ๆ ข้อมูลการสัมภาษณ์ตอนนี้เราเก็บมาได้ 11 คน จากที่ตั้งเป้าหมายไว้ 15 คน แต่ก็รู้สึกว่าข้อมูลตอนนี้ค่อนข้างเพียงพอ เพราะการทำ research โดยการสัมภาษณ์มี cost ทั้งฝั่ง user และฝั่งเราด้วยครับ</p>
          </div>
          <div className='h1-blog'>
            <p>ได้ข้อมูลแล้วทำไรต่อ?</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>หลังจากเราสรุปข้อมูลแล้ว ขั้นตอนถัดไปที่ทุกคนอาจจะนึกถึงกันเลยก็คือการสร้าง persona user stories หรือ user journey map ใช่ไหมครับ ซึ่งขั้นตอนการสร้าง persona ตอนนี้ปอมจะเป็นคนสร้าง persona และเราจะมาคุยกันในพาร์ทถัด ๆ ไปครับ</p>
          </div>
          <div className='h1-blog'>
            <p>เพิ่มเติมจากฝั่งผม</p>
          </div>
          <div className='paragraph-next-to-heading'>
            <p>ระหว่างที่รอปอมสร้าง persona ผมก็ลองสร้าง persona ขึ้นมา และลองทำ user journey และกำหนด problem statement หลังจากนั้นก็ลอง identify user’s task ดูโดยการเขียน storyboard ดูครับ ซึ่งอันนี้มันข้ามขั้นไปแล้ว ซึ่งผมก็ลองวาดเล่น ๆ ดูครับ ส่วนที่ใช้งานจริง ๆ ผมก็ต้องมานั่งดูนั่งพิจารณากับปอมอีกทีนึงครับ</p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/blueprint-proj/IMG_20250125_0001.jpeg' className='blog-image-object'></img>
                <p className='image-description'>ภาพ storyboard ที่ผมเขียนลองเล่น ๆ</p>
          </div>
            <div className='paragraph'>
                <p>ตัวอย่าง storyboard ทั้งแบบ big-picture และ close up ที่ผมลองวาดเล่น ๆ ดูครับ ในพาร์ทหน้า หากโปรเจคคืบหน้าแล้วผมจะมาเล่าให้ฟังต่อนะครับ</p>
            </div>
            <div className='paragraph'>
                <p>ทั้งนี้ต้องขอบคุณปอมด้วยที่มาร่วมงานกันครับ และหวังว่าจะได้มาเล่าให้ทุกคนฟังเร็ว ๆ นี้นะครับ 🤩</p>
            </div>
        </div>

        {/* Author */}
        <AuthorWithPom />

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

export default BlueprintProject