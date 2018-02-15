import React from 'react';
import './ex1.css';
//in this file, create a react component that solves the following 
//javascript problems in the construtor function and then sets
//the solution in a component template as dictated
//and then have the application use the component. 
//ex 1)write a javascript function that gets the number of days from now
//until the end of class. Write the number of days in your react html.

//ex 2)using the object:
class Ex1 extends React.Component {
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
    return  (
      <div>
        <p className="boldText">Number of days until Code School Ends: {this.daysLeft}</p>
      </div>
    )
  }
}

export default Ex1

//go through each menuitem and display the "value" in your react html

//ex3) using the array.reduce function, multiply all the values in the array [1,2,9]. Display 
//the end product in your react html (jsx)

