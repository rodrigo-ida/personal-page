import styled, { keyframes } from "styled-components";
import config from "../../../util/genericSvgConfig";

const cloudAnimation1 = keyframes`
from{transform: translateX(0px)}
to{transform: translateX(300px)}


`;

const BigCloudSVg = styled(config)`
  width: 100%;
  height: 100%;
  #svg_31 {
    animation: ${cloudAnimation1} 60s alternate infinite;
  }
`;

const BigCloud = () => (
  <BigCloudSVg>
    <defs>
      <radialGradient spreadMethod="pad" id="svg_16">
        <stop offset="0" stopColor="#9b8b8b" />
        <stop offset="1" stopOpacity="0.99609" stopColor="#4f5454" />
      </radialGradient>
      <radialGradient
        r="1"
        cy="0.49609"
        cx="0.37109"
        spreadMethod="pad"
        id="svg_17"
      >
        <stop offset="0" stopColor="#9b8b8b" />
        <stop offset="0.99219" stopOpacity="0.99609" stopColor="#505454" />
      </radialGradient>
      <radialGradient
        cy="0.47656"
        cx="0.67578"
        r="0.64935"
        spreadMethod="pad"
        id="svg_18"
      >
        <stop offset="0" stopColor="#9b8b8b" />
        <stop offset="1" stopOpacity="0.99609" stopColor="#434449" />
      </radialGradient>
      <radialGradient
        cy="0.42578"
        cx="0.47656"
        r="0.91601"
        spreadMethod="pad"
        id="svg_27"
      >
        <stop offset="0" stopColor="#9b8b8b" />
        <stop offset="1" stopOpacity="0.99609" stopColor="#434449" />
      </radialGradient>
      <radialGradient
        cy="0.57031"
        cx="0.28906"
        r="0.64935"
        spreadMethod="pad"
        id="svg_28"
      >
        <stop offset="0" stopColor="#9b8b8b" />
        <stop offset="1" stopOpacity="0.99609" stopColor="#434449" />
      </radialGradient>
      <filter height="200%" width="200%" y="-50%" x="-50%" id="svg_25_blur">
        <feGaussianBlur stdDeviation="10" in="SourceGraphic" />
      </filter>
    </defs>
    <g>
      <title>Layer 1</title>
      <g id="svg_31">
        <ellipse
          stroke="#000"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_18)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="756.66962"
          cy="363.95458"
          id="svg_71"
          rx="152.28084"
          ry="42.0376"
        />
        <ellipse
          stroke="url(#gradbox_stroke)"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_16)"
          strokeWidth="0"
          cx="921.49125"
          cy="365.48324"
          id="svg_72"
          rx="177.36236"
          ry="52.73808"
        />
        <ellipse
          stroke="#000"
          filter="url(#svg_25_blur)"
          opacity="0.56"
          fill="url(#svg_17)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="1101.54097"
          cy="365.94185"
          id="svg_73"
          rx="142.42735"
          ry="39.43891"
        />
        <ellipse
          stroke="#000"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_18)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="831.91462"
          cy="324.82121"
          id="svg_19"
          rx="152.28084"
          ry="42.0376"
        />
        <ellipse
          stroke="#000"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_28)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="1064.81576"
          cy="315.03787"
          id="svg_20"
          rx="152.28084"
          ry="42.0376"
        />
        <ellipse
          stroke="#000"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_18)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="681.42463"
          cy="344.3879"
          id="svg_21"
          rx="152.28084"
          ry="42.0376"
        />
        <ellipse
          stroke="#000"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_18)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="527.35155"
          cy="318.70663"
          id="svg_22"
          rx="152.28084"
          ry="42.0376"
        />
        <ellipse
          stroke="#000"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_18)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="541.68393"
          cy="366.40042"
          id="svg_23"
          rx="152.28084"
          ry="42.0376"
        />
        <ellipse
          stroke="#000"
          opacity="0.56"
          filter="url(#svg_25_blur)"
          fill="url(#svg_18)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="550.64173"
          cy="363.95458"
          id="svg_24"
          rx="358.30879"
          ry="42.0376"
        />
        <ellipse
          filter="url(#svg_25_blur)"
          stroke="#000"
          opacity="0.56"
          fill="url(#svg_27)"
          strokeWidth="0"
          strokeOpacity="null"
          cx="989.5708"
          cy="378.62959"
          id="svg_25"
          rx="360.10033"
          ry="42.0376"
        />
      </g>
    </g>
  </BigCloudSVg>
);

export default BigCloud;
