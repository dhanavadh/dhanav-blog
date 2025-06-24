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
    title: 'User Experience ในสถานีรถไฟของญี่ปุ่น – Dhanavadh Saito',
    description: 'รถไฟสำหรับประเทศญี่ปุ่นนั้นถือเป็นการเดินทางที่สำคัญเลยก็ว่าได้ และ UX เข้ามามีบทบาทอย่างไรกับการให้บริการรถไฟ?',
    keywords: 'Dhanavadh, Saito, Arts, arts chula, aksorn, dhanavadh saito, intern, internship, port, portfolio, ธนวัฒน์, ธนวัฒน์ ซาอิโตะ, ซาอิโตะ, นิสิต, นิสิตอักษร, อักษร, อักษร จุฬา ',
    openGraph: {
      title: 'รีวิวไปแลกเปลี่ยนที่โอซาก้า 2025 – Dhanavadh Saito',
      description: 'รถไฟสำหรับประเทศญี่ปุ่นนั้นถือเป็นการเดินทางที่สำคัญเลยก็ว่าได้ และ UX เข้ามามีบทบาทอย่างไรกับการให้บริการรถไฟ?',
      url: 'https://dhanav.me/blogs/other/uxintrain',
      siteName: 'Next.js',
      images: [
        {
          url: 'http://stageengine.iconroof.co.th/public/asset/pers/content/kansai-cp/image-1.png', // Must be an absolute URL
          width: 800,
          height: 600,
          alt: 'Japan Foundation Exchange Program',
        },
        {
          url: 'http://stageengine.iconroof.co.th/public/asset/pers/content/kansai-cp/image-1.png', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'Japan Foundation Exchange Program',
        },
      ],
      locale: 'th_TH',
      type: 'website',
    },
  }

const uxInTrain = () => {
  return (
    <div className='blog-panel'>
        {/* Banner */}
        <div className='flex max-h-3/4 min-w-full relative -z-[1]'>
          {/* <img src='/banner/blog-1.svg' className='blog-banner'></img>                         */}
          <video width="full" autoPlay loop muted preload='auto' playsInline className='blog-banner'>
              <source src="http://stageengine.iconroof.co.th/public/asset/pers/content/uxintrain/uxui.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className='blog-banner-object'>            
            <p className='ref-image'>Image from @dhanavadh</p>            
          </div>
        </div>   

        {/* Heading */}
        <div className='blog-heading'>
            <p className='blog-reading'>10 minutes Reading</p>
          <p className='title'>User Experience ในสถานีรถไฟของญี่ปุ่น</p>
          <p className='sub-title-article mt-2'>รถไฟสำหรับประเทศญี่ปุ่นนั้นถือเป็นการเดินทางที่สำคัญเลยก็ว่าได้ และ UX เข้ามามีบทบาทอย่างไรกับการให้บริการรถไฟ?</p>          
        </div>                                     
        {/* Paragraph */}   
        <div className='max-w-[1000px]'>

          <div className='paragraph'>
            <p>วันนี้จะมาแชร์เกี่ยวกับ UX ในสถานีรถไฟในญี่ปุ่น จะเป็นอย่างไรนั้น ผมจะมาอัปเดตให้ฟังนะครับ</p>
          </div>             

        </div>     
        

        {/* Author */}
        <Author />       
    </div>
  )
}

export default uxInTrain