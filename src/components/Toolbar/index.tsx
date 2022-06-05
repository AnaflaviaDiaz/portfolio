import React from "react";
import "./toolbar.scss";
import logo from '../../assets/adm-lg-logo.png';

export const Toolbar = () => {
  return (
    <header className="toolbar">
      <nav>
        {/* <div> */}
          <a href="#!" className="toolbar__logo">
            <img src={logo} alt="logo" width={300} />
          </a>
          {/* <a href="#" data-target="mobile-demo">
            <i>menu</i>
          </a> */}
          <ul className="toolbar__link">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about-me">About me</a>
            </li>
            <li>
              <a href="#tech-know">Tech know</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact-me">Contact me</a>
            </li>
          </ul>
        {/* </div> */}
      </nav>
    </header>
  );
};
