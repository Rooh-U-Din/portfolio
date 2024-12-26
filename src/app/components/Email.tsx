import React from "react";

function Email() {
  return (
    <div className="">
      <h1 className="text-center text-4xl font-bold text-white mt-4 p-4">Contect Me</h1>
        <link href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
<div className="grid md:grid-cols-2 my-12 py-24 gap-4 ml-[50]">
      <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let's Conntect</h5>
        <p className="text-gray-200 mb-4 max-w-md">
          Im currently looking for new opportunities, my inbox is alwas open.
          Whether you have a quistion or just want to say hi, i'll try mr best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
        <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-github text-3xl text-gray-800 hover:text-black bg-white rounded-sm"></i>
      </a>
      <a
        href="https://linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bx bxl-linkedin text-3xl text-black hover:text-blue-800 bg-white rounded-sm"></i>
      </a>
      <i className="bx bxs-envelope text-3xl text-white hover:text-blue-600"></i>
      <span className="text-white mb-3 text-xl">fidajokhio2@gmail.com</span>

        </div>
      </div>
    </div>



    </div>
  );
}

export default Email;
