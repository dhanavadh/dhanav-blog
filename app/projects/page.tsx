import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import ProjectGroup from '../components/ProjectGroup'
import Project2024 from '../components/ProjectItem'
import Project2025 from '../components/Project2025'
import ProjectItem from '../components/ProjectItem'

const Projects = () => {
  return (
    <div className='head-page-relative'>
        <div className='flex gap-2 border-b-2 pb-4 border-neutral-300'>
            <div className=''>
                <p className='text-body mb-2'>Projects</p>       
                <p className='title mb-1'>What I've done recently</p>
                <p className='sub-title text-gray-400'>My projects mainly are about front-end web developing</p>
            </div>
        </div>
            {/* Project Page*/}
            <ProjectItem />
    </div>
  )
}

export default Projects