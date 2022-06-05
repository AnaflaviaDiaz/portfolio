import React from "react";
import "./presentation.scss";
import meImage from "../../assets/me-animated.png";

export const Presentation = () => {
  return (
    <div className="Presentation">
      <div className="Presentation__nameContainer">
        <h1>Hi, I'm Anaflavia</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="Presentation__imageContainer">
        <img src={meImage} alt="me" />
      </div>
      {/* <p>A passionate frontend developer from Perú.</p> */}
    </div>
  );
};
