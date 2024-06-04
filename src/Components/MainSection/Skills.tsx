"use client";
import useIsomorphicLayoutEffect from "@/Hooks/IsomorphicEffect";
import { imageUrlFor } from "@/config/imageBuilder";
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
  }, {});

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
          <ul className="w-full flex flex-col md:flex-row flex-wrap md:-ml-2 lg:-ml-8 mt-7">
            {skills
              .sort((a: any, b: any) => a.id - b.id)
              .map((items) => (
                <li
                  key={items.id}
                  className=" w-full md:w-[400px] mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out"
                >
                  <section className="skillContainer w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                    <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                      {items.id}
                    </span>
                    <h3 className="w-full mb-6 text-xl font-bold font-Inter leading-5">
                      {items.name}
                    </h3>
                    <section className="w-full h-full grid grid-cols-3 gap-4">
                      {items.technologies?.map((tech, index) => (
                        <span
                          key={tech._key}
                          className="flex flex-col items-center "
                        >
                          <span className="w-fit h-10 mb-1">
                            <Image
                              src={tech.logo}
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <span>
                            <p className="font-bold text-center">{tech.name}</p>
                          </span>
                        </span>
                      ))}
                    </section>
                  </section>
                </li>
              ))}
            {/* 
            <li className=" w-full md:w-[400px]  mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
              <section className="skillContainer w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                  02
                </span>
                <h3 className="w-full mb-6 text-xl font-bold font-Inter leading-5">
                  BackEnd Development
                </h3>
                <section className="w-full h-full">
                  <ul className="w-full flex mb-3 justify-between text-center text-sm md:text-base">
                    <li className="">
                      <span className="flex flex-col items-center ">
                        <span className="w-fit h-10  mb-1">
                          <Image
                            src="/logos/nodejs.png"
                            width={60}
                            height={0}
                            alt=""
                          />
                        </span>
                        <span>
                          <p className="font-bold">Node js</p>
                        </span>
                      </span>
                    </li>
                    <li className="">
                      <span className="flex flex-col items-center">
                        <span className="w-fit h-10  mb-1">
                          <Image
                            src="/logos/mongodb.png"
                            width={100}
                            height={0}
                            alt=""
                          />
                        </span>
                        <span>
                          <p className="font-bold">Mongo DB</p>
                        </span>
                      </span>
                    </li>
                    <li className="">
                      <span className="flex flex-col items-center">
                        <span className="w-fit h-10  mb-1">
                          <Image
                            src="/logos/websocket.png"
                            width={50}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>
                          <p className="font-bold">Websockets</p>
                        </span>
                      </span>
                    </li>
                  </ul>
                  <ul className="w-full flex justify-between text-center text-sm md:text-base">
                    <li className="">
                      <span className="flex flex-col items-center">
                        <span className="w-fit h-10  mb-1">
                          <Image
                            src="/logos/prisma.png"
                            width={45}
                            height={45}
                            alt=""
                          />
                        </span>
                        <span>
                          <p className="font-bold">Prisma</p>
                        </span>
                      </span>
                    </li>
                  </ul>
                </section>
              </section>
            </li>
            <li className=" w-full md:w-[400px]  mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
              <section className="skillContainer w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                  03
                </span>
                <h3 className="w-full mb-6 text-xl font-bold font-Inter leading-5">
                  For Development
                </h3>

                <section className="w-full h-full">
                  <ul className="w-full flex justify-between mb-3 text-center text-sm md:text-base">
                    <li className="">
                      <span className="flex flex-col items-center ">
                        <span className="w-fit h-10  mb-1">
                          <Image
                            src="/logos/visualstudio.png"
                            width={40}
                            height={0}
                            alt=""
                          />
                        </span>
                        <span>
                          <p className="font-bold">Visual Code</p>
                        </span>
                      </span>
                    </li>
                    <li className="">
                      <span className="flex flex-col items-center">
                        <span className="w-fit h-10  mb-1">
                          <Image
                            src="/logos/github.png"
                            width={40}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>
                          <p className="font-bold">Github</p>
                        </span>
                      </span>
                    </li>
                    <li className="">
                      <span className="flex flex-col items-center">
                        <span className="w-fit h-10">
                          <Image
                            src="/logos/netlify.png"
                            width={100}
                            height={40}
                            alt=""
                          />
                        </span>
                        <span>
                          <p className="font-bold">Netlify</p>
                        </span>
                      </span>
                    </li>
                  </ul>
                </section>
              </section>
            </li> */}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Skills;
