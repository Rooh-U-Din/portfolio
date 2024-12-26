"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";
import { title } from "process";

const Tab_Data = [
  {
    title:"Skills",
    id:"skills",
    Content:(
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>NextJS</li>
      </ul>
    )
  },
  {
    title:"Education",
    id:"education",
    Content:(
      <ul className="list-disc pl-2">
        <li>Metric</li>
        <li>Inter</li>
        <li>Programing Learning</li>
      </ul>
    )
  }
]

function AboutSection() {
  const [tab,setTab] = useState ("skills");
  const [isPending,startTransition] = useTransition();

  const handleTabChange = (id:any) => {
    setTab(id);
  }

  return (
    <div className="text-white mt-[100] ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/photos/pc.png" alt="img" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am student at giaic i am learing programing i have <br />
            learned HTML,CSS,JAVASCRIPT/TYPESCRIPT and <br />
            NextJS i am a quick learner and iam always looking for <br /> expend
            my knowledge and skill.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={()=> handleTabChange("skills")}active={(tab==="skills")}>Skills</TabButton>
            <TabButton selectTab={()=> handleTabChange("education")}active={(tab==="education")}>Education</TabButton>
          </div>
          <div className="mt-8">{Tab_Data.find((t) => t.id===tab)?.Content}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
