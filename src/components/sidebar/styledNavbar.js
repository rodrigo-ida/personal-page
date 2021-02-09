import styled from "styled-components";

const StyledNavbar = styled.nav`
  @media (min-width: 300px) {
    width: 60px;
    height: 100vh;
    background-color: transparent;
    position: absolute;
    z-index: 555;

    .logo-wrapper {
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
        a {
          color: black;
          font-size: 24px;
        }
      }
    }
  }

  @media (min-width: 900px) {
    width: 60px;
    height: 100vh;
    background-color: transparent;
    position: absolute;
    z-index: 555;

    .logo-wrapper {
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
        a {
          color: black;
          font-size: 24px;
        }
      }
    }
  }


`;

export default StyledNavbar;
