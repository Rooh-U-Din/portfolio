"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>NextJS</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Metric</li>
        <li>Inter</li>
        <li>Programming Learning</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <div className="text-white mt-[100px]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          src="/photos/pc.png" 
          alt="Computer image" 
          width={500} 
          height={500} 
          className="w-full h-auto"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg max-w-[450px]">
            I am a dedicated programming student at GIAIC with hands-on
            experience in modern web technologies. I have developed a solid
            foundation in HTML, CSS, JavaScript/TypeScript, and Next.js, and I
            am currently expanding my expertise in Python and Agentic AI. I am a
            quick learner who is passionate about technology and committed to
            continuously growing my knowledge and skills to build innovative and
            impactful solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;