import React from "react";
import { Card } from "../Card";
import "./technical-skills.scss";

const technicalTestSkillList: string[] = [
  "Jest",
  "Jasmine",
  "Karma",
  "Node",
  "Git",
  "Firebase",
];

const technicalCssSkillList: string[] = [
  "Html",
  "Scss",
  "Sass",
  "Bootstrap",
  "Bulma",
  "Smacss",
];

const technicalBasicSkillList: string[] = [
  "Javascript",
  "Typescript",
  "Angular",
  "React",
  "React Native",
  "Ionic",
];

export const TechnicalSkills = () => {
  return (
    <div className="TechnicalSkills">
      <h1>Habilidades Técnicas</h1>
      <Card className="TechnicalSkills__card">
        <ul>
          {technicalBasicSkillList.map((technicalBasicSkill, index) => (
            <li key={`technicalBasicSkill-${index}`}>{technicalBasicSkill}</li>
          ))}
        </ul>
      </Card>
      <Card className="TechnicalSkills__card">
        <ul>
          {technicalTestSkillList.map((technicalTestSkill, index) => (
            <li key={`technicalTestSkill-${index}`}>{technicalTestSkill}</li>
          ))}
        </ul>
      </Card>
      <Card className="TechnicalSkills__card">
        <ul>
          {technicalCssSkillList.map((technicalCssSkill, index) => (
            <li key={`technicalCssSkill-${index}`}>{technicalCssSkill}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};
