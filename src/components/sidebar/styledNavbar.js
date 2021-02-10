import styled from "styled-components";

const StyledNavbar = styled.nav`
  @media (min-width: 300px) {
    width: 100vw;
    height: ${props => props.clicked ? '100vh' : '10vh'};
    padding: 15px;
    background-color: transparent;
    position: absolute;
    z-index: 555;
    overflow: hidden;

    

    .logo-wrapper {
      position: absolute;

      .logo {
        font-size: 30px;
        color: black;
        
      }
    }

    .burger-button-wrapper{
      margin-left: auto;
    width: 50px;
    }

 
  }

  @media (min-width: 900px) {
    width: 60px;
    height: 100vh;
    background-color: transparent;
    position: absolute;
    z-index: 555;
    display: block;
    padding: 0;

    .logo-wrapper {
      padding: 0px;
      .logo {
        font-size: 49px;
        padding: 10px 0 20px 0;
        text-align: center;
        color: black;
      }
    }

    
  }


`;

export default StyledNavbar;
