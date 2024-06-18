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
      <Row gutter={[16, 16]} justify="center">
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <ProjectCard project={project} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LatestProjects;
