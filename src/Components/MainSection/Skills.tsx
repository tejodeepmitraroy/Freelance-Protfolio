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
    <section ref={skill} className="relative w-full h-auto py-28" id="services">
      <div className="w-full">
        <section className="w-full max-w-7xl px-5 lg:px-10  mx-auto  flex flex-col gap-5">
          <span className="font-medium text-lg">- SKILLS</span>
          <section className=" flex flex-col gap-10 md:flex-row justify-between">
            <span className="font-extrabold text-4xl font-Inter">
              What Skills I know
            </span>
          </section>
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-7">
            {skills
              .sort((a: any, b: any) => a.id - b.id)
              .map((items) => (
                <li
                  key={items.id}
                  className=" w-full  hover:-translate-y-4  transition duration-300 ease-in-out"
                >
                  <section className="skillContainer w-full h-full p-5 sm:p-8  flex flex-col rounded-[3rem] shadow-xl border-2 border-black  text-lg">
                    <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                      {items.id}
                    </span>
                    <h3 className="w-full mb-6 text-xl font-bold font-Inter leading-5">
                      {items.name}
                    </h3>
                    <section className="w-full h-fit flex flex-wrap justify-start items-start gap-3 ">
                      {items.technologies?.map((tech, index) => (
                        <div
                          key={tech._key}
                          className="h-fit flex items-center rounded-3xl gap-2 border-2  p-2 px-3 border-black "
                        >
                          {/* <span className="w-fit h-10 mb-1"> */}
                          <Image
                            src={tech.logo}
                            width={25}
                            height={25}
                            alt={tech.name}
                            className=" rounded-full "
                          />
                          {/* </span> */}
                          <span>
                            <p className="font-bold text-center">{tech.name}</p>
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
