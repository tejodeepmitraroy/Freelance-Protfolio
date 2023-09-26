import {
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface ModalProps {
  isClose: any;
  data: unknown;
}
const Modal: FC<ModalProps> = ({ data, isClose }) => {
  console.log(data);
  return (
    <>
      <div
        className={`fixed ${
          !data ? "hidden" : ""
        } top-0 left-0 bottom-0 right-0 w-full h-screen z-10 transition ease-in `}
      >
        <div className="relative w-full h-full  bg-black opacity-70 flex justify-center "></div>
        <div className="absolute top-[70px] bottom-[70px] translate-x-2/4 opacity-100  w-full max-w-5xl h-auto">
          {/* Close button */}
          <button
            className="fixed left-full ml-7 w-10 h-10 border-2 border-white rounded-xl text-white "
            title="close"
            onClick={isClose}
          >
            <FontAwesomeIcon icon={faXmark} size={"xl"} />
          </button>
          {/* Main Modal */}
          <div className="relative w-full h-full border bg-white p-[50px] rounded overflow-y-auto before:fixed  before:h-[50px] before:top-0 before:left-0 before:right-0 before:z-10 before:rounded before:bg-white after:fixed after:h-[50px] after:bottom-0 after:left-0 after:right-0 after:bg-white after:z-10">
            <Image
              src={"/projects/pro1.jpg"}
              width={"1080"}
              height={"0"}
              className="w-full h-[470px] rounded mb-9"
              alt=""
            />

            <div className="w-full  flex flex-col text">
              <div className="flex flex-col">
                <span className="w-full mb-4 font-Inter font-medium text-xl text-[rgba(19,15,73,.5)]">
                  Modal Box
                </span>
                <h3 className="w-full mb-8 text-2xl font-bold font-Inter leading-5">
                  FrontEnd Development
                </h3>
              </div>
              <div className="w-full h-auto flex text-lg">
                <div className="w-[70%] pr-10 border opacity-[0.7] text-[#55527c]">
                  <p>
                    Web development is the process of bilduing programming Lorem
                    ipsum dolor, sit amet consectetur adipisicing elit. Soluta
                    aspernatur, dolore, autem qui non quae magni aliquam sint
                    doloremque, itaque voluptatum! Deserunt laborum nihil, qui
                    quam commodi consequatur? Veniam laborum recusandae autem
                  </p>

                  <p>
                    neque distinctio! Tenetur, repellendus harum. Ipsam totam
                    eaque neque atque, et error soluta quasi fugit ullam sunt
                    aliquam, sit officiis ea officia quia, eos mollitia quod
                    voluptatibus molestias dolores praesentium sint eum. Hic
                    iure ducimus et nemo quod. Accusantium, neque!
                  </p>
                </div>
                <div className="w-[30%] pl-10">
                  <ul className="flex flex-col gap-5">
                    <li className="flex flex-col gap-1">
                      <span className=" font-semibold text-xl ">
                        Hosted Link
                      </span>
                      <span className=" opacity-80 text-l">
                        link{" "}
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="xs"
                        />
                      </span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className=" font-semibold text-xl ">
                        Tech Stacks
                      </span>
                      <span className="w-full flex gap-2">
                        <Image
                          src={"/logos/react.png"}
                          width={"30"}
                          height={"30"}
                          alt=""
                        ></Image>
                        <Image
                          src={"/logos/react.png"}
                          width={"30"}
                          height={"30"}
                          alt=""
                        ></Image>
                        <Image
                          src={"/logos/react.png"}
                          width={"30"}
                          height={"30"}
                          alt=""
                        ></Image>
                      </span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className=" font-semibold text-xl ">
                        Github Repo
                      </span>
                      <span className=" opacity-80 text-l">
                        <ul>
                          <li>
                            Frontend Code
                            <Link href={""}>
                              {" "}
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                size="xs"
                              />
                            </Link>
                          </li>
                          <li>
                            Backend Code
                            <Link href={""}>
                              {" "}
                              <FontAwesomeIcon
                                icon={faArrowUpRightFromSquare}
                                size="xs"
                              />
                            </Link>
                          </li>
                        </ul>
                      </span>
                    </li>
                    <li className="flex flex-col gap-1">
                      <span className=" font-semibold text-xl ">Date</span>
                      <span className=" opacity-80 text-l">
                        jun 2023 - jul 2023
                      </span>
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
