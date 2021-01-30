import { motion } from "framer-motion";

// const letterWithHoverGenerator = (letter) => {
//     const letterSeparator = letter.split("");

//     const letterWithHover = letterSeparator.map((e, i) => (
//       <motion.span key={i + "letter"} whileHover={{ color: "rgb(30,57,180)" }}>
//         {e}
//       </motion.span>
//     ));

//     return letterWithHover;
//   };

const style = {
  color: "transparent",
  textShadow: "0px 0px 30px #fc0853",
  display: 'inline-block'
};

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const letterWithHoverGenerator = (letter) => {
  const letterSeparator = letter.split("");

  const letterWithHover = letterSeparator.map((e, i) => {
    return (
    <motion.span
      style={style}
      key={i + "letter"}
      initial={{ z:  -1000}}
      animate={{
        z: [getRandomInt(0, 100), getRandomInt(200, 800), getRandomInt(0, 0) ],
        color: 'rgb(110,150,200)',
        transition: { duration: 5, delay: i/5  }
      }}
    >

      {e}
    </motion.span>
  )});

  return letterWithHover;
};

export default letterWithHoverGenerator;
