const projects = [
    {id: "1", name: "Social Media Contact Center Agent", status: "Full-time Jobber", place: "Advanced Info Services Plc. (AIS)", duration: "Oct 2021 - Aug 2022 · 11 mos", links: "https://www.linkedin.com/in/dhanav/", img: 'https://media.jobthai.com/v1/images/logo/128591_logo_201909200928.png' },
    {id: "2", name: "Accessibility Hackathon 2024", status: "Participation", place: "Microsoft ASEAN AI for Accessibility Hackathon 2024", duration: "June 12, 2024", links: "./Hackathon/Hackathon-microsoft.pdf", img: './Hackathon/1734420054083-4f0b50e9-38e9-4022-b96f-5ebf8c01b375_1.jpg' },    
]

const Experience = () => {
  return (
    <div className='grid w-full items-center font-[family-name:var(--font-noto-sans)]' id='product'>
        <div className="w-full overflow-x-auto scrollbar-hide">
            <div className="whitespace-nowrap">
                <ul className='flex mx-10 mt-4 sm:mx-36 pb-10 mb-2'>
                    {projects.map((item) => (
                        <li key={item.id} className='mx-2 rounded-xl hover:shadow-xl'>
                            <div className='grid w-full shadow-lg hover:shadow-2xl duration-300'>
                            <div className='grid h-96 w-80 items-center'>
                                <div className='relative h-96'>
                                    <img src={item.img} className='w-full h-full rounded-lg object-cover absolute brightness-50' alt={item.name}></img>                                    
                                    <div className='absolute bottom-1 px-4 py-2'>
                                        <div className='mb-2 '>
                                            <a className='text-white text-sm px-2 py-1 bg-blue-500 rounded-2xl'>{item.status}</a>    
                                        </div>                                        
                                        <p className='text-2xl font-medium text-white whitespace-normal'>{item.name}</p>
                                        <p className='mt-1 text-white font-medium whitespace-normal'>{item.place}</p>
                                        <p className='mt-1 text-white whitespace-normal'>{item.duration}</p>
                                        <div className='my-2'>
                                            <a className='text-lg font-medium text-white hover:underline hover:underline-offset-2'　href={item.links} target='_blank'>See Link →</a>
                                        </div>
                                    </div>
                                    
                                </div>  
                            </div>
                            
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience