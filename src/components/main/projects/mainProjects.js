import styled from "styled-components";

const Main = styled.main`
  @media (min-width: 300px) {
    overflow-x: hidden;
    height: auto;

    .projects-wrapper {
      background-color: transparent;
      padding-top: 1px;

      /* height: auto; */
      /* width: 100vw; */
      /* padding: 40px; */
      /* padding-left: 80px; */
      /* display: flex; */
      /* flex-wrap: wrap; */
      /* justify-content: center; */
      /* padding-top: 100px; */
    }

    .title {
      color: rgba(255, 255, 255, 0.2);
      font-size: 350%;
      text-align: center;
      position: relative;
      font-family: "PT Sans", sans-serif;

      margin-top: 77px;
      text-shadow: -1px -1px 1px black;
      color: white;
    }
  }

  @media (min-width: 900px) {
    overflow: hidden;
    height: auto;

    .projects-wrapper {
      background-color: transparent;
      height: auto;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      padding-top: 0px;
    }

    .title {
      color: rgba(255, 255, 255, 0.2);
      font-size: 350%;
      text-align: center;
      position: relative;
      font-family: "PT Sans", sans-serif;
      margin-top: 0px;
      text-shadow: 1px 1px darkseagreen;
    }
  }
`;

export default Main;
