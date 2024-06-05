"use client";
import { imageUrlFor } from "@/config/imageBuilder";
import {
	faFacebookF,
	faGithub,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useRef, useState } from "react";

interface NavbarProps {
	infoData: getInfo;
	socialLinks: getSocialLinks;
}

const Navbar: FC<NavbarProps> = ({ infoData, socialLinks }) => {
	const [navReveal, setNavReveal] = useState<boolean>(false);
	const navbarSide = useRef<HTMLDivElement>(null);
	const navBarInner = useRef<HTMLDivElement>(null);

	return (
		<>
			<header className="fixed z-10 flex h-12 w-full items-center justify-between bg-white px-6 lg:hidden">
				<h1 className="font-Inter text-3xl font-extrabold text-[#C1AEFC]">
					T.M.Roy
				</h1>
				<section className="flex flex-wrap items-center justify-between">
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-default"
						aria-expanded="false"
						title=" button"
						onClick={() => {
							setNavReveal(!navReveal);
						}}
					>
						<svg
							className="h-5 w-5"
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
				} right-0 top-12 z-50 h-screen w-full`}
			>
				<button
					className="absolute h-full w-full bg-black opacity-0"
					title="Menu Closing button"
					onClick={() => setNavReveal(!navReveal)}
				></button>
				<section
					ref={navBarInner}
					className="fixed right-0 top-12 flex h-full w-60 flex-col gap-6 bg-white px-5 pb-5 pt-12 text-right font-Karla antialiased"
				>
					<div className="flex flex-col items-end">
						<Image
							src={infoData.profilePic}
							width={90}
							height={90}
							alt=""
							className="rounded-full border-2 border-[#a5a6ff]"
						/>
						<div className="flex flex-col items-center justify-center">
							<span className="z-10 mt-7 font-Inter text-base font-bold">
								{infoData.name}
							</span>
							<span className="fixed z-0 font-Pacifico text-xl opacity-10">
								{infoData.name}
							</span>
						</div>
					</div>

					<nav className="">
						<ul className="flex cursor-pointer flex-col items-end gap-3 text-base text-[#534f80] 2xl:gap-5 2xl:text-lg">
							<li className="rightSideBarLink">
								<Link
									href="#home"
									className="cursor-pointer hover:text-[#a5a6ff]"
								>
									Home
								</Link>
							</li>
							<li className="rightSideBarLink">
								<Link
									href="#projects"
									className="cursor-pointer hover:text-[#a5a6ff]"
								>
									Projects
								</Link>
							</li>
							<li className="rightSideBarLink">
								<Link
									href="#about"
									className="cursor-pointer hover:text-[#a5a6ff]"
								>
									About
								</Link>
							</li>
							<li className="rightSideBarLink">
								<Link
									href="#services"
									className="cursor-pointer hover:text-[#a5a6ff]"
								>
									Skills
								</Link>
							</li>

							<li className="rightSideBarLink">
								<Link
									href="#services"
									className="cursor-pointer hover:text-[#a5a6ff]"
								>
									Services
								</Link>
							</li>
							<li className="rightSideBarLink">
								<Link
									href="#contact"
									className="cursor-pointer hover:text-[#a5a6ff]"
								>
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					<section className="flex flex-col items-end gap-6 font-medium text-[#534f80]">
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
								className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
							>
								<FontAwesomeIcon icon={faFacebookF} className="w-3" />
							</Link>
							<Link
								href={socialLinks.twitter ? socialLinks.twitter : ""}
								target="_blank"
								className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
							>
								<FontAwesomeIcon icon={faXTwitter} className="w-3" />
							</Link>
							<Link
								href={socialLinks.linkedIn ? socialLinks.linkedIn : ""}
								target="_blank"
								className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
							>
								<FontAwesomeIcon icon={faLinkedinIn} className="w-3" />
							</Link>
							<Link
								href={socialLinks.github ? socialLinks.github : ""}
								target="_blank"
								className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100"
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
