import Link from 'next/link'
import React from 'react'

function Navlink({href, title}:any) {
  return (
    <div>
      <Link href={href} className="block py-2 pl text-gray-100 sm:text-xl rounded md:p-0 hover:text-white">
      {title}</Link>
    </div>
  )
}

export default Navlink

