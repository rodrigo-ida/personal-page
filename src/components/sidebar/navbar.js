import React from "react";
import { NavLink } from "react-router-dom";
import StyledNavbar from "./styledNavbar";
import NavbarList from "./navbarList";

import BurgerButton from "./burgerButton/BurgerBtn";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="first_list">
        <p className="first">R</p>
      </div>
      {window.outerWidth > 600 ? (
        <NavbarList>
          <li>
            <NavLink to="/" exact activeStyle={{ color: "red" }}>
              <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeStyle={{ color: "red" }}>
              <i className="fas fa-eye"></i>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" activeStyle={{ color: "red" }}>
              <i className="fas fa-user"></i>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" activeStyle={{ color: "red" }}>
              <i className="fas fa-envelope"></i>
            </NavLink>
          </li>
        </NavbarList>
      ) : (
        <BurgerButton />
      )}
    </StyledNavbar>
  );
};

export default Navbar;
