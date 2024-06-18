import {
  FaBook,
  FaComment,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaLeaf,
  FaMobileAlt,
  FaNetworkWired,
  FaNodeJs,
  FaReact,
  FaTeamspeak,
} from "react-icons/fa";

import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Web Development",
    description:
      "Experience with popular Java frameworks like Spring Boot for building robust and scalable applications. Developing RESTful APIs and web services using Java.",
    icon: <FaJava size={40} className="text-cyan-400" />,
  },
  {
    title: "HTML, CSS",
    description:
      "Utilizing media queries and responsive design techniques to ensure web pages look great on all devices .Expertise in using CSS to style web pages, including layout, typography, and color schemes.",
    icon: <FaHtml5 size={40} className="text-cyan-400" />,
  },
  {
    title: "ReactJS",
    description:
      "Building reusable and modular components to create scalable React applications",
    icon: <FaReact size={40} className="text-cyan-400" />,
  },
  {
    title: "MySQL",
    description:
      "Proficient in performing Create, Read, Update, and Delete (CRUD) operations.",
    icon: <FaDatabase size={40} className="text-cyan-400" />,
  },
  {
    title: "EngLish & Japanese",
    description:
      "Can use English and Japanese for communication and reading documents.",
    icon: <FaBook size={40} className="text-cyan-400" />,
  },
  {
    title: "Team Work",
    description:
      "Flexible in adapting to different roles within a team and willing to take on various responsibilities as needed",
    icon: <FaTeamspeak size={40} className="text-cyan-400" />,
  },
];

const skillCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, rotate: 5, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={skillCardVariants}
              whileHover="hover"
            >
              <motion.div
                className="mb-4 flex justify-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
              <p className="mb-6">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
