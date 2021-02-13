import svgConfig from "../../../util/genericSvgConfig";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const glowing = keyframes`

from{opacity: 10%}
to{opacity: 50%}
`;

const MoonSvg = styled(svgConfig)`
  @media (min-width: 300px) {
    position: absolute;
    .orbit {
      animation: ${glowing} 3s ease-in-out infinite alternate;
    }
    overflow: visible;
    .complete-moon-group {
      /* transform: translateX(-316px) translateY(-127px) translateZ(0px) scale(0.3); */
      transform: translateX(-304px) translateY(-66px) scale(0.3) translateZ(0px);
      transform-origin: 0 0;
      /* transform-origin: 1048.5px 312.5px; */
    }
  }
  @media (min-width: 900px) {
    .complete-moon-group {
      transform: translate(-1400px, -700px);
    }
  }
`;

const MoonVariants = {
  initial: { x: -1461, y: -728 },
  animate: { x: -1150, y: -310, transition: { duration: 2 } },
  mobileInitial: { x: -2461, y: -728, scale: 0.3 },
  mobileAnimate: { x: -1043, y: -268, transition: { duration: 2 } },
};

const Moon = () => (
  <MoonSvg>
    <defs>
      <filter id="moon-orbit_blur">
        <feGaussianBlur stdDeviation="20" />
      </filter>
    </defs>
    <motion.g
      initial={`${window.outerWidth > 899 ? "initial" : "mobileInitial"}`}
      animate={`${window.outerWidth > 899 ? "animate" : "mobileAnimate"}`}
      exit="exit"
      variants={MoonVariants}
      className="complete-moon-group"
    >
      <g className="moon-group">
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
      </g>
      <g className="orbit-group">
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
      </g>
    </motion.g>
  </MoonSvg>
);

export default Moon;
