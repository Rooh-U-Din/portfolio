"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  previewUrl: string;
  gitUrl: string;
  tag: string[];
}

const projectsData: Card[] = [
  {
    id: 1,
    title: "Todo AI Chatbot - Cloud-Native Deployment",
    description: "Projects",
    image: "/photos/Todo.png",
    previewUrl: "https://hackathon-ii-todo-spec-driven-devel.vercel.app",
    gitUrl:
      "https://github.com/Rooh-U-Din/Hackathon-II-Todo-Spec-Driven-Development-.git",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Full-stack Ecommers",
    description: "Projects",
    image: "/photos/full_stack.png",
    previewUrl: "https://hackathon-day-4-tawny.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Hackathon-Day-4.git",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Physical AI & Humanoid Robotics",
    description: "Projects",
    image: "/photos/book.png",
    previewUrl: "https://github.com/Rooh-U-Din/humanoid-book.git",
    gitUrl: "https://github.com/Rooh-U-Din/humanoid-book.git",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Secure data encryption",
    description: "Projects",
    image: "/photos/data_encryption.png",
    previewUrl: "https://assignment-5-by-rooh.streamlit.app/",
    gitUrl: "https://github.com/Rooh-U-Din/05_secure_data_encryption.git",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Tap To Earn",
    description: "Projects",
    image: "/photos/tap_to_earn.png",
    previewUrl:
      "https://growth-mindset-taptoearn-ddxsab6u4qmxopcbnhalh7.streamlit.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Growth-mindset-tapToEarn.git",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Blog",
    description: "Projects",
    image: "/photos/blog.jpg",
    previewUrl: "https://bilog-five.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Bilog",
    tag: ["All", "Web"],
  },
  {
    id: 7,
    title: "Resume",
    description: "Projects",
    image: "/photos/resume.png",
    previewUrl: "https://milstone-1and2.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Milstone-1and2.git",
    tag: ["All", "Web"],
  },
  {
    id: 8,
    title: "Resume-builder",
    description: "Projects",
    image: "/photos/resumeBuilder.png",
    previewUrl: "https://milestone-5-bice-six.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Milestone-5.git",
    tag: ["All", "Web"],
  },
  {
    id: 9,
    title: "Ecommers",
    description: "Projects",
    image: "/photos/ecommers.png",
    previewUrl: "https://hackatho-design-02.vercel.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Hackatho-Design-02.git",
    tag: ["All", "Web"],
  },
  {
    id: 10,
    title: "Video Downloader",
    description: "Projects",
    image: "/photos/video-downloader.png",
    previewUrl: "https://video-downloader-by-fida.streamlit.app/",
    gitUrl: "https://github.com/Rooh-U-Din/video-downloader.git",
    tag: ["All", "Web"],
  },
  {
    id: 11,
    title: "Password Strength",
    description: "Projects",
    image: "/photos/password.png",
    previewUrl:
      "https://passwordstrength-frexdonavrgftruxvpwi6c.streamlit.app/",
    gitUrl: "https://github.com/Rooh-U-Din/Password_Strength.git",
    tag: ["All", "Web"],
  },
];

function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section className="bg-[#F8FAFC] py-20" id="projects">
      <div className="container mx-auto px-6">
        {/* Heading - 30% Secondary: Dark Blue */}
        <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] bg-clip-text text-transparent mb-12 tracking-tight pb-2">
  Featured Projects
</h2>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>

        {/* View More Button - Professional Gradient (10% Accent) */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 active:scale-95"
          >
            {showAll ? "Show Less" : "View More Projects"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
