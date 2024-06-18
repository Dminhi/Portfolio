import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white text-[#0d1b2a] rounded-lg shadow-lg overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-m">{project.detail}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
