import React from "react";
import { Card } from "../Card";
import "./soft-skills.scss";

const softSkillList: string[] = [
  'Compromiso',
  'Autoaprendizaje',
  "Trabajo en equipo",
  "Resolución de problemas",
  "Mentalidad de crecimiento",
  "Habilidades de comunicación",
];

export const SoftSkills = () => {
  return (
    <div className="SoftSkills">
      <h1>Habilidades Blandas</h1>
      <Card className="SoftSkills__card">
        <ul>
          {softSkillList.map((softSkill, index) => (
            <li key={`softSkill-${index}`}>{softSkill}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
