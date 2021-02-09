import { motion, useMotionValue, useTransform } from "framer-motion";

import styled from "styled-components";

import movieProjectImg from "../../assets/img/projects/movieReview-img.png";
import furnitureProjectImg from "../../assets/img/projects/furniture.png";
import WineStoreProjectImg from "../../assets/img/projects/wineStore-preview.png";

const StyledProject = styled.div`
  transform: translate(0, 20px);
  width: 100%;
  margin-top: 100px;
  perspective: 1000px;

  .project-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    a {
      width: 40%;
      text-decoration: none;
      margin-left: 60px;
      margin-bottom: 50px;

      .project {
        width: 100%;
        height: 300px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        align-items: flex-end;
        border: 1px solid dimgray;

        .subtitle-wrapper {
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: flex-end;

          .subtitle {
            height: 0px;
            color: transparent;
          }
        }

        :hover {
          .subtitle-wrapper {
            background-color: rgba(0, 0, 0, 0);
            transition: all 0.3s ease-in-out;
            cursor: pointer;

            .subtitle {
              background-color: rgba(0, 0, 0, 0.3);
              height: 50px;
              width: 100%;
              color: white;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }

    .movie-project {
      background-image: url(${movieProjectImg});
    }
    .furniture-project {
      background-image: url(${furnitureProjectImg});
    }
    .wine-project {
      background-image: url(${WineStoreProjectImg});
    }
  }
`;

const ProjectItem = (props) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event) {
    x.set(175 + event.nativeEvent.offsetX / 10);
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="project-container"
      >
        <a href="https://moviesreview-qu36aps38.vercel.app/work">
          <ProjectItem
            subtitle="Movie Review Project"
            classe="project movie-project"
          />{" "}
        </a>

        <a href="https://furniture-store-ho6nrpp7n.vercel.app/">
          <ProjectItem
            subtitle="House furniture and tech ecommerce project"
            classe="project furniture-project"
          />
        </a>
        <a href="https://wine-store-k7ybpqnzd.vercel.app/trendingDestaque">
          <ProjectItem
            subtitle="wine ecommerce store project"
            classe="project wine-project"
          />
        </a>
      </motion.div>
    </StyledProject>
  );
};

export default Project;
