import { motion } from "framer-motion";
// import Leaves from './leaves'
import Tree from "./tree";
import Branch from "./treeBranch";

const style = {
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  position: "absolute",
  zIndex: -1
};

const Background = (props) => {

  
  const backgroundVariants = {
    initial: {  background: 'linear-gradient(150deg, #9bc5c3, #f5af19, #f12711)'},
    // animate: { background: 'linear-gradient(150deg, #9bc5c3, #616161, #616161)', transition: {duration: 5}},
    exit: { background: 'linear-gradient(150deg, #9bc5c3, #616161, #616161)', transition: {duration: 5} }
  }


  return (
  <motion.div
  style={style}
  initial="initial"
    animate="animate"
    exit="exit"
    variants={backgroundVariants}
  >

    <motion.svg style={style} className="background-svg">
      <Tree />
      <Branch />
    </motion.svg>
  </motion.div>
)};

export default Background;
