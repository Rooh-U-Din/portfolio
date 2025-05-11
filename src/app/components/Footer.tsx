import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-300 border-y-[1px] border-gray-500 px-4">
      <div className="container mx-auto px-6 py-12 md:flex justify-between">  
        <p className="mt-2">
            Built with Next.js and Tailwind CSS
          </p> 
          <p>
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
          
        </div>
    </footer>
  );
}

export default Footer;