"use client";
import { imageUrlFor } from "@/config/imageBuilder";
import {
	faFacebookF,
	faGithub,
	faLinkedinIn,
	faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	FolderOpenDot,
	Home,
	PencilRuler,
	Phone,
	SwatchBook,
} from "lucide-react";
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
					navReveal ? "translate-x-0" : " -translate-x-60 invisible"
				} left-0 top-0 z-50 h-screen w-full transition-all ease-in-out sm:hidden`}
			>
				<button
					className={`absolute ${
						navReveal ? "" : "hidden"
					} h-full w-full bg-black opacity-0`}
					title="Menu Closing button"
					onClick={() => setNavReveal(false)}
				></button>
				<section
					ref={navBarInner}
					className="fixed left-0 top-12 flex h-full w-60 flex-col gap-6 bg-[#0C134F] px-5 pb-5 pt-12 text-right font-Karla antialiased"
				>
					<div className="flex flex-col items-center">
						<Image
							src={infoData.profilePic}
							width={90}
							height={90}
							alt=""
							className="rounded-full border-2 border-[#a5a6ff]"
						/>
						<div className="flex flex-col items-center justify-center text-[#EEF7FF]">
							<span className="z-10 mt-7 font-Inter text-lg font-bold tracking-wide">
								{infoData.name}
							</span>
							<span className="fixed z-0 font-Pacifico text-xl opacity-10">
								{infoData.name}
							</span>
						</div>
					</div>

					<nav className="w-full">
						<ul className="flex cursor-pointer flex-col items-end text-base text-[#534f80] 2xl:gap-5 2xl:text-lg">
							<li
								className="rightSideBarLink w-full"
								onClick={() => setNavReveal(false)}
							>
								<a href="#home" className="cursor-pointer">
									<div className="flex w-full items-center justify-start gap-5 px-3 py-2 text-center font-bold text-yellow-500 transition-all duration-300 ease-in-out hover:rounded-full hover:bg-yellow-500 hover:text-white">
										<Home />
										Home
									</div>
								</a>
							</li>
							<li
								className="rightSideBarLink w-full"
								onClick={() => setNavReveal(false)}
							>
								<a href="#projects" className="cursor-pointer">
									<div className="flex w-full items-center justify-start gap-5 px-3 py-2 text-center font-bold text-red-500 transition-all duration-300 ease-in-out hover:rounded-full hover:bg-red-500 hover:text-white">
										<FolderOpenDot />
										Projects
									</div>
								</a>
							</li>
							<li
								className="rightSideBarLink w-full"
								onClick={() => setNavReveal(false)}
							>
								<a href="#services" className="cursor-pointer">
									<div className="flex w-full items-center justify-start gap-5 px-3 py-2 text-center font-bold text-green-600 transition-all duration-300 ease-in-out hover:rounded-full hover:bg-green-600 hover:text-white">
										<PencilRuler />
										Skills
									</div>
								</a>
							</li>
							<li
								className="rightSideBarLink w-full"
								onClick={() => setNavReveal(false)}
							>
								<a href="#about" className="cursor-pointer">
									<div className="flex w-full items-center justify-start gap-5 px-3 py-2 text-center font-bold text-blue-500 transition-all duration-300 ease-in-out hover:rounded-full hover:bg-blue-500 hover:text-white">
										<SwatchBook />
										About
									</div>
								</a>
							</li>

							{/* <li className="rightSideBarLink w-full">
								<a href="#services" className="cursor-pointer">
									<div className="flex w-full items-center justify-start gap-5 rounded-full px-3 py-2 text-center font-bold text-rose-500 transition-all duration-300 ease-in-out hover:bg-rose-500 hover:text-white">
										<Phone />
										Services
									</div>
								</a>
							</li> */}
							<li
								className="rightSideBarLink w-full"
								onClick={() => setNavReveal(false)}
							>
								<a href="#contact" className="cursor-pointer">
									<div className="flex w-full items-center justify-start gap-5 rounded-full px-3 py-2 text-center font-bold text-rose-500 transition-all duration-300 ease-in-out hover:bg-rose-500 hover:text-white">
										<Phone />
										Contact
									</div>
								</a>
							</li>
						</ul>
					</nav>

					<section className="flex flex-col items-center gap-6 font-medium text-[#534f80]">
						<span className="flex gap-2">
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

						<section className="text-sm text-[#EEF7FF]">
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
