import { motion } from "framer-motion";
import styled from "styled-components";
import me from "../../assets/img/about-me/about-me.jfif";

//#ff4d5a

const StyledAbout = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1px;
  z-index: -1;

  .content_wrapper {
    display: flex;
    margin-top: 120px;

    .text {
      width: 690px;
      height: 500px;
      margin-left: 100px;
      z-index: 1;

      h1 {
        font-size: 120px;
        color: white;
      }

      .lines_wrapper {
        padding: 30px 0;

        .line1 {
          display: block;
          width: 88px;
          height: 4px;
          border-radius: 5px;
          background: #ff4d5a;
          margin-bottom: 10px;
        }
        .line2 {
          display: block;
          width: 88px;
          height: 4px;
          border-radius: 5px;
          background: #ff4d5a;
          margin-left: 54px;
        }
      }

      p {
        color: #fff;
        font-size: 40px;
        line-height: 1.5;
        -webkit-letter-spacing: 0.1em;
        -moz-letter-spacing: 0.1em;
        -ms-letter-spacing: 0.1em;
        letter-spacing: 0.1em;
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
        background-color: rgb(206, 220, 223);
        background-size: contain;
        background-image: url(${me});
        /* transform : rotate3d(.3, .4, .4, 20deg);
        transform: translateZ(30deg) */

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
  }
`;

const motionStyle = {
  height: "100vh",
  width: "100vw",
};

const titleVariant = {
  initial: { x: "-100vw" },
  animate: { x: "0vw", transition: { duration: 1} },
};
const subTitleVariant = {
  initial: { x: "-100vw" },
  animate: { x: "0vw", transition: { duration: 1, delay: .3} },
};

const imgTrasitionBackgroundVariant = {
  initial: { x: 0 },
  animate: { x: 1000, transition: { duration: 2 } },
};
const imgTrasitionVariant = {
  initial: { width: 50 },
  animate: { width: [50, 300, 100], transition: { delay: 0.3, duration: 1 } },
};

const linesVariant = {
  initial: { x: "-100vw" },
  animate1: { x: "0vw", transition: { duration: 1, delay: .3} },
  animate2: { x: "0vw", transition: { duration: 1, delay: .5} },
}


const About = () => {
  return (
    <motion.div style={motionStyle} exit={{ y: "-100vh" } }>
      <StyledAbout >
        <div className="content_wrapper" >
          <div className="text">
            <motion.h1
              initial="initial"
              animate="animate"
              variants={titleVariant}
              >Sobre Mim</motion.h1>
            <div className="lines_wrapper">
              <motion.span
              initial="initial"
              animate="animate1"
              variants={linesVariant}
               className="line1"></motion.span>
              <motion.span
              initial="initial"
              animate="animate2"
              variants={linesVariant}
               className="line2"></motion.span>
            </div>
            <motion.p
              initial="initial"
              animate="animate"
              variants={subTitleVariant}
              >Eu amo Ciência, Tecnologia</motion.p>
            <motion.p
              initial="initial"
              animate="animate"
              variants={subTitleVariant}
            >e Rock</motion.p>
            <button className="show-me-more_button">Mais</button>
          </div>

          <div className="img_wrapper" >
            <div className="me"></div>
            <motion.div
              className="img_transition_background"
              initial="initial"
              animate="animate"
              variants={imgTrasitionBackgroundVariant}
            >
              <motion.div
                className="img_transition"
                initial="initial"
                animate="animate"
                variants={imgTrasitionVariant}
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </StyledAbout>
    </motion.div>
  );
};

export default About;
