import React, { MouseEventHandler } from "react";

interface button{
  active:boolean,
  selectTab:MouseEventHandler<HTMLButtonElement>,
  children:string
}

const TabButton: React.FC<button> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-purple-500"
    : "text-gray-400 border-b-2 border-transparent";

  return (
    <div>
      <button
        onClick={selectTab}
        className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
      >
        {children}
      </button>
    </div>
  );
};

export default TabButton;
