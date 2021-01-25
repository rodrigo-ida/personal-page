import svgConfig from "../../../util/genericSvgConfig";

import styled from "styled-components";
import { motion } from "framer-motion";
import Moon from "./moon";
import FallingStars from "./falling-stars";
import BigCloud from "./big-cloud1";
import BigCloud2 from "./big-cloud2";
import Stars from "./stars";

const BackgroundConfig = styled(svgConfig)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  /* perspective: 200px; */

`;

const moonVariant = {
  initial: {
    x: "100vw",
    opacity: 1,
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      duration: 3,
    },
  },

};
const clouds1Variant = {
  initial: { x: "-100vw", opacity: 1 },
  animate: { x: 0, transition: { duration: 3, delay: 2 } },

};
const clouds2Variant = {
  initial: { x: "100vw", opacity: 1 },
  animate: { x: 0, transition: { duration: 3, delay: 2 } },

};

const NightSky = () => (
  <BackgroundConfig >

    <motion.g
      id="moon_group"
      initial="initial"
      animate="animate"
      variants={moonVariant}
    >
      <Moon />
    </motion.g>
    <FallingStars />
    <Stars />
    {/* <motion.g
      initial="initial"
      animate="animate"
      variants={clouds1Variant}
    >
      <BigCloud />
    </motion.g>
    <motion.g
      initial="initial"
      animate="animate"
      variants={clouds2Variant}
    >
      <BigCloud2 /> 
    </motion.g> */}

  </BackgroundConfig>
);

export default NightSky;
