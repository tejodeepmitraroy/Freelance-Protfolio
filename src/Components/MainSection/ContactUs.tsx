import React from "react";

const ContactUs = () => {
  return (
    <div className="relative w-full min-h-screen" id="contact">
      <div className="w-full min-h-screen py-28 bg-[#e9f9ff] ">
        <div className="w-full max-w-7xl px-10 mx-auto flex flex-col">
          {/* Connects */}
          <div className="w-full flex">
            <div className="w-1/2 pr-12 flex flex-col gap-5 ">
              <div className=" flex flex-col gap-5">
                <span className="font-medium text-lg">
                  LET&lsquo;S CONNECT{" "}
                </span>
                <span className=" font-extrabold text-4xl font-Inter">
                  Get in Touch
                </span>
              </div>
              <span className=" mt-5 text-lg leading-8">
                <p>
                  I&apos;m currently available to take on new projects, so fell
                  free to snd me a message about anthing that you want to run
                  past me. you can contact at 24/7
                </p>
              </span>
              <div className="w-full">
                <ul className="relative text-lg leading-8 text-[#55527C] font-semibold font-Inter">
                  <li className="w-full">
                    <a
                      href="tel:+91-9674128921"
                      className="relative pb-1 hover:no-underline before:absolute  before:w-full before:h-[1.5px] before:left-0 before:bottom-1  before:bg-black before:transition before:duration-1000 before:ease-in-out before:hover:w-0"
                    >
                      +91 9674128921
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:tejodeepmitraroy2002@gmail.com"
                      className="relative pb-1 hover:no-underline before:absolute  before:w-full before:h-[1.5px] before:left-0 before:bottom-1  before:bg-black before:transition before:duration-1000 before:ease-in-out before:hover:w-0"
                    >
                      tejodeepmitraroy2002@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+91-9674128921"
                      className="relative pb-1 hover:no-underline before:absolute  before:w-full before:h-[1.5px] before:left-0 before:bottom-1  before:bg-black before:transition before:duration-1000 before:ease-in-out before:hover:w-0"
                    >
                      kolkata,West Bengal,India
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 pl-12 flex flex-col gap-7 ">
              <input
                type="text"
                className="w-full  h-14 leading-[1.6] text-lg bg-white p-5 "
                placeholder="Enter your name"
                autoComplete="off"
              />
              <input
                type="text"
                className="w-full  h-14 leading-[1.6] text-lg bg-white p-5 "
                placeholder="Your email"
                autoComplete="off"
              />
              <textarea
                className="w-full h-32  resize-none leading-[1.6] text-lg bg-white p-5 "
                placeholder="Write Something"
                autoComplete="off"
              />
              <span className="w-full flex justify-start">
                <button className=" py-2 px-10 leading-8 text-lg bg-[#130f49] border-[1.5px] border-[#130f49] rounded-md text-white transition duration-300 ease-in-out">
                  {" "}
                  Submit
                </button>
              </span>
            </div>
          </div>
          {/* map location */}
          <div className=" relative mt-28  w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29455.92847020909!2d88.40960262601587!3d22.654121982998415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e6c605d82ff%3A0x1f6779d05c4879ee!2sDum%20Dum%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1694771815112!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
