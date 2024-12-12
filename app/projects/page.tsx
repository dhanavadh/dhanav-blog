import Image from "next/image";
import Link from "next/link";
import ProjectComponent from "../components/component";

const projects = [
    {id: "1", name: "Artsgoz Website", status: "completed", description: "A commercial project distributed by Arts Student Committee, joined as a full-stack contributor", links: "https://artsgoz.netlify.app/", img: 'https://legacy.dhanav.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fartsgoz_scr.a64ed4dd.png&w=3840&q=75' },
    {id: "2", name: "Artsgoz Website", status: "completed", description: "A commercial project distributed by Arts Student Committee, joined as a full-stack contributor", links: "https://artsgoz.netlify.app/", img: 'https://legacy.dhanav.me/_next/static/media/aw2.5c329596.svg' },
    {id: "3", name: "Artsgoz Website", status: "completed", description: "A commercial project distributed by Arts Student Committee, joined as a full-stack contributor", links: "https://artsgoz.netlify.app/", img: 'https://legacy.dhanav.me/_next/static/media/aw2.5c329596.svg' },
    {id: "4", name: "Artsgoz Website", status: "completed", description: "A commercial project distributed by Arts Student Committee, joined as a full-stack contributor", links: "https://artsgoz.netlify.app/", img: 'https://legacy.dhanav.me/_next/static/media/aw2.5c329596.svg' },
]

const page = () => {
  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-noto-sans)]">
        <div className="max-w-3xl">

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, excepturi vitae commodi, adipisci quaerat ea consequatur perspiciatis ipsam recusandae totam modi aut neque soluta minus odio ab ducimus, cumque obcaecati?</p>
        </div>
      
      <ProjectComponent />
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
  )
}

export default page