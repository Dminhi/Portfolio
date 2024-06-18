import "./App.css";

import About from "./components/About";
import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import CustomFooter from "./components/Footer";
import Education from "./components/Education";
import Header from "./components/Header";
import LatestProjects from "./components/LatestProjects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="mt-0 bg-gray-800  text-white py-20">
        <section id="about" className="mt-0">
          <About />
        </section>
        <section id="services" className="pt-20">
          <Services />
        </section>
        <section id="skills" className="pt-20">
          <Skills />
        </section>
        <section id="education" className="pt-20">
          <Education />
        </section>
        <section id="projects" className="pt-20">
          <LatestProjects />
        </section>
        <section id="contact" className="pt-20">
          <Contact />
        </section>
        <CustomFooter />
      </main>
      <BackToTopButton />
    </>
  );
}

export default App;
