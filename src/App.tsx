import React from "react";
import "./App.scss";
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { SoftSkills } from "./components/SoftSkills";
import { TechnicalSkills } from "./components/TechnicalSkills";

function App() {
  return (
    <div>
      <Presentation />
      <Projects />
      <TechnicalSkills />
      <SoftSkills />

      {/* falta el contacto y modificar los colores */}
    </div>
  );
}

export default App;
