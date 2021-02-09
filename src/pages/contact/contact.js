import { motion } from "framer-motion";
import styled from "styled-components";
import FallingStars from "../../assets/svg/background/fallingStars";
import Background from "../../assets/svg/background/background";
import Tree from "../../assets/svg/background/tree";
import Branch from "../../assets/svg/background/treeBranch";
import Stars from "../../assets/svg/background/stars";
import Moon from "../../assets/svg/background/moon";

const Main = styled.main`
    overflow-x: hidden;
    height: auto;

    .motion-div {
      background-color: transparent;
      height: auto;
      width: 100vw;
      padding: 40px;
      padding-left: 80px;
      display: flex;
      flex-direction: column;
    }

    .title {
      color: rgba(255, 255, 255, 0.2);
      font-size: 350%;
      text-align: center;
      position: relative;
      font-family: "PT Sans", sans-serif;
    }

    .contact-form{
        width: 500px;
        height: 200px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 5px 10px;
        margin: 90px 0 0 30px;


.name-input{
    grid-column:1 / 2;
    grid-row: 1 / 2;
}        
.email-input{
    grid-column: 2 / 3;
    grid-row:  1 / 2;
}
.subject-input{
    grid-column:1 / 3;
    grid-row: 2 / 3
}        

.message-area{

grid-column: 1/3;
    grid-row: 3/5;
}


.submit{
    background: transparent;
    border: brown 2px solid;
    width: 90px;
}
    }
  `;

const Projects = () => {
    const backgroundVariants = {
        initial: {
            background: "linear-gradient(150deg, #0f2027 10%, #203a43 50%, #000e20 100%, #2C5364 100%, #f5af19, #f12711)",

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
                    <div className="contact-wrapper">
                        <form className="contact-form">
                            <input type="text" className="contact-input name-input" placeholder="Nome" />
                            <input type="mail" className="contact-input email-input" placeholder="email" />
                            <input type="text" className="contact-input subject-input" placeholder="assunto" />
                            <textarea cols="50" rows="20" className="message-area" placeholder="mensagem" />
                            <input type="submit" className="submit"  value="Enviar" />
                        </form>
                    </div>
                </div>
            </motion.div>
        </Main>
    );
};

export default Projects;
