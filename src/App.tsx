import { useState } from "react";
import "./App.css";
import ContactLinks from "./components/ContactLinks";
import { Toaster } from "react-hot-toast";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div></div>
      <div className="header">
        <p className="header-title">Luke Cannon</p>
        <p className="header-subtitle">SOFTWARE DEVELOPER</p>
        <p className="header-text">
          I'm a junior developer with a passion for design and making cool
          things that feel good to use. I'm driven by my creative hobbies, so
          I've included a selected of different projects which I think of
          fondly.
        </p>
      </div>
      <div className="section-header">FEATURED PROJECTS</div>
      <Projects />
      <div className="section-header">CONTACT ME</div>
      <ContactLinks />
      <Toaster />
    </div>
  );
}

export default App;
