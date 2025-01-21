import Link from 'next/link'
import React from 'react'

const Jobs = [
    {
        id: 1, name:"Fullstack Web Developer/Data Analyst", description:"I worked part-time as a Contact Center Agent for nearly a year, engaging with customers through the social media platforms of AIS and ACC.", 
        role:"Part-time",
        year:"Currently since October, 2024",
        corp:"ICON ROOF CO., LTD."
    },    
    {
        id: 2, name:"Social Media Contact Center Agent", description:"I worked part-time as a Contact Center Agent for nearly a year, where I engaged with customers through the social media platforms of AIS and ACC. This experience helped me develop CRM knowledge, familiarity with Knowledge Base systems, and significantly enhanced my communication skills.", 
        role:"Part-time",
        year:"Oct 2021 - Aug 2022 · 11 mos",
        corp:"Advanced Info Services Plc. (AIS)"
    },    
]

const Certificates = [    
    {   id: "1", 
        name: "Accessibility Hackathon 2024 – Participation", 
        status: "Hackathon", 
        place: "Microsoft ASEAN AI for Accessibility Hackathon 2024", 
        duration: "June 12, 2024", 
        link: "./certificate/Hackathon-microsoft.pdf", 
        img: './certificate/1734420054083-4f0b50e9-38e9-4022-b96f-5ebf8c01b375_1.jpg',
        description: "I participated in the Microsoft ASEAN AI for Accessibility Hackathon 2024. I worked on a team to develop an application that helps people with disabilities to get their tasks done more easily by using MS Azure Services."
    },    
    {   id: "2", 
        name: "Foundations of User Experience (UX) Design", 
        status: "Certification", 
        place: "Google", 
        duration: "December, 2024", 
        link: "https://coursera.org/share/b61e22787d47366231505ec44bb89c79", 
        img: './Hackathon/1734420054083-4f0b50e9-38e9-4022-b96f-5ebf8c01b375_1.jpg',
        description: "I completed the Google Foundations of User Experience (UX) Design course on Coursera. The course covered the basics of UX design, including user research, prototyping, and usability testing." 
    },    
    {   id: "3", 
        name: "Start the UX Design Process: Empathize, Define, and Ideate", 
        status: "Certification", 
        place: "Google", 
        duration: "December, 2024", 
        link: "https://coursera.org/share/6040fdabffa0fce42dcf50fe9ea1eb52", 
        img: './Hackathon/1734420054083-4f0b50e9-38e9-4022-b96f-5ebf8c01b375_1.jpg',
        description: "I completed the Google Foundations of User Experience (UX) Design course on Coursera. The course covered the basics of UX design, including user research, prototyping, and usability testing." 
    },    
    {   id: "4", 
        name: "Build Wireframes and Low-Fidelity Prototypes", 
        status: "Certification", 
        place: "Google", 
        duration: "December, 2024", 
        link: "https://coursera.org/share/d4ab1d73ae1af8f3eb6dc53d0d40505e", 
        img: './Hackathon/1734420054083-4f0b50e9-38e9-4022-b96f-5ebf8c01b375_1.jpg',
        description: "I completed the Google Foundations of User Experience (UX) Design course on Coursera. The course covered the basics of UX design, including user research, prototyping, and usability testing." 
    },    
    {   id: "5", 
        name: "JLPT N2", 
        status: "Certification", 
        place: "Japanese-Language Proficiency Test", 
        duration: "January, 2024", 
        link: "./certificate/JLPT2-2023-RE-600p.png", 
        img: './Hackathon/1734420054083-4f0b50e9-38e9-4022-b96f-5ebf8c01b375_1.jpg',
        description: "I completed the Google Foundations of User Experience (UX) Design course on Coursera. The course covered the basics of UX design, including user research, prototyping, and usability testing." 
    },    
]

const ExperienceSection = () => {
  return (
    <div className='lg:flex flex-row gap-8 mt-4 min-w-screen items-start justify-center font-[family-name:var(--font-noto-sans)]'>            
            <div className='flex-col-1 lg:w-1/2 mt-6 w-full'>
                <p className='h1 truncate'>Jobs/Internship</p>                
                {Jobs.map((article) => (
                    <div className='border-b-2 border-neutral-200 py-4' key={article.id}>         
                    <a className='badge-orange mr-2'>{article.role}</a>                                           
                    <p className='h3 mt-1' >{article.name}</p>
                    <p className='h5' >{article.corp}</p>
                    <p className='p mb-2' >{article.year}</p>
                    <p className='p mb-2 text-base' >{article.description}</p>
                </div>
                ))}                
            </div>
            <div className='flex-col-1 lg:w-1/2 mt-6 w-full'>
                <p className='hidden lg:flex h1'>Participations/Certifications</p>
                    <p className='lg:hidden flex h1'>Participations/</p>
                    <p className='lg:hidden flex h1'>Certifications</p>
                {Certificates.map((article) => (
                    <div className='border-b-2 border-neutral-200 py-4' key={article.id}>         
                    <a className={article.status === "Certification" ? 'badge-blue' : 'badge-green'}>{article.status}</a>                                           
                    <p className='h3 mt-1' >{article.name}</p>
                    <p className='h5' >{article.place}</p>
                    <p className='p mb-2' >{article.duration}</p>
                    <p className='p mb-2 text-base' >{article.description}</p>
                    <Link className='link' href={article.link} target='_blank'>See Certification→</Link>
                </div>
                ))}                     
            </div>
    </div>
  )
}

export default ExperienceSection