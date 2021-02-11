import { motion } from "framer-motion";
import styled from "styled-components";
import FallingStars from "../../assets/svg/background/fallingStars";
import Background from "../../assets/svg/background/background";
import Tree from "../../assets/svg/background/tree";
import Branch from "../../assets/svg/background/treeBranch";
import Stars from "../../assets/svg/background/stars";
import Moon from "../../assets/svg/background/moon";
import ProjectPreview from "../../components/projectsPreview/projectPreview";

const Projects = () => {
  const backgroundVariants = {
    initial: {
      background:"linear-gradient(150deg, #0f2027 10%, #203a43 50%, #000e20 100%, #2C5364 100%, #f5af19, #f12711)",
      
    },
    // exit: { background: ['linear-gradient(150deg, #2C5364 -53%, #f5af19, #f12711)','linear-gradient(150deg, #2C5364 20%, #f5af19, #f12711)','linear-gradient(150deg, #0f2027, #203a43, #2c5364)'], transition: {duration: 5, ease: 'linear'} }
  };

  const Main = styled.main`

  @media (min-width: 300px){

    overflow-x: hidden;
    height: auto;

    .projects-wrapper {
      background-color: transparent;
      height: auto;
      width: 100vw;
      /* padding: 40px; */
      /* padding-left: 80px; */
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-top: 100px;
    }

    .title {
      color: rgba(255, 255, 255, 0.2);
      font-size: 350%;
      text-align: center;
      position: relative;
      font-family: "PT Sans", sans-serif;
    }
  }

  @media (min-width: 900px){

    overflow-x: hidden;
    height: auto;

    .projects-wrapper {
      background-color: transparent;
      height: auto;
      width: 100vw;
      padding: 40px;
      padding-left: 80px;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      padding-top: 0px;


    }

    .title {
      color: rgba(255, 255, 255, 0.2);
      font-size: 350%;
      text-align: center;
      position: relative;
      font-family: "PT Sans", sans-serif;
    }
  }
    
  `;

  return (
    <Main>
      <motion.div className="projects-wrapper">
        <Background backgroundVariants={backgroundVariants}>
          <Moon />
          <Tree />
          <Branch />
          <FallingStars />
          <Stars />
        </Background>
        <h1 className="title"> Projetos</h1>
        <ProjectPreview />
      </motion.div>
    </Main>
  );
};

export default Projects;
