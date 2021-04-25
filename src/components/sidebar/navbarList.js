import styled from "styled-components";

const StyledNavbarList = styled.ul`
    list-style: none;
    padding: 40px 0;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 600px) {

    padding: 100px 10px;
    height: 100%;

    }

    .navbar-list-item {
      padding: 10px 0 20px 0;
      text-align: center;


      a {
        color: antiquewhite;
        font-size: 24px;
        text-decoration: none;


        @media screen and (min-width: 600px){

          color: black;
        text-shadow: 1px 1px 1px
          ${(props) => (props.pathname === "/" ? "black" : "white")};
        font-size: 24px;


        }


        @media screen and (min-width: 1900px){
          font-size: 3rem;

        }
      }
    }
  

  @media (min-width: 600px) {
    

    .navbar-list-item {
     
      a {
       

        .link-wrapper {
          .link-description {
            display: none;
          }
        }
        :hover {
          .link-description {
            display: inline;
          }
          .fas{
            display: none
          }

        }
      }
    }
  }
`;

const navbarList = (props) => {
  return (
    <StyledNavbarList pathname={props.pathname}>
      {props.children}
    </StyledNavbarList>
  );
};

export default navbarList;
