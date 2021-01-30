import { motion } from "framer-motion";
import Stars from "./stars";
import FallingStars from "../moon/falling-stars";
import Leaves from './leaves'
import Tree from './tree'



const style = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: -1,
};



const Background = () => (
  <motion.svg style={style} className="background-svg">
    <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor:'#f5af19',stopOpacity:1}} />
      {/* <stop offset="50%" style={{stopColor:'#b21f1f',stopOpacity:1}} /> */}
      <stop offset="100%" style={{stopColor:'#f12711',stopOpacity:1}} />
    </linearGradient>
  </defs>
    <motion.rect
      className="background-element"

      fill="url(#grad1)"
      height="100vh"
      width="100vw"
      y="0"
      x="0"
    />
    <Tree />
    <FallingStars />
    <Stars />
    <Leaves />
  </motion.svg>
);

export default Background;
