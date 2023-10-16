"use client";
import React, {
  FC,
  createRef,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import Home from "./MainSection/Home";
import About from "./MainSection/About";
import Services from "./MainSection/Services";
import Projects from "./MainSection/Projects";
import Testimonials from "./MainSection/Testimonials";
import ContactUs from "./MainSection/ContactUs";
import Skills from "./MainSection/Skills";
import Navbar from "./Navbar";
import "@/app/Locomotive.css";
import LocomotiveScroll from "locomotive-scroll";

interface Props {}

const MainSection: FC = (props: Props) => {
  const main = createRef<HTMLDivElement>();

  return (
    <main
      ref={main}
      className="main  w-full lg:w-[75%] 2xl:w-[80%] h-screen text-[#1D267D] overflow-y-auto font-Karla subpixel-antialiased scroll-smooth"
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Services /> */}
      {/* <Testimonials /> */}
      <ContactUs />
    </main>
  );
};

export default MainSection;
