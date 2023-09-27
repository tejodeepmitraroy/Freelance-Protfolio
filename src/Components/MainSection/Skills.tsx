import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <>
      <div className="relative w-full h-auto py-28" id="services">
        <div className="w-full">
          <div className="w-full max-w-7xl px-5 lg:px-10  mx-auto  flex flex-col gap-5">
            <span className="font-medium text-lg">- SKILLS</span>
            <div className=" flex flex-col gap-10 md:flex-row justify-between">
              <span className="font-extrabold text-4xl font-Inter">
                My Skills
              </span>
              {/* <span className=" text-base md:text-xl font-medium">
              <a
                href=""
                className="w-full relative font-Inter font-semibold hover:no-underline before:absolute before:h-[2px] before:bottom-0 before:bg-black before:w-full  hover:before:w-0 before:transition before:duration-700 before:ease-in"
              >
                {" "}
                tejodeepmitraroy2002@gmail.com
              </a>
            </span> */}
            </div>
            <ul className="w-full flex flex-col md:flex-row flex-wrap md:-ml-2 lg:-ml-8 mt-7">
              <li className="w-full md:w-1/3 mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
                <div className="w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                  <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                    01
                  </span>
                  <h3 className="w-full mb-6 text-xl font-bold font-Inter leading-5">
                    FrontEnd Development
                  </h3>
                  <div className="w-full h-full  ">
                    <ul className="w-full flex justify-between mb-3">
                      <li className="">
                        <span className="flex flex-col items-center ">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/html.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">HTML</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/css.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">CSS</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/js.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">JS</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/react.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">React Js</p>
                        </span>
                      </li>
                    </ul>
                    <ul className="w-full flex justify-between">
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/nextjs.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Next Js</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/tailwind.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Tailwind Css</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/typescript.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Typescript</p>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="w-full md:w-1/3 mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
                <div className="w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                  <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                    02
                  </span>
                  <h3 className="w-full mb-6 text-xl font-bold font-Inter leading-5">
                    BackEnd Development
                  </h3>
                  <div className="w-full h-full">
                    <ul className="w-full flex justify-between mb-3">
                      <li className="">
                        <span className="flex flex-col items-center ">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/nodejs.png"
                              width={60}
                              height={0}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Node js</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/mongodb.png"
                              width={100}
                              height={0}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Mongo DB</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/websocket.png"
                              width={50}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Websockets</p>
                        </span>
                      </li>
                      {/*<li className="">
                        <span className="flex flex-col items-center">
                          <Image
                          src="/logos/react.png"
                          width={40}
                          height={40}
                          alt=""
                          />
                          <p className="font-bold">React Js</p>
                          </span>
                        </li> */}
                    </ul>
                    <ul className="w-full flex justify-between">
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/prisma.png"
                              width={45}
                              height={45}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Prisma</p>
                        </span>
                      </li>
                      {/* <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/tailwind.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Tailwind Css</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/typescript.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Typescript</p>
                        </span>
                      </li> */}
                    </ul>
                  </div>
                  {/* <span className="w-full mb-6 opacity-[0.7] text-[#55527c]">
                    Web development is the process of bilduing programming...
                    </span>
                  <div className="flex items-center gap-6">
                    <a>Read More</a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <path
                          d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                          fill="#130F49"
                        ></path>
                      </svg>
                    </span>
                  </div> */}
                </div>
              </li>
              <li className="w-full md:w-1/3 mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
                <div className="w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                  <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                    03
                  </span>
                  <h3 className="w-full mb-6 text-xl font-bold font-Inter leading-5">
                    For Development
                  </h3>

                  <div className="w-full h-full">
                    <ul className="w-full flex justify-between mb-3">
                      <li className="">
                        <span className="flex flex-col items-center ">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/visualstudio.png"
                              width={40}
                              height={0}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Visual Code</p>
                        </span>
                      </li>
                      <li className="">
                        <span className="flex flex-col items-center">
                          <span className="w-fit h-10">
                            <Image
                              src="/logos/github.png"
                              width={40}
                              height={40}
                              alt=""
                            />
                          </span>
                          <p className="font-bold">Github</p>
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
                          <p className="font-bold">Netlify</p>
                        </span>
                      </li>
                      {/* <li className="">
                        <span className="flex flex-col items-center">
                          <Image
                            src="/logos/react.png"
                            width={40}
                            height={40}
                            alt=""
                          />
                          <p className="font-bold">React Js</p>
                        </span>
                      </li> */}
                    </ul>
                  </div>
                  {/* 
                   <span className="w-full mb-6 opacity-[0.7] text-[#55527c]">
                    Web development is the process of bilduing programming...
                  </span>
                  <div className="flex items-center gap-6">
                    <a>Read More</a>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        className="svg replaced-svg"
                      >
                        <path
                          d="M10 12L8.6 10.55L12.15 7H0V5H12.15L8.6 1.45L10 0L16 6L10 12Z"
                          fill="#130F49"
                        ></path>
                      </svg>
                    </span>
                  </div> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;