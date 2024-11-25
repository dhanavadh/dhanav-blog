import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-noto-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start md:w-3/5 w-full">
        <div className="">
          <h1 className="text-3xl font-medium">Dhanavadh Saito</h1>
          <h2 className="text-2xl text-gray-500">ธนวัฒน์ ซาอิโตะ</h2>
          <div className="my-4">
            <p className="text-md ">Nothing too much here but, I am a 3rd-year student currently majoring in Japanese language at the <a className="text-pink-500 font-medium hover:underline hover:underline-offset-4" href="https://www.arts.chula.ac.th/th/"
          target="_blank"
          rel="noopener noreferrer">Faculty of Arts, Chulalongkorn University</a>.</p>
          </div>
        </div>
        
        <div className="grid gap-3 lg:flex">
          <div className="w-full border rounded-lg px-4 py-4">
              <div className="">
                <a className="text-[12px] font-medium text-white bg-blue-500 px-2 py-1 rounded-full">completed</a>
              </div>
              <div className="ml-1 mt-2">
                <p className="text-[20px] font-medium">Artsgoz Website</p>
                <p className="text-[14px] mt-1">A commercial project distributed by Arts Student Committee, joined as a full-stack contributor</p>
              </div>
              <div className="mt-2 ml-1 text-[14px]">
                <Link href="https://artsgoz.netlify.app/" className="mr-2 hover:underline hover:underline-offset-4" target="_blank"
          rel="noopener noreferrer">&gt; Gallery</Link>              
                <Link href="https://github.com/dhanavadh/Artsgoz-frontend" className="mr-2 hover:underline hover:underline-offset-4" target="_blank"
          rel="noopener noreferrer">&gt; GitRepo</Link>
              </div>
          </div>
          <div className="w-full border rounded-lg px-4 py-4">
              <div className="">
                <a className="text-[12px] font-medium bg-yellow-500 px-2 py-1 rounded-full">In progress</a>
              </div>
              <div className="ml-1 mt-2">
                <p className="text-[20px] font-medium">Japanese–Thai Dictionary</p>
                <p className="text-[14px] mt-1">A personal experiment aiming to create a Japanese–Thai Dictionary with Golang. Contributing with <a href="https://github.com/Akphawee" className="font-medium text-blue-500 hover:underline hover:underline-offset-4" target="_blank"
          rel="noopener noreferrer">@akphawee</a></p>
              </div>
              <div className="mt-2 ml-1 text-[14px]">                
                <Link href="https://github.com/dhanavadh/mydict-Dictionary" className="mr-2 hover:underline hover:underline-offset-4" target="_blank"
          rel="noopener noreferrer">&gt; GitRepo</Link>
              </div>
          </div>
        </div>
        

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/dhanavadh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github-mark.png"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a> 
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://legacy.dhanav.me/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deprecated profile
        </a>       
      </footer>
    </div>
  );
}
