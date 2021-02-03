import { motion } from "framer-motion";
import Main from "../../components/main/home/homeMain";
import letterCreator from "../../util/letterCreator";
import Background from "../../assets/svg/background/background";
import Sun from "../../assets/svg/background/sunset";
import Tree from "../../assets/svg/background/tree";
import Branch from "../../assets/svg/background/treeBranch";
import Bird from "../../assets/svg/background/flyingBird";

const allLettersWithHover = letterCreator("Desenvolvedor   Front   End");

const Home = () => {

  const backgroundVariants = {
    initial: {  background: 'linear-gradient(150deg, #2C5364 -53%, #f5af19, #f12711)'},
  exit: { background: ['linear-gradient(150deg, #2C5364 -53%, #f5af19, #f12711)','linear-gradient(150deg, #2C5364 20%, #f5af19, #f12711)','linear-gradient(150deg, #0f2027, #203a43, #000e20)'], transition: {duration: 5, ease: 'linear'} }
  }
  
  return (
    <Main>
      <Background backgroundVariants={backgroundVariants}>
          <Sun  />
          <Bird />
          <Tree />
          <Branch />
        </Background>
      <motion.div
        className="motion-div"
        initial={{ z: "0px" }}
        exit={{ z: "500px", transition: { duration: 5 } }}
      >
        <span className="tags">&lt;body&gt; </span>
        <div className="text-wrapper">
          <span className="tags">&lt;h1&gt; </span>
          <h1>
            <span className="first-line">
              <span>
                <span className="letter-r">R</span>odrigo
              </span>
              <span className="last-name">Ida</span>
            </span>
            <span className="second-line">{allLettersWithHover}</span>
          </h1>
          <span className="tags">&lt;/h1&gt; </span>
          <button>Contate-me</button>
        </div>
        <span className="tags">&lt;/body&gt; </span>
        
      </motion.div>
    </Main>
  );
};

export default Home;
