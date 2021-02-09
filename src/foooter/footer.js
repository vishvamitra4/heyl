import React from 'react';
import './footer.css';
import logo from './f.png';


function hh() {
    return (
        <div className="row">
            <div className="col1">
               <h3><span style = {{color : "white", background : "transparent"}}>!!</span>If you like to do. Then definetly you shuld do. Doesn't matter
                what you are loosing for this.<span style = {{color : "white", background : "transparent"}}>!!</span></h3>
            </div>

            <div className="col2">
                <div className="col21">
                    <ul>
                        <li><a href="/heyl">Home</a></li>
                        <li><a href="/about">About</a></li>

                        <li><a href="/project">Projects</a></li>

                        <li><a href="/contact">Contact</a></li>



                    </ul>

                </div>

                <div className="col22">
                    <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                </div>
            </div>

           
        </div>
    )
};

export default hh;