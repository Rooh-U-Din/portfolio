import React from 'react'
import Navlink from './Navlink'

interface link {
  links: { path: string; title: string }[]
}

const MenuOverlay: React.FC<link> = ({ links }) => {
  return (
    <div>
      <ul className='flex flex-col py-4 items-center'>
        
        {links.map((link: { path: string; title: string }, index: React.Key | null | undefined) => (
            <li  key={index}>
            <Navlink href={link.path} title={link.title}/>
        </li>
    ))}
      </ul>
    </div>
  )
}

export default MenuOverlay
