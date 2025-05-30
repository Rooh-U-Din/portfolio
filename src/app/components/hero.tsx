"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div>
      <div className="mx-auto sm:grid grid-cols-1 lg:grid-cols-12 md:mt-[80px] md:ml-[20px]">
        <div className="col-span-7 place-self-center md:mr-28">
          <h1 className="text-white mb-6 text-4xl lg:text-8xl lg:ml-28">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white ">
              {" "}
              Hello I am{" "}
            </span>
            <div className="md:mt-[20px]"></div>
            <span style={{ display: "inline-block", width: "16ch" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white ">
              <TypeAnimation 
                sequence={[
                  "Rooh-U-Din",
                  1000,
                  "Student",
                  1000,
                  "Web Developer",  // Fixed typo from "Devoloper"
                  1000,
                  "UI/UX Designer",
                  1000,
                  "Python Developer",
                  1000,
                  "AI Enthusiast",
                ]}
                wrapper="span"
                speed={50}
                
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-gray-200 text-lg lg:text-2xl lg:ml-28">
            Portfolio website of Rooh-U-Din
          </p>
          <div>
            <Link href={"#contact"}>
              <button className="bg-black text-black px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-gray-400 via-white hover:bg-white hover:text-black border border-white lg:ml-28">
                Contact  {/* Fixed spelling from "Contect" */}
              </button>
            </Link>
            <Link href={"#projects"}>
            <button className="bg-black text-black px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-gray-400 via-white hover:bg-white hover:text-black border border-white mt-3">
              Projects
            </button>
            </Link>
          </div>
        </div>
        <div className=" col-span-5 place-self-center mx-auto mt-4 lg:mt-0 overflow-hidden rounded-full bg-[#181818] h-[250px] w-[250px] lg:h-[400px] lg:w-[400px] ">
          <div className="relative h-full w-full">
            <Image
              src="/photos/profile.png"
              alt="profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;