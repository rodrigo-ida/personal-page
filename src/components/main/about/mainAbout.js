import styled from "styled-components";
import me from "../../../assets/img/about-me/about-me.jfif";




const StyledAbout = styled.main`
  width: 100vw;
  height: auto;
  position: relative;
  padding: 1px;
  z-index: -1;
  overflow-x: hidden;

  .content_wrapper {
    display: flex;
    margin-top: 120px;
    flex-wrap: wrap;

    .text {
      width: 690px;
      height: 500px;
      margin-left: 100px;
      z-index: 1;
      perspective: 500px;

      .title {
        font-size: 120px;
        color: white;
        text-shadow: 1px 1px 1px rgba(255, 20, 20, 0.3);
        transform: translateZ(300px) rotateZ(20deg);
      }

      .lines_wrapper {
        padding: 30px 0;

        .line1 {
          display: block;
          width: 88px;
          height: 4px;
          border-radius: 5px;
          background: #305b6b;
          margin-bottom: 10px;
        }
        .line2 {
          display: block;
          width: 88px;
          height: 4px;
          border-radius: 5px;
          background: #305b6b;
          margin-left: 54px;
        }
      }

      .subtitle {
        color: #fff;
        font-size: 40px;
        line-height: 1.5;
        -webkit-letter-spacing: 0.1em;
        -moz-letter-spacing: 0.1em;
        -ms-letter-spacing: 0.1em;
        letter-spacing: 0.1em;
        text-shadow: 1px 1px 20px #17314a;
      }

      .show-me-more_button {
        border-radius: 10px;
        width: 130px;
        margin-top: 10px;
        height: 35px;
        color: white;
        background-color: #ff4d5a;
      }
    }

    .img_wrapper {
      width: 720px;
      height: 460px;
      margin-left: -275px;
      overflow: hidden;
      position: relative;
      border-radius: 50px;
      perspective: 1000px;

      .me {
        background-position-x: center;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        background-color: rgb(206, 220, 223);
        background-size: contain;
        background-image: url(${me});
      }

      .img_transition_background {
        background-color: rgb(206, 220, 223);
        width: 100%;
        height: 100%;

        .img_transition {
          width: 100px;
          height: 100%;
          background-color: #ff4d5a;
        }
      }
    }

    .skills-wrapper {
      text-align: center;
      width: 100vw;
      padding: 50px 90px;

      .skills-title {
        color: white;
        font-size: 30px;
        padding: 20px;
      }

      .skills-body {

        .textWrapper {
          width: 100%;

          
          

          .skills-text {
            /* color: white;
            font-size: 20px;
            padding: 20px;
            text-align: justify;
            width: 60%;
            font-family: "PT Sans", sans-serif; */

            color: white;
    font-size: 20px;
    padding: 20px;
    text-align: justify;
    width: 44%;
    font-family: "PT Sans",sans-serif;
    line-height: 40px;
            

            a {
              color: red;
              text-decoration: none;
            }
          }

          .second-p{
            /* transform: translate(524px, 110px); */
            margin: 110px 0 0 524px;

            p{
              width: 70%;
            }

          }
        }
        .skills-list-wrapper {
          width: 60%;
            margin: 0 auto;
          ul {
            display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 20px 49px;


            li {
              width: auto;
              background-color: #242324;
              color: white;
              display: flex;
              align-items: center;
              padding: 5px;
              box-shadow: 1px 1px 3px cornsilk;
              margin: 5px;
            }
          }
        }
      }
    }
  }
`;

export default StyledAbout;