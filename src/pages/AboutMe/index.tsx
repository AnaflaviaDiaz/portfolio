import React from "react";
import { EXTERNAL_PROFILE_LINKS_IMAGES } from "../../data/external-profile-links-images.const";

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
    <section className="AboutMe" id="about-me">
      <h1># About Me</h1>

      <article className="AboutMe__personalPresentation">
        {personalPresentationParagraphs.map(
          (personalPresentationParagraph, index) => (
            <p key={`personal-presentation-${index}`}>
              {personalPresentationParagraph}
            </p>
          )
        )}
      </article>

      <aside>
        {EXTERNAL_PROFILE_LINKS_IMAGES.map(({ image, alt, link }) => (
          <a
            key={alt}
            rel="noreferrer"
            href={link}
            target="_blank"
            className="AboutMe__external--link"
          >
            <img src={image} alt={alt} width={40} />
          </a>
        ))}
      </aside>
    </section>
  );
};
