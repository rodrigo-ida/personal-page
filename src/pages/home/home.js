import { motion } from "framer-motion";
import {Link} from 'react-router-dom'
import Main from "../../components/main/home/homeMain";
import letterCreator from "../../util/letterCreator";
import Background from "../../components/background/background";
import Sun from "../../assets/svg/background/sunset";
import Tree from "../../assets/svg/background/tree";
import Branch from "../../assets/svg/background/treeBranch";
import Bird from "../../assets/svg/background/flyingBird";

const allLettersWithHover = letterCreator("Desenvolvedor Front End");

const Home = () => {
  const backgroundVariants = {
    initial: {
      background:
        "linear-gradient(150deg, #0f2027 -100%, #203a43 -100%, #000e20 -100%, #2C5364 -53%, #f5af19, #f12711)",
    },
    exit: {
      background: [
        "linear-gradient(150deg, #0f2027 -100%, #203a43 -100%, #000e20 -100%, #2C5364 -53%, #f5af19, #f12711)",
        "linear-gradient(150deg, #0f2027 -10%, #203a43 -10%, #000e20 10%, #2C5364 20%, #f5af19, #f12711)",
        "linear-gradient(150deg, #0f2027 0%, #203a43 30%, #000e20 70%, #2C5364 100%, #f5af19, #f12711)",
        "linear-gradient(150deg, #0f2027 10%, #203a43 50%, #000e20 100%, #2C5364 100%, #f5af19, #f12711)",
      ],
      transition: { duration: 5, ease: "linear" },
    },
  };

  const backgroundStyle = {
    width: "100vw",
    height: "100%",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
  };

  return (
    <Main className="main">
      <Background
        backgroundStyle={backgroundStyle}
        backgroundVariants={backgroundVariants}
      >
        <Branch />
        <Tree />
        <Sun />
        {/* <Bird /> */}
      </Background>
      <motion.div
        className="motion-div"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
      >
        <div className="text-wrapper">
            {/* <div className="name"> */}
          <div className="name">

            <span className="first-line">
              <span>
                <span className="letter-r">R</span>odrigo
              </span>
              <span className="last-name">Ida</span>
            </span>
            <span className="second-line">{allLettersWithHover}</span>
            <Link to="/projects">

          <button className="cta-btn" >Acesse o portfólio</button>
            </Link>
          </div>
          </div>

        {/* </div> */}
      </motion.div>

      {/* <NextPageButton url="/projects" /> */}
    </Main>
  );
};

export default Home;
