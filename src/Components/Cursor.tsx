"use client";
import useMousePosition from "@/Hooks/useMousePosition";
import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

interface CursorProps {
  children: ReactNode;
}

const Cursor: FC<CursorProps> = ({ children }) => {
  const [positionY, setPositionY] = useState();
  const [positionX, setPositionX] = useState();

  let mouse = useRef<HTMLInputElement>(null);

  const mousePosition = useMousePosition();

  useEffect(() => {
    setTimeout(() => {
      mouse.current!.style.left = mousePosition.x-12 + "px";
      mouse.current!.style.top = mousePosition.y-12 + "px";
    }, 200);
  }, [mousePosition]);

  return (
    <div className="w-full h-full ">
      <div
        ref={mouse}
        className={`w-8 h-8 border-2 border-black rounded-full absolute z-50`}
      ></div>
      {children}
    </div>
  );
};

export default Cursor;
