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
`;

const moonVariant = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      duration: 3,
    },
  },
};

const NightSky = () => (
  <BackgroundConfig>
    <g id="background_group">
      <rect
        fill="#142333"
        id="canvas_background"
        height="702"
        width="1362"
        y="0"
        x="0"
      />
    </g>
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
    <motion.g
      initial={{x: "-100vw"}}
      animate={{x: 0}}
      transition={{duration: 3, delay: 2}}
    >
    <BigCloud />
    </motion.g>
    <motion.g
      initial={{x: "100vw"}}
      animate={{x: 0}}
      transition={{duration: 3, delay: 2}}
    >
    <BigCloud2 />
    </motion.g>
  </BackgroundConfig>
);

export default NightSky;
