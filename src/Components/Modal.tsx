import {
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ModalProps {
  isClose: any;
  isOpen: boolean;
  data: projects;
}
const Modal: FC<ModalProps> = ({ data, isOpen, isClose }) => {
  console.log(data)
  return (
    <>
      <div
        className={`fixed ${
          !isOpen ? "hidden" : ""
        } top-0 left-0 bottom-0 right-0 w-full h-screen z-10 transition ease-in `}
      >
        <div className="relative w-full h-full  bg-black opacity-70 flex justify-center z-0 "></div>
        <div className="absolute top-10 bottom-10 md:top-[50px] md:bottom-[50px] lg:top-[70px] lg:bottom-[70px] left-0 right-0 m-[0_auto] opacity-100 w-full max-w-xs md:max-w-xl lg:max-w-3xl 2xl:max-w-5xl h-auto">
          {/* Close button */}
          <button
            className="absolute right-2 md:-right-16 md:scale-75 lg:scale-100 ml-7 w-10 h-10 md:border-2 border-white rounded-xl md:text-white z-20"
            title="close"
            onClick={isClose}
          >
            <FontAwesomeIcon icon={faXmark} size={"xl"} />
          </button>
          {/* Main Modal */}

          <div className="absolute w-full h-full border bg-white p-[30px_25px_25px] lg:p-[50px] rounded overflow-y-auto ">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {data.preview?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item}
                    width={"1080"}
                    height={"0"}
                    className="w-full h-[450px] rounded mb-9"
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>


            <div className="w-full  flex flex-col text">
              <div className="flex flex-col">
                <span className="w-full mb-4 font-Inter font-medium text-base lg:text-xl text-[rgba(19,15,73,.5)]">
                  Project Name
                </span>
                <h3 className="w-full mb-8 text-xl lg:text-2xl font-bold font-Inter leading-5">
                  {data.title}
                </h3>
              </div>
              <div className="w-full h-auto flex flex-col lg:flex-row text-lg">
                <div className="w-full lg:w-[70%] lg:pr-10 opacity-[0.7] text-[#55527c]">
                  <p>{data.description}</p>
                </div>
                <div className="w-full lg:w-[30%] lg:pl-10 mt-10">
                  <ul className="flex flex-col gap-5">
                    <li className="flex flex-col gap-1">
                      <span className=" font-semibold text-xl ">
                        Hosted Link
                      </span>
                      <span className=" opacity-80 text-l hover:text-[#c1aefc]">
                        {/* {data.live} */}
                        <Link href={data.live ? data.live : ""} target="_blank">
                          {data.live}
                          {/* <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size="xs"
                          /> */}
                        </Link>
                      </span>
                    </li>
                    <li className="flex flex-col gap-2">
                      <span className=" font-semibold text-xl ">
                        Tech Stacks
                      </span>
                      <span className="w-full flex flex-wrap gap-3  ">
                        {data.technologies?.map((item: any, index: any) => (
                          <Image
                            src={item}
                            width={"30"}
                            height={"30"}
                            alt=""
                            key={index}
                            className="mb-3"
                          />
                        ))}
                      </span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className=" font-semibold text-xl ">
                        Github Repo
                      </span>
                      <span className=" opacity-80 text-l">
                        <ul>
                          {data.repoLink?.map((item, index) => (
                            <li key={index}>
                              {item.name}
                              <Link href={item.link ? item.link : ""}>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faArrowUpRightFromSquare}
                                  size="xs"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className=" font-semibold text-xl ">Date</span>
                      <span className=" opacity-80 text-l">{data.date}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
