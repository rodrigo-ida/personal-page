import styled, { keyframes } from "styled-components";

const ctaBtnAnimation = keyframes`

to{ opacity: 1}
`;

const StyledMain = styled.main`
  height: 100%;
  overflow: hidden;
  perspective: 500px;

  .motion-div {
    background-color: transparent;
    height: 100%;
    width: 100vw;
    /* padding: 40px;
      padding-left: 80px; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    justify-content: center;
    align-items: center;

    .text-wrapper {
      width: 100%;

      font-size: 12rem;
      line-height: 1;

      letter-spacing: 7px;
      text-shadow: 0 10px 30px rgb(2 11 22 / 50%);
      /* transform: translate(0px, 0px); */

      /* margin: 62% -12%; */
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .name {
        font-size: 40px;
        /* width: 100vw; */

        font-weight: bold;
        text-shadow: 2px 2px 1px black;
        color: orange;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;

        @media screen and (min-width: 1900px) {
          font-size: 6rem;
        }

        .first-line {
          display: flex;
          flex-direction: column;
          .letter-r {
            color: black;
            text-shadow: -1px 1px black;
          }
        }

        .second-line-wrapper {
          overflow: hidden;
        }

        .second-line {
          letter-spacing: 0.1em;
          color: black;
          font-size: 20px;
          font-weight: bold;
          overflow: "hidden";
          text-shadow: none;

          @media screen and (min-width: 1900px) {
            font-size: 2.4rem;
          }
        }
        .cta-btn {
          opacity: 0;
          /* width: 9.5rem; */
          padding: 6px 6px 6px 7px;
          width: fit-content;

          letter-spacing: 1px;
          font-size: 1rem;
          text-decoration: none;
          /* margin: 1rem 21.6rem; */
          background: rgb(30, 54, 63);
          color: white;
          border: 1px solid white;
          border-radius: 5px;
          animation: 1s linear 5s 1 normal forwards running ${ctaBtnAnimation};

          @media screen and (min-width: 1900px) {
            font-size: 2rem;
            padding: 10px;
          }
        }
      }
    }
  }

  /* @media (min-width: 900px) {
    overflow: hidden;
    perspective: 500px;

    .motion-div {
      background-color: transparent;
      height: 100%;
      width: 100vw;
      padding: 40px;
      padding-left: 80px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .text-wrapper {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 100px;
        font-size: 12rem;
        line-height: 1;
        letter-spacing: 0.1em;
        margin: 0;
        margin-bottom: 1.6rem;
        text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);
        transform: translate(0px, 0px);

        .name {
          font-size: 60px;
          margin: 10px 0 0 320px;

          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          font-weight: bold;
          text-shadow: 2px 2px 1px black;
          color: orange;

          .first-line {
            display: flex;
            flex-direction: column;
            .letter-r {
              color: black;
              text-shadow: -1px 1px black;
            }
          }

          .second-line-wrapper {
            overflow: hidden;
          }

          .second-line {
            letter-spacing: 0.1em;
            color: rgb(200,190,20);
            font-size: 20px;
            font-weight: bold;
            overflow: "hidden";
          }
        }
      }
    }
  } */
`;

export default StyledMain;
