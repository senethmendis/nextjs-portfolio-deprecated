"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleshadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleshadow);
  }, []);

  return (
    <div>
      <div
        className={
          shadow
            ? "fixed  w-full  h-20 shadow-xl z-[100]"
            : "fixed  w-full  h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#ecf0f3]">
          <Link href="/">
            <Image
              src="/../public/assets/logo.png"
              alt="/"
              width={50}
              height={50}
            />
          </Link>

          <div>
            <ul className="hidden md:flex">
              <Link href="/#Hero">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/#About">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/#Project">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Projects
                </li>
              </Link>
              <Link href="/#Skills">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Skills
                </li>
              </Link>
              <Link href="/#Contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>

            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-300 "
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link href="/#Hero">
                  <Image
                    src="/../public/assets/logo.png"
                    alt="/"
                    width={30}
                    height={30}
                  />
                </Link>
                <div
                  onClick={handleNav}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  {" "}
                  lets build of nexct bitches lessog go fuck yeah
                </p>
              </div>
            </div>

            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/#Hero">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href="/#About">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href="/#Skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href="/#Project">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href="/#Contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className="pt-40 ">
                <p className="uppercase tracking-widest text-[#5651e5]">
                  Let's Connect
                </p>

                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in  duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in  duration-300">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in  duration-300">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in  duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
