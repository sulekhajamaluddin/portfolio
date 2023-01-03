import React, { useState } from "react";

import "./styles/styles.css";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Projects";
import Technologies from "../src/components/Technologies";
import Modal from "../src/components/Modal";
import Contact from "../src/components/Contact";

// rename App.js to app.jsx, make it 1 line export
function App() {
  const [modal, setModal] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects setModal={setModal} />
      <Technologies />
      <Contact />
      <Modal modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
