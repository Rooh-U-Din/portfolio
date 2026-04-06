import React, { MouseEventHandler } from "react";

interface button {
  active: boolean;
  selectTab: MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const TabButton: React.FC<button> = ({ active, selectTab, children }) => {
  // Converted to Image 1 Palette:
  // Active: Dark Blue (#1E3A8A) with Sky Blue (#3B82F6) border
  // Inactive: Soft Slate Gray with transparent border
  const buttonClasses = active
    ? "text-[#1E3A8A] border-[#3B82F6]"
    : "text-slate-500 border-transparent hover:text-[#3B82F6]";

  return (
    <div>
      <button
        onClick={selectTab}
        className={`mr-6 pb-2 font-bold uppercase text-sm tracking-widest border-b-2 transition-all duration-300 ease-in-out ${buttonClasses}`}
      >
        {children}
      </button>
    </div>
  );
};

export default TabButton;
