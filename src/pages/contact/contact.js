import { motion } from "framer-motion";
import FallingStars from "../../assets/svg/background/fallingStars";
import Background from "../../assets/svg/background/background";
import Tree from "../../assets/svg/background/tree";
import Branch from "../../assets/svg/background/treeBranch";
import Stars from "../../assets/svg/background/stars";
import Moon from "../../assets/svg/background/moon";
import Main from "./styledContact";

const Projects = () => {
  const backgroundVariants = {
    initial: {
      background:
        "linear-gradient(150deg, #0f2027 10%, #203a43 50%, #000e20 100%, #2C5364 100%, #f5af19, #f12711)",
    },
    // exit: { background: ['linear-gradient(150deg, #2C5364 -53%, #f5af19, #f12711)','linear-gradient(150deg, #2C5364 20%, #f5af19, #f12711)','linear-gradient(150deg, #0f2027, #203a43, #2c5364)'], transition: {duration: 5, ease: 'linear'} }
  };

  return (
    <Main>
      <motion.div className="motion-div">
        <Background backgroundVariants={backgroundVariants}>
          <Moon />
          <Tree />
          <Branch />
          <FallingStars />
          <Stars />
        </Background>
        <div className="contact-wrapper">
          <h1 className="title">Contato</h1>
          <div className="form-wrapper">
            <form
              className="contact-form"
              action="http://php.rodrigoida.com.br/contactForm.php"
              method="POST"
            >
              <input
                type="text"
                name="name"
                className="contact-input name-input"
                placeholder="Nome"
              />
              <input
                type="mail"
                name="email"
                className="contact-input email-input"
                placeholder="email"
              />
              <input
                type="text"
                name="subject"
                className="contact-input subject-input"
                placeholder="assunto"
              />
              <textarea
                cols="50"
                name="message"
                rows="20"
                className="message-area"
                placeholder="mensagem"
              />
              <input
                type="submit"
                name="submit"
                className="submit"
                value="Enviar"
              />
            </form>
          </div>
        </div>
      </motion.div>
    </Main>
  );
};

export default Projects;
