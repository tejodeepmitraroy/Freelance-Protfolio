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
import db from "@/DB/db";
import useIsomorphicLayoutEffect from "@/Hooks/IsomorphicEffect";
import gsap from "gsap";
interface Props {}

const SideBar: FC = (props: Props) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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
    return () => ctx.revert();
  }, []);
  return (
    <aside className="  lg:w-[25%] 2xl:w-[20%] hidden h-screen border-r lg:flex flex-col p-8 xl:p-14 items-center justify-between font-Karla antialiased">
      <section className="flex flex-col gap-7 items-center">
        <Image
          src={"/img.png"}
          width={110}
          height={110}
          alt=""
          className=" sideBarHeading w-25 h-25 border-2 border-[#a5a6ff] rounded-full"
        />
        <div className="flex flex-col items-center justify-center ">
          <h2 className="sideBarHeading w-full font-Inter font-bold text-xl 2xl:text-2xl z-10 mt-3">
            {db.name}
          </h2>
          <h2 className="sideBarHeading fixed font-Pacifico text-3xl 2xl:text-4xl opacity-10 z-0 text">
            {db.name}
          </h2>
        </div>
      </section>

      <nav className="">
        <ul className="flex flex-col items-center gap-3 2xl:gap-5 text-[#534f80] text-base 2xl:text-lg cursor-pointer">
          <li className="sideBarNav">
            <Link href="#home" className="hover:text-[#a5a6ff] cursor-pointer">
              Home
            </Link>
          </li>
          <li className="sideBarNav">
            <Link href="#about" className="hover:text-[#a5a6ff] cursor-pointer">
              About
            </Link>
          </li>
          <li className="sideBarNav">
            <Link
              href="#services"
              className="hover:text-[#a5a6ff] cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li className="sideBarNav">
            <Link
              href="#projects"
              className="hover:text-[#a5a6ff] cursor-pointer"
            >
              Projects
            </Link>
          </li>
          {/* <li>
              <a
                href="#services"
                className="hover:text-[#a5a6ff] cursor-pointer"
              >
                Services
              </a>
            </li> */}
          <li className="sideBarNav">
            <Link
              href="#contact"
              className="hover:text-[#a5a6ff] cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <section className="flex flex-col gap-6 items-center text-[#534f80]  font-medium ">
        <ul className="w-fit h-12 flex gap-2 items-center">
            <li className="sideBarLink"> 
            <Link
              href={db.socialLinks.facebook}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-2" />
            </Link>
          </li>
          <li className="sideBarLink">
            <Link
              href={db.socialLinks.twitter}
              target="_blank"
              className="w-9 h-9 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-4" />
            </Link>
          </li> 
          <li className="sideBarLink">
            <Link
              href={db.socialLinks.linkedIn}
              target="_blank"
              className=" w-10 h-10 bg-gray-200  text-[#130f49]  flex justify-center items-center rounded-full hover:bg-[#130f49]  hover:text-gray-200 hover:w-10 hover:h-10  transition duration-900 ease-in-out"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
            </Link>
          </li>
          <li  className="sideBarLink">
            <Link
              href={db.socialLinks.github}
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
