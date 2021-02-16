import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import {useState} from 'react'
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/sidebar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import { AnimatePresence } from "framer-motion";



console.log(window.innerHeight);

const StyledApp = styled.div`
  width: 100%;
  height: ${props=> props.coisa}px;
  position: relative;
`;

const App = () => {

  const [windowSize, setWindowSize] = useState(window.innerHeight)
  
  window.addEventListener('resize', (e)=> {
    console.log(window.innerHeight)
    setWindowSize(window.innerHeight)
  })
  const location = useLocation();

  return (
    <div className="App" >
      <StyledApp className="application-wrapper" coisa={windowSize} >
        <Navbar pathname={location.pathname} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/about" component={About} exact />
            <Route path="/projects" component={Projects} exact />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Switch>
        </AnimatePresence>
      </StyledApp>
    </div>
  );
};
export default App;
