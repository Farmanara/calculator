(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(t,e,a){"use strict";a.r(e);var i=a(3),s=a(4),l=a(5),n=a(1),c=a(8),o=a(7),r=a(0),u=a.n(r),d=a(6),p=a.n(d),m=(a(15),function(t){Object(c.a)(a,t);var e=Object(o.a)(a);function a(t){var i;return Object(s.a)(this,a),(i=e.call(this,t)).state={display:"0",firstInput:"",secondInput:"",operator:"",operatorClicked:!1,equalsClicked:!1},i.clear=i.clear.bind(Object(n.a)(i)),i.onClick=i.onClick.bind(Object(n.a)(i)),i.equals=i.equals.bind(Object(n.a)(i)),i.operatorClicked=i.operatorClicked.bind(Object(n.a)(i)),i}return Object(l.a)(a,[{key:"clear",value:function(){this.setState({display:"0",firstInput:"",secondInput:"",operator:"",operatorClicked:!1,equalsClicked:!1,dotStatus:!1})}},{key:"onClick",value:function(t){var e=this;console.log(t.target.value),1==this.state.dotStatus&&"."==t.target.value||("."==t.target.value&&this.setState({dotStatus:!0}),!1===this.state.operatorClicked&&0!==parseFloat(t.target.value)?this.setState({firstInput:this.state.firstInput+t.target.value,display:this.state.firstInput+t.target.value},(function(){console.log("after:"+e.state.firstInput)})):0!==parseFloat(t.target.value)&&this.setState({secondInput:this.state.secondInput+t.target.value,display:this.state.secondInput+t.target.value},(function(){console.log("after second:"+e.state.secondInput)})))}},{key:"operatorClicked",value:function(t){var e=t.target.value;this.setState({operatorClicked:!0,operator:e},(function(){console.log(e)}))}},{key:"equals",value:function(){switch(this.state.operator){case"+":this.setState({display:parseFloat(this.state.firstInput)+parseFloat(this.state.secondInput)});case"-":this.setState({display:parseFloat(this.state.firstInput)-parseFloat(this.state.secondInput)});case"/":return void this.setState({display:parseFloat(this.state.firstInput)/parseFloat(this.state.secondInput)});case"*":this.setState({display:parseFloat(this.state.firstInput)*parseFloat(this.state.secondInput)}),this.setState({firstInput:"",secondInput:"",operator:"",operatorClicked:!1,equalsClicked:!1})}}},{key:"render",value:function(){return u.a.createElement("div",{className:"container"},u.a.createElement("div",{id:"display"},this.state.display," "),u.a.createElement("button",{className:"item 0",id:"zero",value:"0",onClick:this.onClick},"0"),u.a.createElement("button",{className:"item 1",id:"one",value:"1",onClick:this.onClick},"1"),u.a.createElement("button",{className:"item 2",id:"two",value:"2",onClick:this.onClick},"2"),u.a.createElement("button",{className:"item 3",id:"three",value:"3",onClick:this.onClick},"3"),u.a.createElement("button",{className:"item 4",id:"four",value:"4",onClick:this.onClick},"4"),u.a.createElement("button",{className:"item 5",id:"five",value:"5",onClick:this.onClick},"5"),u.a.createElement("button",{className:"item 6",id:"six",value:"6",onClick:this.onClick},"6"),u.a.createElement("button",{className:"item 7",id:"seven",value:"7",onClick:this.onClick},"7"),u.a.createElement("button",{className:"item 8",id:"eight",value:"8",onClick:this.onClick},"8"),u.a.createElement("button",{className:"item 9",id:"nine",value:"9",onClick:this.onClick},"9"),u.a.createElement("button",{className:"item add",id:"add",value:"+",onClick:this.operatorClicked},"+"),u.a.createElement("button",{className:"item subtract",value:"-",id:"subtract",onClick:this.operatorClicked},"-"),u.a.createElement("button",{className:"item multiply",value:"*",id:"multiply",onClick:this.operatorClicked},"x"),u.a.createElement("button",{className:"item divide",id:"divide",value:"/",onClick:this.operatorClicked},"/"),u.a.createElement("button",{className:"item decimal",id:"decimal",value:".",onClick:this.onClick},"."),u.a.createElement("button",Object(i.a)({className:"item clear",id:"clear",onClick:this.clear,value:"clear"},"onClick",this.clear),"C"),u.a.createElement("button",{className:"item equal",id:"equals",value:"=",onClick:this.equals},"="))}}]),a}(u.a.Component));p.a.render(u.a.createElement(m,null),document.getElementById("root"))},15:function(t,e,a){},9:function(t,e,a){t.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.a4df8209.chunk.js.map