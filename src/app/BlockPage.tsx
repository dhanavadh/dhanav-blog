import React from 'react'

const BlockPage = () => {
  return (
    <div>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <a className="cursor-pointer text-3xl font-mono" href="/">./dhanav blog</a>
        <p>my blog for spreading any ideas i have</p>

        <div className="flex gap-4 items-center flex-col mt-4">
          <div className='flex w-128 shadow drop-shadow-2xl px-3 py-3'>            
            <div className='mr-3'>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,200&icon_names=kid_star" />
              <span className="material-symbols-outlined text-pink-500">kid_star</span>
            </div>
            <div>
              <p className='text-xl font-medium mb-2'>Special Interview: เข้าใจแนวคิดนาซี ผ่านบทสัมภาษณ์ ผศ. ดร. ตุลย์ อิศรางกูร ณ อยุธยา</p>
              <p className='text-md'>“ระบอบนาซี” กับเหตุการณ์การฆ่าล้างเผ่าพันธุ์ที่โหดร้ายเกินกว่ามนุษย์จะจินตนาการได้ เป็นคำที่เราได้ยินบ่อยครั้งเมื่อกล่าวถึงเหตุการณ์ในสงค</p>
            </div>
          </div>
          <div className='flex w-128 shadow drop-shadow-2xl px-3 py-3'>            
            <div className='mr-3'>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,200&icon_names=kid_star" />
              <span className="material-symbols-outlined text-pink-500">kid_star</span>
            </div>
            <div>
              <p className='text-xl font-medium mb-2'>Special Interview: เข้าใจแนวคิดนาซี ผ่านบทสัมภาษณ์ ผศ. ดร. ตุลย์ อิศรางกูร ณ อยุธยา</p>
              <p className='text-md'>“ระบอบนาซี” กับเหตุการณ์การฆ่าล้างเผ่าพันธุ์ที่โหดร้ายเกินกว่ามนุษย์จะจินตนาการได้ เป็นคำที่เราได้ยินบ่อยครั้งเมื่อกล่าวถึงเหตุการณ์ในสงค</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://dhanav.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          dhanav.me →
        </a>
      </footer>
    </div>
    </div>
  )
}

export default BlockPage