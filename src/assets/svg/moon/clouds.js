import svgConfig from "../../../util/genericSvgConfig";
import styled from "styled-components";
import {motion} from "framer-motion"
import BigCloud from "./big-cloud1";
import BigCloud2 from "./big-cloud2";



const CloudsSvg = styled(svgConfig)``;

const Clouds = () => (
  <CloudsSvg>
    <motion.g
    initial={{x: "-100vw"}}
    animate={{x: 0}}>
    <BigCloud  />

    </motion.g>
    <BigCloud2  />
  </CloudsSvg>
);

export default Clouds;
