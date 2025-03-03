import React, { useEffect, useState } from "react";
import GithubIcon from "../icons/githubIcon";
import LinkedinIcon from "../icons/linkedinIcon";
import CodepenIcon from "../icons/codepenIcon";
import InstagramIcon from "../icons/instagramIcon";
import { Link } from "react-router-dom";
import EmailIcon from "../icons/emailIcon";

export default function Hero() {
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sections = ["about", "experience", "projects", "writing"];

    const observerOptions = {
      root: document.querySelector(".scrollable-content"),
      rootMargin: "-20% 0px -60% 0px", // Adjust these values to control when the active state changes
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div >
      <div className="w-[400px] ">
      <h1 className="lg:!text-5xl">Ikechukwu Mba</h1>
      <h2 className="">Software engineer</h2>
      <h6 className="my-6">
        I am a fullstack (backend heavy) engineer. I build scalable,secure and performant systems.
      </h6>
      </div>

      <nav className="hidden lg:block my-20">
        <ul className="space-y-4">
          {["about", "experience", "projects", "writing"].map((item) => (
            <li key={item} className="font-semibold text-sm">
              <button
                onClick={() => handleNavClick(item)}
                className={`group flex items-center text-left ${
                  activeSection === item ? "text-teal1" : "text-gray-400"
                }`}
              >
                <span
                  className={`inline-block w-8 h-px mr-4 ${
                    activeSection === item ? "bg-teal1 w-16" : "bg-gray-500 "
                  } group-hover:bg-teal group-hover:w-16 transition-colors`}
                ></span>
                <span className=" group-hover:text-teal1 transition-colors uppercase">
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className=" [&>:hover]:!text-teal1 flex gap-8 items-center">
        <Link to="mailto:ikmba321@gmail.com" target="_blank" rel="noopener noreferrer" className="!text-teal2">
          <EmailIcon />
        </Link>
        <Link to="https://www.github.com/IkMba" target="_blank" rel="noopener noreferrer" className="!text-teal2">
          <GithubIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/ik-mba" target="_blank" rel="noopener noreferrer" className="!text-teal2">
          {" "}
          <LinkedinIcon />
        </Link>
        <Link to="https://www.codepen.io" target="_blank" rel="noopener noreferrer" className="!text-teal2">
          <CodepenIcon />
        </Link>
        <Link to="https://www.instagram.com/ik.mba" target="_blank" rel="noopener noreferrer" className="!text-teal2">
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
}
