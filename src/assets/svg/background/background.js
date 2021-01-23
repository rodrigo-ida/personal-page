import { motion } from "framer-motion";
import Stars from "../moon/stars";
import FallingStars from "../moon/falling-stars";



const style = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: -1,
};

const Background = () => (
  <motion.svg style={style}>
    <motion.rect
      className="background"
      fill="#142333"
      height="100vh"
      width="100vw"
      y="0"
      x="0"
      
    />

    <FallingStars />
    <Stars />
  </motion.svg>
);

export default Background;
