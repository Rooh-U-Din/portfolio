import React, { ReactNode } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const Email = () => {
  return (
    // Background 60%: Off-White
    <section
      id="contact"
      className="bg-[#F8FAFC] py-20 border-t border-slate-200"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading 30%: Dark Blue */}
        <h2 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#1E3A8A] bg-clip-text text-transparent mb-12 tracking-tight pb-2">
          Let’s Connect
        </h2>

        <div className="grid grid-cols-1 md:flex justify-between items-start gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1E3A8A]">My Portfolio</h3>
            <p className="text-slate-600 mb-6 max-w-md leading-relaxed">
              I’m currently seeking new opportunities, and my inbox is always
              open. Whether you have a question or just want to say hello, I’ll
              do my best to get back to you promptly!
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-[#1E3A8A] mb-6">
              Contact Me
            </h3>

            <div className="flex space-x-4 mb-6">
              <SocialIcon
                href="https://github.com/Rooh-U-Din"
                icon={<FaGithub size={22} />}
                label="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/fida-j-01588b3b3?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                icon={<FaLinkedin size={22} />}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fidahussain00772@gmail.com"
                icon={<FaEnvelope size={22} />}
                label="Email"
              />
            </div>

            {/* Accent 10%: Sky Blue */}
            <div className="flex items-center space-x-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3B82F6]"></span>
              </span>
              <p className="text-[#3B82F6] font-bold text-sm uppercase tracking-wide">
                Available for freelance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    // Icon theme: Dark Blue shifting to Sky Blue on hover
    className="text-[#1E3A8A] hover:text-white transition-all duration-300 p-3 rounded-xl bg-slate-100 hover:bg-[#3B82F6] hover:shadow-lg hover:shadow-blue-500/30"
    aria-label={label}
  >
    {icon}
  </Link>
);

export default Email;
