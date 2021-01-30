import { motion } from "framer-motion";
import Transition from "../../components/transitionComponent/transitionComponent";
import Main from "../../components/main/home/homeMain";
import letterCreator from '../../util/letterCreator'
import Sun from '../../assets/svg/background/sunset'
import BigCloud1 from '../../assets/svg/moon/big-cloud1'
import BigCloud2 from '../../assets/svg/moon/big-cloud2'


const allLettersWithHover = letterCreator(
  "Desenvolvedor Front End"
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
        <Sun />
        {/* <BigCloud1 />
        <BigCloud2 /> */}
      </motion.div>
    </Main>
  );
};

export default Home;
