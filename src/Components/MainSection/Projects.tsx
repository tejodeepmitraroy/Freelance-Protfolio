"use client";
import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import db from "@/DB/db";
import Modal from "../Modal";

const Projects: FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isData, setIsData] = useState<projects>({} as projects);

  return (
    <>
      <div
        className="relative w-full min-h-screen bg-[#f3f9ff] py-28"
        id="projects"
      >
        <div className="w-full ">
          <div className="w-full max-w-7xl px-5 lg:px-10 mx-auto  flex flex-col gap-5">
            <span className="font-medium text-lg">- PROJECTS</span>
            <span className="font-extrabold text-4xl font-Inter">
              Recent Completed Project
            </span>

            <div className="w-full mt-10  text-lg">
              <Swiper
                slidesPerView={"auto"}
                style={{ paddingBottom: "1rem" }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                  },
                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {db.projects.map((project, index) => (
                  <SwiperSlide
                    key={index}
                    className="w-full md:w-[360px] h-full mr-8 border-4 border-gray-600 rounded-lg p-2"
                  >
                    {/* <div className="w-full md:w-[360px] h-full mr-8 border-4 border-gray-600 rounded-lg p-2"> */}
                    <span className="w-full h-full flex flex-col gap-4 cursor-pointer ">
                      <div
                        className="relative w-[360] h-[380] mb-6 flex items-center justify-center border border-black rounded overflow-hidden "
                        onClick={() => {
                          setIsData(project);
                          setIsModal(true);
                        }}
                      >
                        <Image
                          src={"/default.jpg"}
                          width={380}
                          height={360}
                          alt=""
                          className="w-full"
                        />
                        <img
                          src={project.thumbnail}
                          alt=""
                          className={`absolute top-0 left-0 w-full h-full bg-cover hover:scale-110 transition-transform duration-200 ease-in `}
                        ></img>
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
                      onClick={() => {
                        setIsModal(true);
                        setIsData(project);
                      }}
                    >
                      {/* <span className=" font-Inter font-medium">Title</span> */}
                      <h3 className=" font-Inter  font-semibold text-xl">
                        {project.title}
                      </h3>
                    </span>
                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal data={isData} isOpen={isModal} isClose={() => setIsModal(false)} />
    </>
  );
};

export default Projects;
