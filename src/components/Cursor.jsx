import React, { useEffect, useState } from 'react'

const Cursor = () => {

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  return (
    <div
      className="cursor-none fixed w-5 h-5 rounded-full bg-accent-pink pointer-events-none z-9999 shadow-[0_0_20px_rgba(255,182,193,0.8)]"
      style={{
        left: mouse.x,
        top: mouse.y,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
}

export default Cursor