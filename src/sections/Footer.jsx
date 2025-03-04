import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="mt-18 mb-12 lg:mb-0 lg:w-[70%]">
      <p>
        Built by yours truly using{" "}
        <span className="text-teal2 font-bold">React,Tailwind CSS</span>, coded
        on <span className="text-teal2 font-bold">Visual studio code</span> and
        deployed on <span className="text-teal2 font-bold">vercel</span>.
        Adapted from a design by{" "}
        <span className="text-teal2 font-bold">brittanychiang </span>. Want to
        get in touch,{" "}
        <span >
          <Link to="" className="!text-lav2 font-semibold !text-sm">Say Hello</Link>
        </span>{" "}
        and let's have a chat.
      </p>
    </div>
  );
}
