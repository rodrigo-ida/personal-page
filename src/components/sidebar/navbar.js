import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StyledNavbar from "./styledNavbar";
import NavbarList from "./navbarList";
import NavbarMobileModal from "./mobileNavbar/navbarMobileModal/navbarMobileModal";

import BurgerButton from "./mobileNavbar/burgerButton/BurgerBtn";

const Navbar = () => {
  const [clicked, setclicked] = useState(false);

  const linksArray = [
    { url: "/", fontAwesomeClass: "fas fa-home", description: "Início" },
    {
      url: "/projects",
      fontAwesomeClass: "fas fa-eye",
      description: "Projetos",
    },
    { url: "/about", fontAwesomeClass: "fas fa-user", description: "Sobre" },
    {
      url: "/contact",
      fontAwesomeClass: "fas fa-envelope",
      description: "Contato",
    },
  ];

  const links = linksArray.map((e, i) => {
    return (
      <li className="navbar-list-item" key={i + "navbarLinks"}>
        <NavLink
          to={e.url}
          exact
          activeStyle={{ color: "floralwhite", fontSize: "35px" }}
        >
          {clicked ? e.description : <i className={e.fontAwesomeClass}></i>}
        </NavLink>
      </li>
    );
  });

  return (
    <StyledNavbar clicked={clicked}>
      <div className="logo-wrapper">
        <p className="logo">R</p>
      </div>
      {window.outerWidth > 600 ? (
        <NavbarList>{links}</NavbarList>
      ) : (
        <div className="burger-button-wrapper">
          <BurgerButton setclicked={setclicked} />
          <NavbarMobileModal clicked={clicked}>
            <NavbarList>{links}</NavbarList>
          </NavbarMobileModal>
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
