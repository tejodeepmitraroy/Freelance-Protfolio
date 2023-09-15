import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#D1FFF3] flex justify-center items-center text-[#0C134F] subpixel-antialiased">
      <div className=" w-full max-w-7xl px-10 h-auto mx-auto">
        <div className="w-full min-h-screen flex items-center">
          <div className="w-[50%] flex flex-col gap-40">
            <div className="flex flex-col gap-10 ">
              <div className="flex flex-col font-Inter font-bold text-6xl">
                <span>
                  Hi, I'm <span className="text-[#C1AEFC]">Tejodeep!</span>
                </span>
                <span>Creative Coder</span>
                <span>Based in India</span>
              </div>
              <span className=" max-w-[80%] w-full text-lg">
                I'm a Florida based web designer & front‑end developer with 10+
                years of experience
              </span>
              <div className="flex gap-4">
                <span className="px-10 py-3 rounded-lg bg-[#0C134F] hover:bg-transparent text-white text-lg hover:text-[#0C134F] border border-[#0C134F] transition duration-300 ease-in-out">
                  Got a project?
                </span>
                <span className="px-10 py-3 rounded-lg hover:bg-[#0C134F] bg-transparent  hover:text-white text-lg text-[#0C134F] border border-[#0C134F] transition-all duration-300 ease-in-out">
                  Lets talk
                </span>
              </div>
            </div>

            <div className="w-full h-auto ">
              <ul className=" relative px-3 py-2 font-semibold before:absolute before:w-1 before:bg-amber-500 before:top-0 before:bottom-0 text-lg ">
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
          <div className="w-[50%] pl-11">
            <Image src={"/img.png"} width={500} height={600} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
