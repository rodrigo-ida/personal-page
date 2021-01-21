import svgConfig from "../../../util/genericSvgConfig";
import {motion} from 'framer-motion'

import styled from "styled-components";
import Moon from "./moon";
import FallingStars from "./falling-stars";
import Clouds from "./clouds";
import Stars from "./stars";

const BackgroundConfig = styled(svgConfig)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  .motion{
    background-color: red;
    width: 500px;
    height: 500px;
  }
`;

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
        
       <Moon />

      <FallingStars />
      <Stars />
      <Clouds /> 
    </BackgroundConfig>
);

export default NightSky;
