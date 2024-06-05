"use client";
import React, { FC, useLayoutEffect, useRef } from "react";
import db from "@/DB/db";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface AboutProps {
	infoData: getInfo;
	experienceData: getExperience[];
}

const About: FC<AboutProps> = ({ infoData, experienceData }) => {
	const about = useRef<HTMLDivElement>(null);
	const experience = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		gsap.from(".aboutGotProject", {
			x: -30,
			opacity: 0,
			duration: 1,
			delay: 0.3,
			stagger: 0.5,
			scrollTrigger: {
				trigger: about.current,
				scroller: "main",
				start: "5% 70%",
			},
			ease: "expo.inOut",
		});

		gsap.from(".info", {
			x: 30,
			opacity: 0,
			duration: 1,
			delay: 0.4,
			stagger: 0.2,
			scrollTrigger: {
				trigger: about.current,
				scroller: "main",
				start: "25% 60%",
			},
			ease: "power3.inOut",
		});

		gsap.from(".counter", {
			y: 20,
			duration: 1,
			opacity: 0,
			stagger: 1,
			scrollTrigger: {
				trigger: about.current,
				scroller: "main",
				start: "50% 60%",
			},
			ease: "back.inOut(1.7)",
		});

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
		<section className="about h-auto w-full border bg-white" id="about">
			<div className="mt-28 h-full w-full">
				{/* About */}
				<section
					ref={about}
					className="mx-auto flex h-auto w-full max-w-7xl flex-col gap-16 px-5 lg:px-10"
				>
					{/* biography */}
					<div className="flex flex-col lg:flex-row">
						{/* left */}
						<section className="mb-16 flex w-full flex-col gap-5 lg:w-[40%]">
							<span className="text-lg font-medium">-NICE TO MEET YOU!</span>
							<div className="flex flex-col gap-2">
								<span className="font-Inter text-4xl font-extrabold">
									<h3>{db.name}</h3>
								</span>
								<span className="text-lg font-bold">
									<p>{db.subtitle}</p>
								</span>
							</div>
							<span className="aboutGotProject mt-4 h-fit w-fit">
								<a
									href={"#projects"}
									className="mt-6 h-fit w-fit rounded-[3rem] border border-[#0C134F] bg-[#0C134F] px-10 py-3 text-lg text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-[#0C134F]"
								>
									Got a project?
								</a>
							</span>
						</section>
						{/* right */}

						<section className="flex w-full flex-col gap-10 text-lg lg:w-[60%]">
							<span>
								{/* {db.bio.map((bio, index) => (
                  <p key={index} className="mb-7">
                    {bio}
                  </p>
                ))} */}
								{infoData.bio}
							</span>

							<div className="w-full">
								<ul className="flex w-full flex-wrap">
									<li className="info mb-3 mr-6 flex flex-col">
										<span className="underline">AGE</span>
										<span className="text-lg font-extrabold">
											{infoData.age}
										</span>
									</li>
									<li className="info mb-3 mr-6 flex flex-col">
										<span className="underline">BORN</span>
										<span className="cursor-pointer text-lg font-extrabold transition duration-300 ease-in-out hover:text-amber-500">
											{infoData.born}
										</span>
									</li>
									<li className="info mb-3 mr-6 flex flex-col">
										<span className="underline">PHONE</span>
										<a
											href={`tel:${infoData.phone}`}
											className="cursor-pointer text-lg font-extrabold transition duration-300 ease-in-out hover:text-amber-500"
										>
											{infoData.phone}
										</a>
									</li>
									<li className="info mb-3 flex flex-col">
										<span className="underline">MAIL</span>
										<a
											href={`mailto:${infoData.mail}`}
											className="cursor-pointer text-lg font-extrabold transition duration-300 ease-in-out hover:text-amber-500"
										>
											{infoData.mail}
										</a>
									</li>
								</ul>
							</div>
						</section>
					</div>
					{/* counter */}
					<section className="mb-28 flex w-full flex-col gap-10 md:flex-row">
						<div className="counter flex h-48 w-full flex-col items-center justify-center gap-4 rounded-[3rem] bg-[#F6F7C1] md:w-[50%] lg:w-[30%]">
							<span className="font-Inter text-4xl font-extrabold">
								{infoData.experienceYears}
							</span>
							<span className="text-lg font-semibold">YEARS OF EXPERIENCE</span>
						</div>
						<div className="counter flex h-48 w-full flex-col items-center justify-center gap-4 rounded-[3rem] bg-[#BEF0CB] md:w-[50%] lg:w-[30%]">
							<span className="font-Inter text-4xl font-extrabold">
								{infoData.projectDone}
							</span>
							<span className="text-lg font-semibold">PROJECT COMPLETED</span>
						</div>
						{/* <div className=" w-[30%] h-48 bg-[#D1FFF3] rounded-md flex flex-col gap-4 items-center justify-center">
              <span className="font-extrabold text-4xl font-Inter">10+</span>
              <span className="font-semibold text-lg">Happy Clients</span>
            </div> */}
					</section>
				</section>

				{/* Experiecnce */}
				<section
					ref={experience}
					className="h-auto w-full bg-[#f3f9ff] pb-16 pt-28"
				>
					<div className="mx-auto flex h-auto max-w-7xl flex-col gap-5 px-5 lg:px-10">
						<span className="text-lg font-medium">-EXPERIENCE</span>
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

export default About;
