
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { ProfileInfo } from "./components/ProfileInfo";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="bg-[#f2f2f2]">
      <ProfileInfo />    
      <div className='mt-6 mx-10 mb-5 sm:mx-40'>
          <p className='h1'>Projects</p>          
      </div>  
      <Projects />
      <div className=' mx-10 mb-5 sm:mx-40'>
          <p className='h1'>Experiences</p>          
      </div>
      <Experience />
      <Footer />
    </div>
  );
}
