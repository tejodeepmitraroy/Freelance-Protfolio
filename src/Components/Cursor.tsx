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
			mouse.current!.style.left = mousePosition.x - 12 + "px";
			mouse.current!.style.top = mousePosition.y - 12 + "px";
		}, 200);
	}, [mousePosition]);

	return (
		<div className="h-full w-full">
			<div
				ref={mouse}
				className={`absolute z-50 h-8 w-8 rounded-full border-2 border-black`}
			></div>
			{children}
		</div>
	);
};

export default Cursor;
