"use client";
import React, { FC, useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import db from "@/DB/db";
import Modal from "@/Components/Modal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { imageUrlFor } from "@/config/imageBuilder";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface ProjectsProps {
  projects: getProjects[];
}
const Projects: FC<ProjectsProps> = ({ projects }) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isData, setIsData] = useState<getProjects>({} as getProjects);
  const project = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".ProjectContainer", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: project.current,
        scroller: "main",
        start: "50% 60%",
        // markers: true,
      },
      ease: "back.inOut",
    });
  }, {});

  return (
    <>
      <section
        ref={project}
        className="relative w-full  bg-[#f3f9ff] py-28"
        id="projects"
      >
        <div className="w-full ">
          <div className="w-full max-w-7xl px-5 lg:px-10 mx-auto  flex flex-col gap-5">
            <span className="font-medium text-lg">- PROJECTS</span>
            <span className="font-extrabold text-4xl font-Inter">
              Recent Completed Project
            </span>
            <section className="w-full sm:px-10 mt-10 text-lg grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Container */}
              {projects.map((project, index) => (
                <section
                  key={index}
                  className="ProjectContainer w-full shadow-lg border-4 border-gray-600 rounded-[3rem] p-3 cursor-pointer"
                >
                  <Image
                    src={project.thumbnail ?? "/default.jpg"}
                    width={380}
                    height={360}
                    alt=""
                    className="w-full aspect-[16/9]  border border-black rounded-[2rem] "
                    onClick={() => {
                      setIsData(project);
                      setIsModal(true);
                    }}
                  />

                  <div className="z-0 w-full  flex pt-3 px-5 items-center justify-between cursor-pointer ">
                    <div className="flex flex-col gap-1">
                      <span className=" font-Inter font-medium text-lg">
                        Title
                      </span>
                      <h3 className=" font-Inter  font-semibold text-xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="w-fit flex gap-3 items-center">
                      <Link
                        href={project.live}
                        target={"_blank"}
                        title="tooltip text"
                        className="z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex justify-center items-center"
                      >
                        <ExternalLink color="white" size={18} />
                      </Link>

                      <Link
                        href={project.repoLink[0].link}
                        target={"_blank"}
                        className="z-10 w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex justify-center items-center"
                      >
                        <Github color="white" size={18} />
                      </Link>
                    </div>
                  </div>
                </section>
              ))}
            </section>
          </div>
        </div>
      </section>
      {/* Modal */}
      <Modal data={isData} isOpen={isModal} isClose={() => setIsModal(false)} />
    </>
  );
};

export default Projects;
