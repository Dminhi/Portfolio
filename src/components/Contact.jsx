import { Button, Form, Input } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import React, { useState } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextArea from "antd/es/input/TextArea";
import emailjs from "@emailjs/browser";
import { notify } from "../utils/notification";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_wml6hkm";
    const templateId = "template_9lajxuj";
    const publicKey = "5UFeAlI8zZeZVjCs4";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Web",
      message: message,
    };

    await emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        notify("success", "Sending Email Successfully");
        setEmail("");
        setMessage("");
        setName("");
      })
      .catch((error) => {
        notify("error", "Sending Email Error");
      });
  };

  return (
    <div className="bg-[#0d1b2a] text-white p-8 flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl mb-4">
          Contact <span className="text-[#00d8ff]">Me</span>
        </h1>
        <p className="text-xl mb-4">
          Work together and create value for society
        </p>
        <p className="mb-4">
          Feel free to contact me if you have any questions or would like to
          collaborate on a project.
        </p>
        <div className="mb-4">
          <MailOutlined className="mr-2" /> hse.duyminh@gmail.com
        </div>
        <div className="mb-4">
          <PhoneOutlined className="mr-2" /> 0982391992
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.facebook.com/minh.nhi.5"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/d.minhi?fbclid=IwZXh0bgNhZW0CMTAAAR0JMLbaImBOlCu0quzRAPr4BlLsHQbfIIIiwT6MdicW2OI8BXE7cvVc__Q_aem_ZmFrZWR1bW15MTZieXRlcw"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <InstagramIcon className="text-2xl" />
          </a>
          <a
            href="https://github.com/Dminhi?tab=repositories"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <form onSubmit={handleSubmit}>
          <Input
            className="mb-4"
            placeholder="Enter your name..."
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            className="mb-4"
            placeholder="Enter your email..."
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextArea
            className="mb-4"
            placeholder="Enter your message..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
          />
          <Button
            type="primary"
            htmlType="submit"
            className="bg-[#00d8ff] border-none hover:bg-[#00c4e3]"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
