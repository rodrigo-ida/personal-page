import styled from "styled-components";

const StyledMain = styled.main`

@media (min-width: 300px){

  
  
  overflow: hidden;
  perspective: 500px;

  .motion-div {
    background-color: transparent;
    height: 100vh;
    width: 100vw;
    padding: 40px;
    padding-left: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .text-wrapper {
      display: flex;
      width: 100vw;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 12rem;
      line-height: 1;
      letter-spacing: 7px;
      margin-bottom: 1.6rem;
      text-shadow: 0 10px 30px rgba(2, 11, 22, 0.5);
      transform: translate(-380px, 167px);


      .name {
        font-size: 40px;
        margin: 10px 0 0 320px;
        width: 100vw;

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

          .last-name{

          }
        }


        .second-line-wrapper {
          overflow: hidden;
        }

        .second-line {
          letter-spacing: 0.1em;
          color: white;
          font-size: 20px;
          font-weight: bold;
          overflow: "hidden";
        }
      }
    }
  }

}


  @media (min-width: 900px){

  
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

          .last-name{

          }
        }


        .second-line-wrapper {
          overflow: hidden;
        }

        .second-line {
          letter-spacing: 0.1em;
          color: white;
          font-size: 20px;
          font-weight: bold;
          overflow: "hidden";
        }
      }
    }
  }
  }
`;

export default StyledMain;
