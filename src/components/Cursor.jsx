import React, { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const gradientRef = useRef({ x: 0, y: 0 });
  const customCursorRef = useRef(null);
  const gradientContainerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      // Update cursor position with faster follow
      cursorRef.current.x += (mousePosition.x - cursorRef.current.x) * 0.5;
      cursorRef.current.y += (mousePosition.y - cursorRef.current.y) * 0.5;

      // Update gradient position with slower follow
      gradientRef.current.x += (mousePosition.x - gradientRef.current.x) * 0.1;
      gradientRef.current.y += (mousePosition.y - gradientRef.current.y) * 0.1;

      // Apply positions
      if (customCursorRef.current) {
        customCursorRef.current.style.transform = `translate(${cursorRef.current.x}px, ${cursorRef.current.y}px)`;
      }

      if (gradientContainerRef.current) {
        gradientContainerRef.current.style.transform = `translate(${gradientRef.current.x}px, ${gradientRef.current.y}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
  }, [mousePosition]);

  return (
    <div >

      {/* Cursor effect elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div
          ref={gradientContainerRef}
          className="absolute w-[600px] h-[600px] rounded-full opacity-80 mix-blend-screen"
          style={{
            // background:
            //   "radial-gradient(circle at center, rgba(100, 255, 218, 0.15), rgba(100, 255, 218, 0.1) 25%, rgba(100, 255, 218, 0.05) 50%, rgba(10, 25, 47, 0) 80%)"
            //   ,
            background: `radial-gradient(
                circle at center,
                rgba(145, 160, 190, 0.25),
                rgba(120, 135, 170, 0.2) 25%,
                rgba(90, 105, 140, 0.15) 50%,
                rgba(15, 23, 42, 0) 80%
              )`,
            transform: "translate(0px, 0px)",
            marginLeft: "-300px",
            marginTop: "-300px",
          }}
        />
      </div>
    </div>
  );
};

export default Cursor;
