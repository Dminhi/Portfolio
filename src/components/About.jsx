import FacebookIcon from "@mui/icons-material/Facebook";
import { Fade } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const About = () => {
  const renderLetters = (text) => {
    return text.split(" ").map((char, index) => (
      <pre key={index} className="letter inline-block">
        {char + " "}
      </pre>
    ));
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          <Fade in={true} timeout={1000}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {renderLetters("Hello!,I'm Minh")}
            </h2>
          </Fade>
          <Fade in={true} timeout={1500}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              I'm a <span className="text-cyan-400">Web Developer</span>
            </h3>
          </Fade>
          <Fade in={true} timeout={2000}>
            <p className="mb-4 text-lg sm:text-xl md:text-2xl">
              I am a Full Stack web developer based in Hanoi, Vietnam. I use
              Japanese and English as my second language after my native tongue.
              I can create a complete Website according to your requirements
            </p>
          </Fade>
          <Fade in={true} timeout={2500}>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/minh.nhi.5"
                className="text-cyan-400 hover:text-cyan-300"
              >
                <FacebookIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/d.minhi?fbclid=IwZXh0bgNhZW0CMTAAAR0cdSkMpA5P0NzOgAoPCAI4y2682zRxJsRYIzSmHirYgBH_tL5F_iQqK-A_aem_1pwwnZG56MIOLAN9o8ucHQ"
                className="text-cyan-400 hover:text-cyan-300"
              >
                <InstagramIcon />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Dminhi?tab=repositories"
                className="text-cyan-400 hover:text-cyan-300"
              >
                <GitHubIcon />
              </a>
            </div>
          </Fade>
          <Fade in={true} timeout={3000}>
            <a
              href="https://dminhi.github.io/Portfolio.github.io/CV_Nguyen_Duy_Minh_Full_Stack_Developer.pdf"
              className="bg-cyan-400 text-white px-6 py-2 rounded-full hover:bg-cyan-500 transition duration-300"
            >
              More About Me
            </a>
          </Fade>
        </div>
        <Fade in={true} timeout={3500}>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="./IMG_1181.jpg"
              alt="Profile"
              className="object-cover rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] mx-auto shadow-lg"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
