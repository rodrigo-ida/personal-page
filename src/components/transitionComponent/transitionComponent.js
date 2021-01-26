import styled from "styled-components";
import { motion } from "framer-motion";
import backgroundImg from "../../assets/img/light-speed-background/light-speed.jpg";


const StyledTransition = styled.div`
  .wall {
    background: url(${backgroundImg});
    background-size: cover;
  }
  .scene {
    perspective: 5px;
    perspective-origin: 37% 47%;
    position: relative;
    z-index: -1;
    width: 406px;
    transform: translateX(465px);
    height: 100vh; 
  }

  .wrap1 {
    position: absolute;
    width: 1000px;
    height: 1000px;
    left: -500px;
    top: -500px;
    transform-style: preserve-3d;
    

    .wall {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
     
    }
  }

 

  .wrap2 {
    position: absolute;
    width: 1000px;
    height: 1000px;
    left: -500px;
    top: -500px;
    transform-style: preserve-3d;
    

    .wall {
      width: 100%;
      height: 100%;
      position: absolute;
      opacity: 0;
    
    }
  }

  .wall-right {
    transform: rotateY(90deg) translateZ(500px);
  }

  .wall-left {
    transform: rotateY(-90deg) translateZ(500px);
  }

  .wall-top {
    transform: rotateX(90deg) translateZ(500px);
  }

  .wall-bottom {
    transform: rotateX(-90deg) translateZ(500px);
  }

  .wall-back {
    transform: rotateX(180deg) translateZ(500px);
  }
`;


const wrap1Variant = {
  animateWrap: {z: ['-500px', '500px'], rotate:0, transition:{ ease: "easeOut", repeat: Infinity, duration: 12}},
  animateWall: {opacity:[0,1,1,0], transition:{ times:[0, 0.25, 0.75, 1], repeat: Infinity, duration: 12}}
}
const wrap2Variant = {
  animateWrap: {z: ['-500px', '500px'], rotate:0, transition:{ repeat: Infinity, duration: 12, delay: 6}},
  animateWall: {opacity:[0,1,1,0], transition:{ ease: "easeOut", times:[0, 0.25, 0.75, 1],repeat: Infinity, duration: 12, delay: 6}}
}

const Transition = () => (
  <StyledTransition>
    <motion.div
      className="scene"
      initial={{opacity: 0}}
      exit={{opacity: [1, 1, 0], transition: {duration: 5, times: [0.1, 0.99, 1] }}}
      
    >
      <motion.div
        animate="animateWrap"
        variants={wrap1Variant}
        className="wrap1"
      >
        <motion.div
          animate="animateWall"
          variants={wrap1Variant}
          className="wall wall-right"
        ></motion.div>
        <motion.div
          animate="animateWall"
          variants={wrap1Variant}
          className="wall wall-left"
        ></motion.div>
        <motion.div
          animate="animateWall"
          variants={wrap1Variant}
          className="wall wall-top"
        ></motion.div>
        <motion.div
          animate="animateWall"
          variants={wrap1Variant}
          className="wall wall-bottom"
        ></motion.div>
        <motion.div
          animate="animateWall"
          variants={wrap1Variant}
          className="wall wall-back"
        ></motion.div>
      </motion.div>
      <motion.div 
      animate="animateWrap"
      variants={wrap2Variant}
      className="wrap2">
        <motion.div 
        animate="animateWall"
        variants={wrap2Variant}
        className="wall wall-right"></motion.div>
        <motion.div 
        animate="animateWall"
        variants={wrap2Variant}
        className="wall wall-left"></motion.div>
        <motion.div 
        animate="animateWall"
        variants={wrap2Variant}
        className="wall wall-top"></motion.div>
        <motion.div 
        animate="animateWall"
        variants={wrap2Variant}
        className="wall wall-bottom"></motion.div>
        <motion.div 
        animate="animateWall"
        variants={wrap2Variant}
        className="wall wall-back"></motion.div>
      </motion.div>
    </motion.div>
  </StyledTransition>
);

export default Transition;
