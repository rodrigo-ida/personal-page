import svgConfig from "../../../util/genericSvgConfig";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const glowing = keyframes`

from{opacity: 10%}
to{opacity: 50%}
`;

const MoonSvg = styled(svgConfig)`
  .orbit {
    animation: ${glowing} 3s ease-in-out infinite alternate;
  }
`;

const moonVariant = {
  initial: {
    x: "100vw"
  },
  animate: {
    x: 0,
    y: 0,
    transition: {
      duration: 2
    }
  }
}

const Moon = () => (
    <MoonSvg>
      <defs>
        <filter id="moon-orbit_blur">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>
      <motion.g id="moon_group" 
        initial="initial"
        animate="animate"
        variants={moonVariant}
        >
        <ellipse
          id="orbit-1"
          ry="330"
          rx="330"
          cy="305.50001"
          cx="1126.5"
          fill="white"
          className="orbit"
          // filter="url(#moon-orbit_blur)"
        />

        <ellipse
          id="orbit-2"
          ry="380"
          rx="380"
          cy="309.50001"
          cx="1104.5"
          fill="white"
          className="orbit"
          // filter="url(#moon-orbit_blur)"
        />
        <ellipse
          id="orbit-3"
          ry="430"
          rx="430"
          cy="317.50001"
          cx="1086.5"
          fill="white"
          className="orbit"
          // filter="url(#moon-orbit_blur)"
        />

        <ellipse
          id="orbit-4"
          ry="480"
          rx="480"
          cy="312.50001"
          cx="1048.5"
          fill="url(#svg_6)"
          className="orbit"
          opacity="0.74"
          // filter="url(#moon-orbit_blur)"
        />
        <ellipse
          id="moon"
          ry="280"
          rx="280"
          cy="297.50001"
          cx="1138.5"
          fill="#fff"
        />
        <ellipse
          id="moon-cratery"
          ry="26.5"
          rx="25.5"
          cy="165.5"
          cx="1167.5"
          fill="#ededed"
        />
        <ellipse
          id="moon-cratery1"
          ry="20.5"
          rx="20.5"
          cy="249.5"
          cx="1295.5"
          fill="#ededed"
        />
        <ellipse
          id="moon-cratery3"
          ry="17"
          rx="15"
          cy="412"
          cx="1226"
          fill="#ededed"
        />
        <ellipse
          id="moon-cratery4"
          ry="49"
          rx="50"
          cy="256"
          cx="1078"
          fill="#ededed"
        />
      </motion.g>
    </MoonSvg>
);


export default Moon;
