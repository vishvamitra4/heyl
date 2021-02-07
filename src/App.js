import React, { Component } from "react";
import Home from './home';
import About from './dynamiccompo/about';
import Contact from './dynamiccompo/contact';
import Navbar from './Navbar/overallnavbar';
import Project from './dynamiccompo/project';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (


      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
            <Route path="/project" component = {Project} />
          </Switch>
        </div>
      </Router>


    )
  }
}

export default App; 