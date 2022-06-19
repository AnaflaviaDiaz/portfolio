import logoLinkedin from "../assets/icons/linkedin.svg";
import logoGithub from "../assets/icons/github.svg";
import logoGmail from "../assets/icons/gmail.svg";

interface ExternalProfileLinkAndImage {
  image: string;
  alt: string;
  link: string;
}

export const EXTERNAL_PROFILE_LINKS_IMAGES: ExternalProfileLinkAndImage[] = [
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
