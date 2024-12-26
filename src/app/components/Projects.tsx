import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: "Resume",
    deacription: "Projects",
    image: "/photos/resume.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 2,
    title: "Resume-builder",
    deacription: "Projects",
    image: "/photos/resumeBuilder.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id: 3,
    title: "Ecommers",
    deacription: "Projects",
    image: "/photos/ecommers.png",
    tag: ["All", "Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
];

function Projects() {
  return (
    <div>
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

