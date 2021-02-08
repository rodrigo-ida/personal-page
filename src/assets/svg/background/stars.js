import { motion } from "framer-motion";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const allStars = [];




const StarsGenerator = (quantity) => {
  const star = (i) => {
    const StarsVariant = {
      animate: {
        opacity: [0, 1, 0],
        transition: { repeat: Infinity, duration: getRandomInt(3, 5) },
      }
    };
    return (
      <motion.ellipse
      style={{position: 'absolute'}}
        key={i + "star"}
        ry={getRandomInt(1, 2)}
        rx={"1." + getRandomInt(1, 9)}
        cy={getRandomInt(10, 600)}
        cx={getRandomInt(10, 1400)}
        fillOpacity="null"
        strokeOpacity="null"
        strokeWidth="0"
        stroke="#000"
        fill="#ffffff"
        initial="initial"
        animate="animate"
        variants={StarsVariant}
      />
    );
  };

  for (let i = 0; i < quantity; i++) {
    allStars.push(star(i));
  }

  return allStars;
};

const Stars2 = StarsGenerator(55);


const Stars = () => (
  <motion.svg className="Stars_group" style={{position: 'absolute'}}>
    {Stars2}
  </motion.svg>
);

export default Stars;
