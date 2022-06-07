import React from 'react';
import { Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Article from "./pages/Article";
import Services from "./pages/Services";

import './App.scss';


function App() {

  return (
    <>
      <Route path="/" exact >
        <Home />
      </Route>
      <Route path="/About" exact >
        <About />
      </Route>
      <Route path="/Article" exact >
        <Article />
      </Route>
      <Route path="/Services" exact >
        <Services />
      </Route>
    </>
  );
}

export default App;
