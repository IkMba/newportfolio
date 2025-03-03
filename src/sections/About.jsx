import React, { useState, useEffect, useRef } from 'react';
import { aboutInfo1 } from "../data/data";
import { Link } from "react-router-dom";

export default function About() {

  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && containerRef.current) {
        const stickyOffset = containerRef.current.offsetTop;
        const target = document.getElementById('about')
        const rect = target.getBoundingClientRect();

        // if (rect.top <= 0 ){
        //   setIsSticky(true);
        // } 
        // else if (rect.bottom <= 0 || rect.top >= window.innerHeight){
        //   setIsSticky(false);
        //   console.log('Element is no longer in view!');
        // } 
        if (window.pageYOffset > stickyOffset) {

          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
        if  (rect.bottom <= 0 || rect.top >= window.innerHeight){
            setIsSticky(false);
            console.log('Element is no longer in view!');
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
    <div className={`mt-12 lg:mt-0 section pt-${isSticky ? stickyRef.current?.offsetHeight || '0px' : '20px'}`} id="about"  ref={containerRef}>
      <h2 className={`lg:hidden ${
            isSticky ? 'fixed top-0 left-0 right-0 z-10 shadow-md bg-darkBlue px-6 py-3' : ''
          }`}  ref={stickyRef}>
        ABOUT
      </h2>
      <h6 className="my-4 lg:mt-0 lg:px-8">
        I am a passionate and detail-oriented <span className="text-teal1">Backend Engineer</span> with a strong focus
        on building scalable, efficient, and secure systems. With over <span className="text-teal1">2 years</span> of
        experience in designing and implementing robust backend solutions.
      </h6>
      <h6 className="my-4 lg:mt-0 lg:px-8">
        I specialize in developing RESTful APIs, microservices, and database
        architectures, leveraging technologies such as <span className="text-teal1">Node.js and Django</span>. I
        have experience working with both <span className="text-teal1">SQL AND NoSQL</span> databases. I am
        proficient in cloud platforms like AWS, caching mechanisms like Redis,
        containerization tools like Docker and orchestration with Kubernetes.
      </h6>
      <h6 className="my-4 lg:mt-0 lg:px-8">
      Currently, I'm a Backend Engineer at <span className="text-teal1"><Link to='https://www.baobab.com'>Baobab</Link></span>. In the past, I've had the opportunity to develop software across a variety of settings and roles — starting off as a <span className="text-teal1">frontend engineer</span> and then transitioning to backend.
      </h6>
      <h6 className="my-4 lg:mt-0 lg:px-8">
        I enjoy collaborating with cross-functional teams to translate business
        requirements into technical solutions and am always eager to learn and
        adapt to new technologies. Whether it’s improving system performance,
        ensuring data security, or architecting scalable solutions, I’m
        committed to delivering high-quality backend systems that power
        exceptional applications.
      </h6>
      <h6 className="my-4 lg:mt-0 lg:px-8">
      Let’s build something amazing together!
      </h6>
    </div>
  );
}
