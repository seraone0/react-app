import React, {useState} from "react";

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    
    

    

    increment() {
        setCount(count  + 1)
  };

    dicrement() {
        setCount(count - 1)
  }
  
  render(){
        return(
            <div>
                <h1>{count }</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={dicrement}>dicrement</button>
            </div>
        )
    }
}

multiplication = firstNumber * secondNumber
division = firstNumber / secondNumber

print('multiplication: ' + multiplication + ...)
print('division: ' + division + ...)
