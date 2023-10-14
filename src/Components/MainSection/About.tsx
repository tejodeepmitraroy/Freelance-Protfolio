"use client";
import React, { FC, useEffect, useLayoutEffect, useRef } from "react";
import db from "@/DB/db";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: FC = () => {
  const counter = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: about.current,
          scroller: ".main",
          markers: true,
          start: "10% center",
          end: "60% 20%",
        },
      });

      aboutTl.from(".counter", {
        y: -60,
        duration: 0.4,
        opacity: 0,
        delay: 0.2,
        stagger: 0.4,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={about} className="about w-full h-auto border bg-white" id="about">
      <div className="w-full h-full mt-28">
        {/* About */}
        <div className="w-full max-w-7xl px-5 lg:px-10 h-auto mx-auto flex flex-col gap-16">
          {/* biography */}
          <div className="flex flex-col lg:flex-row ">
            {/* left */}
            <div className="w-full lg:w-[40%] mb-16 flex flex-col gap-5">
              <span className=" font-medium text-lg ">-NICE TO MEET YOU!</span>
              <div className="flex flex-col gap-2">
                <span className=" font-extrabold text-4xl font-Inter">
                  <h3>{db.name}</h3>
                </span>
                <span className="text-lg font-bold">
                  <p>{db.subtitle}</p>
                </span>
              </div>
              <span className="w-fit px-10 py-3 mt-6 rounded-lg bg-[#0C134F] hover:bg-transparent text-white text-lg hover:text-[#0C134F] border border-[#0C134F] transition duration-300 ease-in-out">
                <p>Got a project?</p>
              </span>
            </div>
            {/* right */}

            <div className="w-full lg:w-[60%] flex flex-col gap-10  text-lg">
              <span>
                {db.bio.map((bio, index) => (
                  <p key={index} className="mb-7">
                    {bio}
                  </p>
                ))}
              </span>

              <div className="w-full ">
                <ul className="w-full flex  flex-wrap ">
                  <li className="flex flex-col mr-6 mb-3">
                    <span className="underline">AGE</span>
                    <span className="font-extrabold text-xl">{db.age}</span>
                  </li>
                  <li className="flex flex-col mr-6 mb-3">
                    <span className="underline">BORN</span>
                    <a
                      href=""
                      className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      {db.born}
                    </a>
                  </li>
                  <li className="flex flex-col mr-6 mb-3">
                    <span className="underline">PHONE</span>
                    <a
                      href={`tel:${db.phone}`}
                      className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      {db.phone}
                    </a>
                  </li>
                  <li className="flex flex-col mb-3">
                    <span className="underline">MAIL</span>
                    <a
                      href={`mailto:${db.mail}`}
                      className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      {db.mail}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* counter */}
          <div
            ref={counter}
            className=" counter w-full flex flex-col md:flex-row  gap-10 mb-28 "
          >
            <div className=" counter w-full md:w-[50%] lg:w-[30%] h-48 bg-[#F6F7C1] rounded-md flex flex-col gap-4 items-center justify-center ">
              <span className="font-extrabold text-4xl font-Inter">
                {db.experienceYears}
              </span>
              <span className="font-semibold text-lg">YEARS OF EXPERIENCE</span>
            </div>
            <div className=" counter  w-full md:w-[50%]  lg:w-[30%] h-48 bg-[#BEF0CB] rounded-md flex flex-col gap-4 items-center justify-center">
              <span className="font-extrabold text-4xl font-Inter">
                {db.projectDone}
              </span>
              <span className="font-semibold text-lg">PROJECT COMPLETED</span>
            </div>
            {/* <div className=" w-[30%] h-48 bg-[#D1FFF3] rounded-md flex flex-col gap-4 items-center justify-center">
              <span className="font-extrabold text-4xl font-Inter">10+</span>
              <span className="font-semibold text-lg">Happy Clients</span>
            </div> */}
          </div>
        </div>
        {/* Experiecnce */}
        <div className="w-full  h-auto pt-28 pb-16 bg-[#f3f9ff] ">
          <div className="max-w-7xl px-5 lg:px-10 h-auto mx-auto flex flex-col gap-5">
            <span className="font-medium text-lg">-EXPERIENCE</span>
            <span className=" font-extrabold text-4xl font-Inter">
              Everything about me!
            </span>
            <ul className="w-full flex flex-wrap mt-10 lg:-ml-8">
              {db.experience.map((experience, index) => (
                <li
                  key={index}
                  className="w-full md:w-1/2 mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out"
                >
                  <div className="w-full relative p-9 lg:px-20 lg:py-11 flex flex-col gap-6 rounded shadow-lg text-lg  font-normal leading-8 bg-white border-1 border-[#f9fafc]">
                    {/* heading */}
                    <div className="w-full flex justify-between text-lg ">
                      <div className="flex flex-col gap-1">
                        <span className=" text-base font-semibold text-amber-500">
                          {experience.timeRange}
                        </span>
                        <span className="text-xl font-extrabold">
                          <p>{experience.position}</p>
                        </span>
                      </div>

                      <span className=" w-44 text-base font-medium md:text-xl">
                        -{experience.company}
                      </span>
                    </div>
                    {/* text */}
                    <div>
                      {experience.description.map((description, index) => (
                        <p key={index} className="mb-4">
                          {description}
                        </p>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
