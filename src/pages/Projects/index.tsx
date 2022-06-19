import React from "react";

import { PROJECT_INFO } from "../../data/projects-info.const";
import "./projects.scss";

export const Projects = () => {
  const goToRoute = (route: string): void => {
    window.open(route, "blank");
  };

  return (
    <section className="Projects" id="portfolio">
      <h1># Portfolio</h1>

      <article className="Projects__list">
        {PROJECT_INFO.map(({ src, alt, url, device }, index) => (
          <img
            width={device === "web" ? 50 : 100}
            src={src}
            alt={alt}
            className="Projects__mobile"
            key={`project-image-${index}`}
            onClick={() => goToRoute(url)}
          />
        ))}
      </article>
    </section>
  );
};
