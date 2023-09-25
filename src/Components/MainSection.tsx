import React, { FC } from "react";
import Home from "./MainSection/Home";
import About from "./MainSection/About";
import Services from "./MainSection/Services";
import Projects from "./MainSection/Projects";
import Testimonials from "./MainSection/Testimonials";
import ContactUs from "./MainSection/ContactUs";
import Skills from "./MainSection/Skills";

interface Props {}

const MainSection:FC = (props: Props) => {
  return (
    <div className="w-full lg:w-[81%] h-screen text-[#1D267D] overflow-auto font-Karla subpixel-antialiased">
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Services />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default MainSection;
