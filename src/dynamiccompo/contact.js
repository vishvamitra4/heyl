import React, { Component } from 'react';
import './contact.css';
import Footer from '../foooter/footer';
import Final from '../Main Content/final';



class App extends Component {
    render() {
        return (
            <div className="main">
                <h1 style={{ marginBottom: "0px", color: "#0a425c" }}>Contact us</h1>
                <p style={{ color: "#0000006b" }}><b>Any question or remark? Just write us in message.</b></p>
                <div className="form-container">
                    <div className="col1">
                        <div>
                            <h3 style={{ color: "white" }}>Contact Information</h3>
                            <h4 style={{ color: "white" }}>I'll up the form and our team will back to you within 24 hours.</h4>
                        </div>
                        <div>
                            <div className="ii"></div>
                            <i class="fa fa-phone" aria-hidden="true"><span style={{
                                color: "white", fontFamily: "cursive",
                                marginLeft: "9px", fontSize: "60%"
                            }}>+012345768</span></i>
                            <i class="fa fa-envelope" aria-hidden="true"><span style={{
                                color: "white", fontFamily: "cursive",
                                marginLeft: "9px", fontSize: "60%"
                            }}
                            >vishvamitrakumarsingh@gmail.com</span></i>
                            <i class="fa fa-map-marker" aria-hidden="true"><span style={{
                                color: "white", fontFamily: "cursive",
                                marginLeft: "9px", fontSize: "60%"
                            }}>Jasper hostel IIT Dhanbad.</span></i>

                        </div>

                    </div>




                    <div className="col2">
                        <div className="col2row1">
                            <div>
                                <label>First Name</label><br></br>
                                <input type="text" placeholder="First Name..." />
                            </div>
                            <div>
                                <label>Last Name</label><br></br>
                                <input type="text" placeholder="Last Name..." />
                            </div>

                            <div>
                                <label>Email Id</label><br></br>
                                <input type="text" placeholder="Email Id..." />
                            </div>

                            <div>
                                <label>Phone</label><br></br>
                                <input type="text" placeholder="Phone No..." />
                            </div>
                            <div style={{ width: "100%" }}>
                                <p>Domain, In which you want to hire me. </p>
                                <select>
                                    <option value="0">Domain</option>
                                    <option value="1">Graphics</option>
                                    <option value="2">Web</option>
                                    <option value="3">Video</option>
                                    <option value="4">Content</option>

                                </select>
                            </div>
                            <div style={{ width: "100%" }}>
                                <label>Comment</label><br></br>
                                <textarea type="text" placeholder="Write Something..." />
                            </div>
                        </div>

                        <div className="col2row2">
                            <button>Send</button>

                        </div>
                    </div>
                </div>

                <Footer />
                <Final />

            </div>
        )
    }
};

export default App;