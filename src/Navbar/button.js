import React, {Component} from "react";
import './button.css';


class App extends Component {
    render(){
        return(
            <div className="button">
                  <i onClick={this.props.clicked} class="fa fa-bars" aria-hidden="true">Home</i>
                  
            </div>
        )
    }
}

export default App;