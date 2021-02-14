import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "../../assets/svg/background/background";
import Main from "../../components/main/about/mainAbout";
import BackgroundDrawSvg from "../../assets/svg/about/backgroundDraw";
import BackgroundDrawResponsivitySvg from "../../assets/svg/about/backgroundDrawResponsivity";

import NextPageButton from "../../components/nextPageButton/nextPageButton";

// import Branch from "../../assets/svg/background/treeBranch";
import Stars from "../../assets/svg/background/stars";
// import Moon from "../../assets/svg/background/moon";

const motionStyle = {
  height: "fit-content",
  width: "100vw",
  position: "relative",
  zIndex: 5,
  overflowX: "hidden",
};

const titleVariant = {
  initial: { x: "-100vw" },
  animate: { x: "0vw", transition: { duration: 1, delay: 1 } },
};
const subTitleVariant = {
  initial: { x: "-100vw" },
  animate: { x: "0vw", transition: { duration: 1, delay: 1.3 } },
};

const linesVariant = {
  initial: { x: "-100vw" },
  animate1: { x: "0vw", transition: { duration: 1, delay: 1.3 } },
  animate2: { x: "0vw", transition: { duration: 1, delay: 1.5 } },
};

const imgTrasitionBackgroundVariant = {
  animate: { x: 1000, transition: { duration: 4, delay: 2 } },
};
const imgTrasitionVariant = {
  animate: { width: [50, 300, 100], transition: { delay: 2.3, duration: 1 } },
};

const backgroundVariants = {
  initial: {
    background: "linear-gradient(150deg, #0f2027, #203a43, #000e20)",
  },
  // exit: { background: ['linear-gradient(150deg, #2C5364 -53%, #f5af19, #f12711)','linear-gradient(150deg, #2C5364 20%, #f5af19, #f12711)','linear-gradient(150deg, #0f2027, #203a43, #2c5364)'], transition: {duration: 5, ease: 'linear'} }
};

const About = () => {
  const backgroundStyle = {
    width: "100vw",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    zIndex: -1,
    justifyContent: "space-between",
  };

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])

  return (
    <motion.div style={motionStyle} >
      <Main>
        <Background
          backgroundStyle={backgroundStyle}
          backgroundVariants={backgroundVariants}
        >
          <Stars />
        </Background>
        <motion.div
          className="content_wrapper"
          initial={{ z: -200 }}
          animate={{ z: 0 }}
        >
          <div className="text">
            <motion.h1
              className="title"
              initial="initial"
              animate="animate"
              variants={titleVariant}
            >
              Sobre Mim
            </motion.h1>
            <div className="lines_wrapper">
              <motion.span
                initial="initial"
                animate="animate1"
                variants={linesVariant}
                className="line1"
              ></motion.span>
              <motion.span
                initial="initial"
                animate="animate2"
                variants={linesVariant}
                className="line2"
              ></motion.span>
            </div>
            <motion.p
              initial="initial"
              animate="animate"
              className="subtitle"
              variants={subTitleVariant}
            >
              Eu amo Ciência, Tecnologia
            </motion.p>
            <motion.p
              initial="initial"
              animate="animate"
              className="subtitle"
              variants={subTitleVariant}
            >
              e Rock
            </motion.p>
          </div>

          <motion.div animate={{ opacity: window.outerWidth > 600 ? 1 : [0, 1], transition: {delay: 1}}} className="img_wrapper">
            <div className="me"></div>
            <motion.div
              className="img_transition_background"
              animate="animate"
              variants={imgTrasitionBackgroundVariant}
            >
              <motion.div
                className="img_transition"
                animate="animate"
                variants={imgTrasitionVariant}
              ></motion.div>
            </motion.div>
          </motion.div>

          <div className="skills-wrapper">
            <div className="skills-body">
              <div className="textWrapper">
                <BackgroundDrawSvg  />
                <p className="skills-text">
                  Meu foco principal é o desenvolvimento front end. HTML, CSS,
                  Javascript e ReactJS são as minhas principais áreas de
                  conhecimento, as quais passei os últimos dois anos
                  aperfeiçoando. Não obstante, estou sempre aprendendo novas
                  ferramentas que circundam o universo do desenvolvimento web.
                </p>

                <div className="second-p">
                  <BackgroundDrawResponsivitySvg />
                  <p className="skills-text">
                    Atualmente, estudo Análise e Desenvolvimento de Sistemas no
                    Centro Universitário das Faculdades Metropolitanas Unidas
                    (FMU) e busco uma vaga como desenvolvedor web Jr.
                  </p>

                  <p className="skills-text">
                    Sempre atento às boas práticas de Clean Code, desenvolvo
                    aplicações com código reutilizável e organizado. Fique à
                    vontade para olhar os meus{" "}
                    <a href="https://github.com/rodrigo-ida?tab=repositories">
                      Projetos no Github
                    </a>{" "}
                    ou entrar em <Link to="/contact">contato</Link>.
                  </p>
                </div>
              </div>

              <div className="skills-list-wrapper">
                <h1 className="skills-title">Conhecimentos</h1>

                <ul>
                  <li className="skills-list">css </li>
                  <li className="skills-list">sass </li>
                  <li className="skills-list">bootstrap </li>
                  <li className="skills-list">Styled Cmponents</li>
                  <li className="skills-list">Javascript </li>
                  <li className="skills-list">Node </li>
                  <li className="skills-list">Express </li>
                  <li className="skills-list">Mysql </li>
                  <li className="skills-list">ReactJS </li>
                  <li className="skills-list">npm </li>
                  <li className="skills-list">Git </li>
                  <li className="skills-list">responsividade</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <NextPageButton url="/contact" />
      </Main>
    </motion.div>
  );
};

export default About;
