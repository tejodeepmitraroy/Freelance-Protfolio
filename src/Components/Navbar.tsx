"use client";
import useIsomorphicLayoutEffect from "@/Hooks/IsomorphicEffect";
import { imageUrlFor } from "@/config/imageBuilder";
import { faFacebookF, faGithub, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useRef, useState } from "react";

interface NavbarProps {
  infoData: getInfo;
  socialLinks:getSocialLinks
}

const Navbar: FC<NavbarProps> = ({ infoData,socialLinks }) => {
  const [navReveal, setNavReveal] = useState<boolean>(false);
  const navbarSide = useRef<HTMLDivElement>(null);
  const navBarInner = useRef<HTMLDivElement>(null);

  return (
    <>
      <header className="fixed z-10 lg:hidden w-full h-12 px-6 bg-white flex justify-between items-center">
        <h1 className=" font-Inter text-3xl font-extrabold text-[#C1AEFC]">
          T.M.Roy
        </h1>
        <section className=" flex flex-wrap items-center justify-between ">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            title=" button"
            onClick={() => {
              setNavReveal(!navReveal);
            }}
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </section>
      </header>
      <nav
        ref={navbarSide}
        className={`fixed ${
          navReveal ? "" : "hidden"
        } top-12 right-0 w-full h-screen z-50 `}
      >
        <button
          className="absolute w-full h-full opacity-0 bg-black"
          title="Menu Closing button"
          onClick={() => setNavReveal(!navReveal)}
        ></button>
        <section
          ref={navBarInner}
          className="fixed top-12 right-0 w-52 h-full bg-white text-right flex flex-col gap-6 pt-12 pb-5 px-5 font-Karla antialiased"
        >
          <div className="flex flex-col items-end">
            <Image
              src={infoData.profilePic}
              width={90}
              height={90}
              alt=""
              className=" border-2 border-[#a5a6ff] rounded-full"
            />
            <div className="flex flex-col items-center justify-center ">
              <span className="font-Inter font-bold text-base z-10 mt-7">
                {infoData.name}
              </span>
              <span className="fixed font-Pacifico text-xl opacity-10 z-0 ">
                {infoData.name}
              </span>
            </div>
          </div>

          <nav className="">
            <ul className="flex flex-col items-end gap-3 2xl:gap-5 text-[#534f80] text-base 2xl:text-lg cursor-pointer">
              <li className="rightSideBarLink">
                <Link
                  href="#home"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li className="rightSideBarLink">
                <Link
                  href="#about"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li className="rightSideBarLink">
                <Link
                  href="#services"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li className="rightSideBarLink">
                <Link
                  href="#projects"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li className="rightSideBarLink">
                <Link
                  href="#services"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li className="rightSideBarLink">
                <Link
                  href="#contact"
                  className="hover:text-[#a5a6ff] cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <section className="flex flex-col gap-6 items-end text-[#534f80]  font-medium ">
            <span className="flex gap-2">
              {/* <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
              <FontAwesomeIcon icon={faFacebookF} className="w-2" />
            </span>
            <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
              {" "}
              <FontAwesomeIcon icon={faXTwitter} className="w-4" />
            </span> */}
              <Link
                href={socialLinks.facebook ? socialLinks.facebook : ""}
                target="_blank"
                className="w-7 h-7 bg-gray-100 flex justify-center items-center  rounded-full"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3" />
              </Link>
              <Link
                href={socialLinks.twitter ? socialLinks.twitter : ""}
                target="_blank"
                className="w-7 h-7 bg-gray-100 flex justify-center items-center  rounded-full"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-3" />
              </Link>
              <Link
                href={socialLinks.linkedIn ? socialLinks.linkedIn : ""}
                target="_blank"
                className="w-7 h-7 bg-gray-100 flex justify-center items-center  rounded-full"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-3" />
              </Link>
              <Link
                href={socialLinks.github ? socialLinks.github : ""}
                target="_blank"
                className="w-7 h-7 bg-gray-100 flex justify-center items-center  rounded-full"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4" />
              </Link>
            </span>

            <section className="text-sm">
              <p>
                All Copyrights 2023 Tejodeep Mitra Roy. All rights reserved.
              </p>
            </section>
          </section>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
