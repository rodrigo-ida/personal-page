import svgConfig from "../../../util/genericSvgConfig";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const glowing = keyframes`

from{opacity: 10%}
to{opacity: 20%}
`;

const SunSvg = styled(svgConfig)`
  @media (min-width: 300px) {
    /* position: absolute;
    z-index: -1;
    top: 673px;
    left: 1308px;

    transform: translate(-1090px, -60px); */

        /* position: absolute; */
    /* z-index: -1; */
    /* top: 0px; */
    /* left: 0px; */
    /* -webkit-transform: translate(-1090px,-60px);
    -ms-transform: translate(-1090px,-60px);
    transform: translate(0px,0px);
    overflow: hidden;
    width: 100%;
    height: 60%; */

    position: absolute;
    transform: translate(128px,410px) scale(0.3);

    .orbit {
      animation: ${glowing} 3s ease-in-out infinite alternate;
    }
  }
  @media (min-width: 900px) {
    position: absolute;
    z-index: -1;
    top: 673px;
    left: 1308px;
    transform: translate(0px, 0px);

  }
`;

const Sun = () => (
  <SunSvg className="sun-svg" version="1.0"
  xmlns="http://www.w3.org/2000/svg"

  preserveAspectRatio="xMidYMid meet">
    <defs>
      <filter id="sun-orbit_blur">
        <feGaussianBlur stdDeviation="20" />
      </filter>
    </defs>
    <motion.g
      className="complete-sun-group"
      exit={{ y: 400, transition: { duration: 5 } }}
    >
      <ellipse
        id="sun"
        ry="280"
        rx="280"
        cy="0"
        cx="0"
        fill="yellow"
        filter="url(#sun-orbit_blur)"
      />

      <g className="orbit-group">
        <ellipse
          id="orbit-1"
          ry="330"
          rx="330"
          cy="0"
          cx="0"
          fill="red"
          className="orbit"
          filter="url(#sun-orbit_blur)"
        />

        <ellipse
          id="orbit-2"
          ry="380"
          rx="380"
          cy="0"
          cx="0"
          fill="red"
          className="orbit"
          filter="url(#sun-orbit_blur)"
        />
        <ellipse
          id="orbit-3"
          ry="430"
          rx="430"
          cy="0"
          cx="0"
          fill="red"
          className="orbit"
          filter="url(#sun-orbit_blur)"
        />

        <ellipse
          id="orbit-4"
          ry="480"
          rx="480"
          cy="0"
          cx="0"
          fill="red"
          className="orbit"
          opacity="0.74"
          filter="url(#sun-orbit_blur)"
        />
      </g>
    </motion.g>
  </SunSvg>
);

export default Sun;
