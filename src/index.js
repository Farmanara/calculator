import React from 'react';
import ReactDOM from 'react-dom'
import '../src/index.css'




class Calculator extends React.Component{
    constructor(props){
super(props);

this.state= {
    display:"0",
    Input:'0',
    dotStatus:false,
    operator:'',
    operatorClicked:false,
    //equalsClicked:false
}


this.clear=this.clear.bind(this);
this.onClick=this.onClick.bind(this);
this.equals=this.equals.bind(this);
this.handleDelete=this.handleDelete.bind(this);
    }



//functions :



//perfom like backspace when Del key is pressed

handleDelete(){

let input=this.state.Input
this.setState({
    Input:input.slice(0,-1),
    display:input.slice(0,-1)
})
}



// sets display to "0" when C button is pressed
clear(){
    
this.setState({
    display:"0",
    Input:'0',
    
    
    dotStatus:false
})
}


//gets the inputs
    onClick(e){

if(e.target.className==="operator"){
    this.setState({
        dotStatus:false,
    },()=>{})

}

if ((this.state.dotStatus===true)&&(e.target.value===".")){
    return
}

if(e.target.value===".") {
this.setState({
    dotStatus:true
})}


     if((this.state.Input+e.target.value)!=="00"){
    this.setState({display:e.target.value})

         let lastInput=this.state.Input;
       console.log("lastInput:"+lastInput)

//prevent double operators
let lastLetter=lastInput.charAt(lastInput.length-1)
 console.log("lastletter:"+lastLetter)
 let clickedValue= e.target.value;
 console.log ('clickedItemValue: ' + clickedValue)
 let secondLastLetter= lastInput.charAt(lastInput.length-2);

 // prevents double negatives 
if ((lastLetter=="-") && (clickedValue=="-")) {
    
    let trimmed = lastInput.substring(0, lastInput.length - 1)+ clickedValue;
   this.setState({
       Input:trimmed,
       display:trimmed
   })
   return
}
// turns *-+ to +
 if((secondLastLetter=="/"||secondLastLetter=="*"||secondLastLetter=="+")&&(lastLetter=="-") && (clickedValue=="/"||clickedValue=="*"||clickedValue=="+" ) ){
     let trimmed2 = lastInput.substring(0,lastInput.length-2)+clickedValue;
     this.setState({
         Input:trimmed2,
         display:trimmed2
     })
     return
 }

 // replaces the operator to the newest operator clicked consecutively
 if((lastLetter=="/"||lastLetter=="*"||lastLetter=="+"||lastLetter=="-") && (clickedValue=="/"||clickedValue=="*"||clickedValue=="+" ) )
 {
     console.log("condition test")
     let trimmed = lastInput.substring(0, lastInput.length - 1)+ clickedValue;
     console.log("trimmed: " +trimmed)
    this.setState({
        Input:trimmed,
        display:trimmed
    })
    return

 }


       if (this.state.Input=="0") {
            
          this.setState({
              Input:e.target.value
          })
          return
       } 
        let input=lastInput+e.target.value
        console.log("lastInput+value:"+ input)
       
    this.setState({Input:input,
                    display:input})
                    
    }
}
                

 //shows the result

equals(){
    let results=this.state.Input
    let stringResult=eval(results).toString();
    this.setState({
        display:eval(results),
        Input:stringResult

    })
    
}




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
                <button className="operator" id="add" value="+" onClick={this.onClick} >+</button>
                <button className="operator" value="-" id="subtract" onClick={this.onClick}>-</button>
                <button className="operator" value="*" id="multiply" onClick={this.onClick}>x</button>
                <button className="operator" id="divide" value="/" onClick={this.onClick}>/</button>
                <button className="item decimal " id="decimal" value="." onClick={this.onClick}>.</button>
                <button className="item clear" id="clear"  value="clear" onClick={this.clear}>C</button>
                <button className="item equal" id="equals" value="=" onClick={this.equals}>=</button>
                <button className= "item del"  id="del" onClick={this.handleDelete}>Del</button>
            </div>
            // </div>
          
        )
        
    
 
    }
}

ReactDOM.render(<Calculator/>,document.getElementById('root'))