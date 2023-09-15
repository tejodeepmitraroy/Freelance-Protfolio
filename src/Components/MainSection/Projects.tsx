"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="w-full my-28 ">
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
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className=" w-[380]  mr-8 ">
                  <a
                    href="http://"
                    className="w-full h-full flex flex-col gap-4 cursor-pointer "
                  >
                    <div className="w-full h-full flex items-center justify-center  ">
                      <Image
                        src={"/img.png"}
                        width={380}
                        height={360}
                        alt=""
                        className=" rounded  mb-6 hover:scale-110 transition duration-300 ease-in-out"
                      />
                    </div>

                    <span className=" font-Inter font-medium">YOUTUBE</span>
                    <h3 className=" font-Inter  font-bold text-2xl">
                      New Technology
                    </h3>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
