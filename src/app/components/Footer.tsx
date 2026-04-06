import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-100 px-4">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand/Logo Area */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <h3 className="font-extrabold bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] bg-clip-text text-transparent tracking-tighter hover:drop-shadow-[0_5px_15px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-default">
              PORTFOLIO
            </h3>
            <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.2em]">
              Innovate • Develop • Design
            </p>
          </div>

          {/* Tech Stack Info */}
          <div className="text-center md:text-right space-y-1">
            <p className="text-slate-600 text-sm font-medium">
              Built with <span className="text-[#1E3A8A] font-bold hover:text-[#3B82F6] cursor-default transition-colors">Next.js</span> & <span className="text-[#1E3A8A] font-bold hover:text-[#3B82F6] cursor-default transition-colors">Tailwind CSS</span>
            </p>
            <p className="text-slate-400 text-[13px] font-medium tracking-wide">
              &copy; {currentYear} All rights reserved.
            </p>
          </div>

        </div>

        <div className="w-24 h-1 bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] mx-auto mt-10 rounded-full opacity-30" />
      </div>
    </footer>
  );
}

export default Footer;