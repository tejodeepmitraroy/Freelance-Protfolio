"use client";
import React, { FC, ReactNode, useRef, useState } from "react";

interface CursorProps {
  children: ReactNode;
}

const Cursor: FC<CursorProps> = ({ children }) => {
  const [positionY, setPositionY] = useState();
  const [positionX, setPositionX] = useState();

  const mouse = useRef(null);

  const mouseMove = (e: any) => {
    setPositionY(e.pageY);
    setPositionX(e.pageX);
  };

  // const toggleCoursorVisibleity = (e:any)=>{

  //   mouse.current.style.top=e.pageY+"px"
  //   mouse.current.style.left=e.pageX-20+"px"

  // }

  return (
    <div className="w-full h-screen" 
    // onMouseMove={toggleCoursorVisibleity}
    >
      <div
        ref={mouse}
        className={`w-8 h-8 border-2 border-black rounded-full absolute`}
      ></div>
      {children}
    </div>
  );
};

export default Cursor;
