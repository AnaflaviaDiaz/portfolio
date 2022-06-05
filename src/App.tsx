import React from "react";

import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { SoftSkills } from "./components/SoftSkills";
import { TechnicalSkills } from "./components/TechnicalSkills";
import { Toolbar } from "./components/Toolbar";
import "./App.scss";

function App() {
  return (
    <>
      <Toolbar />
      <Projects />
      <Presentation />
      <TechnicalSkills />
      <SoftSkills />

      {/* falta el contacto y modificar los colores */}
    </>
  );
}

export default App;
