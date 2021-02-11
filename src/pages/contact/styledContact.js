import styled from "styled-components";

const Main = styled.main`
  @media (min-width: 300px) {
    overflow-x: hidden;
    height: auto;

    .motion-div {
      height: 100vh;
      width: 100vw;
      display: flex;

      flex-direction: column;
    }

    .title {
      color: rgba(255, 255, 255, 0.2);
      font-size: 350%;
      text-align: center;
      position: relative;
      font-family: "PT Sans", sans-serif;
    }

    .form-wrapper {
      padding: 50px 30px;
      height: 80vh;
      margin-top: 50px;


      .contact-form {
        width: 100%;
        height: 80%;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1 fr;
        /* grid-gap: 5px 10px; */

        input {
          height: 50px;
          width: 100%;
          margin-bottom: 10px;
        }

        .name-input {
          /* grid-column: 1 / 3; */
          grid-row: 1 / 2;
        }
        .email-input {
          /* grid-column: 1 / 3; */
          grid-row: 2 / 3;
        }
        .subject-input {
          /* grid-column: 1 / 3; */
          grid-row: 3 / 4;
        }

        .message-area {
          /* grid-column: 1/3; */
          grid-row: 4/6;
          margin-bottom: 10px;
        }

        .submit {
          background: transparent;
          border: brown 2px solid;
          width: 90px;
          /* grid-column: 2/3; */
          margin-left: auto;
          grid-row: 6/7;
          color: aliceblue;

        }
      }
    }
  }
  @media (min-width: 900px) {
    overflow-x: hidden;
    height: auto;

    .motion-div {
      background-color: transparent;
      height: auto;
      width: 100vw;
      padding: 40px;
      padding-left: 80px;
      display: flex;
      flex-direction: column;
    }

    .title {
      color: rgba(255, 255, 255, 0.2);
      font-size: 350%;
      text-align: center;
      position: relative;
      font-family: "PT Sans", sans-serif;
    }

    .form-wrapper {
      padding: 0;
      height: auto;
      margin-top: 0px;


      .contact-form {
        width: 500px;
        height: 300px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 5px 10px;
        margin: 70px auto;

        input {
          height: 50px;
          width: 100%;
          margin-bottom: 10px;
        }

        .name-input {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        .email-input {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }
        .subject-input {
          grid-column: 1 / 3;
          grid-row: 2 / 3;
        }

        .message-area {
          grid-column: 1/3;
          grid-row: 3/5;
          height: auto;

        }

        .submit {
            background: transparent;
    border: brown 2px solid;
    width: 90px;
    margin-left: auto;
    grid-column: 2/2;
    grid-row: 5/6;
    color: aliceblue;

        }
      }
    }
  }
`;

export default Main;
