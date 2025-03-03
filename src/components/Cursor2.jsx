import React, { useEffect, useState, useRef } from 'react';

const Cursor2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorCircle1Ref = useRef(null);
  const cursorCircle2Ref = useRef(null);
  const cursorCircle3Ref = useRef(null);
  const circlePos1 = useRef({ x: 0, y: 0 });
  const circlePos2 = useRef({ x: 0, y: 0 });
  const circlePos3 = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      // Different follow speeds for each circle
      // First circle - fastest
      circlePos1.current.x += (mousePosition.x - circlePos1.current.x) * 0.2;
      circlePos1.current.y += (mousePosition.y - circlePos1.current.y) * 0.2;
      
      // Second circle - medium
      circlePos2.current.x += (mousePosition.x - circlePos2.current.x) * 0.1;
      circlePos2.current.y += (mousePosition.y - circlePos2.current.y) * 0.1;
      
      // Third circle - slowest
      circlePos3.current.x += (mousePosition.x - circlePos3.current.x) * 0.05;
      circlePos3.current.y += (mousePosition.y - circlePos3.current.y) * 0.05;
      
      // Apply positions
      if (cursorCircle1Ref.current) {
        cursorCircle1Ref.current.style.transform = `translate(${circlePos1.current.x}px, ${circlePos1.current.y}px)`;
      }
      
      if (cursorCircle2Ref.current) {
        cursorCircle2Ref.current.style.transform = `translate(${circlePos2.current.x}px, ${circlePos2.current.y}px)`;
      }
      
      if (cursorCircle3Ref.current) {
        cursorCircle3Ref.current.style.transform = `translate(${circlePos3.current.x}px, ${circlePos3.current.y}px)`;
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-sans cursor-none">
      {/* Cursor circles */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
        <div 
          ref={cursorCircle1Ref}
          className="absolute w-5 h-5 rounded-full border border-[#64ffda] mix-blend-screen"
          style={{
            marginLeft: '-10px',
            marginTop: '-10px',
          }}
        />
        <div 
          ref={cursorCircle2Ref}
          className="absolute w-16 h-16 rounded-full border border-[#64ffda] opacity-50 mix-blend-screen"
          style={{
            marginLeft: '-32px',
            marginTop: '-32px',
          }}
        />
        <div 
          ref={cursorCircle3Ref}
          className="absolute w-32 h-32 rounded-full border border-[#64ffda] opacity-20 mix-blend-screen"
          style={{
            marginLeft: '-64px',
            marginTop: '-64px',
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <header className="mb-12">
          <h1 className="text-3xl text-[#64ffda] font-semibold mb-2">Archive</h1>
          <p className="text-lg opacity-80">A collection of projects I've built over the years</p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="bg-[#112240] p-6 rounded-md hover:translate-y-[-5px] transition-transform border border-[#112240] hover:border-[#64ffda]/30"
            >
              <div className="flex justify-between items-start mb-4">
                <svg className="w-10 h-10 text-[#64ffda]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <a href="#" className="text-[#64ffda]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
              <h3 className="text-xl text-white font-medium mb-2">Project {item}</h3>
              <p className="text-sm opacity-80 mb-4">A brief description of this project and the technologies used to build it.</p>
              <div className="flex flex-wrap gap-2 text-xs opacity-60">
                <span>React</span>
                <span>Node.js</span>
                <span>TypeScript</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cursor2;