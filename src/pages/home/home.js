import { motion } from "framer-motion";
import Transition from "../../components/transitionComponent/transitionComponent";
import Main from "../../components/main/home/homeMain";
import letterWithHoverGenerator from '../../util/letterHover'


const allLettersWithHover = letterWithHoverGenerator(
  "Front end Developer engineer"
);

const Home = () => {
  return (
    <Main>
      <motion.div
        className="motion-transition"
        
      >
        <Transition />
      </motion.div>
      <motion.div
        className="motion-div"
        initial={{ z: "0px" }}
        exit={{ z: "500px", transition: { duration: 1 } }}
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
        {/* <NightSky /> */}
      </motion.div>
    </Main>
  );
};

export default Home;
