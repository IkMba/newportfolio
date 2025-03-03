import React, { useState, useEffect, useRef } from 'react';
import { projectsData } from "../data/data";
import ProjectCard from "../components/ProjectCard";
import ArrowupIcon from "../icons/ArrowupIcon";
import { Link } from 'react-router-dom';

export default function Project() {
  const [isSticky, setIsSticky] = useState(false);
      const stickyRef = useRef(null);
      const containerRef = useRef(null);


      
      useEffect(() => {
        const handleScroll = () => {
          if (stickyRef.current && containerRef.current) {
            const stickyOffset = containerRef.current.offsetTop;
            const target = document.getElementById('projects')
            const rect = target.getBoundingClientRect();
            console.log(rect.bottom)
            if (window.pageYOffset > stickyOffset) {
              setIsSticky(true);
            } 
            else {
              setIsSticky(false);
            }
            if  (rect.bottom <= 0 || rect.top >= window.innerHeight){
              setIsSticky(false);
            }
          }
        };
        
        // Add event listener
        window.addEventListener('scroll', handleScroll);
        
        // Clean up
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <div className={`mt-24 ${isSticky ? stickyRef.current?.offsetHeight || '0px' : '20px'}`} id="projects" ref={containerRef} >
      <h2 id='sticky' className={`lg:hidden ${
            isSticky ? 'fixed top-0 left-0 right-0 z-10 shadow-md bg-darkBlue px-6 py-3' : ''
          }`} ref={stickyRef}>PROJECTS</h2>
      <div>
        {projectsData.map((item) => (
          <ProjectCard project={item} />
        ))}
      </div>
      <Link to='/projects' className="mt-4 hover:!text-lav2 cursor-pointer px-4 ">
        See more Projects
        <span>
          <ArrowupIcon />
        </span>
      </Link>
    </div>
  );
}
