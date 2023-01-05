//Node modules
import React, { useState } from "react";

//Project files
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Modal from "./components/Modal";

export default function App() {
  //Local state
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects setModal={setModal} />
      <Technologies setModal={setModal} />
      <Contact />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}
