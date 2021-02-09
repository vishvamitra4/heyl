import React, { Component } from "react";
import './navbar.css';
import { Link } from 'react-router-dom';



class App extends Component {

    render() {
     

        return (
            <div>
                <div className="button">

                    <i onClick={this.props.clicked} class="fa fa-bars" aria-hidden="true"></i>
                    <h2>CHILLHBE</h2>
                </div>
                <div className={this.props.classs} >
                    <div className = "cut" >
                    <i onClick={this.props.clickedd} class="fa fa-times" aria-hidden="true"></i>
                    </div>
                
                    <div className="navbar-items">
                        
                        <Link className="link"  to="/heyl">Home</Link>
                        <Link  className="link" to="/about">About</Link>

                        <Link className="link"  to="/contact">Contact</Link>

                        <Link className="link"  to="/project">Project</Link>



                    </div>
                </div>
            </div>
        )
    }
}

export default App;