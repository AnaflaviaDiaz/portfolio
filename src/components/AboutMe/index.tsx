import React from "react";

import "./about-me.scss";
import logoLinkedin from "../../assets/icons/linkedin.svg";
import logoGithub from "../../assets/icons/github.svg";
import logoGmail from "../../assets/icons/gmail.svg";

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

const externalLinksAndImages = [
  {
    image: logoLinkedin,
    alt: "linkedin",
    link: "https://www.linkedin.com/in/anaflavia-diaz/",
  },
  {
    image: logoGithub,
    alt: "github",
    link: "https://github.com/AnaflaviaDiaz",
  },
  { image: logoGmail, alt: "gmail", link: "mailto:anaflaviadmar@gmail.com" },
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
        {externalLinksAndImages.map(({ image, alt, link }) => (
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
