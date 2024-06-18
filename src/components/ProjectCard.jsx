import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white text-[#0d1b2a] rounded-lg shadow-lg overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
      />
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base md:text-lg mt-2">{project.detail}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
