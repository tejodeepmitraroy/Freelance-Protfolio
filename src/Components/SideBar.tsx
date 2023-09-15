import {
  faFacebookF,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

interface Props {}

const SideBar = (props: Props) => {
  return (
    <div className="w-[19%] h-screen border-r flex flex-col p-14 items-center justify-between font-Karla antialiased">
      <div className="flex flex-col gap-7 items-center">
        <Image
          src={"/img.jpg"}
          width={110}
          height={110}
          alt=""
          className=" border-2 border-[#a5a6ff] rounded-full"
        />
        <div className="flex flex-col items-center justify-center ">
          <span className="font-Inter font-bold text-2xl z-10 top">
            Tejodeep Mitra Roy
          </span>
          <span className="fixed font-Pacifico text-4xl opacity-10 z-0 text">
            Tejodeep Mitra Roy
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-[#534f80] text-lg ">
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Portfolio</button>
        <button>Blog</button>
        <button>Contact</button>
      </div>

      <div className="flex flex-col gap-6 items-center text-[#534f80]  font-medium ">
        <span className="flex gap-2">
          <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
            <FontAwesomeIcon icon={faFacebookF} className="w-2" />
          </span>
          <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
            {" "}
            <FontAwesomeIcon icon={faXTwitter} className="w-4" />
          </span>
          <span className="w-9 h-9 bg-gray-100 flex justify-center items-center  rounded-full">
            {" "}
            <FontAwesomeIcon icon={faLinkedinIn} className="w-4" />
          </span>
        </span>

        <span>
          All Copyrights 2023 Tejodeep Mitra Roy. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default SideBar;
