import React from 'react';
import ReactDOM from 'react-dom'
import '../src/index.css'

class Calculator extends React.Component{

    constructor(props){
super(props);
    };

    render(){
    return  (
            // <div className="parent-container">
            // <div className="side-container"></div>
             <div className="container">
                <div className="display" >Sorry! Under Construction! </div>
                <button className="item 0" id="zero">0</button>
                <button className="item 1" id="one">1</button>
                <button className="item 2" id="two">2</button>
                <button className="item 3" id="three">3</button>
                <button className="item 4" id="four">4</button>
                <button className="item 5" id="five">5</button>
                <button className="item 6" id="six">6</button>
                <button className="item 7" id="seven">7</button>
                <button className="item 8" id="eight">8</button>
                <button className="item 9" id="nine">9</button>
                <button className="item add" id="add">+</button>
                <button className="item subtract" id="subtract">-</button>
                <button className="item multiply" id="multiply">x</button>
                <button className="item divide" id="divide">/</button>
                <button className="item decimal" id="decimal">.</button>
                <button className="item clear" id="clear">C</button>
                <button className="item equal" id="equal">=</button>
            </div>
            // </div>
          
        )
        
    
 
    }
}

ReactDOM.render(<Calculator/>,document.getElementById('root'))