// import Link from 'next/link'
// import React from 'react'

// function Navlink({href, title}:any) {
//   return (
//     <div>
//       <Link href={href} className="block py-2 pl text-gray-100 sm:text-xl rounded md:p-0 hover:text-white">
//       {title}</Link>
//     </div>
//   )
// }

// export default Navlink


import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;