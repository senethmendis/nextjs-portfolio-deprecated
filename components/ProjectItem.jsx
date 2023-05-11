import React from 'react'
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({title, bgImg,projectURL }) => {
  return (
    <div className="group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]  relative flex items-center justify-center rounded-xl p-4 h-auto w-full shadow-xl shadow-gray-400">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={bgImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl text-white text-center tracking-wider">
               {title}
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React.js Project
              </p>
              <Link href={projectURL}>
                <p className="text-center  rounded-lg py-3 bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
  )
}

export default ProjectItem