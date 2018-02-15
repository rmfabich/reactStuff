import React, { Component } from 'react';
import"./Barf.css"
//let turtleLand = new TurtleLand () ("Shell Mountain", "Shell Damage")
//Create another react component the same way as you did before
//This time, we're going to use this component WITHIN your other 
//component - that's right, we can nest components. In fact, you'll only 
//attach one component to an html tag - that is the entry point of your react. 
//ideally, you won't be doing anymore edits in html. Back to the component - Call it
// "Barf"

//export it in this file, then import it into your index.js file and put the tag
//inside the div's in your render method and viola! Look at your hard work in the browser


class TurtleLand extends Component{
    constructor(landrides, waterrides){
        super();
        this.landrides = landrides;
        this.waterrides = waterrides;
    }

    render(){
        return  (
            <div>
                <div className="landTurtles">
                    Shell damage!!
                    </div>
                    <div className="waterTurtles">
                    Tubular current!!!
                    </div>
                    <div className="landTurtles">
                    Shell Damage!!
                </div>
            </div>
                )
        }
    }

    export default TurtleLand;
