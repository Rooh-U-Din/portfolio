"use client"
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div>
      <div className="sm:grid grid-cols-1 lg:grid-cols-12 md:mt-[80] md:ml-[20]">
        <div className="col-span-7 place-self-center md:mr-28">
          <h1 className="text-white mb-6 text-4xl lg:text-8xl lg:ml-28">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"> Hello Im </span> 
            <div className="mt-[60]"></div>
            <span style={{ display: 'inline-block', width: '16ch',}}>
            <TypeAnimation
      sequence={[
        'Rooh-U-Din',
        1000,
        'Student',
        1000,
        'Web Devoloper',
        1000,
        'UI/UX Designer', 
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
    </span>
          </h1>
          <p className="text-gray-200 text-lg lg:text-2xl lg:ml-28">
            Portfolio for school assignment
          </p>
          <div>
            <button className="bg-black text-white px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-600 hover:bg-white hover:text-black border border-white lg:ml-28">Contect</button>
          <button className="bg-black text-white px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-600 hover:bg-white hover:text-black border border-white mt-3 " >Download CV</button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mr-24 mt-4 lg:mt-0 overflow-hidden rounded-full bg-[#181818] h-[250px] w-[250px] lg:h-[400] lg:w-[400] ">
            <div className="">
            <Image src="/photos/profile.png"
            alt="profile"
            className="object-cover py-[25%] mt-[-100]  h-[450] w-[400] lg:h-[700] lg:w-[700] lg:mt-[-200px] lg:ml-[-10] rounded-full"
            height={1100}
            width={1100}></Image>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
