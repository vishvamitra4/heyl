import React, { Component } from 'react';
import './about.css';
import Phuto from './chillhbe.png';
import Footer from '../foooter/footer';
import Final from '../Main Content/final';


class App extends Component {
    render() {
        return (
            <div className="main">
            <div className = "about">
                <div className= "col1">
                 <img src={Phuto} alt="myphuto" /> 
                </div>
                <div className= "col2">
                    <h1><span style = {{color : "red"}}>CHILL</span>HBE</h1>
                    <h2>My Name is <span style= {{color : "blue"}}>Vishvamitra</span>.</h2>
                    <ul>
                        <li>I am a undergrad student at IIT Dhanbad.</li>
                        <li>I am in 2nd year of graduation.</li>
                        <li>I am from delhi.</li>
                        <li>Love music(Noob Singer).</li>
                        <li>Very enthusiast in solving problems by help of latest technologies.</li>
                    </ul>
                    <button>Download My CV</button>
                </div>
            </div>


            <div className = "about1">
                <div className= "col1">
                 <img src={Phuto} alt="myphuto" /> 
                </div>
                <div className= "col2">
                    <h1><span style = {{color : "red"}}>CHILL</span>HBE</h1>
                    <h2>My Name is <span style= {{color : "blue"}}>Vishvamitra</span>.</h2>
                    <ul>
                        <li>I am a undergrad student at IIT Dhanbad.</li>
                        <li>I am in 2nd year of graduation.</li>
                        <li>I am from delhi.</li>
                        <li>Love music(Noob Singer).</li>
                        <li>Very enthusiast in solving problem by help latest technologies.</li>
                    </ul>
                    <button>Download My CV</button>
                </div>
            </div>

            <Footer />
            <Final />
            </div>
        )
    }
};

export default App;