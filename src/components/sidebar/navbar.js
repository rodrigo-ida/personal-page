import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";



const StyledNavbar = styled.nav`
  width: 60px;
  height: 100vh;
  background-color: transparent;
  position: absolute;
  z-index: 5;

  .first_list {
    .first {
      font-size: 49px;
      padding: 10px 0 20px 0;
      text-align: center;
      color: black;
    }
  }

  .navbar-itens_list {
    list-style: none;
    padding: 40px 0;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


    li {

        padding: 10px 0 20px 0;
        text-align: center;
        a{

            color: black;
            font-size: 24px;
        }
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <ul className="first_list">
        <li className="first">R</li>
      </ul>
      <ul className="navbar-itens_list">
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
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
