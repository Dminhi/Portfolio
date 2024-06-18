import React, { useEffect, useState } from "react";

import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {visible && (
        <Button
          type="primary"
          className="bg-[#00d8ff] border-none hover:bg-[#00c4e3] text-xl"
          onClick={scrollToTop}
        >
          <ArrowUpOutlined />
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;
