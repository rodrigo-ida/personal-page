import { motion } from "framer-motion";


const style = {
  // top: 0,
  // left: 0,
  width: "100vw",
  height: "100vh",
  // position: "fixed",
  position: 'absolute',
  display: "flex",
  flexDirection: "column",
  // zIndex: -1
  justifyContent: 'space-between',
};

const Background = (props) => {


  return (
  <motion.div
  className="background-container"
  style={style}
  initial="initial"
    animate="animate"
    exit="exit"
    variants={props.backgroundVariants}
  >
    {props.children}
  </motion.div>
)};

export default Background;
