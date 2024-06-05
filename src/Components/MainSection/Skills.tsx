"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { FC, useRef } from "react";

interface SkillsProps {
	skills: getSkills[];
}
const Skills: FC<SkillsProps> = ({ skills }) => {
	const skill = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.from(".skillContainer", {
			y: 30,
			opacity: 0,
			stagger: 0.8,
			scrollTrigger: {
				trigger: skill.current,
				scroller: "main",
				start: "25% 60%",
			},
			ease: "back.out(1.7)",
		});
	});

	return (
		<section ref={skill} className="relative h-auto w-full py-28" id="services">
			<div className="w-full">
				<section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 lg:px-10">
					<span className="text-lg font-medium">- SKILLS</span>
					<section className="flex flex-col justify-between gap-10 md:flex-row">
						<span className="font-Inter text-4xl font-extrabold">
							What Skills I know
						</span>
					</section>
					<ul className="mt-7 grid w-full grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
						{skills
							.sort((a: any, b: any) => a.id - b.id)
							.map((items) => (
								<li
									key={items.id}
									className="w-full transition duration-300 ease-in-out hover:-translate-y-4"
								>
									<section className="skillContainer flex h-full w-full flex-col rounded-[3rem] border-2 border-black p-5 text-lg shadow-xl sm:p-8">
										<span className="mb-4 w-full font-Inter font-medium text-[rgba(19,15,73,.5)]">
											{items.id}
										</span>
										<h3 className="mb-6 w-full font-Inter text-xl font-bold leading-5">
											{items.name}
										</h3>
										<section className="flex h-fit w-full flex-wrap items-start justify-start gap-3">
											{items.technologies?.map((tech, index) => (
												<div
													key={tech._key}
													className="flex h-fit items-center gap-2 rounded-3xl border-2 border-black p-2 px-3"
												>
													{/* <span className="w-fit h-10 mb-1"> */}
													<Image
														src={tech.logo}
														width={25}
														height={25}
														alt={tech.name}
														className="rounded-full"
													/>
													{/* </span> */}
													<span>
														<p className="text-center font-bold">{tech.name}</p>
													</span>
												</div>
											))}
										</section>
									</section>
								</li>
							))}
					</ul>
				</section>
			</div>
		</section>
	);
};

export default Skills;
