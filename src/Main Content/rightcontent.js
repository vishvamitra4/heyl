import React, { Component } from 'react';
import './rightcontent.css';
import logo from './myphoto.png';
import logo1 from './Romance in Rodeo.png';
import logo2 from './Red Black and White Corporate Business Participation Certificate.jpg';

class App extends Component {
    render() {
        return (
            <div className="right-content">
               
               <img className="img1"  src={logo1} alt="Project"/>
               <img className="img2"  src={logo} alt="Project"/>

               <img className="img3"  src={logo2} alt="Project"/>

               <img className="img4"  src={logo1} alt="Project"/>

               <img className="img5" src={logo2} alt="Project"/>


                

            </div>
        )
    }
};

export default App;