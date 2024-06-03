"use client";
import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FolderOpenDot,
  Home,
  PencilRuler,
  Phone,
  SwatchBook,
} from "lucide-react";
interface SideBarProps {
  infoData: getInfo;
  socialLinks: getSocialLinks;
}

const SideBar: FC<SideBarProps> = ({ infoData, socialLinks }) => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    let sideBarTl = gsap.timeline({});
    sideBarTl.from(".sideBarHeading", {
      y: 30,
      opacity: 0,
      duration: 0.9,
      delay: 0.4,
      stagger: 0.4,
      ease: "circ.inOut",
    });

    sideBarTl.from(".sideBarNav", {
      x: -50,
      opacity: 0,
      delay: 0.4,
      stagger: 0.2,
      ease: "power3.inOut",
    });

    sideBarTl.from(".sideBarLink", {
      y: 30,
      opacity: 0,
      delay: 0.7,
      stagger: 0.2,
      ease: "back.out(1.7)",
    });
  });

  return (
    <aside className=" relative  lg:w-[25%] 2xl:w-[20%] hidden h-screen border-r lg:flex flex-col p-8 xl:p-14 items-center justify-between font-Karla antialiased overflow-auto">
      <section className="flex flex-col gap-7 items-center">
        <Image
          src={infoData.profilePic}
          width={110}
          height={110}
          alt="Location"
          priority
          className=" sideBarHeading w-25 h-25 border-2 border-[#a5a6ff] rounded-full"
        />
        <div className="flex flex-col items-center justify-center ">
          <h2 className="sideBarHeading w-full font-Inter font-bold text-xl 2xl:text-2xl z-10 mt-3">
            {infoData.name}
          </h2>
          <h2 className="sideBarHeading absolute font-Pacifico text-3xl 2xl:text-4xl opacity-10 z-0 text">
            {infoData.name}
          </h2>
        </div>
      </section>

      <nav className=" w-full ">
        <ul className="flex flex-col items-center gap-3 2xl:gap-4 text-[#534f80] text-base 2xl:text-lg cursor-pointer">
          <li className="sideBarNav w-full">
            <a href="#home" className="  cursor-pointer">
              <div className="text-yellow-500 hover:border-black items-center justify-start hover:text-white transition-all ease-in-out duration-300 hover:bg-yellow-500 font-bold w-full rounded-2xl text-center py-2 px-3 flex gap-5 border-2 border-yellow-500">
                <Home />
                Home
              </div>
            </a>
          </li>
          <li className="sideBarNav w-full">
            <a href="#projects" className="hover:text-[#a5a6ff] cursor-pointer">
              <div className="text-red-500 hover:border-black items-center justify-start hover:text-white transition-all ease-in-out duration-300 hover:bg-red-500 font-bold w-full rounded-2xl text-center py-2 px-3 flex gap-5 border-2 border-red-500">
                <FolderOpenDot />
                Projects
              </div>
            </a>
          </li>
          <li className="sideBarNav w-full">
            <a href="#about" className="hover:text-[#a5a6ff] cursor-pointer">
              <div className="text-green-500 hover:border-black items-center justify-start hover:text-white transition-all ease-in-out duration-300 hover:bg-green-500 font-bold w-full rounded-2xl text-center py-2 px-3 flex gap-5 border-2 border-green-500">
                <SwatchBook />
                About
              </div>
            </a>
          </li>
          <li className="sideBarNav w-full">
            <a href="#services" className="hover:text-[#a5a6ff] cursor-pointer">
              <div className="text-blue-600 hover:border-black items-center justify-start hover:text-white transition-all ease-in-out duration-300 hover:bg-blue-600 font-bold w-full rounded-2xl text-center py-2 px-3 flex gap-5 border-2 border-blue-600">
                <PencilRuler />
                Skills
              </div>
            </a>
          </li>

          {/* <li>
              <a
                href="#services"
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Services
              </a>
            </li> */}
          <li className="sideBarNav w-full">
            <a href="#contact" className="hover:text-[#a5a6ff] cursor-pointer">
              <div className="text-yellow-500 hover:border-black items-center justify-start hover:text-white transition-all ease-in-out duration-300 hover:bg-yellow-500 font-bold w-full rounded-2xl text-center py-2 px-3 flex gap-5 border-2 border-yellow-500">
                <Phone />
                Contact
              </div>
            </a>
          </li>
        </ul>
      </nav>

      <section className="flex flex-col gap-6 items-center text-[#534f80]  font-medium ">
        <ul className="w-fit h-12 flex gap-2 items-center">
          <li className="sideBarLink">
            <Link
              href={socialLinks.facebook ? socialLinks.facebook : ""}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-2" />
            </Link>
          </li>
          <li className="sideBarLink">
            <Link
              href={socialLinks.twitter ? socialLinks.twitter : ""}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-4" />
            </Link>
          </li>
          <li className="sideBarLink">
            <Link
              href={socialLinks.linkedIn ? socialLinks.linkedIn : ""}
              target="_blank"
              className=" w-10 h-10 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
            </Link>
          </li>
          <li className="sideBarLink">
            <Link
              href={socialLinks.github ? socialLinks.github : ""}
              target="_blank"
              className="w-10 h-10 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6" />
            </Link>
          </li>
        </ul>

        <div className="w-full text-center">
          <p>All Copyrights 2023, Tejodeep Mitra Roy. All rights reserved.</p>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
