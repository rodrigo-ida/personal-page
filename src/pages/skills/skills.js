import { motion } from "framer-motion";
import styled, {keyframes} from "styled-components";
import Transition from "../../components/transitionComponent/transitionComponent";
// import Main from "../../components/main/home/homeMain";
import { Link } from "react-router-dom";
import letterCreator from '../../util/letterCreator'



const Main = styled.main`
  display: flex;

  .textWrapper {
    margin: 100px 0 0 90px;
    width: 35%;
  }

  .title {
    color: white;
    font-size: 40px;
    padding-bottom: 25px;
  }

  .text {
    color: white;
    font-size: 18px;
    line-height: 25px;
    -webkit-letter-spacing: 3px;
    -moz-letter-spacing: 3px;
    -ms-letter-spacing: 3px;
    letter-spacing: 1px;
    /* text-align: justify; */
    padding: 5px 0;

    a {
      text-decoration: none;
      color: red;
    }
  }
  .list-wrapper {
    margin: 200px 0 0 200px;
    perspective: 500px;
    transform-style: preserve-3d;

  

    ul {
      color: white;
      width: 300px;
      perspective: 500px;
      transform-style: preserve-3d;

      li{
        padding: 5px;
      }

      
    }
  }
`;

const Skills = () => {
  return (
    <Main>
      <Transition />

      <div className="textWrapper">
        <h1 className="title">Conhecimentos</h1>
        <p className="text">
          Meu foco principal é o desenvolvimento front end. HTML, CSS,
          Javascript e ReactJS são as minhas principais áreas de conhecimento.
          Não obstante, estou sempre aprendendo novas ferramentas que circundam
          o universo do desenvolvimento web.
        </p>

        <p className="text">
          Me atentando às boas práticas de Clean Code, desenvolvo aplicações com
          código reutilizável e organizado.
        </p>
        <p className="text">
          Fique à vontade para olhar os meus{" "}
          <Link to="/projects">Projetos</Link> ou entrar em{" "}
          <Link to="/contact">contato</Link>.
        </p>
      </div>

      <div className="list-wrapper">
        <motion.ul>
          <motion.li className="motion.li2">{letterCreator('css')}</motion.li>
          <motion.li className="motion.li2">{letterCreator('sass')}</motion.li>
          <motion.li className="motion.li2">{letterCreator('bootstrap')}</motion.li>
          <motion.li className="motion.li2">{letterCreator('Styled Components')}</motion.li>
          <motion.li className="motion.li3">{letterCreator('Javascript')}</motion.li>
          <motion.li className="motion.li2">{letterCreator('Node')}</motion.li>
          <motion.li className="motion.li2">{letterCreator('Express')}</motion.li>
          <motion.li className="motion.li2">{letterCreator('Mysql')}</motion.li>
          <motion.li className="motion.li4">{letterCreator('ReactJS')}</motion.li>
          <motion.li className="motion.li5">{letterCreator('npm')}</motion.li>
          <motion.li className="motion.li5">{letterCreator('Git')}</motion.li>
         
        </motion.ul>
      </div>
    </Main>
  );
};

export default Skills;
