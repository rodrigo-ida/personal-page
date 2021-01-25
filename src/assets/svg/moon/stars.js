import { motion } from "framer-motion";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const allStars = [];




const starsGenerator = (quantity) => {
  const star = (i) => {
    const starsVariant = {
      initial: { opacity: 1 },
      animate: {
        opacity: [0, 1],
        transition: { repeat: Infinity, duration: "2." + getRandomInt(1, 9) },
      }
    };
    return (
      <motion.ellipse
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
        variants={starsVariant}
      />
    );
  };

  for (let i = 0; i < quantity; i++) {
    allStars.push(star(i));
  }

  return allStars;
};

const stars2 = starsGenerator(15);


const Stars = () => (
  <motion.g className="stars_group">
    {stars2}
  </motion.g>
);

export default Stars;
