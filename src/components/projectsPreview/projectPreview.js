import { motion, useMotionValue, useTransform } from "framer-motion";

import StyledProject from './styledProjectPreview'



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
            subtitle="Site desenvolvido em React com design moderno e temática de streaming"
            classe="project movie-project"
          />
        </a>

        <a href="https://furniture-store-ho6nrpp7n.vercel.app/">
          <ProjectItem
            subtitle="Projeto de ecommerce com design clean"
            classe="project furniture-project"
          />
        </a>
        <a href="https://wine-store-k7ybpqnzd.vercel.app/trendingDestaque">
          <ProjectItem
            subtitle="Landing page com temática em comercialização de vinhos"
            classe="project wine-project"
          />
        </a>
      </motion.div>
    </StyledProject>
  );
};

export default Project;
