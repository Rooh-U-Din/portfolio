import React from "react";

function Email() {
  return (
    <div id="contact">
      <h1 className="text-center text-4xl font-bold text-white mt-4 p-4">
        Contect Me
      </h1>
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <div className="grid md:grid-cols-2 my-12 py-24 gap-4 ml-[50]">
        <div className="">
          <h5 className="text-xl font-bold text-white my-2">Lets Conntect</h5>
          <p className="text-gray-200 mb-4 max-w-md">
            I am currently seeking new opportunities, and my inbox is always
            open. Whether you have a question or just want to say hello, I will do
            my best to get back to you promptly!
          </p>
          <div className="socials flex flex-row gap-2">
            <a
              href="https://github.com/Rooh-U-Din"
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
            <span className="text-white mb-3 text-xl">
              fidajokhio2@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Email;
