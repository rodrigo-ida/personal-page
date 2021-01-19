import svgConfig from "../../util/genericSvgConfig";
import styled, { keyframes } from "styled-components";

const glowing = keyframes`

from{opacity: 0}
to{opacity: 50%}
`;

const cloudAnimation1 = keyframes`
from{transform: translateX(0px)}
to{transform: translateX(300px)}


`;

const cloudAnimation2 = keyframes`
from{transform: translateX(0px)}
to{transform: translateX(-300px)}
`;

const cloudAnimation3 = keyframes`
from{transform: translateX(0px)}
to{transform: translateX(600px)}
`;

const fallingStarAnimation = keyframes`

/* from{transform: translate3d(0px, 0px, 0px)}
to{transform: translate3d(700px,100px,200px)} */
from{stroke-dashoffset: 0px;}
to{  stroke-dashoffset: -820px;}


`

const Primeiro = styled(svgConfig)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;

  .orbit {
    animation: ${glowing} 3s ease-in-out infinite alternate;
  }

  #nuvem1 {
    ellipse {
      animation: ${cloudAnimation1} 120s ease alternate infinite;
    }
  }

  #nuvem2 {
    ellipse {
      animation: ${cloudAnimation2} 120s ease alternate infinite;
    }
  }
  #nuvem3 {
    ellipse {
      animation: ${cloudAnimation3} 120s ease alternate infinite;
    }
  }

  #falling-star{
    animation: ${fallingStarAnimation} 1s 3s ease; 
    stroke-dasharray: 112px 1753px;
    stroke-dashoffset: 73px;

  }
  #falling-star2{

    animation: ${fallingStarAnimation} 1s 2s ease; 
    stroke-dasharray: 112px 1753px;
    stroke-dashoffset: 93px;

  }
  #falling-star3{

    animation: ${fallingStarAnimation} 1s 1.3s ease; 
    stroke-dasharray: 112px 1753px;
    stroke-dashoffset: 93px;

  }
`;

const Segundo = () => (
  <Primeiro>
    <defs>
      <filter id="svg_40_blur">
        <feGaussianBlur stdDeviation="1.6" />
      </filter>
      <filter height="200%" width="200%" y="-50%" x="-50%" id="svg_49_blur">
        <feGaussianBlur stdDeviation="2.7" />
      </filter>
      <filter id="svg_42_blur">
        <feGaussianBlur stdDeviation="1.7" />
      </filter>
      <radialGradient r="0.5" cy="0.5" cx="0.5" spreadMethod="pad" id="svg_6">
        <stop offset="0.125" stopColor="#e1cfbd" />
        <stop offset="1" stopColor="#1e3042" />
      </radialGradient>
      <radialGradient
        id="svg_9"
        spreadMethod="pad"
        r="1.16247"
        cx="0.5"
        cy="0.5"
      >
        <stop stopColor="#eadede" offset="0.4375" />
        <stop stopColor="#152121" offset="0.81641" />
      </radialGradient>
      <filter height="200%" width="200%" y="-50%" x="-50%" id="falling-star1">
   <feGaussianBlur stdDeviation="0" in="SourceGraphic"/>
  </filter>
    </defs>
    <g>
      <title>background</title>
      <rect
        fill="#142333"
        id="canvas_background"
        height="702"
        width="1362"
        y="-1"
        x="-1"
      />
    </g>
    <g>
      <title>Layer 1</title>
      <g id="svg_1">
        <ellipse
          id="orbit-3"
          ry="430"
          rx="430"
          cy="317.50001"
          cx="1086.5"
          fill="white"
          className="orbit"
        />
        <ellipse
          id="orbit-2"
          ry="380"
          rx="380"
          cy="309.50001"
          cx="1104.5"
          fill="white"
          className="orbit"
        />
        <ellipse
          id="orbit-1"
          ry="330"
          rx="330"
          cy="305.50001"
          cx="1126.5"
          fill="white"
          className="orbit"
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
      </g>
{/* ---------------------------------------------------------------------------------- */}
<path id="falling-star3" d="m19.12413,214.39162c282.83589,-139.90815 634.11605,-184.19562 651.22712,-183.18908c17.11107,1.00653 78.50961,3.0196 77.50307,2.01306"  stroke="white" fill="none"/>
<path id="falling-star2" d="m27.1764,325.11029c382.4827,-170.10414 706.58645,-89.58147 705.57992,-90.58801c1.00653,1.00654 24.1568,3.0196 50.32667,20.13067"  strokeWidth="null" stroke="white" fill="none"/>
<g id="falling-star_group">
   <path filter="url(#falling-star1)" id="falling-star" d="m22.14373,277.80322c441.86817,-242.57455 761.94579,-255.65949 761.94579,-255.65949" opacity="0.5" strokeOpacity="null" stroke="white" fill="none"/>
  </g>
      <ellipse
        ry="2"
        rx="1.5"
        id="svg_33"
        cy="76"
        cx="178.5"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="0.5"
        rx="0.5"
        id="svg_39"
        cy="309.5"
        cx="401.5"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        filter="url(#svg_40_blur)"
        ry="1"
        rx="1"
        id="svg_40"
        cy="274"
        cx="265"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="4.5"
        rx="4.5"
        id="svg_41"
        cy="259.5"
        cx="448.5"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        filter="url(#svg_42_blur)"
        ry="2.5"
        rx="2.5"
        id="svg_42"
        cy="119.5"
        cx="511.5"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="2"
        rx="2.5"
        id="svg_43"
        cy="138"
        cx="366.5"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />

      <ellipse
        ry="1"
        rx="2"
        id="svg_47"
        cy="130"
        cx="43"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="1"
        rx="1"
        id="svg_48"
        cy="185"
        cx="189"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        filter="url(#svg_49_blur)"
        ry="3.5"
        rx="3"
        id="svg_49"
        cy="36.5"
        cx="363"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="0.5"
        id="svg_51"
        cy="445.5"
        cx="180"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="0.5"
        id="svg_52"
        cy="418.5"
        cx="162"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="0.5"
        rx="0.5"
        id="svg_53"
        cy="440.5"
        cx="113.5"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        rx="0.5"
        id="svg_54"
        cy="465"
        cx="263.5"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        ry="0.5"
        rx="1"
        id="svg_58"
        cy="382.5"
        cx="421"
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
      />
      <ellipse
        rx="2.5"
        id="svg_86"
        cy="91"
        cx="714.5"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#9b8b8b"
      />
      <g id="nuvem1">
        <ellipse
          ry="25.5"
          rx="34.5"
          id="svg_50"
          cy="64.5"
          cx="463.5"
          strokeOpacity="null"
          strokeWidth="0"
          stroke="#000"
          fill="url(#svg_9)"
        />
        <ellipse
          stroke="url(#gradbox_stroke)"
          ry="39.5"
          rx="42.5"
          id="svg_55"
          cy="66.5"
          cx="504.5"
          strokeWidth="0"
          fill="url(#svg_9)"
        />
        <ellipse
          stroke="#000"
          ry="34.5"
          rx="34.5"
          id="svg_57"
          cy="69.5"
          cx="546.5"
          strokeOpacity="null"
          strokeWidth="0"
          fill="url(#svg_9)"
        />
      </g>
      <g id="nuvem2">
        <ellipse
          rx="2.5"
          id="svg_56"
          cy="465"
          cx="374.5"
          fillOpacity="null"
          strokeOpacity="null"
          strokeWidth="0"
          stroke="#000"
          fill="#ffffff"
        />
        <ellipse
          stroke="#000"
          ry="44.5"
          rx="54"
          id="svg_71"
          cy="452.5"
          cx="418"
          strokeOpacity="null"
          strokeWidth="0"
          fill="#9b8b8b"
        />
        <ellipse
          stroke="url(#gradbox_stroke)"
          ry="57.5"
          rx="66"
          id="svg_72"
          cy="451.5"
          cx="474"
          strokeWidth="0"
          fill="#9b8b8b"
        />
        <ellipse
          stroke="#000"
          ry="43"
          rx="53"
          id="svg_73"
          cy="448"
          cx="537"
          strokeOpacity="null"
          strokeWidth="0"
          fill="#9b8b8b"
        />
      </g>
      <g id="nuvem3">
        <ellipse
          stroke="#000"
          ry="44"
          rx="64.5"
          id="svg_87"
          cy="98"
          cx="747.5"
          strokeOpacity="null"
          strokeWidth="0"
          fill="#9b8b8b"
        />
        <ellipse
          stroke="url(#gradbox_stroke)"
          ry="73.5"
          rx="66"
          id="svg_88"
          cy="94.5"
          cx="815"
          strokeWidth="0"
          fill="#9b8b8b"
        />
        <ellipse
          stroke="#000"
          ry="60.5"
          rx="75.5"
          id="svg_89"
          cy="92.5"
          cx="900.5"
          strokeOpacity="null"
          strokeWidth="0"
          fill="#9b8b8b"
        />
      </g>
    </g>
  </Primeiro>
);

export default Segundo;
