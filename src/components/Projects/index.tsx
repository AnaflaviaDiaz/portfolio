import React from "react";
import "./projects.scss";
import scotiabankMobile from "../../assets/screen-projects/scotiabank-mobile.png";
import crecemasMobile from "../../assets/screen-projects/crece+-mobile.png";
import moneyExchangeMobile from "../../assets/screen-projects/money-exchange-mobile.png";
import faceleMobile from "../../assets/screen-projects/facele-mobile.png";
import scotiabankWeb from "../../assets/screen-projects/scotiabank-web.png";
import crecemasWeb from "../../assets/screen-projects/crece+web.png";
import faceleWeb from "../../assets/screen-projects/facele-web.png";

const projectList = [
  { alt: "scotiabank mobile", src: scotiabankMobile, url: "https://mi.scotiabank.com.pe/login" },
  { alt: "crecemas mobile", src: crecemasMobile, url: "https://www.crecemas.com/" },
  { alt: "money exchange mobile", src: moneyExchangeMobile, url: "https://apps.apple.com/pe/app/intercambios/id1485028346" },
  { alt: "facele mobile", src: faceleMobile, url: "https://facele.pe/" },
  { alt: "scotiabank web", src: scotiabankWeb, url: "https://mi.scotiabank.com.pe/login" },
  { alt: "crecemas web", src: crecemasWeb, url: "https://www.crecemas.com/" },
  { alt: "facele web", src: faceleWeb, url: "https://facele.pe/" },
];

export const Projects = () => {
  const goToRoute = (route: string): void => {
    window.open(route, "blank");
  };

  return (
    <div className="Projects">
      <h1>Proyectos</h1>

      <div className="Projects__list">
        {projectList.map(({ src, alt, url }, index) => (
          <img
            src={src}
            alt={alt}
            className="Projects__mobile"
            key={`project-image-${index}`}
            onClick={() => goToRoute(url)}
          />
        ))}
      </div>
    </div>
  );
};
