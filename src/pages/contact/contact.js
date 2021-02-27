import { motion } from "framer-motion";
import FallingStars from "../../assets/svg/background/fallingStars";
import Background from "../../components/background/background";
import Tree from "../../assets/svg/background/tree";
import Branch from "../../assets/svg/background/treeBranch";
import Stars from "../../assets/svg/background/stars";
import Main from "../../components/main/contact/mainContact";

const Projects = () => {
  const backgroundVariants = {
    initial: {
      background:
        "linear-gradient(150deg, #0f2027 10%, #203a43 50%, #000e20 100%, #2C5364 100%, #f5af19, #f12711)",
    },
  };

  const backgroundStyle = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    zIndex: -1,
    justifyContent: "space-between",
  };

  return (
    <Main>
      <motion.div className="motion-div">
        <Background
          backgroundStyle={backgroundStyle}
          backgroundVariants={backgroundVariants}
        >
          <Branch />
          <FallingStars />
          <Stars />
          <div className="tree-wrapper">
            <Tree />
          </div>
        </Background>
        <div className="contact-wrapper">
          <h1 className="title">Contato</h1>
          <div className="form-wrapper">
            <form
              className="contact-form"
              action="https://php.rodrigoida.com.br/contactForm.php"
              method="POST"
            >
              <div className="name-wrapper">
                <label className="name-label">Nome</label>
                <input
                  type="text"
                  name="name"
                  className="contact-input name-input"
                />
              </div>
              <div className="email-wrapper">
                <label className="name-label">Email</label>
                <input
                  type="mail"
                  name="email"
                  className="contact-input email-input"
                />
              </div>
              <div className="subject-wrapper">
                <label className="name-label">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  className="contact-input subject-input"
                />
              </div>
              <div className="message-wrapper">
                <label className="name-label">Mensagem</label>
                <textarea
                  // cols="50"
                  name="message"
                  rows="10"
                  className="message-area"
                />
              </div>
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
