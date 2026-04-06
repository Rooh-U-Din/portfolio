import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface cards {
  imgUrl: string,
  title: string,
  description: string,
  previewUrl: string,
  gitUrl: string
}

const ProjectCard: React.FC<cards> = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
  return (
    <div className="relative group rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Image Container */}
      <div
        className="h-52 md:h-64 relative w-full"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        {/* Overlay - Converted to Sky Blue Gradient/Glass style */}
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#3B82F6]/40 to-[#1E3A8A]/80 opacity-0 group-hover:opacity-100 flex transition-opacity duration-500 gap-4">
          <Link 
            href={gitUrl} 
            target="_blank" 
            className="h-12 w-12 border-2 flex items-center justify-center rounded-full border-white/60 text-white hover:border-white hover:bg-white/10 transition-all"
          >
            <CodeBracketIcon className="h-6 w-6" />
          </Link>
          <Link 
            href={previewUrl} 
            target="_blank" 
            className="h-12 w-12 border-2 flex items-center justify-center rounded-full border-white/60 text-white hover:border-white hover:bg-white/10 transition-all"
          >
            <EyeIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
      
      {/* Text Content - Converted to Light Theme */}
      <div className="bg-white py-6 px-5">
        <h5 className="text-xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#3B82F6] transition-colors">
          {title}
        </h5>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Decorative accent bar (The 10% Sky Blue) */}
        <div className="w-10 h-1 bg-[#3B82F6] mt-4 rounded-full" />
      </div>
    </div>
  );
};

export default ProjectCard;