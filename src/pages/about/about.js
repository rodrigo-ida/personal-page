import { motion } from "framer-motion";
import styled from "styled-components";
import Sun from "../../assets/svg/sun/sun";

const StyledAbout = styled.main`
  width: 100vw;
  height: 100%;
  /* background-color: red; */

  /* .about-me_text-wrapper {
    background-color: white;
    position: absolute;
    top: 200px;
    left: 280px;
    /* height: 500px; */
  } */
`;

const motionStyle = {
  height: "100%",
  width: "100vw",
  // overflow: "hidden"
};

const About = () => {
  return (
    <motion.div style={motionStyle} exit={{ y: "-100vh" }}>
      <StyledAbout>
        {/* <div className="about-me_text-wrapper">
        <h1>Sobre Mim</h1>
      </div> */}
        <Sun />
      </StyledAbout>
    </motion.div>
  );
};

export default About;
