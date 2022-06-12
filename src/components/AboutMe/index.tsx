import React from "react";
import "./about-me.scss";

const personalPresentationParagraphs: string[] = [
  `I am a Web and Mobile Frontend developer with experience in the industrial,
  banking and electronic invoicing.`,
  `I like to develop the best experiences between the user and the web or
  mobile application.`,
  // `My skills are commitment, self-learning, teamwork, adaptability,
  // punctuality and responsibility; with the ability to work under
  // pressure.`,
  `My goal is to reflect all my knowledge for the benefit of the company
  to which I provide my services.`,
];

export const AboutMe = () => {
  return (
    <aside className="AboutMe">
      <h1 id="about-me"># About Me</h1>

      <article className="AboutMe__personalPresentation">
        {personalPresentationParagraphs.map(
          (personalPresentationParagraph, index) => (
            <p key={`personal-presentation-${index}`}>
              {personalPresentationParagraph}
            </p>
          )
        )}
      </article>
    </aside>
  );
};
