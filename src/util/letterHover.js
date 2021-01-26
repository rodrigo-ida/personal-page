import {motion} from 'framer-motion'

const letterWithHoverGenerator = (letter) => {
    const letterSeparator = letter.split("");
  
    const letterWithHover = letterSeparator.map((e, i) => (
      <motion.span key={i + "letter"} whileHover={{ color: "rgb(30,57,180)" }}>
        {e}
      </motion.span>
    ));
  
    return letterWithHover;
  };

  export default letterWithHoverGenerator