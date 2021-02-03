import { motion, useMotionValue, useTransform } from "framer-motion";

import styled from "styled-components";

import movieProjectImg from "../../assets/img/projects/movieReview-img.png";
import furnitureProjectImg from "../../assets/img/projects/furniture.png";
import movieProjectIpadImg from "../../assets/img/projects/movieReview-ipad-img.png";
import movieProjectMobileImg from "../../assets/img/projects/movieReview-mobile-img.png";
import Background from "../../assets/svg/background/background";

const StyledProject = styled.div`
  transform: translate(0, 20px);
  width: 100%;
  margin-top: 100px;
  perspective: 1000px;

  .project-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .furniture-project,
    .pc-project {
      width: 40%;
      height: 300px;
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      margin-left: 60px;
      margin-bottom: 50px;
      display: flex;
    align-items: flex-end;

      .subtitle-wrapper{

        height: 0px;
        color: transparent;
        
      }

      :hover{

      .subtitle-wrapper{
        height: 50px;
        width: 100%;
        background-color: rgba(0,0,0,.3);
        color: white;
        transition: all .3s ease-in-out;
      }

      }
    }

    .pc-project {
      background-image: url(${movieProjectImg});
    }
    .furniture-project {
      background-image: url(${furnitureProjectImg});
    }
  }
`;

const ProjectItem = (props) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    x.set(200 + event.nativeEvent.offsetX / 10);
    y.set(200 + event.nativeEvent.offsetY / 10);
  }
  function handleMouseOut() {
    x.set(200);
    y.set(200);
  }

  return (
    <motion.div

      onMouseMove={handleMouse}
      onMouseOut={handleMouseOut}
      style={{ rotateX: rotateX, rotateY: rotateY }}
      className={props.classe}
    >
      <motion.div className="subtitle-wrapper">
        <motion.p className="subtitle">{props.subtitle}</motion.p>
      </motion.div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <StyledProject>
      <motion.div className="project-container">
        <ProjectItem subtitle="coisas escritas" classe="pc-project" />
        <ProjectItem subtitle="coisas escritas" classe="furniture-project" />
        <ProjectItem subtitle="coisas escritas" classe="pc-project" />
        <ProjectItem subtitle="coisas escritas" classe="pc-project" />
      </motion.div>
    </StyledProject>
  );
};

export default Project;
