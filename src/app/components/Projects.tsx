import React from 'react'
import ProjectCard from './ProjectCard'

interface card{
  id: number,
  title: string,
  deacription: string,
  image: string,
  previewUrl: string,
  gitUrl: string,
  tag: string[]
}

const projectsData:card[] = [
  {
    id: 1,
    title: "Resume",
    deacription: "Projects",
    image: "/photos/resume.png",
    previewUrl: "https://milstone-1and2.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Milstone-1and2.git",
    tag: ["All", "Web"],
    
  },
  {
    id: 2,
    title: "Resume-builder",
    deacription: "Projects",
    image: "/photos/resumeBuilder.png",
    previewUrl: "https://milestone-5-bice-six.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Milestone-5.git",
    tag: ["All", "Web"],
    
  },
  {
    id: 3,
    title: "Ecommers",
    deacription: "Projects",
    image: "/photos/ecommers.png",
    previewUrl: "https://hackatho-design-02.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Hackatho-Design-02.git",
    tag: ["All", "Web"],
    
  },
  {
    id: 4,
    title: "Full-stack Ecommers",
    deacription: "Projects",
    image:"/photos/full_stack.png",
    previewUrl:"https://hackathon-day-4-bhzy.vercel.app/",
    gitUrl:"https://github.com/Rooh-U-Din/Hackathon-Day-4.git",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Secure data encryption",
    deacription: "Projects",
    image:"/photos/data_encryption.png",
    previewUrl:"https://assignment-5-by-rooh.streamlit.app/",
    gitUrl:"https://github.com/Rooh-U-Din/05_secure_data_encryption.git",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Tap To Earn",
    deacription: "Projects",
    image:"/photos/tap_to_earn.png",
    previewUrl:"https://growth-mindset-taptoearn-ddxsab6u4qmxopcbnhalh7.streamlit.app/",
    gitUrl:"https://github.com/Rooh-U-Din/Growth-mindset-tapToEarn.git",
    tag: ["All", "Web"],
  }
];

function Projects() {
  return (
    <div className='' id='projects'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 p-4'>My Projects</h2>
      <div className='grid md:grid-cols-3 mt-9 mx-12 gap-4'>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.deacription}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}

          />
        ))}
      </div>
    </div>
  );
}

export default Projects;

