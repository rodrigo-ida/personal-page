import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StyledNextPageButton = styled.div`

  @media (min-width: 300px){
  .link-to-projects {
    position: absolute;
    transform: translate(150px, -50px);
    z-index: 100;

    a {
      color: white;
      text-decoration: none;
      font-size: 40px;
    }
  }

  }
  @media (min-width: 900px){
    display: none
  }
`;

const NextStyledPageButton = (props) => {
  const variants = {
    initial: { x: 150, y: -50 },
    animate: {
      x: 150,
      y: [-50, -70, -50],
      transition: { duration: 1.5, repeat: Infinity },
    },
    exit: { y: 100 },
  };

  return (
    <StyledNextPageButton>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="link-to-projects"
      >
        <Link to={props.url}> &darr; </Link>
      </motion.div>
    </StyledNextPageButton>
  );
};

export default NextStyledPageButton;
