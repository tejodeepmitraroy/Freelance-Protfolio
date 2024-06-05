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
	}, {});

	return (
		<aside className="relative hidden h-screen flex-col items-center justify-between overflow-auto border-r p-8 font-Karla antialiased lg:flex lg:w-[25%] xl:p-14 2xl:w-[20%]">
			<section className="flex flex-col items-center gap-7">
				<Image
					src={infoData.profilePic}
					width={110}
					height={110}
					alt="Location"
					priority
					className="sideBarHeading w-25 h-25 rounded-full border-2 border-[#a5a6ff]"
				/>
				<div className="flex flex-col items-center justify-center">
					<h2 className="sideBarHeading z-10 mt-3 w-full font-Inter text-xl font-bold 2xl:text-2xl">
						{infoData.name}
					</h2>
					<h2 className="sideBarHeading text absolute z-0 font-Pacifico text-3xl opacity-10 2xl:text-4xl">
						{infoData.name}
					</h2>
				</div>
			</section>

			<nav className="w-full">
				<ul className="flex cursor-pointer flex-col items-center gap-3 text-base text-[#534f80] 2xl:gap-4 2xl:text-lg">
					<li className="sideBarNav w-full">
						<a href="#home" className="cursor-pointer">
							<div className="flex w-full items-center justify-start gap-5 rounded-[3rem] border-2 border-[#a5a6ff] px-3 py-2 text-center font-bold text-yellow-500 transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white">
								<Home />
								Home
							</div>
						</a>
					</li>
					<li className="sideBarNav w-full">
						<a href="#projects" className="cursor-pointer">
							<div className="flex w-full items-center justify-start gap-5 rounded-[3rem] border-2 border-[#a5a6ff] px-3 py-2 text-center font-bold text-red-500 transition-all duration-300 ease-in-out hover:bg-red-500 hover:text-white">
								<FolderOpenDot />
								Projects
							</div>
						</a>
					</li>
					<li className="sideBarNav w-full">
						<a href="#about" className="cursor-pointer ">
							<div className="flex w-full items-center justify-start gap-5 rounded-[3rem] border-2 border-[#a5a6ff] px-3 py-2 text-center font-bold text-green-500 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-white">
								<SwatchBook />
								About
							</div>
						</a>
					</li>
					<li className="sideBarNav w-full">
						<a href="#services" className="cursor-pointer ">
							<div className="flex w-full items-center justify-start gap-5 rounded-[3rem] border-2 border-[#a5a6ff] px-3 py-2 text-center font-bold text-blue-600 transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white">
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
						<a href="#contact" className="cursor-pointer ">
							<div className="flex w-full items-center justify-start gap-5 rounded-[3rem] border-2 border-[#a5a6ff] px-3 py-2 text-center font-bold text-rose-500 transition-all duration-300 ease-in-out hover:bg-rose-500 hover:text-white">
								<Phone />
								Contact
							</div>
						</a>
					</li>
				</ul>
			</nav>

			<section className="flex flex-col items-center gap-6 font-medium text-[#534f80]">
				<ul className="flex h-12 w-fit items-center gap-2">
					<li className="sideBarLink">
						<Link
							href={socialLinks.facebook ? socialLinks.facebook : ""}
							target="_blank"
							className="duration-900 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-10 hover:w-10 hover:bg-[#130f49] hover:text-gray-200"
						>
							<FontAwesomeIcon icon={faFacebookF} className="w-2" />
						</Link>
					</li>
					<li className="sideBarLink">
						<Link
							href={socialLinks.twitter ? socialLinks.twitter : ""}
							target="_blank"
							className="duration-900 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-10 hover:w-10 hover:bg-[#130f49] hover:text-gray-200"
						>
							<FontAwesomeIcon icon={faXTwitter} className="w-4" />
						</Link>
					</li>
					<li className="sideBarLink">
						<Link
							href={socialLinks.linkedIn ? socialLinks.linkedIn : ""}
							target="_blank"
							className="duration-900 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-10 hover:w-10 hover:bg-[#130f49] hover:text-gray-200"
						>
							<FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
						</Link>
					</li>
					<li className="sideBarLink">
						<Link
							href={socialLinks.github ? socialLinks.github : ""}
							target="_blank"
							className="duration-900 flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-[#130f49] transition ease-in-out hover:h-10 hover:w-10 hover:bg-[#130f49] hover:text-gray-200"
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
