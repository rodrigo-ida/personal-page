import { motion } from "framer-motion";
import Main from "../../components/main/home/homeMain";
import letterCreator from '../../util/letterCreator'
import Sun from '../../assets/svg/background/sunset'
import FallingStars from '../../assets/svg/background/fallingStars'
import Stars from '../../assets/svg/background/stars'





const Projects = () => {
  return (
    <motion.div initial={{x: 0}} exit={{x: 1000}}>
        <div >

        oi
        </div>
        <FallingStars /> 
        <Stars />
    </motion.div>
  );
};

export default Projects;
