import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { MenuProvider } from "./state";
import Navbar from "./components/nav";
import About from "./About";
import HomeScreen from "./screens/HomeScreen";


const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bg);
    color: var(--text);
  }
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <Route exact path="/about" component={About} />
      </div>
      <div>
        <HomeScreen/>
      </div>
    </Router>
  );
};

export default App;