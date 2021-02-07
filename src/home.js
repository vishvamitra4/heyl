import React, { Component } from "react";
import MainContent from "./Main Content/maincontent";
// import DynamicContent from './Scrolltop/scrolltop';
import Footer from './foooter/footer';
// import Navbar from './Navbar/overallnavbar';
import Final from './Main Content/final';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        
        <MainContent />
        <Footer />
        <Final />
        
      </div>
    )
  }
}

export default App; 