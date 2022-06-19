import React from "react";

import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { SoftSkills } from "./components/SoftSkills";
import { TechnicalSkills } from "./components/TechnicalSkills";
import { Toolbar } from "./components/Toolbar";
import "./App.scss";

function App() {
  return (
    <>
      <Toolbar />
      <AboutMe />
      <Projects />
      <TechnicalSkills />
      <SoftSkills />

      {/* falta el contacto y modificar los colores */}
    </>
  );
}

export default App;
