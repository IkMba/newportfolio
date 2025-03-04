import React from "react";
import Button from "./Button";
import ArrowupIcon from "../icons/ArrowupIcon";
import { Link } from "react-router-dom";
import GithubIcon from "../icons/GithubIcon";

export default function ProjectCard({ project }) {
  const {
    title,
    detail,
    tools,
    image,
    link,
    githubLink1,
    githubLink2,
    githubLink,
  } = project;
  return (
    <div className="mt-6 exp-card group rounded-lg px-4 py-4  gap-4 transition delay-100 ease-in-out">
      {/* <div> */}
      <Link to={link} className="group-hover:!text-lav2" target="_blank" rel="noopener noreferrer">
        {title}
        <span>
          <ArrowupIcon />
        </span>
      </Link>
      <img
        src={image}
        alt="project-image"
        className="my-4 w-full lg:w-[400px] mx-auto"
      />
      <p className="my-2">{detail}</p>
      <div className="flex items-center gap-4">
        {githubLink1 && (
          <Link to={githubLink1} className="flex items-center gap-2 !text-sm" target="_blank" rel="noopener noreferrer">
            {" "}
            <span>
              <GithubIcon />
            </span>
            Frontend{" "}
          </Link>
        )}
        {githubLink2 && (
          <Link to={githubLink2} className="flex items-center gap-2 !text-sm" target="_blank" rel="noopener noreferrer">
            <span>
              <GithubIcon />
            </span>
            Backend{" "}
          </Link>
        )}
        {githubLink && (
          <Link to={githubLink} className="flex items-center gap-2 !text-sm" target="_blank" rel="noopener noreferrer">
            <span>
              <GithubIcon />{" "}
            </span>
            Code{" "}
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {tools.map((it) => (
          <Button key={it.org}>{it}</Button>
        ))}
      </div>
    </div>
    // </div>
  );
}
