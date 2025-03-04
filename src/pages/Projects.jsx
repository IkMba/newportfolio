import React, { useState } from "react";
import { projects } from "../data/data";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { Link } from "react-router-dom";
import ArrowLinkIcon from "../icons/ArrowLinkIcon";
import GithubIcon from "../icons/GithubIcon";
import Button from "../components/Button";
import Cursor from "../components/Cursor";
import Footer from "../sections/Footer";

const ProjectsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Get unique project types for filter
  const projectTypes = [
    "All",
    ...new Set(projects.map((project) => project.type)),
  ];

  // Filter projects based on selected type
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.type === selectedFilter);

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen">
      <div className=" mx-auto px-4 lg:px-16 py-16 lg:py-24">
        <header className="mb-12 lg:mb-16">
          <Link to="/" className="group !text-lav2 !text-lg flex items-center ">
            <span>
              <ArrowLeftIcon />
            </span>{" "}
            Ikechukwu Mba
          </Link>
          <h1 className="text-4xl lg:!text-5xl font-bold text-slate-100 mb-4">
            All Projects
          </h1>
        </header>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-slate-300 font-semibold">Filter by:</h2>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    selectedFilter === type
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                      : "text-slate-400 border border-slate-700 hover:border-slate-600"
                  }`}
                  onClick={() => setSelectedFilter(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse table-auto text-left">
            <thead>
              <tr className="">
                <th className="py-4 px-2 text-teal font-medium">Year</th>
                <th className="py-4 px-2 text-teal font-medium">Project</th>
                <th className="py-4 px-2 text-teal font-medium ">Links</th>
                <th className="py-4 px-2 text-teal font-medium hidden md:table-cell">
                  Built with
                </th>
                <th className="py-4 px-2 text-teal font-medium hidden sm:table-cell">
                  Description
                </th>
                {/* <th className="py-4 px-2 text-teal font-medium">Type</th> */}
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project, index) => (
                <tr
                  key={index}
                  className="  border-b border-slate-800 hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-4 px-2 font-semibold text-teal2">
                    {project.year}
                  </td>
                  <td className="py-4 px-2 font-semibold text-lg text-teal hover:text-lav2">
                    {project.title}
                  </td>

                  <td className="py-4 px-2">
                    <div className="flex gap-2 items-center text-slate-400">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          className="hover:text-emerald-400 transition-colors"
                        >
                          <GithubIcon />
                        </a>
                      )}
                      {project.links.external && (
                        <a
                          href={project.links.external}
                          className="hover:text-emerald-400 transition-colors"
                        >
                          <ArrowLinkIcon />
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-2 hidden md:table-cell">
                    <div className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech, i) => (
                        <Button key={i}>{tech}</Button>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-2 text-slate-400 hidden sm:table-cell">
                    {project.description}
                  </td>
                  {/* <td className="py-4 px-2">
                    <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-300">
                      {project.type}
                    </span>
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <Footer /> */}
      </div>
      <Cursor />
    </div>
  );
};

export default ProjectsPage;
