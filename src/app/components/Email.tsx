import React from "react";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope,} from 'react-icons/fa';

const Email= () => {
  return (
    <section id="contact" className=" text-gray-300 py-16 border-gray-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Let`s Connect
        </h2>

        <div className="grid grid-cols-1 md:flex justify-between mx-4">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">My Portfolio</h3>
            <p className="text-gray-200 mb-6 max-w-md">
              I`m currently seeking new opportunities, and my inbox is always
              open. Whether you have a question or just want to say hello, I`ll do
              my best to get back to you promptly!
            </p>
            
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Contact Me</h3>
              
              <div className="flex space-x-4">
              <SocialIcon 
                href="https://github.com/Rooh-U-Din" 
                icon={<FaGithub size={20} />}
                label="GitHub"
              />
              <SocialIcon 
                href="https://linkedin.com/in/your-username" 
                icon={<FaLinkedin size={20} />}
                label="LinkedIn"
              />
              <SocialIcon 
                href="mailto:fidajokhio2@gmail.com" 
                icon={<FaEnvelope size={20} />}
                label="Email"
              />
            </div>
              <p className="text-blue-400 font-medium">
                Available for freelance opportunities
              </p>
              </div>
          </div>
        </div>
    </section>
  );
};

// Reusable Social Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-800"
    aria-label={label}
  >
    {icon}
  </Link>
);

export default Email;