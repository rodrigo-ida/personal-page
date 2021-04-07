import { motion } from "framer-motion";


const style = {
  display: "inline-block",
  opacity: 0,
  color: '#f13311',
  textShadow: '1px 1px black',
  padding: '10px 0',
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
          opacity: 1,
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
