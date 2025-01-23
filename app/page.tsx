import Image from 'next/image';
import Link from 'next/link';
import LatestBlog from './components/LatestBlog';
import Bio from './components/Bio';

export default function Home() {
  return (
    <div className='head-page'>    
        <div className='lg:flex flex-row items-start gap-6'>
            {/* Info */}
            <div className='py-2 lg:w-2/3 w-full mb-4'> 
                    
                    {/* Heading */}
                    <p className='heading'>Hello !</p>       
                    <p className='sub-heading mb-2'>it's Teru</p>
                    <p className='sub-title'>Dhanavadh Saito</p>

                    {/* Bio */}
                    <Bio />


                    {/* Contact */}
                    <p className='h3 mt-6 mb-2'>Reach me via</p>
                    <div className='flex flex-col gap-1'>                    
                        <Link
                        className="flex items-center gap-2 link"
                        href="mailto:dhanavadh@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            aria-hidden
                            src="icons/mail.svg"
                            alt="mail"
                            width={16}
                            height={16}
                        />
                        dhanavadh@gmail.com
                        </Link>
                        <Link
                        className="flex items-center gap-2 link"
                        href="https://github.com/dhanavadh"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            aria-hidden
                            src="/github-mark.svg"
                            alt="GitHub icon"
                            width={16}
                            height={16}
                        />
                        @dhanavadh
                        </Link>
                        <Link
                        className="flex items-center gap-2 link"
                        href="https://www.linkedin.com/in/dhanav/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <Image
                            aria-hidden
                            src="/ln.svg"
                            alt="LinkedIn icon"
                            width={16}
                            height={16}
                        />
                        @dhanav
                        </Link>
                    </div>
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
                    <Link href='/blogs' className='h3 link-noapply'>Latest Blogs</Link>
                </div>

                <LatestBlog />    
                <Link href='/blogs' className='link'>See more →</Link>                           
            </div>
        </div>
    </div>
  );
}
