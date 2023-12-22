"use client";
import React, { FC, useLayoutEffect, useRef } from "react";
import db from "@/DB/db";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import useIsomorphicLayoutEffect from "@/Hooks/IsomorphicEffect";

interface AboutProps {
  infoData: getInfo
  experienceData:getExperience[]
}

const About: FC<AboutProps> = ({ infoData,experienceData }) => {
  const about = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
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
    return () => ctx.revert();
  }, []);

  return (
    <section className="about w-full h-auto border bg-white" id="about">
      <div className="w-full h-full mt-28">
        {/* About */}
        <section
          ref={about}
          className="w-full max-w-7xl px-5 lg:px-10 h-auto mx-auto flex flex-col gap-16"
        >
          {/* biography */}
          <div className="flex flex-col lg:flex-row ">
            {/* left */}
            <section className="w-full lg:w-[40%] mb-16 flex flex-col gap-5">
              <span className=" font-medium text-lg ">-NICE TO MEET YOU!</span>
              <div className="flex flex-col gap-2">
                <span className=" font-extrabold text-4xl font-Inter">
                  <h3>{db.name}</h3>
                </span>
                <span className="text-lg font-bold">
                  <p>{db.subtitle}</p>
                </span>
              </div>
              <span className="aboutGotProject w-fit h-fit mt-4">
                <a
                  href={"#projects"}
                  className="w-fit h-fit px-10 py-3 mt-6 rounded-lg bg-[#0C134F] hover:bg-transparent text-white text-lg hover:text-[#0C134F] border border-[#0C134F] transition duration-300 ease-in-out"
                >
                  Got a project?
                </a>
              </span>
            </section>
            {/* right */}

            <section className="w-full lg:w-[60%] flex flex-col gap-10  text-lg">
              <span>
                {/* {db.bio.map((bio, index) => (
                  <p key={index} className="mb-7">
                    {bio}
                  </p>
                ))} */}
                {
                  infoData.bio
                }
              </span>

              <div className="w-full ">
                <ul className="w-full flex  flex-wrap ">
                  <li className="info flex flex-col mr-6 mb-3">
                    <span className="underline">AGE</span>
                    <span className="font-extrabold text-lg">{infoData.age}</span>
                  </li>
                  <li className="info flex flex-col mr-6 mb-3">
                    <span className="underline">BORN</span>
                    <span className="font-extrabold text-lg cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out ">
                      {infoData.born}
                    </span>
                  </li>
                  <li className="info flex flex-col mr-6 mb-3">
                    <span className="underline">PHONE</span>
                    <a
                      href={`tel:${infoData.phone}`}
                      className="font-extrabold text-lg cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      {infoData.phone}
                    </a>
                  </li>
                  <li className="info flex flex-col mb-3">
                    <span className="underline">MAIL</span>
                    <a
                      href={`mailto:${infoData.mail}`}
                      className="font-extrabold text-lg cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      {infoData.mail}
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
          {/* counter */}
          <section className="w-full flex flex-col md:flex-row  gap-10 mb-28 ">
            <div className=" counter w-full md:w-[50%] lg:w-[30%] h-48 bg-[#F6F7C1] rounded-md flex flex-col gap-4 items-center justify-center ">
              <span className="font-extrabold text-4xl font-Inter">
                {infoData.experienceYears}
              </span>
              <span className="font-semibold text-lg">YEARS OF EXPERIENCE</span>
            </div>
            <div className=" counter  w-full md:w-[50%]  lg:w-[30%] h-48 bg-[#BEF0CB] rounded-md flex flex-col gap-4 items-center justify-center">
              <span className="font-extrabold text-4xl font-Inter">
                {infoData.projectDone}
              </span>
              <span className="font-semibold text-lg">PROJECT COMPLETED</span>
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
          className="w-full  h-auto pt-28 pb-16 bg-[#f3f9ff] "
        >
          <div className="max-w-7xl px-5 lg:px-10 h-auto mx-auto flex flex-col gap-5">
            <span className="font-medium text-lg">-EXPERIENCE</span>
            <span className=" font-extrabold text-4xl font-Inter">
              Everything about me!
            </span>
            <ul className="w-full flex flex-wrap mt-10 lg:-ml-8">
              {experienceData.map((experience, index) => (
                <li
                  key={index}
                  className=" w-full md:w-1/2 mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out"
                >
                  <div className=" expBox w-full relative p-9 lg:px-20 lg:py-11 flex flex-col gap-6 rounded shadow-lg text-lg  font-normal leading-8 bg-white border-1 border-[#f9fafc]">
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

                      <span className=" w-44 text-base flex justify-end font-medium md:text-xl">
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
