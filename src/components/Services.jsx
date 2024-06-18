import { FaJava, FaMobileAlt, FaNodeJs, FaReact } from "react-icons/fa";

import { motion } from "framer-motion";

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Building responsive and engaging websites.",
  },
  {
    icon: <FaReact size={40} className="text-cyan-400" />,
    title: "FrontEnd Development",
    description:
      "User Interface (UI) Design, User Experience (UX) Design, Responsive Design",
  },
  {
    icon: (
      <FaJava
        size={40}
        className="text-cyan-400 flex justify-content-center "
      />
    ),
    title: "BackEnd Development",
    description:
      "RESTful Services: Designing APIs to enable communication between different parts of the system or with third-party services.",
  },
];

const serviceCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={serviceCardVariants}
              whileHover="hover"
            >
              <div className="mb-4 text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
