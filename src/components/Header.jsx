import { Button, Drawer, Menu } from "antd";
import React, { useState } from "react";

import { Link } from "react-scroll";
import { MenuOutlined } from "@ant-design/icons";
import { px } from "framer-motion";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <header className="bg-gray-900 text-white fixed w-full z-10 shadow-lg top-0 header-animation">
      <nav className="container w-full bg-gray-900 flex justify-between items-center py-4 px-6 md:px-12">
        <div className="flex items-center">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <img
              className="mr-5 rounded-full"
              src="/My_Logo.png"
              width={"80px"}
              height={"80px"}
              alt="Logo"
            />
          </Link>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            <div className="hidden sm:block text-4xl font-bold cursor-pointer mr-10">
              Portfolio
            </div>
          </Link>
        </div>

        <div className="flex items-center sm:hidden">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
            className="bg-gray-900 border-none"
          />
        </div>

        <Menu
          mode="horizontal"
          theme="dark"
          className="hidden bg-gray-900 sm:flex bg-transparent flex-grow justify-end"
        >
          {["home", "about", "skills", "education", "projects", "contact"].map(
            (item) => (
              <Menu.Item key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white text-lg header-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </nav>

      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={hideDrawer}
        visible={drawerVisible}
        className="sm:hidden !bg-gray-900 !text-white"
      >
        <Menu mode="vertical" theme="dark" className="bg-gray-900">
          {["home", "about", "skills", "education", "projects", "contact"].map(
            (item) => (
              <Menu.Item key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white text-lg header-link"
                  onClick={hideDrawer}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Drawer>
    </header>
  );
};

export default Header;
