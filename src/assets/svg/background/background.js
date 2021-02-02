import { motion } from "framer-motion";
import React, {useState, useEffect} from 'react'
// import Leaves from './leaves'
import Tree from "./tree";
import Branch from "./treeBranch";

const style = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: -1,
};

const Background = (props) => {
  const [backgroundPercentage, setBackgroundPercentage] = useState(0)

  const backgroundColor = props.path === '/' ? 'grad-sunset' : 'gradNight'

  useEffect(()=>{
    
    const interval = setInterval(()=> setBackgroundPercentage(prevState => {
      if(prevState < 99){ return prevState + 1}
      else{
        clearInterval(interval)
        return 100
       }
    }), 200)
  }, [])
  

  return (
  <motion.div>
    <div> {backgroundPercentage}</div>
    <motion.svg style={style} className="background-svg">
      <defs>
        <linearGradient id="grad-sunset" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="-100%" style={{ stopColor: "#616161", stopOpacity: 1 }} /> // azul escuro
          <stop offset="-130%" style={{stopColor:'#9bc5c3',stopOpacity:1}} /> // azul claro
          <stop offset={30 + '%'} style={{ stopColor: "#f5af19", stopOpacity: 1 }} /> // amarelo
          <stop offset="150%" style={{ stopColor: "#f12711", stopOpacity: 1 }} /> // laranja
          
        </linearGradient>

        <linearGradient id="gradNight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#9bc5c3", stopOpacity: 1 }}/>
          <stop offset="100%" style={{ stopColor: "#616161", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <motion.rect
        className="background-element"
        fill='url(#grad-sunset)'
        height="100vh"
        width="100vw"
        y="0"
        x="0"
      />

      <Tree />
      <Branch />
    </motion.svg>
  </motion.div>
)};

export default Background;
