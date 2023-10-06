import { useEffect, useState } from "react";
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    let mouseXStartingPoint = 0;
    let mouseXEndPoint = window.innerWidth;
    let currentXPoint = 0;
    let fracXValue = 0;
    
    
    const setFromEvent = (event: any) =>{

      currentXPoint = event.clientX;
      fracXValue = currentXPoint/ mouseXEndPoint;
      console.log(fracXValue)
      setMousePosition({ x:event.clientX, y: event.clientY });

    }
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  return mousePosition;
};

export default useMousePosition;
