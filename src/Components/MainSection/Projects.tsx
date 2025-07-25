"use client";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import db from "@/DB/db";
import Modal from "@/Components/Modal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imageUrlFor } from "@/config/imageBuilder";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectsProps {
	projects: getProjects[];
}
const Projects: FC<ProjectsProps> = ({ projects }) => {
	const [isModal, setIsModal] = useState<boolean>(false);
	const [isData, setIsData] = useState<getProjects>({} as getProjects);
	const project = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	console.log(projects);

	useGSAP(() => {
		gsap.from(".ProjectContainer", {
			y: 60,
			opacity: 0,
			duration: 1,
			stagger: 1,
			scrollTrigger: {
				trigger: project.current,
				scroller: "main",
				start: "50% 60%",
				// markers: true,
			},
			ease: "back.inOut",
		});
	}, {});

	return (
		<>
			<section
				ref={project}
				className="relative w-full bg-[#f3f9ff] py-28"
				id="projects"
			>
				<div className="w-full">
					<div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 lg:px-10">
						<span className="text-lg font-medium">- PROJECTS</span>
						<span className="font-Inter text-4xl font-extrabold">
							Recent Completed Project
						</span>
						<section className="grid-rows-masonry mt-10 grid w-full grid-cols-1 gap-10 text-lg sm:px-10 md:grid-cols-2">
							{/* Container */}
							{projects.map((project, index) => (
								<section
									key={index}
									className="ProjectContainer w-full rounded-[3rem] border-4 border-gray-600 p-3 shadow-lg"
								>
									<Image
										src={project.thumbnail ?? "/default.jpg"}
										width={400}
										height={400}
										alt=""
										className="aspect-[16/9] w-full rounded-[2rem] border border-black"
										onClick={() => {
											setIsData(project);
											setIsModal(true);
										}}
									/>

									<div className="z-0 flex w-full cursor-pointer items-center justify-between px-5 pt-3">
										<div className="flex flex-col gap-1">
											<h3 className="font-Inter text-xl font-semibold">
												{project.title}
											</h3>
										</div>

										<div className="flex w-fit items-center gap-3">
											{project.live && (
												<Link
													href={project.live}
													target={"_blank"}
													title="tooltip text"
													className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black sm:h-10 sm:w-10"
												>
													<ExternalLink color="white" size={18} />
												</Link>
											)}

											{project.repoLink && (
												<Link
													href={project.repoLink[0].link || ""}
													target={"_blank"}
													className="z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black sm:h-10 sm:w-10"
												>
													<Github color="white" size={18} />
												</Link>
											)}
										</div>
									</div>
									<div className="z-0 flex w-full flex-wrap gap-3 px-5 pb-3 pt-6">
										<p>{project.description}</p>
									</div>

									<div className="z-0 flex w-full flex-wrap gap-3 px-5 pb-3 pt-6">
										{project.technologies.map((tech, index) => (
											<div
												key={index}
												className="text-primary cursor-pointer rounded-lg border-2 border-purple-400 px-2 font-medium transition-all duration-200 ease-in-out hover:bg-purple-400 hover:text-white"
											>
												{tech}
											</div>
										))}
									</div>
								</section>
							))}
						</section>
					</div>
				</div>
			</section>
			{/* Modal */}
			{/* <Modal data={isData} isOpen={isModal} isClose={() => setIsModal(false)} /> */}
		</>
	);
};

export default Projects;
