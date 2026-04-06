import Link from 'next/link'
import React from 'react'

interface links {
  href: string,
  title: string
}

const Navlink: React.FC<links> = ({ href, title }) => {
  return (
    <div className="relative group">
      <Link 
        href={href} 
        className="block py-2 text-[#1E3A8A] font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:text-[#3B82F6] md:p-0"
      >
        {title}
        {/* Underline Animation (Optional, adds a "pro" feel) */}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3B82F6] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </div>
  )
}

export default Navlink

