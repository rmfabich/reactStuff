import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/lib/Button';
//in this file, create a react component that solves the following 
//javascript problems in the construtor function and then sets
//the solution in a component template as dictated
//and then have the application use the component. 
//ex 1)write a javascript function that gets the number of days from now
//until the end of class. Write the number of days in your react html.

//ex 2)using the object:
class Ex1 extends Component {
  constructor() {
    super();
    var today=new Date();
    var cmas=new Date(today.getFullYear(), 3, 27);
    if (today.getMonth()==3 && today.getDate()>27) {
      cmas.setFullYear(cmas.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    this.daysLeft = (Math.ceil((cmas.getTime()-today.getTime())/(one_day)));
    this.data = {
      "menu": {
      "id": "file",
        "value": "File",
        "popup": {
          "menuitem": [
            {"value": "New", "onclick": "CreateNewDoc()"},
            {"value": "Open", "onclick": "OpenDoc()"},
            {"value": "Close", "onclick": "CloseDoc()"}
          ]
        }
      } 
    }  
  }
  render() {
    return (
      <div>
        <p>"Number of days until school is over: {this.daysLeft}</p>
      </div>
    )  
  }
}

export default Ex1;
    
  




