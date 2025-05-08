import Author from '@/app/components/BlogElemet/Author'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
    },
    title: 'รีวิวไปแลกเปลี่ยนที่โอซาก้า 2025 – Dhanavadh Saito',
    description: 'แลกเปลี่ยนที่โอซาก้าในปี 2025 เปิดโลกผมให้กว้างขึ้น มาฟังเรื่องของผมกันครับ',
    keywords: 'Dhanavadh, Saito, Arts, arts chula, aksorn, dhanavadh saito, intern, internship, port, portfolio, ธนวัฒน์, ธนวัฒน์ ซาอิโตะ, ซาอิโตะ, นิสิต, นิสิตอักษร, อักษร, อักษร จุฬา ',
    openGraph: {
      title: 'รีวิวไปแลกเปลี่ยนที่โอซาก้า 2025 – Dhanavadh Saito',
      description: 'แลกเปลี่ยนที่โอซาก้าในปี 2025 เปิดโลกผมให้กว้างขึ้น มาฟังเรื่องของผมกันครับ',
      url: 'https://dhanav.me/blogs/other/kansai-cp',
      siteName: 'Next.js',
      images: [
        {
          url: 'https://dhanav.me/content/kansai-cp/image-1.png', // Must be an absolute URL
          width: 800,
          height: 600,
          alt: 'Dhanavadh Saito',
        },
        {
          url: 'https://dhanav.me/content/kansai-cp/image-1.png', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'Dhanavadh Saito',
        },
      ],
      locale: 'th_TH',
      type: 'website',
    },
  }

const KansaiReview = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          {/* <img src='/banner/blog-1.svg' className='blog-banner'></img>                         */}
          <video width="full" autoPlay loop muted preload='auto' playsInline className='blog-banner'>
              <source src="/content/kansai-cp/kansai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>10 minutes Reading</p>
          <p className='title'>รีวิวไปแลกเปลี่ยนที่โอซาก้า 2025</p>
          <p className='sub-title-article mt-2'>แลกเปลี่ยนที่โอซาก้าในปี 2025 เปิดโลกผมให้กว้างขึ้น มาฟังเรื่องของผมกันครับ</p>          
        </div>                                     
        {/* Paragraph */}   
        <div className='max-w-[1000px]'>

          <div className='paragraph'>
            <p>สวัสดีครับ เทรุนะครับ ช่วงที่เดือนที่ผ่านมานั้น ผมได้ไปแลกเปลี่ยนที่ โอซาก้า ประเทศญี่ปุ่นมาครับ ครั้งนี้เลยอยากมาแชร์ว่าตลอดระยะเวลาที่ไปแลกเปลี่ยนได้ทำอะไรไปบ้างครับ</p>
          </div>   
          <div className='paragraph'>
            <p>ช่วงที่ไปก็ประมาณต้นเดือนกุมภาพันธ์ ถึงปลายเดือนมีนาคมครับ ถึงจะดูเป็นระยะเวลาสั้น ๆ แต่ก็ได้เจออะไรเยอะแยะเลยครับ</p>
          </div>   
          <div className='paragraph'>
            <p>โครงการที่ผมไปนั้นเป็นของ <a className='link-inline-violet' href='https://www.jpf.go.jp/e/kansai/' target='_blank'>Japan Foundation</a> ครับ ชื่อโครงการคือ 令和６年度カウンターパート学習者訪日研修（大学生・冬）ครับ หลาย ๆ คนอาจจะนึกว่าไปแลกเปลี่ยนในครั้งนี้คือไปเรียนภาษาอย่างเดียว แต่จริง ๆ แล้วนั้นคือ ได้ไปเที่ยวค่อนข้างเยอะเลยครับ</p>
          </div>   
        
          <div className='h1-blog'>
            <p>โปรแกรมนี้เน้นฝึกภาษา?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>จุดประสงค์ของโปรแกรมที่ผมเข้าร่วมในครั้งนี้คือ จะเป็นการฝึกการสื่อสารมากกว่าที่เราจะไปท่องไวยากรณ์เรียนคำศัพท์ครับ แต่จะเป็นการทำงานกลุ่มกับผู้เข้าร่วมที่มาจากประเทศอื่น ๆ โดยใช้ภาษาญี่ปุ่นในการสื่อสารครับ นอกจากทำกิจกรรมกับผู้เช้าร่วมคนอื่นในห้องเรียนแล้วนั้น ยังได้ไปทัศนศึกษานอกสถานที่ ได้ไปเที่ยวเป็นกลุ่มกับเพื่อน ๆ ที่เข้าร่วมโปรแกรมนี้ ถือว่าค่อนข้างสนุกมากเลยทีเดียวครับ</p>
          </div>  
          <div className='blog-image-div'>
                <img src='/content/kansai-cp/IMG_6705.JPG' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>เตรียมตัวก่อนไปฮิโรชิมะ</p>
          </div>

          <div className='h1-blog'>
            <p>เรียนภาษาผ่าน SDGs?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ตอนที่มาช่วงแรก ๆ เห็นว่าธีมของโปรแกรมนี้จะเน้นเกี่ยวกับ SDGs ตอนแรกที่ได้ยินคิดว่าค่อนข้างน่าเบื่อ แต่พอเรียนจนครบโปรแกรมแล้ว ตัวผมกลับรู้สึกว้าวมากกับสิ่งที่ได้เรียนไป SDGs มันไม่ใช่แค่เป้าหมายอะไรธรรมดา ๆ มันอยู่รอบตัวเราหมด แต่มันอยู่ที่ว่าเราจะเข้าใจและนำมาปรับใช้กับชีวิตได้อย่างไร</p>
          </div>  
          <div className='blog-image-div'>
                <img src='/content/kansai-cp/image-1.png' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>Hiroshima Peace Memorial Park</p>
          </div>

          <div className='paragraph'>
            <p>นอกจากเรียน SDGs ในห้องเรียนแล้วนั้น ทางโครงการได้ให้เราไปศึกษาในพื้นที่จริงด้วยครับ ทั้งได้ไปเจอโฮสต์แฟมิลี่ ไปเที่ยวตามสถานที่ท่องเที่ยวเพื่อดูปัญหา Overtourism หรือพาไปดูโรงเรียนประถมเพื่อศึกษาการเรียนความเป็นอยู่ อาหารการกินของเด็ก ๆ ครับ</p>
          </div>  
          <div className='blog-image-div'>
                <img src='/content/kansai-cp/image-2.png' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>Kokuyo Hows Park</p>
          </div>
          
          <div className='paragraph'>
            <p>ด้วยธีมหลักของเราคือ SDGs ตอนใกล้จะจบโปรแกรมเราก็จะต้องนำเสนอโปรเจคที่เราค้นคว้าระหว่างเข้าร่วมโปรแกรมครับ สำหรับกลุ่มผมนั้น ได้เลือกเรื่อง Universal Design ที่อยู่ในสถานีรถไฟครับ ไว้เดี๋ยวผมมาเล่าแบบละเอียด ๆ ในบทความถัด ๆ ไปนะครับ</p>
          </div>
          
          
          <div className='h1-blog'>
            <p>ชีวิตการเป็นอยู่เป็นอย่างไรบ้าง?</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>ชีวิตการเป็นอยู่ ถ้าพูดสั้น ๆ คือ ค่าครองชีพค่อนข้างแพงครับ ปกติที่โครงการนี้เขาจะออกทุกอย่างให้ครับทั้งค่ากินอยู่ หอพัก ตั๋วเดินทาง เราเสียแค่ค่าทำวีซ่าครับ ซึ่งวีซ่าก็สามารถขอได้ฟรีครับ สำหรับตอนที่ผมสมัครไป (ธันวาคม 2024) ที่พักค่อนข้างดีมากครับ ได้อยู่คนเดียว โรงอาหารก็มี คูปองอาหารเช้ากลางวันเย็นมีให้ครบครับ</p>
          </div>  


          <div className='blog-image-div'>
                <img src='/content/kansai-cp/image-3.png' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>นี่คือวิวจากห้องพักผมครับ พระอาทิตย์ตกสวยมาก✨</p>
          </div>
          <div className='paragraph'>
            <p>แต่เมื่อพูดถึงตอนที่เราใช้ชีวิตในวันหยุด แน่นอนสำหรับผมคือเข้าในเมืองบ่อยมากครับ (ไป Umeda ครับ) ค่ารถไฟจากที่พักไปถึงอุเมดะไปกลับก็ประมาณสองพันเยน ถือว่าค่อนข้างแพงทีเดียวครับสำหรับการเข้าเมืองต่อครั้งครับ หากใครที่จะไปและมีแพลนจะเข้าเมืองบ่อย ๆ อย่างผมไปทุกวันหลังเลิกเรียน แนะนำว่าให้ซื้อ 定期券 ไว้จะดีกว่าครับ</p>
          </div>
          <div className='blog-image-div'>
                <img src='/content/kansai-cp/image-4.jpeg' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>Grand Green Osaka Umekita</p>
          </div>

          <div className='h1-blog'>
            <p>ชีวิตในวันหยุด</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>วันหยุดส่วนใหญ่คือผมจะเข้าอุเมดะตลอดครับ 555 เพราะที่ที่ผมอยู่ไม่มีอะไรเลยครับ อยู่แถว Rinku Town ซึ่งมีแต่เอ้าเลต ครับ นอกจากนั้นก็ไม่มีอะไรแล้ว ผมเลยเลือกที่จะเข้าเมืองบ่อย ๆ ครับ 5555</p>
          </div>  
          <div className='paragraph'>
            <p>อันนี้นอกเรื่องหน่อยนึงครับ อุเมดะใหญ่มาก ใหญ่กว่าสยามน่าจะประมาณสองสามเท่าก็ว่าได้ 5555</p>
          </div>

          <div className='blog-image-div'>
                <img src='/content/kansai-cp/image-5.jpeg' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>Chayamachi – Umeda, Osaka</p>
          </div>

          <div className='h1-blog'>
            <p>เรียนไปแปปๆก็จะต้องกลับแล้ว😭</p>
          </div>   
          <div className='paragraph-next-to-heading'>
            <p>44 วันสำหรับผมถือว่ากำลังพอดีครับ แต่พอช่วงที่ใกล้จะกลับเราก็สนิทกับเพื่อน ๆ มากขึ้น พอจะกลับประเทศนั้นกลายเป็นรู้สึกเหงานิด ๆ ที่จะไม่ได้เจอเพื่อน ๆ เหมือนเดิมแล้ว ก็ค่อนข้างเศร้าเหมือนกันครับ แต่ชีวิตเราก็ต้องดำเนินต่อ 555 สักวันอาจจะมีโอกาสได้พบกัน</p>
          </div>  
          <div className='blog-image-div'>
                <img src='/content/kansai-cp/image-6.png' className='blog-image-object h-[500px]'></img>
                <p className='image-description'>วันสุดท้ายที่ต้องกลับไทย</p>
          </div>

          <div className='paragraph'>
            <p>สำหรับโปรแกรมนี้ ผมรู้สึกดีใจมากที่ได้มา เพราะมันทำให้ผมได้เจออะไรใหม่ ๆ ค่อนข้างเยอะเลยครับ และผมมีเรื่องอยากเล่าอีกมากมาย ไว้ผมจะมาเล่าในพาร์ทถัด ๆ ไปนะครับ🥳</p>
          </div>

        </div>     
        

        {/* Author */}
        <Author />       
    </div>
  )
}

export default KansaiReview