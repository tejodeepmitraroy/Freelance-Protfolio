import React, { FC } from "react";

const About:FC = () => {
  return (
    <div className="w-full h-auto border bg-white" id="about">
      <div className="w-full h-full mt-28">
        {/* About */}
        <div className="w-full max-w-7xl px-5 lg:px-10 h-auto mx-auto flex flex-col gap-16">
          {/* biography */}
          <div className="flex flex-col lg:flex-row ">
            {/* left */}
            <div className="w-full lg:w-[40%] mb-16 flex flex-col gap-5">
              <span className=" font-medium text-lg ">-NICE TO MEET YOU!</span>
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
            {/* right */}
            <div className="w-full lg:w-[60%] flex flex-col gap-10  text-lg">
              <span>
                <p>
                  I&apos;m Tejodeep Mitra Roy, a passionate web developer based
                  in India, specializing in the Full stack Application. With a
                  focus on crafting remarkable digital experiences, I transform
                  ideas into visually stunning and high-performance websites and
                  web applications.
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

              <div className="w-full ">
                <ul className="w-full flex  flex-wrap ">
                  <li className="flex flex-col mr-6 mb-3">
                    <span className="underline">AGE</span>
                    <span className="font-extrabold text-xl">21</span>
                  </li>
                  <li className="flex flex-col mr-6 mb-3">
                    <span className="underline">BORN</span>
                    <a
                      href=""
                      className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      Kolkata,India
                    </a>
                  </li>
                  <li className="flex flex-col mr-6 mb-3">
                    <span className="underline">PHONE</span>
                    <a
                      href="tel:+91-9674128921"
                      className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      +91-9674128921
                    </a>
                  </li>
                  <li className="flex flex-col mb-3">
                    <span className="underline">MAIL</span>
                    <a
                      href="mailto:tejodeepmitraroy2002@gmail.com"
                      className="font-extrabold text-xl cursor-pointer hover:text-amber-500 transition duration-300 ease-in-out "
                    >
                      tejodeepmitraroy2002@gmail.com
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
          {/* counter */}
          <div className="w-full flex flex-col md:flex-row  gap-10 mb-28 ">
            <div className="w-full md:w-[50%] lg:w-[30%] h-48 bg-[#F6F7C1] rounded-md flex flex-col gap-4 items-center justify-center ">
              <span className="font-extrabold text-4xl font-Inter">1+</span>
              <span className="font-semibold text-lg">YEARS OF EXPERIENCE</span>
            </div>
            <div className="w-full md:w-[50%]  lg:w-[30%] h-48 bg-[#BEF0CB] rounded-md flex flex-col gap-4 items-center justify-center">
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
        <div className="w-full  h-auto pt-28 pb-16 bg-[#f3f9ff] ">
          <div className="max-w-7xl px-5 lg:px-10 h-auto mx-auto flex flex-col gap-5">
            <span className="font-medium text-lg">-EXPERIENCE</span>
            <span className=" font-extrabold text-4xl font-Inter">
              Everything about me!
            </span>
            <ul className="w-full flex flex-wrap mt-10 lg:-ml-8">
              <li className="w-full md:w-1/2 mb-10 md:pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
                <div className="w-full relative p-9 lg:px-20 lg:py-11 flex flex-col gap-6 rounded shadow-lg text-lg  font-normal leading-8 bg-white border-1 border-[#f9fafc]">
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
