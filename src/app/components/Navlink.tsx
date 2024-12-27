import Link from 'next/link'
import React from 'react'

interface links{
  href:string,
  title:string
}
const Navlink: React.FC<links>=({href, title}) =>{
  return (
    <div>
      <Link href={href} className="block py-2 pl text-gray-100 sm:text-xl rounded md:p-0 hover:text-white">
      {title}</Link>
    </div>
  )
}

export default Navlink

