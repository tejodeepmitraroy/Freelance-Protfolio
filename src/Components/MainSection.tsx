import React, { FC } from "react";
import Home from "./MainSection/Home";
import About from "./MainSection/About";
import Services from "./MainSection/Services";
import Projects from "./MainSection/Projects";
import Testimonials from "./MainSection/Testimonials";
import ContactUs from "./MainSection/ContactUs";
import Skills from "./MainSection/Skills";
import Navbar from "./Navbar";
import getInfo from "@/lib/getInfo";
import getExperience from "@/lib/getExperience";
import getSocialLinks from "@/lib/getSocialLinks";
import getProjects from "@/lib/getProjects";
import getServices from "@/lib/getServices";
import getTestimonial from "@/lib/getTestimonial";
import getSkills from "@/lib/getSkills";
import Experience from "./MainSection/Experience";

interface Props {}

const MainSection: FC = async (props: Props) => {
	const infoData = await getInfo();
	const experience = await getExperience();
	const socialLinks = await getSocialLinks();
	const projects = await getProjects();
	const services = await getServices();
	const testimonial = await getTestimonial();
	const skills = await getSkills();

	return (
		<main className="main h-screen w-full overflow-y-auto scroll-smooth font-Karla text-[#1D267D] subpixel-antialiased lg:w-[75%] 2xl:w-[80%]">
			<Navbar infoData={infoData} socialLinks={socialLinks} />
			<Home infoData={infoData} />
			<Projects projects={projects} />
			<Skills skills={skills} />
			<About infoData={infoData} />
			<Experience experienceData={experience} />
			{/* <Services /> */}
			{/* <Testimonials /> */}
			<ContactUs infoData={infoData} socialLinks={socialLinks} />
		</main>
	);
};

export default MainSection;
