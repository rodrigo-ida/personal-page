import { motion } from "framer-motion";

const NavbarMobileModal = (props) => {
  const style = {
    width: "100vw",
    height: "100vh",
    backgroundColor: 'rgba(0,0,0,.2)',
    position: 'absolute',
    left: '100vw'
  };

  const variants = {
    
    animate: { x: `${props.clicked ? "-100vw" : "100vw"}` },
  };

  return (
    <motion.div
      animate="animate"
      variants={variants}
      style={style}
    >
        {props.children}
    </motion.div>
  );
};

export default NavbarMobileModal;
