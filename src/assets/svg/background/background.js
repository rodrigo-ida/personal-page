import { motion } from "framer-motion";



const Background = (props) => {
  
  // const style = {
  //   // top: 0,
  //   // left: 0,
  //   width: "100vw",
  //   height: "100vh",
  //   // position: "fixed",
  //   position: 'absolute',
  //   display: "flex",
  //   flexDirection: "column",
  //   // zIndex: -1
  //   justifyContent: 'space-between',
  // };


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
