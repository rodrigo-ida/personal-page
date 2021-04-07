import styled from "styled-components";

const StyledNavbar = styled.nav`
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
        color: ${props => props.pathname === "/about" ? 'white' : 'black'};
        text-decoration: none;
        
      }
    }

    .burger-button-wrapper{
      margin-left: auto;
    width: 50px;

    .burgerbtn-lines{
      background-color: ${props => props.pathname !== "/" ? 'white' : 'black'};
    }
    }

 
  

  @media (min-width: 600px) {
    width: 100px;
    height: 100vh;
    background-color: transparent;
    position: fixed;
    z-index: 555;
    display: block;
    padding: 0;

    .logo-wrapper {
      padding: 20px;
      .logo {
        font-size: 49px;
        padding: 10px 0 20px 0;
        text-align: center;
        color: black;
      }
    }

    .burger-button-wrapper{
      display: none;
    }

    
  }


`;

export default StyledNavbar;
