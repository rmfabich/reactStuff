import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BarfTwo from "./Barf/Barf.js";
import App from "./App.js"
import TurtleLand from "./Barf/Barf.js";
import Ex1 from './ex1.js';
import Cell from './Barf/array.js';
//import"./Barf/Barf.css"
//Lets build yer first react component! Woo hoo!!!!!
//At it's essence a react 'component' is simply a
//function that has a render method that returns the following:
//(
//  <div>
//  </div>
//)

class BunnyLand extends React.Component{
    constructor(rollercoaster){
        super();
        this.rollercoaster = rollercoaster;
        this.array = [0,1,2,3,4,5,6,7,8]
    }

    render(){
        let row1=[]
        let row2=[]
        let row3=[]
        for (var i = 0; i < this.array.length; i++ ) {
            if (i <= 2) {
                row1.push(<td><Cell integer={this.array[i]} /></td>)
            } else if (i <= 5 ) {
                row2.push(<td><Cell integer={this.array[i]} /></td>)
            } else {
                row3.push(<td><Cell integer={this.array[i]} /></td>)
            }
        }
        return  (
            <div>
                <div className="bunnyLandText skyTurtles">
                Thunder Fluff!!!!
            
                <div>      
                    </div>
                    <div className="blankSpace">
                    </div>
                <div className="bunnyLandText">
                    Yo Dude!!!
                    <div className="turtleLandText">
                    Eat at Turtleland!!
                    <table>
                        <tr>
                            <th>FOOD</th>
                            <th>$$PRICE$$</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <th>Turtle Soup</th>
                            <th>$15.99</th>
                            <th>"Fresh-ish"</th>
                        </tr>
                        <tr>
                            <th>Turtle Shell Tacos</th>
                            <th>$3999.99</th>
                            <th>Fermented</th>
                        </tr>
                    </table>

                    </div>
                    <div>
                    <table>
                        Fun with Numbers :)
                        <tr>
                            {row1}
                        </tr>
                        <tr>
                            {row2}
                        </tr>
                        <tr>
                            {row3}
                        </tr>
                    </table>
                    </div>
                    
                    
                </div>
                <p  classname="excitedText"><TurtleLand/></p>
            </div>
            <p  classname="boldText"><Ex1/></p>
            </div>
                )
        }
    }


var fluffiness = new BunnyLand("thunder fluff");







//that's it, really. So lets make one
//step 1: build a class, call it w/e you want
//step 2: make it a subclass of "React.Component"
//step 3: give it a render() method
//step4: within the render method, return an div tag. Throw some html inside of there
//BUT IT STILL WONT WORK


//we need to get this puppy working with the html. Below is a way to 
//inject a component into html
ReactDOM.render(<BunnyLand/>, document.getElementById("root"));
//step 4: insert your class name where it says "insert class here". Find the index.html file (in ../public)
//and select an html id to attach your react app to.
//the second arg of ReactDOM.render is your familiar document.getElementById(). Use the id you just
//selected. 
//Your app should refresh itself - check it out, in theory you got a working react 
//component