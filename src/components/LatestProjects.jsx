import { Col, Row } from "antd";

import ProjectCard from "./ProjectCard";

const LatestProjects = () => {
  const projects = [
    {
      title: "Online Shop App",
      detail: "Feature Product",
      image: "FeatureMobile.png",
    },
    {
      title: "Online Shop App",
      detail: "WishList",
      image: "WishList.png",
    },
    {
      title: "Online Shop App",
      detail: "Product Detail",
      image: "ProductDetail.png",
    },
    {
      title: "Online Shop App",
      detail: "Order History",
      image: "OrderHistory.png",
    },
    {
      title: "Online Shop App",
      detail: "Log In",
      image: "LogIn.png",
    },
    {
      title: "Online Shop App",
      detail: "Sign Up",
      image: "SignUp.png",
    },
  ];

  return (
    <div className="bg-[#0d1b2a] text-white px-12 py-16 text-center">
      <h1 className="text-5xl mb-12">
        Latest <span className="text-[#00d8ff]">Projects</span>
      </h1>
      <div className="projects-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .project-image {
          height: 200px; /* Fixed height for the images */
          object-fit: content; /* Ensure the image covers the area without distortion */
        }
        @media (max-width: 640px) {
          .projects-container {
            display: flex;
            overflow-x: auto;
            gap: 1rem;
          }
          .project-card {
            flex: 0 0 80%;
          }
          .project-image {
            height: 150px; /* Fixed height for the images */
            object-fit: content; /* Ensure the image covers the area without distortion */
          }
        }
      `}</style>
    </div>
  );
};

export default LatestProjects;
