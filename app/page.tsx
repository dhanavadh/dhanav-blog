
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { ProfileInfo } from "./components/ProfileInfo";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2] flex flex-col items-start">
      <div className='bg-white mt-12 mb-12 mx-10 sm:mx-40 border-l-8 border-red-500 px-4 py-2'> 
          <p className='text-xl font-bold text-red-700'>Deprecated Page</p>          
          <p className='text-lg'>This page is deprecated. To see the new ones, please visit <a href="https://dhanav.me/" target="_blank" className="hover:underline underline-offset-2">https://dhanav.me/</a></p>          
      </div>  
      <ProfileInfo />    
      <div className='mt-6 mx-10 mb-2 sm:mx-40'>
          <p className='h1'>Projects</p>          
      </div>  
      <Projects />
      <div className=' mx-10 mb-2 sm:mx-40'>
          <p className='h1'>Experiences</p>          
      </div>
      <Experience />
      <Footer />
    </div>
  );
}
