"use client";
import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import db from "@/DB/db";
import Modal from "../Modal";

const Projects: FC = () => {
  const [isModalData, setIsModalData] = useState<any>(false);
  return (
    <>
      <div
        className="relative w-full h-screen bg-[#f3f9ff] py-28"
        id="projects"
      >
        <div className="w-full ">
          <div className="w-full max-w-7xl px-10 mx-auto  flex flex-col gap-5">
            <span className="font-medium text-lg">- PROJECTS</span>
            <span className="font-extrabold text-4xl font-Inter">
              Recent Completed Project
            </span>
            <div className="w-full mt-10  text-lg">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                style={{ paddingBottom: "rem" }}
                modules={[Pagination]}
                className="mySwiper "
              >
                {db.projects.map((project, index) => (
                  <SwiperSlide key={index}>
                    <div className=" w-[360] h-full mr-8 ">
                      <span
                        className="w-full h-full flex flex-col gap-4 cursor-pointer "
                        data-modal-target="defaultModal"
                        data-modal-toggle="defaultModal"
                      >
                        <div className="relative w-[360] h-[380] mb-6 flex items-center justify-center border border-black rounded overflow-hidden ">
                          <Image
                            src={"/default.jpg"}
                            width={380}
                            height={360}
                            alt=""
                          />
                          <div
                            data-img-url={project.thumbnail}
                            className={`absolute top-0 left-0 w-full h-full hover:scale-110 transition-transform duration-200 ease-in bg-[url("/img.png")]`}
                          ></div>
                          {/* <Image
                        src={"/img2.jpg"}
                        width={380}
                        height={360}
                        alt=""
                        className=" rounded mb-6 hover:scale-125 transition duration-300 ease-in-out"
                      /> */}
                        </div>
                      </span>
                      <span 
                        className="w-full h-full flex flex-col gap-4 cursor-pointer "
                        onClick={()=>setIsModalData(project)}
                      >
                        {/* <span className=" font-Inter font-medium">{project.title}</span> */}
                        <h3 className=" font-Inter  font-bold text-2xl">
                          {project.title}
                        </h3>
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal data={isModalData} isClose={()=>setIsModalData(false)}  />
    </>
  );
};

export default Projects;
