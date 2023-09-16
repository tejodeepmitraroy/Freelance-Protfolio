
import React from "react";

const About = () => {
  return (
    <div className="w-full h-auto border bg-white" id="about">
      <div className="w-full h-full mt-32">
        {/* About */}
        <div className="w-full max-w-7xl px-10 h-auto mx-auto flex flex-col gap-16">
          {/* biography */}
          <div className="flex ">
            <div className="w-[40%]  flex flex-col gap-5">
              <span className=" font-medium text-lg">-NICE TO MEET YOU!</span>
              <div className="flex flex-col gap-2">
                <span className=" font-extrabold text-4xl font-Inter">
                  <h3>Tejodeep Mitra Roy</h3>
                </span>
                <span className="text-lg font-bold">
                  <p>Website & WebApp Developer </p>
                </span>
              </div>
              <span className="w-fit px-10 py-3 mt-6 rounded-lg bg-[#0C134F] hover:bg-transparent text-white text-lg hover:text-[#0C134F] border border-[#0C134F] transition duration-300 ease-in-out">
                <p>Got a project?</p>
              </span>
            </div>
            <div className="w-[60%] flex flex-col gap-10 font-medium text-lg">
              <span>
                <p>
                  I&apos;m Tejodeep Mitra Roy, a passionate web developer based
                  in India, specializing in the MERN(Mongo + Express + React +
                  Node) stack. With a focus on crafting remarkable digital
                  experiences, I transform ideas into visually stunning and
                  high-performance websites and web applications.
                </p>
              </span>
              {/* <span>
                <p>
                  Clear communication is key, and I&apos;m dedicated to understanding
                  your goals and delivering tailored solutions. Whether you&apos;re a
                  startup, business, or individual, Im here to bring your
                  online vision to life.
                </p>
              </span> */}
              <div className="w-full flex justify-between">
                <div className="flex flex-col">
                  <span className="underline">AGE</span>
                  <span className="font-extrabold text-xl">21</span>
                </div>
                <div className="flex flex-col">
                  <span className="underline">BORN</span>
                  <a
                    href=""
                    className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    Kolkata,India
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="underline">MAIL</span>
                  <a
                    href="mailto:tejodeepmitraroy2002@gmail.com"
                    className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    tejodeepmitraroy2002@gmail.com
                  </a>
                </div>
                <div className="flex flex-col">
                  <span className="underline">PHONE</span>
                  <a
                    href="tel:+91-9674128921"
                    className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    +91-9674128921
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* counter */}
          <div className="w-full flex gap-10 mb-28 ">
            <div className=" w-[30%] h-48 bg-[#F6F7C1] rounded-md flex flex-col gap-4 items-center justify-center">
              <span className="font-extrabold text-4xl font-Inter">1+</span>
              <span className="font-semibold text-lg">YEARS OF EXPERIENCE</span>
            </div>
            <div className=" w-[30%] h-48 bg-[#BEF0CB] rounded-md flex flex-col gap-4 items-center justify-center">
              <span className="font-extrabold text-4xl font-Inter">10+</span>
              <span className="font-semibold text-lg">PROJECT COMPLETED</span>
            </div>
            {/* <div className=" w-[30%] h-48 bg-[#D1FFF3] rounded-md flex flex-col gap-4 items-center justify-center">
              <span className="font-extrabold text-4xl font-Inter">10+</span>
              <span className="font-semibold text-lg">Happy Clients</span>
            </div> */}
          </div>
        </div>
        {/* Experiecnce */}
        <div className="w-full h-auto pt-28 pb-16 bg-[#f3f9ff] ">
          <div className="max-w-7xl px-10 h-auto mx-auto flex flex-col gap-5">
            <span className="font-medium text-lg">-EXPERIENCE</span>
            <span className=" font-extrabold text-4xl font-Inter">
              Everything about me!
            </span>
            <ul className="flex flex-wrap mt-10 -ml-8">
              <li className="w-1/2 mb-10 pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
                <div className="w-full relative px-20 py-11 flex flex-col gap-6 rounded shadow-lg text-lg  font-normal leading-8 bg-white border-1 border-[#f9fafc]">
                  {/* heading */}
                  <div className="flex justify-between text-lg ">
                    <div className="flex flex-col gap-2">
                      <span className=" text-lg font-semibold text-amber-500">
                        -2018-Present
                      </span>
                      <span className=" text-xl font-extrabold">
                        Web Developer
                      </span>
                    </div>

                    <span className="text-xl font-medium">-Envato Market</span>
                  </div>
                  {/* text */}
                  <div>
                    <p>
                      Website development is the process of building,
                      programming, coding and maintaining websites and web
                      applications.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
