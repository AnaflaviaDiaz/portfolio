import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import "./toolbar.scss";
import { Menu } from "../../models/menu.interface";
import { MENUS } from "../../data/menu.cons";
import logo from "../../assets/adm-lg-logo.png";

const menus: Menu[] = MENUS;

export const Toolbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <header className="toolbar">
      <nav>
        <aside className="toolbar__navbar">
          <button className="toolbar__navbar--menu" onClick={openSidebar}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>

          <a href="#!" className="toolbar__navbar--logo">
            <img src={logo} alt="logo" width={250} />
          </a>

          <ul className="toolbar__navbar--link">
            {menus.map(({ href, name }) => (
              <li key={href}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </aside>
      </nav>

      {showSidebar ? (
        <ul className="toolbar__sidebar">
          <button className="toolbar__sidebar--close" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>

          <a href="#!" className="toolbar__sidebar--logo">
            <img src={logo} alt="logo" width="100%" />
          </a>

          {menus.map(({ href, name }) => (
            <li key={href}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
};
