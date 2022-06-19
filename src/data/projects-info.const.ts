import scotiabankMobile from "../assets/screen-projects/scotiabank-mobile.png";
import crecemasMobile from "../assets/screen-projects/crece+-mobile.png";
import moneyExchangeMobile from "../assets/screen-projects/money-exchange-mobile.png";
import faceleMobile from "../assets/screen-projects/facele-mobile.png";
import scotiabankWeb from "../assets/screen-projects/scotiabank-web.png";
import crecemasWeb from "../assets/screen-projects/crece+web.png";
import faceleWeb from "../assets/screen-projects/facele-web.png";

interface ProjectInfo {
  alt: string;
  device: "web" | "mobile";
  name: string;
  src: string;
  url: string;
}

export const PROJECT_INFO: ProjectInfo[] = [
  {
    alt: "scotiabank mobile",
    src: scotiabankMobile,
    url: "https://mi.scotiabank.com.pe/login",
    device: "mobile",
    name: "",
  },
  {
    alt: "crecemas mobile",
    src: crecemasMobile,
    url: "https://www.crecemas.com/",
    device: "mobile",
    name: "",
  },
  {
    alt: "money exchange mobile",
    src: moneyExchangeMobile,
    url: "https://apps.apple.com/pe/app/intercambios/id1485028346",
    device: "mobile",
    name: "",
  },
  {
    alt: "facele mobile",
    src: faceleMobile,
    url: "https://facele.pe/",
    device: "mobile",
    name: "",
  },
  {
    alt: "scotiabank web",
    src: scotiabankWeb,
    url: "https://mi.scotiabank.com.pe/login",
    device: "web",
    name: "",
  },
  {
    alt: "crecemas web",
    src: crecemasWeb,
    url: "https://www.crecemas.com/",
    device: "web",
    name: "",
  },
  {
    alt: "facele web",
    src: faceleWeb,
    url: "https://facele.pe/",
    device: "web",
    name: "",
  },
];
