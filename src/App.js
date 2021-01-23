import { Route, Switch, useLocation } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/sidebar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import { AnimatePresence } from "framer-motion";
import Background from './assets/svg/background/background'


const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <StyledApp>
        <Background />
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/about" component={About} exact/>
            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </StyledApp>
    </div>
  );
};
export default App;
