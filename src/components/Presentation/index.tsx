import React from "react";
import "./presentation.scss";
import meImage from "../../assets/me-animated.png";

export const Presentation = () => {
  return (
    <div className="Presentation">
      <h1>Hi, I'm Anaflavia</h1>
      <h2>Frontend Developer</h2>
      <img src={meImage} alt="me" />
      {/* <p>A passionate frontend developer from Perú.</p> */}
    </div>
  );
};
