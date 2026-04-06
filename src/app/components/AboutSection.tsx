"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 grid grid-cols-2 gap-y-2 text-[#334155] font-medium">
        <li className="marker:text-[#3B82F6]">HTML</li>
        <li className="marker:text-[#3B82F6]">CSS</li>
        <li className="marker:text-[#3B82F6]">Javascript</li>
        <li className="marker:text-[#3B82F6]">Typescript</li>
        <li className="marker:text-[#3B82F6]">NextJS</li>
        <li className="marker:text-[#3B82F6]">Python</li>
        <li className="marker:text-[#3B82F6]">Agentic AI</li>
        <li className="marker:text-[#3B82F6]">Spec-Driven Dev</li>
        <li className="marker:text-[#3B82F6]">FastAPI</li>
        <li className="marker:text-[#3B82F6]">Full-Stack Web</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-3 text-[#334155] font-medium">
        <li className="marker:text-[#3B82F6]">
          <span className="font-bold text-[#1E3A8A]">Matriculation</span> -
          Secondary School Education
        </li>
        <li className="marker:text-[#3B82F6]">
          <span className="font-bold text-[#1E3A8A]">Intermediate</span> -
          Higher Secondary Education
        </li>
        <li className="marker:text-[#3B82F6]">
          <span className="font-bold text-[#1E3A8A]">GIAIC</span> - Professional
          Programming & AI Education
        </li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-[#F8FAFC] py-20" id="about">
      <div className="container mx-auto px-6 md:grid md:grid-cols-2 gap-12 items-center xl:gap-20">
        {/* Image with Professional Card Styling */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
          <Image
            src="/photos/pc.png"
            alt="Computer image"
            width={600}
            height={600}
            className="relative rounded-2xl shadow-xl border border-white w-full h-auto object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] bg-clip-text text-transparent mb-6 tracking-tight ">
            About Me
          </h2>

          <p className="text-[#334155] text-base lg:text-lg leading-relaxed mb-8">
            I am a dedicated and growth-oriented software developer with a
            strong foundation in modern web technologies and intelligent
            systems. I have hands-on experience in HTML, CSS,
            JavaScript/TypeScript, and Next.js, along with advanced expertise in
            Python, Agentic AI, and Spec-Driven Development. I specialize in
            building scalable, efficient, and AI-powered applications, combining
            clean architecture with intelligent automation. I am a fast learner
            with a problem-solving mindset, passionate about leveraging
            cutting-edge technologies to create impactful and innovative
            solutions. I am committed to continuous learning and aim to
            contribute to real-world projects that push the boundaries of modern
            software and AI development.
          </p>

          {/* Tab Navigation */}
          <div className="flex flex-row justify-start space-x-4 border-b border-slate-200 mb-6">
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

          {/* Tab Content with Fade In effect */}
          <div className="min-h-[150px] transition-all duration-300">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
