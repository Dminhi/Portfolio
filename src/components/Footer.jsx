import { Layout } from "antd";
import React from "react";
const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p className="text-sm">
          © 2024 My Portfolio. All rights reserved. Designed with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Me.
        </p>
      </div>
    </Footer>
  );
};

export default CustomFooter;
