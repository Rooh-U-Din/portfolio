import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface cards {
imgUrl:string,
title:string,
description:string
previewUrl:string
gitUrl:string
}

const ProjectCard:React.FC<cards> = ({ imgUrl, title, description, previewUrl,gitUrl}) => {
  return (
    <div className="relative group ">
  <div
    className="h-52 md:h-72 relative w-full"
    style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
  ></div>
  
  <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-2">
  <Link href={gitUrl} className="mb-28 h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white ">
           <CodeBracketIcon className="h-10 w-10 text-gray-400 m-2 top-[35%] left-[35%]  transform -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer"></CodeBracketIcon>
         </Link>
        <Link href={previewUrl} className=" mb-28 h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white ">
         <EyeIcon className="h-10 w-10 text-gray-400 m-2 top-[35%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer"></EyeIcon>
       </Link>
       
  </div>
  
  <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
    <h5 className="text-xl font-semibold mb-2">{title}</h5>
    <p className="text-gray-200">{description}</p>
  </div>
</div>

  );
};

export default ProjectCard;
