import { motion } from "framer-motion";



const Background = (props) => {
  

  return (
  <motion.div
  className="background-container"
  style={props.backgroundStyle}
  initial="initial"
    animate="animate"
    exit="exit"
    variants={props.backgroundVariants}
  >
    {props.children}
  </motion.div>
)};

export default Background;
