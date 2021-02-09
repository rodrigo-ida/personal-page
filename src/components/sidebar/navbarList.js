import styled from "styled-components";

const styledNavbarList = styled.ul`
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
    <styledNavbarList>
      {props.children}
    </styledNavbarList>
  );
};

export default navbarList;
