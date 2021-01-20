import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const Ranimation = keyframes`
  from {
    text-shadow: -3px 1px #fc0853;
  }
  to {
    text-shadow: 5px 1px #fc0853;
  }
`;

const StyledNavbar = styled.nav`
  width: 60px;
  height: 100vh;
  background-color: transparent;

  .first_list {
    .first {
      font-size: 49px;
      padding: 10px 0 20px 0;
      text-align: center;
      color: #08fdd9;
      animation: ${Ranimation} 0.001s infinite alternate;
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

            color: gray;
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
          <NavLink to="/" exact activeStyle={{ color: "#08fdd9" }}>
            <i className="fas fa-home"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={{ color: "#08fdd9" }}>
            <i className="fas fa-user"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeStyle={{ color: "#08fdd9" }}>
            <i className="fas fa-glasses"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeStyle={{ color: "#08fdd9" }}>
            <i className="fas fa-eye"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={{ color: "#08fdd9" }}>
            <i className="fas fa-envelope"></i>
          </NavLink>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
