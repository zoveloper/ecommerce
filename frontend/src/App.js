import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import './Global.scss'
import reset from "styled-reset";
import { MenuProvider } from "./state";
import Navbar from "./components/nav";
import CartIcon from './components/CartIcon'

import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import WorkScreen from "./screens/WorkScreen";
import WorkDetailScreen from "./screens/WorkDetailScreen";
import CartScreen from "./screens/CartScreen";
import Checkout from "./components/CheckoutForm/Checkout/Checkout";


const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    box-sizing: border-box;
  }
  body {
    font-family: "Montserrat", sans-serif;
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
    display: flex;
  }
`;

const App = () => {
  return (
    <Router>
      <div className="app">
        <GlobalStyle />
        <MenuProvider>
          <Navbar />
          <CartIcon />
        </MenuProvider>
        <Route exact path="/" component={WorkScreen} />
        <Route exact  path="/works" component={WorkScreen} />
        <Route  exact path="/works/:id" component={WorkDetailScreen} />
        <Route  path="/shop" component={HomeScreen} />
        <Route  path="/about" component={AboutScreen} />
        <Route  path="/product/:id" component={ProductScreen} />
        <Route  path="/cart/:id?" component={CartScreen} />
        <Route  path="/checkout" component={Checkout} />
      </div>
    </Router>
  );
};

export default App;