"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { FC, useRef } from "react";

interface ExperienceProps {
	experienceData: getExperience[];
}

const Experience: FC<ExperienceProps> = ({ experienceData }) => {
	const experience = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.from(".expBox", {
			y: 40,
			skewX: 2,
			opacity: 0,
			stagger: 0.9,
			delay: 0.3,
			scrollTrigger: {
				trigger: experience.current,
				scroller: "main",
				start: "30% 60%",
			},
			ease: "expo.out",
		});
	});

	return (
		<section className="about h-auto w-full border bg-white">
			<div className=" h-full w-full ">
				<section ref={experience} className="h-auto w-full pb-16 pt-28">
					<div className="mx-auto flex h-auto max-w-7xl flex-col gap-5 px-5 lg:px-10">
						<span className="text-lg font-medium">- EXPERIENCE</span>
						<span className="font-Inter text-4xl font-extrabold">
							Everything about me!
						</span>
						<ul className="mt-10 flex w-full flex-wrap lg:-ml-8">
							{experienceData.map((experience, index) => (
								<li
									key={index}
									className="mb-10 w-full transition duration-300 ease-in-out hover:-translate-y-4 md:w-1/2 md:pl-8"
								>
									<div className="expBox border-1 relative flex w-full flex-col gap-6 rounded-[3rem] border-[#f9fafc] bg-white p-9 text-lg font-normal leading-8 shadow-lg lg:px-20 lg:py-11">
										{/* heading */}
										<div className="flex w-full justify-between text-lg">
											<div className="flex flex-col gap-1">
												<span className="text-base font-semibold text-amber-500">
													{experience.timeRange}
												</span>
												<span className="text-xl font-extrabold">
													<p>{experience.position}</p>
												</span>
											</div>

											<span className="flex w-44 justify-end text-base font-medium md:text-xl">
												-{experience.company}
											</span>
										</div>
										{/* text */}
										<div>
											{experience.description}
											{/* {experience.description.map((description, index) => (
                        <p key={index} className="mb-4">
                          {description}
                        </p>
                      ))} */}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</section>
	);
};

export default Experience;
