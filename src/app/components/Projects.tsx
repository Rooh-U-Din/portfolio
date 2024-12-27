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
];

function Projects() {
  return (
    <div className=''>
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

