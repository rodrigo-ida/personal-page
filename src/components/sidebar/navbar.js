import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import StyledNavbar from "./styledNavbar";
import NavbarList from "./navbarList";
import NavbarMobileModal from "./mobileNavbar/navbarMobileModal/navbarMobileModal";

import BurgerButton from "./mobileNavbar/burgerButton/BurgerBtn";

const Navbar = (props) => {
  const [clicked, setclicked] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(true);

  window.addEventListener("resize", (e) => {
    if(window.innerWidth > 600){

      setIsMobileScreen(false);
    }
    else{
      setIsMobileScreen(true);
    }
  });

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
          onClick={() => setclicked(false)}
          to={e.url}
          exact
          activeStyle={{ color: "floralwhite" }}
        >
          {clicked ? (
            e.description
          ) : (
            <div className="link-wrapper">
              <i className={e.fontAwesomeClass}></i>
              <span className="link-description">{e.description}</span>
            </div>
          )}
        </NavLink>
      </li>
    );
  });

  return (
    <StyledNavbar clicked={clicked} pathname={props.pathname}>
      <div className="logo-wrapper">
        <Link to="/" className="logo">
          R
        </Link>
      </div>
      {!isMobileScreen || window.innerWidth > 600 ? (
        <NavbarList pathname={props.pathname}>{links}</NavbarList>
      ) : (
        <div className="burger-button-wrapper">
          <BurgerButton clicked={clicked} setclicked={setclicked} />
          <NavbarMobileModal clicked={clicked}>
            <NavbarList>{links}</NavbarList>
          </NavbarMobileModal>
        </div>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
