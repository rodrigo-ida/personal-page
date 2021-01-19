import { Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Navbar from "./components/sidebar/navbar";
import Home from "./pages/home/home";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Route path="/" exact component={Home} />
//     </div>
//   );
// }

const StyledApp = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <div className="App">
      <StyledApp>
        <Navbar />
        <Route path="/" exact component={Home} />
      </StyledApp>
    </div>
  );
};
export default App;
