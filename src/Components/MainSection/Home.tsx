"use client";
import Image from "next/image";
import React, { FC, useLayoutEffect, useRef } from "react";
import db from "@/DB/db";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

interface HomeProps {
  infoData: getInfo;
}

const Home: FC<HomeProps> = ({ infoData }) => {
  const home = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    let homeTl = gsap.timeline({
      scrollTrigger: {
        trigger: home.current,
        scroller: ".main",
        start: "40% 70%",
        end: "40% 20%",
      },
    });

    homeTl.from(
      ".mainHeading",
      {
        y: 30,
        opacity: 0,
        skewX: "-10deg",
        duration: 0.7,
        delay: 0.4,
        stagger: 0.4,
        ease: "circ.inOut",
      },
      "a"
    );
    homeTl.to(".hand", {
      fontSize: "2.3rem",
      duration: 2,
      ease: "bounce",
    });

    homeTl.from(".homeButtons", {
      y: -30,
      opacity: 0,
      delay: 0.3,
      stagger: 0.5,
      ease: "back.inOut",
    });

    gsap.from(".profilePic", {
      x: 30,
      opacity: 0,
      duration: 1.5,
      delay: 0.8,
      stagger: 0.4,
      ease: "power3.inOut",
    });
    gsap.from(".contactLink", {
      x: 30,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      stagger: 0.4,
      ease: "power3.inOut",
    });
  });

  return (
    <section
      ref={home}
      className="home w-full min-h-screen py-24 lg:py-0 bg-[#D1FFF3] text-[#0C134F] subpixel-antialiased "
      id="home"
    >
      <div className=" w-full max-w-7xl lg:mx-auto px-5 h-auto ">
        <div className="w-full min-h-screen flex flex-col-reverse lg:flex-row  items-center">
          {/* left */}
          <section className="w-full lg:w-[50%] flex flex-col gap-40">
            <section className="flex flex-col gap-10 ">
              <div className="flex flex-col text-4xl md:text-6xl">
                <h3 className="mainHeading">
                  Hi, I&apos;m <span className="text-[#C1AEFC]">Tejodeep!</span>
                </h3>
                <h3 className="mainHeading">A Full Stack Web</h3>
                <h3 className="mainHeading">Developer</h3>
                {/* <h3>your online businesses </h3> */}
              </div>
              <span className="mainHeading w-full max-w-[80%] text-xl md:text-2xl">
                <p>
                  <span className="hand">👋</span>I&apos;m a India based Full
                  Stack Web developer to improve your business needs.
                </p>
              </span>
              <section>
                <ul className="flex gap-8 flex-wrap md:text-lg">
                  <li className="homeButtons w-fit h-fit ">
                    <a
                      href={"#about"}
                      className="w-fit h-fit px-7 mb-7 md:px-10 py-3 rounded-lg bg-[#0C134F] hover:bg-transparent text-white  hover:text-[#0C134F] border border-[#0C134F] transition duration-300 ease-in-out"
                    >
                      know about me
                    </a>
                  </li>
                  <li className="homeButtons w-fit h-fit ">
                    <Link
                      href={"#contact"}
                      className="w-fit h-fit px-10 py-3 rounded-lg hover:bg-[#0C134F] bg-transparent  hover:text-white  text-[#0C134F] border border-[#0C134F] transition-all duration-300 ease-in-out"
                    >
                      Lets talk
                    </Link>
                  </li>
                </ul>
              </section>
            </section>

            <section className="w-full h-auto ">
              <ul className="contactLinkBar relative px-3 py-2 font-semibold before:absolute before:w-1 before:bg-amber-500 before:top-0 before:bottom-0 text-sm sm:text-lg ">
                <li className=" contactLink px-3 ">
                  <Link
                    href={`tel:${infoData.phone}`}
                    className="hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    {infoData.phone}
                  </Link>
                </li>
                <li className=" contactLink px-3  ">
                  <Link
                    href={`mailto:${infoData.mail}`}
                    className=" hover:text-amber-500 transition duration-300 ease-in-out "
                  >
                    {infoData.mail}
                  </Link>
                </li>
              </ul>
            </section>
          </section>
          {/* right */}
          <section className="profilePic w-full mb-12 lg:w-[50%] lg:pl-11">
            <Image src={infoData.homePic} width={450} height={0} alt="" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default Home;
