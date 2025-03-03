import React, { useState, useEffect, useRef } from "react";
import BlogCard from "../components/BlogCard";
import { blogsData } from "../data/data";

export default function Blog() {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current && containerRef.current) {
        const stickyOffset = containerRef.current.offsetTop;

        if (window.pageYOffset > stickyOffset) {
          setIsSticky(true);
        } else {
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
      className={`mt-16 ${
        isSticky ? stickyRef.current?.offsetHeight || "0px" : "20px"
      }`}
      id="writing" ref={containerRef}
    >
      <h2
        id="sticky"
        className={`lg:hidden ${
          isSticky ? "fixed top-0 left-0 right-0 z-10 shadow-md bg-darkBlue px-6 py-3" : ""
        }`} ref={stickyRef}
      >
        WRITING
      </h2>
      <div >
        {blogsData.map((item) => (
          <BlogCard blog={item} />
        ))}
      </div>
    </div>
  );
}
