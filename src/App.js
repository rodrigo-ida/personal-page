
import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/sidebar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import { AnimatePresence } from "framer-motion";



const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

`;


const App = () => {
  const location = useLocation();



 
  return (
    <div className="App">
      <StyledApp >
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/about" component={About} exact/>
            <Route path="/projects" component={Projects} exact/>
            <Route path="/" component={Home} >

            </Route>
          </Switch>
        </AnimatePresence>
      </StyledApp>
    </div>
  );
};
export default App;
