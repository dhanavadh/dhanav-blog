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
                    <div className='lg:mr-2'>
                    <p className='p-title mt-6'>I’m a Japanese major with a strong passion for <a className='underlined-body'>web development</a> and <a className='underlined-body'>UI Design</a>. Coding excites me because it allows me to bring creative ideas to life while maintaining structure and organization, which I truly enjoy</p>
                    <p className='p-title mt-3'>Outside of programming, one of my favorite hobbies is playing <a className='underlined-body'>Karuta</a>, a traditional Japanese card game. I’m also an active member of the Bangkok Karuta Club, where I get to engage with others who share this interest.</p>
                    <p className='p-title mt-3'>Additionally, I have a growing interest in <a className='underlined-body'>religious studies</a> and <a className='underlined-body'>philosophy</a>, particularly Buddhist philosophy. I plan to include topics related to philosophy on this site, so you can get to know me better and see the various aspects of who I am.</p>
                    <p className='p-title mt-3'>I’m always eager to explore new opportunities for learning and personal growth, <a className='underlined-body'>so feel free to reach out to me anytime!</a></p>
                    </div>


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
                <Link href='/blogs' className='link'>See more →</Link>                           
            </div>
        </div>
    </div>
  );
}
