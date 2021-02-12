
import { Redirect, Route, Switch, useLocation} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/sidebar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Projects from "./pages/projects/projects";
import { AnimatePresence } from "framer-motion";




const StyledApp = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
  position: relative;

`;


const App = () => {
  const location = useLocation();



 
  return (
    
    <div className="App">
      <StyledApp >
        <Navbar pathname={location.pathname}/>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/about" component={About} exact/>
            <Route path="/projects" component={Projects} exact/>
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
