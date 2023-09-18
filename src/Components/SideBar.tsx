import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {}

const SideBar = (props: Props) => {
  return (
    <>
      <div className="lg:w-[19%] hidden h-screen border-r lg:flex flex-col p-14 items-center justify-between font-Karla antialiased">
        <div className="flex flex-col gap-7 items-center">
          <Image
            src={"/img.jpg"}
            width={110}
            height={110}
            alt=""
            className=" border-2 border-[#a5a6ff] rounded-full"
          />
          <div className="flex flex-col items-center justify-center ">
            <span className="font-Inter font-bold text-2xl z-10 top">
              Tejodeep Mitra Roy
            </span>
            <span className="fixed font-Pacifico text-4xl opacity-10 z-0 text">
              Tejodeep Mitra Roy
            </span>
          </div>
        </div>

        <div className="">
          <ul className="flex flex-col items-center gap-4 text-[#534f80] text-lg cursor-pointer">
            <li>
              <a
                href="#home"
                // spy={true}
                // smooth={true}
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                // spy={true}
                // smooth={true}
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                // spy={true}
                // smooth={true}
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                // spy={true}
                // smooth={true}
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                // activeClass="active"
                href="#contact"
                // spy={true}
                // smooth={true}
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6 items-center text-[#534f80]  font-medium ">
          <span className="flex gap-2">
            <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
              <FontAwesomeIcon icon={faFacebookF} className="w-2" />
            </span>
            <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
              {" "}
              <FontAwesomeIcon icon={faXTwitter} className="w-4" />
            </span>
            <Link
              href={"https://www.linkedin.com/in/tejodeep-mitra-roy/"}
              target="./"
              className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full"
            >
              {" "}
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
            </Link>
          </span>

          <span>
            All Copyrights 2023 Tejodeep Mitra Roy. All rights reserved.
          </span>
        </div>
      </div>
      <nav className="fixed lg:hidden w-full h-12 px-6 bg-white flex justify-between items-center">
        <span className=" font-Inter text-3xl font-extrabold text-[#C1AEFC]">
          T.M.Roy
        </span>
        <div className=" flex flex-wrap items-center justify-between ">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        
        </div>
      </nav>
    </>
  );
};

export default SideBar;
