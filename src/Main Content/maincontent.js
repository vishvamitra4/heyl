import React, { Component } from 'react';
import LeftContennt from './leftcontent';
import RightContent from './rightcontent';
import BottomContnent from './bottom';
import './maincontent.css';

class App extends Component {
    render() {
        return (
            <div className= "maincontent">
                <LeftContennt />
                <RightContent />
                <BottomContnent />
            </div>
        )
    }
};

export default App;