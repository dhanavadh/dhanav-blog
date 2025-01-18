import Image from 'next/image';
import Link from 'next/link';
import ProjectGroup from './components/ProjectGroup';

export default function Home() {
  return (
    <div className='head-page'>    
        <div className='lg:flex flex-row items-start'>
            {/* Info */}
            <div className='px-4 py-2 text-white max-w-xl mb-4'> 
                    
                    {/* Heading */}
                    <p className='text-7xl font-bold text-blue-500'>Hello !</p>       
                    <p className='text-6xl font-bold mb-2'>I'm Teru</p>
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
            <div className='border-l-4 border-pink-500'>
                
                <ul>          
                {/* <li className='px-4 py-2 text-white'>       
                    <p className='text-body mb-4'>About Me</p>       
                    <p className='title'>Dhanavadh Saito</p>
                    <p className='sub-title'>ธนวัฒน์ ซาอิโตะ</p>     
                </li> */}
                <li className='flex items-center px-4 py-2 text-white'>
                    <Image src='./icons/work.svg' alt='logo' width={32} height={32} className='mr-4 hover:gray-200'/>
                    <Link className='h3 mb-2 link-title' href='/blogs'>Projects →</Link>
                </li>
                <li className='flex items-center px-4 py-2 text-white'>
                    <Image src='./icons/blog.svg' alt='logo' width={32} height={32} className='mr-4 hover:gray-200'/>
                    <Link className='h3 mb-2 link-title' href='/blogs'>Blogs →</Link>
                </li>
                <li className='flex items-start px-4 py-2 text-white'>
                    <Image src='./icons/star.svg' alt='logo' width={32} height={32} className='mr-4 hover:gray-200'/>
                    <Link className='h3 mb-2 link-title' href='/experience'>Experience/Certifications →</Link>
                </li>               
                </ul>
                
            </div>
        </div>
    </div>
  );
}
