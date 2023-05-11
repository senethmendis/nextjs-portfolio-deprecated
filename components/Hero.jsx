import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";


function Hero() {
  return (
    <div id="Hero" className="w-full h-screen text-center">
      <div className="mx-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest">
            Let's Build Something Togethere
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e6]">Seneth</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
            aspernatur voluptatem a reprehenderit, maxime doloremque dolorem sed
            iste nisi, quasi nulla laboriosam animi ullam magnam aperiam autem
            corporis commodi velit.{" "}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  duration-300">
              <FaGithub/>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in  duration-300">
              <BsFillPersonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
