import styled from "styled-components";

const Main = styled.main`
    overflow-x: hidden;
    height: auto;


    .motion-div {
      height: 100vh;
      width: 100vw;
      display: flex;

      flex-direction: column;
      
    }

    .contact-wrapper {
      height: auto;
      padding-top: 60px;

      .title {
        color: rgba(255, 255, 255, 0.2);
        font-size: 350%;
        text-align: center;
        position: relative;
        font-family: "PT Sans", sans-serif;
      }

      .form-wrapper {
        padding: 50px 30px 0 30px;
        height: 85%;


        .contact-form {
          width: 100%;
          height: 80%;
          display: flex;
          flex-direction: column;


          .name-wrapper,
          .email-wrapper,
          .subject-wrapper,
          .message-wrapper {
            color: white;
            font-size: 20px;
            width: 100%;
            padding-bottom: 10px;

            .name-label {
              width: 100%;
              display: block;
              padding-bottom: 5px;
            }
          }

          input {
            padding: 10px;

            width: 100%;
            margin-bottom: 10px;
          }

          .message-area {

            margin-bottom: 10px;
            width: 100%;
            height: 85px;
          }

          .submit {
            background: transparent;
            border: brown 2px solid;
            width: 90px;
            margin-left: auto;

            color: aliceblue;
            margin-top: 15px;
          }
        }
      }
    }
  
  @media (min-width: 900px) {
    height: 100%;

    .motion-div {
      background-color: transparent;
      height: 100%;
      .tree-wrapper {
        position: absolute;
        width: 100%;
        transform: translate(0px, -6px);
      }
    }

    .contact-wrapper {

      .form-wrapper {
        padding: 0;
        height: 60%;
        margin-top: 0px;

        .contact-form {
          width: 20rem;
          height: 90%;
          display: flex;
          margin: 50px auto;

          .name-wrapper,
          .email-wrapper,
          .subject-wrapper,
          .message-wrapper {
            color: white;
            font-size: 20px;
            width: 100%;
            padding-bottom: 10px;

            .name-label {
              width: 100%;
              display: block;
              padding-bottom: 5px;
            }
          }

          .message-area {

            height: 6rem;
          }

          .submit {
            
            margin-top: 0px;
          }
        }
      }
    }
  }
`;

export default Main;
