import React, { useEffect, useRef, useState } from 'react';

const Cursor3 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const gradientRef = useRef(null);
  
  // Animation variables
  const cursorPos = useRef({ x: 0, y: 0 });
  const gradientPos = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation loop
    const animate = () => {
      // Update cursor position with faster follow
      cursorPos.current.x += (mousePosition.x - cursorPos.current.x) * 0.5;
      cursorPos.current.y += (mousePosition.y - cursorPos.current.y) * 0.5;
      
      // Update gradient position with slower follow
      gradientPos.current.x += (mousePosition.x - gradientPos.current.x) * 0.1;
      gradientPos.current.y += (mousePosition.y - gradientPos.current.y) * 0.1;
      
      // Apply positions
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }
      
      if (gradientRef.current) {
        gradientRef.current.style.transform = `translate(${gradientPos.current.x}px, ${gradientPos.current.y}px)`;
      }
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePosition]);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0f172a] cursor-none">
      {/* Content Section */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-gray-400">
        <h1 className="mb-4 text-3xl font-bold text-[#8ba4db]">Cursor Gradient Effect</h1>
        <p className="max-w-lg mb-6">
          Move your cursor around the screen to see the gradient effect in action.
          This effect uses much lighter shades for a subtle, elegant gradient.
        </p>
      </div> */}
      
      {/* Cursor Effects - positioned in fixed layout */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Container */}
        <div 
          ref={gradientRef}
          className="absolute w-96 h-96 rounded-full pointer-events-none opacity-80 mix-blend-screen"
          style={{
            background: `radial-gradient(
              circle at center,
              rgba(145, 160, 190, 0.25),
              rgba(120, 135, 170, 0.2) 25%,
              rgba(90, 105, 140, 0.15) 50%,
              rgba(15, 23, 42, 0) 80%
            )`,
            transform: 'translate(0px, 0px)',
            left: '-50%',
            top: '-50%'
          }}
        ></div>
        
        {/* Custom Cursor */}
        {/* <div
          ref={cursorRef}
          className="absolute w-5 h-5 rounded-full pointer-events-none mix-blend-screen"
          style={{
            backgroundColor: 'rgba(145, 160, 190, 0.6)',
            transform: 'translate(0px, 0px)',
            left: 0,
            top: 0
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Cursor3;