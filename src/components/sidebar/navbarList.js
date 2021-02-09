import styled from "styled-components";
import {NavLink} from 'react-router-dom'

const StyledNavbarList = styled.ul`
    list-style: none;
    padding: 40px 0;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    li {
      padding: 10px 0 20px 0;
      text-align: center;
      a {
        color: black;
        font-size: 24px;
      }
    }

    
  
`;

const navbarList = (props) => {
  return (
    <StyledNavbarList>
        {props.children}
    </StyledNavbarList>
  );
};

export default navbarList;
