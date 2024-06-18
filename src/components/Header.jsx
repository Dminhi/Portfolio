import { Link } from "react-scroll";
import { Menu } from "antd";
import React from "react";
import { px } from "framer-motion";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white fixed w-full z-10 shadow-lg top-0 header-animation">
      <nav className="container w-[100vw] flex justify-between items-center py-4 px-12">
        <div className="flex items-center">
          <img
            className="mr-5 rounded-full"
            src="/My_Logo.png"
            width={"80px"}
            height={"80px"}
            alt=""
          />
          <div className="text-4xl font-bold cursor-pointer mr-10">
            Portfolio
          </div>
        </div>

        <Menu
          mode="horizontal"
          theme="dark"
          className="bg-transparent flex-grow text-right"
        >
          <Menu.Item key="home">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-lg header-link"
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-lg header-link"
            >
              About
            </Link>
          </Menu.Item>
          <Menu.Item key="skills">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-lg header-link"
            >
              Skills
            </Link>
          </Menu.Item>
          <Menu.Item key="education">
            <Link
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-lg header-link"
            >
              Education
            </Link>
          </Menu.Item>
          <Menu.Item key="projects">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-lg header-link"
            >
              Projects
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white text-lg header-link"
            >
              Contact
            </Link>
          </Menu.Item>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
