import svgConfig from "../../../util/genericSvgConfig";
import styled, { keyframes } from "styled-components";

const glowing = keyframes`

from{opacity: 10%}
to{opacity: 20%}
`;

const SunSvg = styled(svgConfig)`

  .orbit {
    animation: ${glowing} 3s ease-in-out infinite alternate;
  }
  .complete-sun-group{
    transform: translate(-1px, -70px)
  }
`;

const Sun = () => (
  <SunSvg>
    <defs>
      <filter id="sun-orbit_blur">
        <feGaussianBlur stdDeviation="20" />
      </filter>
    </defs>
    <g className="complete-sun-group">
        <ellipse
          id="sun"
          ry="280"
          rx="280"
          cy="297.50001"
          cx="1138.5"
          fill="yellow"
          filter="url(#sun-orbit_blur)"


        />
        
      <g className="orbit-group">
        <ellipse
          id="orbit-1"
          ry="330"
          rx="330"
          cy="305.50001"
          cx="1126.5"
          fill="red"
          className="orbit"
          filter="url(#sun-orbit_blur)"
        />

        <ellipse
          id="orbit-2"
          ry="380"
          rx="380"
          cy="309.50001"
          cx="1104.5"
          fill="red"
          className="orbit"
          filter="url(#sun-orbit_blur)"
        />
        <ellipse
          id="orbit-3"
          ry="430"
          rx="430"
          cy="317.50001"
          cx="1086.5"
          fill="red"
          className="orbit"
          filter="url(#sun-orbit_blur)"
        />

        <ellipse
          id="orbit-4"
          ry="480"
          rx="480"
          cy="312.50001"
          cx="1048.5"
          fill="red"
          className="orbit"
          opacity="0.74"
          filter="url(#sun-orbit_blur)"
        />
      </g>
    </g>
  </SunSvg>
);

export default Sun;
