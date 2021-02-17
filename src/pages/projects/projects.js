import { motion } from "framer-motion";
import FallingStars from "../../assets/svg/background/fallingStars";
import Background from "../../assets/svg/background/background";
import Tree from "../../assets/svg/background/tree";
import Branch from "../../assets/svg/background/treeBranch";
import Stars from "../../assets/svg/background/stars";
import Moon from "../../assets/svg/background/moon";
import ProjectPreview from "../../components/projectsPreview/projectPreview";
import Main from "../../components/main/projects/mainProjects";

import NextPageButton from "../../components/nextPageButton/nextPageButton";

const Projects = () => {
  const backgroundVariants = {
    initial: {
      background:
        "linear-gradient(150deg, #0f2027 10%, #203a43 50%, #000e20 100%, #2C5364 100%, #f5af19, #f12711)",
    },
    // exit: { background: ['linear-gradient(150deg, #2C5364 -53%, #f5af19, #f12711)','linear-gradient(150deg, #2C5364 20%, #f5af19, #f12711)','linear-gradient(150deg, #0f2027, #203a43, #2c5364)'], transition: {duration: 5, ease: 'linear'} }
  };

  const backgroundStyle = {
    width: "100vw",
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <Main>
      <motion.div className="projects-wrapper">
        <div style={{ height: '100%', position: "fixed" }}>
          <Background
            backgroundStyle={backgroundStyle}
            backgroundVariants={backgroundVariants}
          >
            <Moon />
            <Branch className="Branch" />
            <FallingStars className="FallingStars" />
            <Stars className="Stars" />
            <Tree className="Tree" />
          </Background>
        </div>
        <h1 className="title"> Projetos</h1>
        <ProjectPreview />
      </motion.div>

      <NextPageButton url="/about" />
    </Main>
  );
};

export default Projects;
