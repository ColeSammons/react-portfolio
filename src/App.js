import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact"
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/resume" component={Resume}/>
          <Route exact path="/portfolio" component={Portfolio}/>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
