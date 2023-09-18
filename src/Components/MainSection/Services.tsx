import React from "react";

const Services = () => {
  return (
    <div className="relative w-full h-auto" id="services">
      <div className="w-full my-28 ">
        <div className="w-full max-w-7xl px-10 mx-auto  flex flex-col gap-5">
          <span className="font-medium text-lg">- SERVICES</span>
          <div className=" flex justify-between">
            <span className="font-extrabold text-4xl font-Inter">
              My Services
            </span>
            <span className="text-xl font-medium">
              <a
                href=""
                className="w-full relative font-Inter font-semibold hover:no-underline before:absolute before:h-[2px] before:bottom-1 before:bg-black before:w-full  hover:before:w-0 before:transition before:duration-700 before:ease-in"
              >
                {" "}
                tejodeepmitraroy2002@gmail.com
              </a>
            </span>
          </div>
          <ul className="flex flex-wrap -ml-8 mt-7">
            <li className="w-1/3 mb-10 pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
              <div className="w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                  01
                </span>
                <h3 className="w-full mb-3 text-xl font-bold font-Inter leading-5">
                  FrontEnd Development
                </h3>
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
                </div>
              </div>
            </li>
            <li className="w-1/3 mb-10 pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
              <div className="w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                  02
                </span>
                <h3 className="w-full mb-3 text-xl font-bold font-Inter leading-5">
                  Backend Development
                </h3>
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
                </div>
              </div>
            </li>
            <li className="w-1/3 mb-10 pl-8 hover:-translate-y-4 transition duration-300 ease-in-out">
              <div className="w-full h-full p-10  flex flex-col border border-black rounded text-lg">
                <span className="w-full mb-4 font-Inter font-medium text-[rgba(19,15,73,.5)]">
                  01
                </span>
                <h3 className="w-full mb-3 text-xl font-bold font-Inter leading-5">
                  Web Design
                </h3>
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
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
