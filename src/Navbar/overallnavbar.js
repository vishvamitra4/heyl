import React, {Component} from "react";
import Navbar from './navbar';



class App extends Component {

    state= {
        myboolean: true
    }
   
     changehandler =()=>{
        const x= this.state.myboolean;
        const y= !x;
        this.setState({myboolean:y})
    }

    render(){

        const clas= [];


        if((this.state.myboolean)==false){
           clas.push('bb')
        };
        if((this.state.myboolean)==true){
            clas.push('cc')
         }
        return(
            <div>
                   <Navbar 
                   clickedd={this.changehandler}
                   clicked={this.changehandler}
                   classs= {clas} />
                  
            </div>
        )
    }
}

export default App;