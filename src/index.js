import React from 'react';
import ReactDOM from 'react-dom'
import '../src/index.css'

class Calculator extends React.Component{
    constructor(props){
super(props);

this.state= {
    display:'0',
    firstInput:'',
    secondInput:'',
    operator:'',
    operatorClicked:false,
    equalsClicked:false
}


this.clear=this.clear.bind(this);
this.onClick=this.onClick.bind(this);
this.equals=this.equals.bind(this);
this.operatorClicked=this.operatorClicked.bind(this);

    }



//functions :


// sets display to "0" when C button is pressed
clear(){
    
this.setState({
    display:'0',
    firstInput:'',
    secondInput:'',
    operator:'',
    operatorClicked:false,
    equalsClicked:false,
    dotStatus:false
})
}


//gets the inputs
    onClick(e){
     
console.log(e.target.value)
if ((this.state.dotStatus==true)&&(e.target.value==".")){
    return
}
if(e.target.value==".") {
this.setState({
    dotStatus:true
})
}
 if ((this.state.operatorClicked===false) && (parseFloat(e.target.value)!==0)){
    this.setState({firstInput:this.state.firstInput+e.target.value,
                    display:this.state.firstInput+e.target.value},()=>{
        console.log("after:"+(this.state.firstInput))
    })}
    else if(parseFloat(e.target.value)!==0){

        this.setState({secondInput:this.state.secondInput+e.target.value,
            display:this.state.secondInput+e.target.value},()=>{
            console.log("after second:"+(this.state.secondInput))
        })}
    }
    

 

//gets the operator 

operatorClicked(e){
    let z = e.target.value;

this.setState({
    operatorClicked:true,
    operator:z,
},()=>{console.log(z)})}


 //shows the result

equals(){
switch(this.state.operator) {
    case "+":
        this.setState({
            display:parseFloat(this.state.firstInput)+parseFloat(this.state.secondInput)
        })
        return
    case "-":
        this.setState({
        display:parseFloat(this.state.firstInput)-parseFloat(this.state.secondInput)
         })
         return
    case "/":
        this.setState({
            display:parseFloat(this.state.firstInput)/parseFloat(this.state.secondInput)
             })
        return
    case "*":
        this.setState({
            display:parseFloat(this.state.firstInput)*parseFloat(this.state.secondInput)
         })
         return


    this.setState({
        firstInput:'',
        secondInput:'',
        operator:'',
        operatorClicked:false,
        equalsClicked:false
    })
}}





    render(){
    return(
            // <div className="parent-container">
            // <div className="side-container"></div>
             <div className="container">
                <div id="display" >{this.state.display} </div>
                <button className="item 0" id="zero" value="0" onClick={this.onClick} >0</button>
                <button className="item 1" id="one" value="1" onClick={this.onClick} >1</button>
                <button className="item 2" id="two" value="2" onClick={this.onClick} >2</button>
                <button className="item 3" id="three" value="3" onClick={this.onClick} >3</button>
                <button className="item 4" id="four" value="4" onClick={this.onClick} >4</button>
                <button className="item 5" id="five" value="5" onClick={this.onClick} >5</button>
                <button className="item 6" id="six" value="6"  onClick={this.onClick} >6</button>
                <button className="item 7" id="seven" value="7" onClick={this.onClick} >7</button>
                <button className="item 8" id="eight" value="8" onClick={this.onClick}>8</button>
                <button className="item 9" id="nine" value="9" onClick={this.onClick}  >9</button>
                <button className="item add" id="add" value="+" onClick={this.operatorClicked} >+</button>
                <button className="item subtract" value="-" id="subtract" onClick={this.operatorClicked}>-</button>
                <button className="item multiply" value="*" id="multiply" onClick={this.operatorClicked}>x</button>
                <button className="item divide" id="divide" value="/" onClick={this.operatorClicked}>/</button>
                <button className="item decimal" id="decimal" value="." onClick={this.onClick}>.</button>
                <button className="item clear" id="clear" onClick={this.clear} value="clear" onClick={this.clear}>C</button>
                <button className="item equal" id="equals" value="=" onClick={this.equals}>=</button>
            </div>
            // </div>
          
        )
        
    
 
    }
}

ReactDOM.render(<Calculator/>,document.getElementById('root'))