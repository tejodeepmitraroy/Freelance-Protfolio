import Image from "next/image";
import React, { FC } from "react";

const Home:FC = () => {
  return (
    <div
      className="w-full min-h-screen py-24 lg:py-0 bg-[#D1FFF3] text-[#0C134F] subpixel-antialiased "
      id="home"
    >
      <div className=" w-full max-w-7xl lg:mx-auto px-5 h-auto ">
        <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row  items-center">
          {/* left */}
          <div className="w-full lg:w-[50%] flex flex-col gap-40">
            <div className="flex flex-col gap-10 ">
              <div className="flex flex-col text-4xl md:text-6xl">
                <h3 className="">
                  Hi, I&apos;m <span className="text-[#C1AEFC]">Tejodeep!</span>
                </h3>
                <h3>Came here to solve</h3>
                <h3>your online businesses </h3>
              </div>
              <span className="w-full max-w-[80%] text-xl md:text-2xl">
                <p>
                  👋I&apos;m a India based freelance Web developer to improve
                  your business needs
                </p>
              </span>
              <div className="flex gap-4  md:text-lg">
                <span className="px-7 md:px-10 py-3 rounded-lg bg-[#0C134F] hover:bg-transparent text-white  hover:text-[#0C134F] border border-[#0C134F] transition duration-300 ease-in-out">
                  <p>Got a project?</p>
                </span>
                <span className="px-10 py-3 rounded-lg hover:bg-[#0C134F] bg-transparent  hover:text-white  text-[#0C134F] border border-[#0C134F] transition-all duration-300 ease-in-out">
                  <p>Lets talk</p>
                </span>
              </div>
            </div>

            <div className="w-full h-auto ">
              <ul className=" relative px-3 py-2 font-semibold before:absolute before:w-1 before:bg-amber-500 before:top-0 before:bottom-0 text-sm sm:text-lg ">
                <li className="px-3 ">
                  <a
                    href="tel:+91-9674128921"
                    className="hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    +91-9674128921{" "}
                  </a>
                </li>
                <li className="px-3 ">
                  <a
                    href="mailto:tejodeepmitraroy2002@gmail.com"
                    className="hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    tejodeepmitraroy2002@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* right */}
          <div className="w-full mb-12 lg:w-[50%] lg:pl-11">
            <Image src={"/img.png"} width={500} height={600} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
