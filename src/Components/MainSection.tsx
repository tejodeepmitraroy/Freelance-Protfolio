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

interface Props {}

const MainSection: FC = async (props: Props) => {
  const infoData = await getInfo();
  const experience = await getExperience();
  const socialLinks = await getSocialLinks();
  const projects = await getProjects();
  const services = await getServices();
  const testimonial = await getTestimonial();


  console.log(testimonial);

  return (
    <main className="main  w-full lg:w-[75%] 2xl:w-[80%] h-screen text-[#1D267D] overflow-y-auto font-Karla subpixel-antialiased scroll-smooth">
      <Navbar />
      <Home infoData={infoData}/>
      <About infoData={infoData} experienceData={experience}/>
      <Skills />
      <Projects />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <ContactUs />
    </main>
  );
};

export default MainSection;
