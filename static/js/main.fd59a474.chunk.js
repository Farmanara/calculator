(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(_,e,t){},8:function(_,e,t){_.exports=t(9)},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),react_dom__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(5),react_dom__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__),_src_index_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(14),_src_index_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_src_index_css__WEBPACK_IMPORTED_MODULE_7__),Calculator=function(_React$Component){Object(_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_React$Component);var _super=Object(_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(_){var e;return Object(_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(e=_super.call(this,_)).state={display:"0",Input:"0",dotStatus:!1,operator:"",operatorClicked:!1},e.clear=e.clear.bind(Object(_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.onClick=e.onClick.bind(Object(_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.equals=e.equals.bind(Object(_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(_home_fighter_mp_fccProjects_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"clear",value:function(){this.setState({display:"0",Input:"0",dotStatus:!1})}},{key:"onClick",value:function(_){if("operator"===_.target.className&&this.setState({dotStatus:!1},(function(){})),(!0!==this.state.dotStatus||"."!==_.target.value)&&("."===_.target.value&&this.setState({dotStatus:!0}),this.state.Input+_.target.value!=="00")){this.setState({display:_.target.value});var e=this.state.Input;console.log("lastInput:"+e);var t=e.charAt(e.length-1);console.log("lastletter:"+t);var a=_.target.value;console.log("clickedItemValue: "+a);var l=e.charAt(e.length-2);if("-"==t&&"-"==a){var r=e.substring(0,e.length-1)+a;return void this.setState({Input:r,display:r})}if(("/"==l||"*"==l||"+"==l)&&"-"==t&&("/"==a||"*"==a||"+"==a)){var c=e.substring(0,e.length-2)+a;return void this.setState({Input:c,display:c})}if(("/"==t||"*"==t||"+"==t||"-"==t)&&("/"==a||"*"==a||"+"==a)){console.log("condition test");var s=e.substring(0,e.length-1)+a;return console.log("trimmed: "+s),void this.setState({Input:s,display:s})}if("0"==this.state.Input)return void this.setState({Input:_.target.value});var o=e+_.target.value;console.log("lastInput+value:"+o),this.setState({Input:o,display:o})}}},{key:"equals",value:function equals(){var results=this.state.Input,stringResult=eval(results).toString();this.setState({display:eval(results),Input:stringResult})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{id:"display"},this.state.display," "),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 0",id:"zero",value:"0",onClick:this.onClick},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 1",id:"one",value:"1",onClick:this.onClick},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 2",id:"two",value:"2",onClick:this.onClick},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 3",id:"three",value:"3",onClick:this.onClick},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 4",id:"four",value:"4",onClick:this.onClick},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 5",id:"five",value:"5",onClick:this.onClick},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 6",id:"six",value:"6",onClick:this.onClick},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 7",id:"seven",value:"7",onClick:this.onClick},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 8",id:"eight",value:"8",onClick:this.onClick},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item 9",id:"nine",value:"9",onClick:this.onClick},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"operator",id:"add",value:"+",onClick:this.onClick},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"operator",value:"-",id:"subtract",onClick:this.onClick},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"operator",value:"*",id:"multiply",onClick:this.onClick},"x"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"operator",id:"divide",value:"/",onClick:this.onClick},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item decimal ",id:"decimal",value:".",onClick:this.onClick},"."),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item clear",id:"clear",value:"clear",onClick:this.clear},"C"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"item equal",id:"equals",value:"=",onClick:this.equals},"="))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Calculator,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.fd59a474.chunk.js.map