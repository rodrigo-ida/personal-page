import svgConfig from "../../../util/genericSvgConfig";
import styled from "styled-components";
import BigCloud from "./big-cloud1";
import BigCloud2 from "./big-cloud2";


const CloudsSvg = styled(svgConfig)``;

const Clouds = () => (
  <CloudsSvg>
    <BigCloud  />
    <BigCloud2  />
  </CloudsSvg>
);

export default Clouds;
