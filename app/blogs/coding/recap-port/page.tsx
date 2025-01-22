import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Reference = [
    {
        id: 1,
        name: 'Figma. (nd.) Typography in design.',
        link: 'https://www.figma.com/resource-library/typography-in-design/#_5-most-popular-kinds-of-typefaces'
    },    
    {
        id: 2,
        name: 'W3C Web Accessibility Initiative (WAI). (2024.) Use of Color (Level A).',
        link: 'https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html'
    },    

]

const BlogUXImplement = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 max-w-full relative -z-[1]'>
          <img src='/banner/webremake.svg' className='blog-banner'></img>                        
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>

        {/* Heading */}
        <div className='blog-heading'>          
          <p className='blog-reading'>10 minutes Reading</p>
          <p className='title'>Review พอร์ตโฟลิโอของผมที่สร้างแบบยังไม่รู้เรื่อง UX</p>
          <p className='sub-title-article mt-2'>จากคนที่สร้างเว็บโดยที่ใช้ความรู้สึกโดยไม่มีความรู้เรื่อง UX เลย ผมจะพาไปดูว่ากว่าจะมาเป็นพอร์ตเวอร์ชั่นปัจจุบันนั้น ผมเคยปรับเปลี่ยนพอร์ตของตัวเองมายังไงบ้าง</p>            
        </div>      


        {/* Paragraph */}                

       <div>
          <div className='paragraph'>
              <p>สวัสดีครับ เทรุ นะครับ เจ้าของเว็บนี้เอง วันนี้ผมจะพาไปดูว่ากว่าจะมาเป็นพอร์ตเวอร์ชั่นปัจจุบันนั้น ผมเคยปรับเปลี่ยนพอร์ตของตัวเองมายังไงบ้าง ถ้านับรวมเว็บอันนี้ ก็นับว่าเป็นเว็บที่ 3 ที่ผมทำขึ้นมาใหม่ครับ โดยในบทความนี้ผมจะขอเล่าเรื่องเกี่ยวกับเว็บพอร์ตอันแรกและอันที่ 2 ที่เคยทำมาครับ ส่วนรายละเอียดเกี่ยวกับบทที่ 3 จะขอแยกไปอีกอันครับ!</p>
            </div>   
            <div className='h1-blog'>
              <p>เว็บไซต์อันแรกของผม</p>
            </div>   
            <div className='paragraph-next-to-heading'>
              <p>ตอนช่วงต้นปี 2024 ผมรู้สึกว่าตัวเองต้องมีเว็บไซต์ไว้เก็บผลงานของตนเอง ด้วยตัวผมที่ทำงานด้าน frontend มา ก็เลยอยากเขียนโค้ดขึ้นมาเองเลย แต่ตอนนั้นยังขาดความรู้ในหลาย ๆ เรื่องเกี่ยวกับหลักการออกแบบ หรือ Design Principle เช่น Hierarchy, Typography หรือ เรื่องสีที่ต้องคำนึงเรื่อง contrast ของสี ให้ user มองเห็นได้ชัดเจน</p>
            </div>   
            <div className='paragraph'>
              <p>ลองมาดูเว็บที่ผมสร้างอันแรกกันครับ มัน user-friendly ไหม</p>
            </div>   

            {/* Image Class */}
            <div className='blog-image-div'>
              <img src='/content/recap-port/img-3.png' className='blog-image-object'></img>
              <p className='image-description'>ภาพเว็บไซต์แรกของผม</p>
            </div>

            <div className='paragraph'>
              <p>ตอนนั้นผมก็รู้สึกว่าเว็บที่ผมทำเองก็ไม่ได้ดูแย่ แต่มาดูในปัจจุบัน ผมรู้สึกว่าเว็บนี้ User Unfriendly ค่อนข้างมาก สังเกตจากเรื่อง Typography เลยเป็นอย่างแรก font ที่ใช้ทั้งเว็บเป็นแบบ mono ผมรู้สึกว่าการใช้ฟอนต์แบบ mono ค่อนข้างส่งผล Readability ที่ไม่ดีให้กับ user ถ้าใช้กับทั้งเว็บไซต์แบบนี้ อีกทั้ง เนื้อหาดูโล่ง ๆ แต่อะไรดูใหญ่ไปหมด </p>
            </div>   
            <div className='paragraph'>
              <p>ปัญหาถัดมาคือเรื่องของข้อมูลที่ไม่เพียงพอ ไม่มีข้อมูลการติดต่อ รายละเอียดเกี่ยวกับโปรเจคก็ไม่พอ ถ้ามีคนเข้ามาใช้เว็บไซต์อาจจะไม่รู้ก็ได้ว่าเราทำอะไรเป็น มีแค่โปรเจคแต่ไม่มีข้อมูลติดต่อ อันนี้ก็อาจเป็นข้อเสียอีกหนึ่งข้อของเว็บไซต์นี้ อย่างไรก็ดี ผมยังมองเห็นถึงข้อดีประการหนึ่งคือ ยังมี navigation bar ให้ user อยู่</p>
            </div>   
            <div className='h1-blog'>
              <p>Hierarchy</p>
            </div>   
            <div className='paragraph-next-to-heading'>
              <p>ผม ในตอนนั้น ไม่รู้จักกับ design principles การสร้างเว็บของผมส่วนใหญ่ก็มาจากสิ่งที่เรียกว่า “ก็รู้สึกว่ามันเป็นแบบนี้” มาใช้ค่อนข้างเยอะ และสิ่งนี้มันสร้างประสบการณ์ที่ไม่ดีให้กับผู้ใช้งาน จากภาพข้างบนจะเห็นว่า การให้ความสำคัญกับข้อความโดยใช้ขนาดของตัวอักษรนั้น ไม่เหมาะสมเท่าไหร</p>
            </div>   

            {/* Image Class */}
            <div className='blog-image-div'>
              <img src='/content/recap-port/img-12.png' className='blog-image-object'></img>
              <p className='image-description'>ภาพแสดงให้เห็นถึงการไม่ใช้ Hierarchy เข้ามาจัดการกับความสำคัญของข้อความ</p>
            </div>

            <div className='paragraph'>
              <p>ลองมาดูส่วนแรกกันครับ ส่วนชื่อของผมนั้น ใหญ่เห็นได้ชัดเจนดี แต่ลองดูตรงส่วน ข้อความด้านล่างดูครับ จะเห็นได้ว่ามีความต่างกันค่อนข้างมาก ถึงแม้เราอยากจะให้ user ดู ที่ชื่อเราก่อนเป็นลำดับแรก แต่ส่วนอธิบายเกี่ยวกับตัวผม ตัวอักษรถือว่าเล็กไปค่อนข้างมาก ส่งผลให้ผู้อ่าน อ่านข้อมูลได้ลำบาก อีกทั้งยังเป็น Typeface แบบ monospaced อีก ภาพรวมในส่วนแรกที่เราจะเห็น ๆ คือ Hierarchy มันต่างกันเกินไปก็ไม่ดี</p>
            </div>   
            <div className='paragraph'>
              <p>ส่วนที่สองกับส่วนที่สาม เราจะเห็นว่า ข้อความหัวข้อ projects นั้นจะมีเซตของโปรเจคที่ผมเคยทำไว้ แต่ปัญหาคือ หัวข้อโปรเจค Artsgoz Website นั้นดันใหญ่กว่าส่วน Projects สิ่งเหล่านี้ส่งผลอย่างไร ? คือ ลำดับ hierarchy มันต่างกัน การไล่ลำดับนั้นก็เพื่อให้เห็นจากสิ่งที่สำคัญมากสุดไปสิ่งที่สำคัญรองลงมา แทนที่ Project จะเป็น topic และดูสำคัญกว่าตัวหัวข้อโปรเจคแต่ละอัน แต่กลับกลายเป็นว่า หัวข้อย่อยดันใหญ่กว่าหัวข้อหลัก ซึ่งอาจทำให้ user สับสนได้ว่าอะไรเป็นอะไร มันดูกระจัดกระจายไม่สม่ำเสมอ</p>
            </div>   

            {/* Image Class */}
            <div className='blog-image-div'>
              <img src='/content/recap-port/img-8.png' className='blog-image-object'></img>
              <p className='image-description'>ภาพแสดงให้เห็นถึงการไม่ใช้ Hierarchy เข้ามาจัดการกับความสำคัญของข้อความ</p>
            </div>

            <div className='paragraph'>
              <p>อีกทั้งในส่วนของ Projects นั้น จะเห็นได้ว่า element ที่ใส่ลงไปมีขนาดค่อนข้างใหญ่ เมื่อ user เข้ามาในเว็บเรา อาจให้ความรู้สึกอึดอัด การสร้างเว็บโดยใช้ grid system และมี margin/padding ให้กับ element ก็อาจจะเข้ามาช่วยในเรื่องนี้ ทำให้ทุกอย่างดูเป็นชิ้นเป็นอัน ไม่ใช่เป็นก้อนแบบนี้เสียทีเดียว</p>
            </div>   
            <div className='paragraph'>
              <p>ในส่วน Title ของโปรเจคดังกล่าว กับ Description นั้น ขนาดต่างกันค่อนข้างมาก และไม่มีการเว้นระยะจากกัน อาจทำให้อ่านรายละเอียดเกี่ยวกับโปรเจคต่าง ๆ ได้ยากมากขึ้น</p>
            </div>   

            <div className='h1-blog'>
              <p>Typography</p>
            </div>   
            <div className='paragraph-next-to-heading'>
              <p>จากเว็บแรกที่ผมได้เขียนขึ้นมานั้น ผมไม่ได้มีความรู้เรื่องนี้เลย อาศัยประสบการณ์จากที่เคยมีมาประกอบ จากในภาพจะเห็นว่าทั้งหน้าเว็บผมใช้ typeface เป็น monospaced หมดเลย ตอนนั้นที่มช้ก็เพราะเห็นว่าสวยดี เหมือนเขียนโค้ด แต่โดยส่วนตัวผม ณ ตอนนี้ รู้สึกว่าการที่ user ต้องมาอ่านข้อมูลเราควรที่จะเจอ text ที่อ่านแล้วสบายตา </p>
            </div>   

            {/* Image Class */}
            <div className='blog-image-div'>
              <img src='/content/recap-port/img-9.png' className='blog-image-object'></img>
              <p className='image-description'>ภาพแสดงให้เห็นถึงการ typeface แบบ monospaced ทั้งหน้า</p>
            </div>

            <div className='paragraph'>
              <p>Monospaced เป็น typewriter-style typeface ตัวอักษร และ spacing ก็จะฟิกไว้ ทำให้ความกว้างของแต่ละตัวอักษรออกมาเท่ากัน (ดูอ้างอิง, Figma, nd.) การใช้ monospaced ที่เราเห็นกันส่วนใหญ่ ก็มีไว้ใช้กับพวก code block หรือ command ต่าง ๆ การที่นำมาใช้กับเนื้อหาธรรมดา ก็อาจจะไม่ใช่ practice ที่ทำกันเป็นประจำ</p>
            </div>   
            <div className='paragraph'>
              <p>จากรูปภาพด้านบนจะเห็นว่าข้อมูลทั้งหมดใช้ monospaced ทั้งหมดเลย การใช้ทั้งหมดแบบนี้อาจจะส่งผลให้ user ต้องใช้เวลามากขึ้นในการอ่าน การเลือก typeface อื่น ๆ ก็อาจจะเป็นตัวเลือกที่เหมาะสมมากกว่านี้</p>
            </div>  

            <div className='h1-blog'>
              <p>Color/Contrast</p>
            </div>   
            <div className='paragraph-next-to-heading'>
              <p>การเลือกใช้สีนับว่าเป็นเรื่องที่สำคัญอีกเรื่องหนึ่งของการทำหน้าเว็บที่ให้ประสบการณ์ที่ดีต่อผู้ใช้งาน โดยอาจนำมาใช้เป็น visual element เพื่อสื่อสาร หรือ แยกความแตกต่างของข้อมูล และอาจบ่งบอกได้ถึง identity ของเว็บไซต์นั้น ๆ</p>
            </div>  

            {/* Image Class */}
            <div className='blog-image-div'>
              <img src='/content/recap-port/img-7.png' className='max-h-3xl rounded-lg'></img>
              <p className='image-description'>Color Contrast ที่ไม่ตอบโจทย์เรื่อง Accessibility</p>
            </div>

            <div className='paragraph'>
              <p>การเลือกใช้สีในเว็บไซต์เดิมนั้นจะเห็นได้ว่า ผมไม่ได้มีสี primary ซึ่งมันไม่ได้สร้าง identity ให้กับตัวเว็บของผมเลย และปัญหาอีกอย่างคือเรื่องของ color contrast ของตัว background และ text ในแต่ละ element ที่ไม่ได้พิจารณาตามหลัก WCAG Accessibility Criteria</p>
            </div>   
            <div className='paragraph'>
              <p>เมื่อพูดเรื่องสีก็จะเกี่ยวโยงกับเรื่อง accessibility ด้วยเหมือนกัน เราต้องเข้าใจก่อนว่าเรื่องของสีเป็นการรับรู้ทางผัสสะ ซึ่งการมองเห็นของแต่ละคนอาจไม่เหมือนกัน แต่การที่เราทำเว็บไซต์ เราควรให้ผู้ใช้งานเข้าถึงได้ทุกคน บางคนอาจมองเห็นสีไม่เหมือนกัน แล้วการนำสีมาใช้กับ element ในเว็บไซต์นั้น ก็อาจจะต้องอิงตามหลัก Color Contrast ของ WCAG</p>
            </div>   

            {/* Image Class */}
            <div className='blog-image-div'>
              <img src='/content/recap-port/img-1.png' className='max-h-3xl rounded-lg'></img>
              <p className='image-description'>WCAG Accessibility Criteria: Adobe Color Contrast Checker</p>
            </div>

            <div className='paragraph'>
              <p>จากสีที่ผมใช้กับเว็บไซต์เดิม จะเห็นว่า Contrast Ratio ไม่ผ่านอยู่ดี ดังนั้น การเลือกใช้สีเพื่อให้เว็บสร้างประสบการณ์ที่ดีที่สุดให้กับ user ก็ควรที่จะคำนึงถึงเรื่องนี้ด้วยเป็นอีกหนึ่งเรื่องที่สำคัญ</p>
            </div>   

            <div className='h1-blog'>
              <p>พอร์ตอันที่สอง</p>
            </div>  
            
            {/* Image Class */}
            <div className='blog-image-div'>
              <img src='/content/recap-port/img-4.png' className='max-h-3xl rounded-lg'></img>
              <p className='image-description'>เว็บไซต์อันที่สอง</p>
            </div>

            <div className='paragraph'>
              <p>พอร์ตอันนี้ผมก็ทำในช่วงที่ผมไม่ได้เรียนเกี่ยวกับ UX ยังคงใช้สิ่งที่เรียกว่า “ความรู้สึกว่ามันต้องเป็นแบบนี้” สร้างพอร์ตนี้ออกมา พอร์ตนี้ ถือว่าค่อนข้างเรียบ ๆ ง่าย ๆ โชว์โปรเจคกับประสบการณ์ที่เคยมี</p>
            </div>   

            <div className='h1-blog'>
              <p>ปัญหาในพอร์ตนี้คืออะไร?</p>
            </div>   
            <div className='paragraph-next-to-heading'>
              <p>ข้อมูลเกี่ยวกับตัวผมมันน้อยเกินไปครับ คนเห็นชื่อ เห็นโปรเจค เห็นประสบการณ์ แต่ไม่เห็นว่าเราทำอะไรได้ ไม่รู้ตัวตนของเรา ข้อมูลติดต่อก็ไม่ได้ให้อะไรนอกจากลิงก์ GitHub ผมมองว่าสิ่งนี้เป็นปัญหาครับ</p>
            </div>  
            <div className='paragraph'>
              <p>ผมมานึกได้ว่าถ้าเราเป็นคนที่ไม่รู้จักเราละมาดูเว็บเรา เขาก็อาจจะได้แค่อ๋อ คนนี้ทำโปรเจคนี้ ๆ นะ แต่เขาก็รู้แค่นั้น ก็จบ แต่ผม ในปัจจุบัน ปี 2025 มองว่าคนสามารถรู้จักเราได้มากกว่านี้ผ่านเว็บไซต์ของเรา ดังนั้นผมควรจะมี showcase บางอย่างให้กับเว็บผม ผมจึงตัดสินใจรีเมคเว็บใหม่ครับ</p>
            </div>   
            <div className='h1-blog'>
              <p>สรุปภาพรวม</p>
            </div>   
            <div className='paragraph-next-to-heading'>
              <p>เว็บแรกที่ผมสร้างขึ้นมา like make it from scratch โดยใช้ประสบการณ์ของตัวเองในการตัดสินว่าอะไรควรเป็นแบบไหน ผลลัพธ์ที่ได้ออกมาก็ถือว่าสื่อสารและให้ประสบการณ์ที่ดีกับ user ค่อนข้างยาก เพราะปัญหาตามที่กล่าวไว้ข้างต้นไม่ว่าจะเป็น เรื่อง typo, color contrast, accessibility, hierarchy การที่เกิดเหตุการณ์แบบนี้ขึ้นเพราะขาดความเข้าใจใน user และไม่มีความรู้เกี่ยวกับหลักการออกแบบ และ User Experience</p>
            </div>  
            <div className='paragraph'>
              <p>ตัว User Experience นี้ สำหรับผมในฐานะคนนึงที่ผ่านการเริ่มสร้างเว็บไซต์แบบไม่รู้หลัก UX/UI ผมมองว่า UX จริง ๆ แล้วสำคัญค่อนข้างมาก กับในหลาย ๆ สถานการณ์ สำหรับ UX กับการพัฒนาเว็บไซต์นั้น ทำให้ผมได้พิจารณาของจุดประสงค์ของการทำเว็บไซต์จริง ๆ ว่า ทำเพื่ออะไร เพื่อใคร และเราจะส่งมอบประสบการณ์ที่ดีที่สุดให้กับ user ได้อย่างไร core ของ UX คือ user-centric และเว็บไซต์ก็ควรที่จะเป็นแบบนั้นจริง ๆ สำหรับในความคิดผม</p>
            </div>   
            <div className='paragraph'>
              <p>อีกทั้งในเรื่องของธุรกิจ หากเราสร้างเว็บขึ้นมาเองแบบไม่สนใจความรู้พวกนี้ มันอาจทำให้เราสูญเสียหรือพลาดโอกาสในการเข้าถึงลูกค้าของเราได้ เช่น ร้านขายของส่ง หน้างานอาจขายดีมาก แต่เว็บไซต์ของร้านอาจไม่ได้ใช้แนวคิด UX เข้ามาพัฒนาด้วย เมื่อลุกค้าเข้าเว็บไซต์เรา ก็อาจจะเกิด impression ต่อร้านของเราน้อยลง หรือในบางกรณีที่ผู้ใช้งานเข้าไปแล้วเจอแต่อะไรไม่รู้เต็มไปหมด ไม่รู้จะดูตรงไหนดี ลูกค้าอาจจะออกจากเว็บเราและไปเว็บของคู่แข่งได้</p>
            </div>   
            <div className='paragraph'>
              <p>จากที่ผมได้ยกตัวอย่างไปนั้น ผมรู้สึกว่า แนวคิดเรื่อง UX ค่อนข้างมีผลอย่างมากต่อมนุษย์ สามารถสร้าง impact บางอย่างให้กับ product ของเราได้</p>
            </div>   
            <div className='paragraph'>
              <p>ในพาร์ทหน้า ผมจะขอแนะนำเรื่องการใช้ความรู้เรื่อง UX/UI มาใช้ปรับปรุงกับพอร์ตโฟลิโอของผมที่ (อาจจะ) ให้ user เกิด impression ที่ดีขึ้นได้ครับ 😃</p>
            </div>   
       </div>

        {/* Author */}
        <Author />

        {/* Reference */}
        <div className='h3 border-l-4 border-blue-500 pl-4'>
          <p className='h3'>Reference</p>
          {Reference.map((item) => (
            <ul className='p my-2 list-disc ml-4' key={item.id}>
            <li>
                <p>{item.name}</p>
                <Link href={item.link} className='link max-w-fit' target='_blank'>Get this reference →</Link>
            </li>
            </ul>      
          ))}    
        </div>  
        {/* Navigator */}          
    </div>
  )
}

export default BlogUXImplement