import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Resume",
    deacription: "Projects",
    image: "/photos/resume.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Resume-builder",
    deacription: "Projects",
    image: "/photos/resumeBuilder.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Ecommers",
    deacription: "Projects",
    image: "/photos/ecommers.png",
    tag: ["All", "Web"],
  },
];

function ProjectData() {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.deacription}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectData;
