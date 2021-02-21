import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/sidebar/navbar";
import Home from "./pages/home/home";
import Background from "./components/background/background";
import Branch from "./assets/svg/background/treeBranch";
import Tree from "./assets/svg/background/tree";
import { AnimatePresence } from "framer-motion";

const projectPromise = import("./pages/projects/projects");
const Projects = lazy(() => projectPromise);

const aboutPromise = import("./pages/about/about");
const About = lazy(() => aboutPromise);

const contactPromise = import("./pages/contact/contact");
const Contact = lazy(() => contactPromise);

const StyledApp = styled.div`
  width: 100%;
  height: ${(props) => props.screenHeight}px;
  position: relative;
`;

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerHeight);

  window.addEventListener("resize", (e) => {
    setWindowSize(window.innerHeight);
  });
  const location = useLocation();

  const backgroundVariants = {
    initial: {
      background:
        "linear-gradient(150deg, #0f2027 10%, #203a43 50%, #000e20 100%, #2C5364 100%, #f5af19, #f12711)",
    },
  };

  const backgroundStyle = {
    width: "100vw",
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  return (
    <div className="App">
      <StyledApp className="application-wrapper" screenHeight={windowSize}>
        <Navbar pathname={location.pathname} />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/" component={Home} exact />
            <Route path="/projects" exact>
              <Suspense
                fallback={
                  <Background
                    backgroundStyle={backgroundStyle}
                    backgroundVariants={backgroundVariants}
                  >
                    <Branch />
                    <Tree />
                  </Background>
                }
              >
                <Projects />
              </Suspense>
            </Route>
            <Route path="/about" exact>
              <Suspense
                fallback={
                  <Background
                    backgroundStyle={backgroundStyle}
                    backgroundVariants={backgroundVariants}
                  >
                    <Branch />
                    <Tree />
                  </Background>
                }
              >
                <About />
              </Suspense>
            </Route>
            <Route path="/contact">
              <Suspense
                fallback={
                  <Background
                    backgroundStyle={backgroundStyle}
                    backgroundVariants={backgroundVariants}
                  >
                    <Branch />
                    <Tree />
                  </Background>
                }
              >
                <Contact />
              </Suspense>
            </Route>
            <Redirect from="/" to="/" />
          </Switch>
        </AnimatePresence>
      </StyledApp>
    </div>
  );
};
export default App;
