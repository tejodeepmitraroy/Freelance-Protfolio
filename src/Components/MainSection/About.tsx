"use client";
import React, { FC, useLayoutEffect, useRef } from "react";
import db from "@/DB/db";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface AboutProps {
	infoData: getInfo;
}

const About: FC<AboutProps> = ({ infoData }) => {
	const about = useRef<HTMLDivElement>(null);

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
	});

	return (
		<section className="about h-auto w-full border bg-[#f3f9ff]" id="about">
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
							<span className="text-lg font-medium">- NICE TO MEET YOU!</span>
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
			</div>
		</section>
	);
};

export default About;
