import styled, {keyframes} from "styled-components";
import svgConfig from "../../../util/genericSvgConfig";

const glowing = keyframes`

from{opacity: 10%}
to{opacity: 50%}
`;

const SunSvg = styled(svgConfig)`
  width: 100%;
  height: 100%;

  .sun{

  }
  .sun-orbit1{
    animation: ${glowing} 3s alternate infinite;

  }
  .sun-orbit2{
    animation: ${glowing} 1s alternate infinite;

  }

`;

const Sun = () => {
  return (
    <SunSvg>
      <defs>
  <filter id="svg_1_blur" x="-50%" y="-50%" width="200%" height="200%">
   <feGaussianBlur stdDeviation="3.9"/>
  </filter>
  <filter id="svg_2_blur" x="-50%" y="-50%" width="200%" height="200%">
   <feGaussianBlur stdDeviation="2.2"/>
  </filter>
 </defs>
 <g id="background_group">
  <title>background</title>
  <rect x="0" y="0" width="100vw" height="100vh" id="canvas_background" fill="#ffa851"/>
  <g id="canvasGrid" display="none">
   <rect id="svg_3" width="100%" height="100%" x="0" y="0" strokeWidth="0" fill="url(#gridpattern)"/>
  </g>
 </g>
 <g>
  <g id="svg_4">
   <ellipse fill="#ffc33e" stroke="#000" strokeWidth="0" cx="286" cy="179.5" id="svg_2" className="sun-orbit1" rx="280" ry="280" opacity="0.33" filter="url(#svg_2_blur)"/>
   <ellipse fill="#ffc33e" stroke="#000" strokeWidth="0" cx="285" cy="183.5" id="svg_1" className="sun" rx="234" ry="236.5" filter="url(#svg_1_blur)"/>
   <ellipse fill="#ffc33e" stroke="#000" strokeWidth="0" cx="286" cy="178.5" id="svg_9" className="sun-orbit2" rx="350" ry="350" opacity="0.33" filter="url(#svg_2_blur)"/>
  </g>
 </g>
    </SunSvg>
  );
};

export default Sun;
