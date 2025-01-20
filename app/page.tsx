import Image from 'next/image';
import Link from 'next/link';
import ProjectGroup from './components/ProjectGroup';
import LatestBlog from './components/LatestBlog';

export default function Home() {
  return (
    <div className='head-page'>    
        <div className='lg:flex flex-row items-start gap-6'>
            {/* Info */}
            <div className='py-2 lg:w-2/3 w-full mb-4'> 
                    
                    {/* Heading */}
                    <p className='text-7xl font-bold text-blue-500'>Hello !</p>       
                    <p className='text-6xl font-bold mb-2'>it's Teru</p>
                    <p className='sub-title'>Dhanavadh Saito</p>

                    {/* Bio */}
                    <p className='p-title mt-4'>I’m a Japanese major with a passion for <a className='underline-highlight'>web development</a> and <a className='underline-highlight'>UI design</a>. I love coding because it lets me bring ideas to life while keeping things organized and structured, which I really enjoy.</p>
                    <p className='p-title mt-2'>Outside of programming, I love playing <a className='underline-highlight'>karuta</a>, a traditional Japanese card game. I’m also a member of the Bangkok Karuta Club. I’m always looking for new opportunities to learn and grow, so feel free to reach out to me!</p>

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
                <p className='h3 my-4'>Latest Blogs</p>

                <LatestBlog />    
                <Link href='/blog' className='link'>See more →</Link>                           
            </div>
        </div>
    </div>
  );
}
