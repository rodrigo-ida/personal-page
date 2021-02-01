import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import bird from "./bird-cells.svg";

const flyWingsAnimation = keyframes`

to{background-position: -3600px 0}

`;

const getRandomInit = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);



const BirdWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  

  .birdWrapper {
    position: absolute;
  }

  .bird {
    background-image: url(${bird});
    background-size: 3600px 100%;
    width: 350px;
    height: 500px;
    will-change: background-position;
    transform: scale(0.1);

    animation: ${flyWingsAnimation} .5s -0.5s steps(
        10
      ) infinite;
  }
`;


const singleBirdGenerator = (initialX, finalX, yTransitions, delay, key) => {
  return (
    <motion.div
    key={key}
      className="birdWrapper"
      initial={{ x: initialX }}
      animate={{
        x: finalX,
        y: yTransitions,
        transition: { duration: 10, ease: "linear", delay: delay },
      }}
    >
      <div className="bird"></div>
    </motion.div>
  );
};

const manyBirdsGenerator = (quantity) =>{
    let allBirds = []
    
    for(let i = 0; i < quantity; i++){
        
        
        let initialX = getRandomInit(-400, -300)
        let finalx = getRandomInit(1500, 2000)
        let yArray = [getRandomInit(-300, 500),  getRandomInit(-300,300),  getRandomInit(-300,500)]
        let delay = i
        let key = 'bird'+i


        allBirds.push(singleBirdGenerator(initialX, finalx,  yArray, delay, key))
    }

    return allBirds
}





const Bird = () => (
  <BirdWrapper>

      {manyBirdsGenerator(50)}
    

    {/* <motion.div
      className="birdWrapper"
      initial={{ scaleX: -1 }}
    >
      <div className="bird"></div>
    </motion.div> */}
  </BirdWrapper>
);

export default Bird;
