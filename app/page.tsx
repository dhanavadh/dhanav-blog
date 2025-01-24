import Image from 'next/image';
import Link from 'next/link';
import LatestBlog from './components/LatestBlog';
import Bio from './components/Bio';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className='head-page'>    
        <div className='lg:flex flex-row items-start gap-8'>
            {/* Info */}
            <div className='py-2 lg:w-2/3 w-full mb-4'> 
                    
                    {/* Heading */}
                    <p className='heading'>Hello !</p>       
                    <p className='sub-heading mb-2'>it's Teru</p>
                    <p className='sub-title'>Dhanavadh Saito</p>

                    {/* Bio */}
                    <Bio />


                    {/* Contact */}
                    <Contact />
            </div>
            {/* Skills */}
            <div className='lg:w-1/3 w-full'>                
                <ul className='border-l-4 border-blue-500'>          
                <li className='flex items-center px-4 py-2'>                    
                    <Link className='mb-2 link-title' href='/projects'>Projects →</Link>
                </li>
                <li className='flex items-center px-4 py-2'>                    
                    <Link className='mb-2 link-title' href='/blogs'>Blogs →</Link>
                </li>
                <li className='flex items-start px-4 py-2'>                    
                    <Link className='mb-2 link-title' href='/experience'>Experience →</Link>
                </li>               
                <li className='flex items-start px-4 py-2'>                    
                    <Link className='mb-2 link-title' href='/about'>About me →</Link>
                </li>               
                </ul>

                {/* Blogs */}
                <div className='my-4'>
                    <Link href='/blogs' className='h3 link-noapply'>Recommended Blogs</Link>
                </div>

                <LatestBlog />    
                <Link href='/blogs' className='link'>See more →</Link>                           
            </div>
        </div>
    </div>
  );
}
