import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

const Modal: FC = () => {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-screen z-10 transition ease-in">
        <div className="relative w-full h-full bg-black opacity-70 flex justify-center ">
          <div className="absolute top-[70px] bottom-[70px]  w-full max-w-4xl h-auto border text-white">

            {/* Close button */}
            <button title="close"><FontAwesomeIcon icon={faXmark} /></button>
            {/* Main Modal */}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
