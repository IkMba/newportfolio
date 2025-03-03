import React, { useState, useEffect, useRef } from "react";
import { experienceData } from "../data/data";

import ExperienceCard from "../components/ExperienceCard";
import ArrowupIcon from "../icons/ArrowupIcon";
import { Link } from "react-router-dom";

export default function Experience() {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && containerRef.current) {
        const stickyOffset = containerRef.current.offsetTop;

        const target = document.getElementById("experience");
        const rect = target.getBoundingClientRect();

        if (window.pageYOffset > stickyOffset) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          setIsSticky(false);
        }
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="experience"
      className={`mt-24 ${
        isSticky ? stickyRef.current?.offsetHeight || "0px" : "20px"
      }`}
      ref={containerRef}
    >
      <h2
        className={`lg:hidden ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-10 shadow-md bg-darkBlue px-6 py-3"
            : ""
        }`}
        id="sticky"
        ref={stickyRef}
      >
        EXPERIENCE
      </h2>
      <div>
        {experienceData.map((item) => (
          <ExperienceCard experience={item} />
        ))}
      </div>
      <Link
        to="britchiangresume.pdf"
        className="mt-6 hover:!text-lav2 cursor-pointer px-4" target="_blank" rel="noopener noreferrer"
      >
        View Resume
        <span>
          <ArrowupIcon />
        </span>
      </Link>
    </div>
  );
}
