import React, { Component } from 'react';
import logo from './myphoto.png';
import './leftcontent.css';

class App extends Component {
    render() {
        return (
            <div className= "left-content">
              <img src={logo}  alt="Myphoto" />
              <h1><u><span style={{color: "red"}}>CHILL</span>HBE</u></h1>
              <p style={{marginTop: "-22px", textAlign: "center"}}>(Just be calm and do it for yourself.)</p>
              <h3>About Me:-</h3>
              <p>Myself Vishvamitra Kumar Singh. I am a 
                  undergrad student at IIT(ISM) DHANBAD, persuing Integrated Master Of
                   Technology In Applied Geophysics. My hobbies are music, video-editing.</p>
              <h3>Skills:-</h3>
              <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>BOOTSTRAP</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>

              </ul>


              
            </div>
        )
    }
};

export default App;