import svgConfig from "../../../util/genericSvgConfig";
import styled, { keyframes } from "styled-components";

const fallingStarAnimation = keyframes`

from{stroke-dashoffset: 0px;}
to{  stroke-dashoffset: -820px;}


`;


const FallingStarsSvg = styled(svgConfig)`


#falling-stars_group {
    #falling-star {
      animation: ${fallingStarAnimation} 1s 2s ease;
      stroke-dasharray: 112px 1753px;
      stroke-dashoffset:130px;
    }
    #falling-star2 {
      animation: ${fallingStarAnimation} 1s 4s ease;
      stroke-dasharray: 112px 1753px;
      stroke-dashoffset:130px;
    }
    #falling-star3 {
      animation: ${fallingStarAnimation} 1s 5s ease;
      stroke-dasharray: 112px 1753px;
      stroke-dashoffset:130px;
    }
    #falling-star4 {
      animation: ${fallingStarAnimation} 1s 7s ease;
      stroke-dasharray: 112px 1753px;
      stroke-dashoffset:130px;
    }
  }


`

const FallingStars = ()=>(
<FallingStarsSvg >
      
    <g id="falling-stars_group">
      <path
        id="falling-star4"
        d="m39,377c394,-284 865,-253 865,-253c0,0 37,2 37,2"
        strokeWidth="1"
        stroke="white"
        fill="none"
      />

      <path
        id="falling-star2"
        d="m27.1764,325.11029c382.4827,-170.10414 706.58645,-89.58147 705.57992,-90.58801c1.00653,1.00654 24.1568,3.0196 50.32667,20.13067"
        strokeWidth="null"
        stroke="white"
        fill="none"
      />
      <path
        id="falling-star3"
        d="m19.12413,214.39162c282.83589,-139.90815 634.11605,-184.19562 651.22712,-183.18908c17.11107,1.00653 78.50961,3.0196 77.50307,2.01306"
        stroke="white"
        fill="none"
      />
      <path
        id="falling-star"
        d="m22.14373,277.80322c441.86817,-242.57455 761.94579,-255.65949 761.94579,-255.65949"
        opacity="0.5"
        strokeOpacity="null"
        stroke="white"
        fill="none"
      />
    </g>
</FallingStarsSvg>
)

export default FallingStars