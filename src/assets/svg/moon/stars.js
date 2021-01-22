import svgConfig from "../../../util/genericSvgConfig";
import styled, { keyframes } from "styled-components";

const starAnimation = keyframes`

from{opacity: 1;}
to{  opacity: 0;}

`;

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const allStars = [];

const starsGenerator = (quantity) => {
  const star = (i)=>(
    <ellipse 
      key={i+'star'}
      ry={getRandomInt(1, 2)}
      rx={"1."+getRandomInt(1, 9)}
      id={"star" + getRandomInt(1, 5)}
      cy={getRandomInt(10, 600)}
      cx={getRandomInt(10, 1400)}
      fillOpacity="null"
      strokeOpacity="null"
      strokeWidth="0"
      stroke="#000"
      fill="#ffffff"
    />
  );

  for (let i = 0; i < quantity; i++) {
    allStars.push(star(i));
  }

  return allStars;
};

const stars2 = starsGenerator(300)

const StarsSvg = styled(svgConfig)`
  #stars_group {
    #star-name {
      animation: ${starAnimation} 2s 0.3s alternate infinite ease-in-out;
    }
    #star1 {
      animation: ${starAnimation} 2.3s alternate infinite ease-in-out;
    }
    #star2 {
      animation: ${starAnimation} 2.4s 0.3s alternate infinite ease-in-out;
    }

    #star3 {
      animation: ${starAnimation} 1.4s 0.6s alternate infinite ease-in-out;
    }
    #star4 {
      animation: ${starAnimation} 1.3s 0.6s alternate infinite ease-in-out;
    }
    #star5 {
      animation: ${starAnimation} 2s 0.6s alternate infinite ease-in-out;
    }
  }
`;

const Stars = () => (
  <StarsSvg>
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
      <filter id="moon-orbit_blur">
        <feGaussianBlur stdDeviation="20" />
      </filter>
      <filter id="clouds_blur">
        <feGaussianBlur stdDeviation="4" />
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
    </defs>

    <g id="stars_group">
      {stars2}
      
    </g>
  </StarsSvg>
);

export default Stars;
