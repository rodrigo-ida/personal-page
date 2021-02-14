import styled from "styled-components";

const StyledNavbarList = styled.ul`
  @media (min-width: 300px) {
    list-style: none;
    padding: 40px 0;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .navbar-list-item {
      padding: 10px 0 20px 0;
      text-align: center;
      a {
        color: antiquewhite;
        font-size: 24px;
        text-decoration: none;
      }
    }
  }

  @media (min-width: 900px) {
    list-style: none;
    padding: 100px 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .navbar-list-item {
      padding: 10px 0 20px 0;
      text-align: center;
      a {
        color: black;
        text-shadow: 1px 1px 1px ${ props => props.pathname === "/" ? 'black' : 'white'};
        font-size: 24px;
      }
    }
  }
`;

const navbarList = (props) => {
  return <StyledNavbarList pathname={props.pathname}>{props.children}</StyledNavbarList>;
};

export default navbarList;
