import { motion } from "framer-motion";


const style = {
  color: "transparent",
  textShadow: "0px 0px 3px black",
  display: "inline-block",
};


const letterAppearanceGenerator = (letter) => {
  const letterSeparator = letter.split("");
  
  const letterAppearance = letterSeparator.map((e, i) => {
    const empty = <span key={i + 'letter'}>&nbsp;</span>;
    return e === " " ? (
      empty
    ) : (
      <motion.span
        style={style}
        key={i + "letter"}
        animate={{
          color: "rgb(200,190,20)",
          transition: { duration: 5, delay: i / 5 },
        }}
      >
        {e}
      </motion.span>
    );
  });

  return letterAppearance;
};

export default letterAppearanceGenerator;
