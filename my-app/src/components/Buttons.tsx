import React, { useState } from 'react';


export const Buttons = (props: {change: (text: string) => void}): JSX.Element => {
  const [calcDisp, setCalcDisp] = useState("");
  const [calcWorking, setCalcWorking] = useState(0);
  const [calcTmp, setCalcTmp] = useState(0);
  const [count, setCount] = useState(0);
  const [neg, setNeg] = useState(false);
  const [minus, setMinus] = useState(false);
  const [plus, setPlus] = useState(false);
  const [mult, setMult] = useState(false);
  const [div, setDiv] = useState(false);
  const [equals, setEquals] = useState(false);
  const [dec, setDec] = useState(false);
  const [operator, setOperator] = useState("y")

//TODO AC function

//TODO BackSpace funciton

//TODO Equals 

//TODO Add

//TODO Sub

//TODO div

//TODO mult

//TODO decimal

//TODO negative

    
    const handleInput = (calcInput: number) => {
        if (equals === true) {
          setCalcTmp(0);
          setEquals(false);
        }
        if (dec === true) {
          setCalcWorking(calcWorking+(calcInput*0.1))
          handleCalcDisplay();
        } else {
          setCalcWorking((calcWorking*10)+calcInput)
          handleCalcDisplay();
        }
    }




    const handleCalcDisplay = () => {
       props.change(calcWorking.toString());
    }




    return (
        <div>
            <div className="buttonRow">
                <button onClick={() => handleInput(0)}>AC</button>
                <button onClick={() => handleInput(0)}>C</button>
                <button onClick={() => handleInput(0)}>=</button>
            </div>
            <div className="buttonRow">
                <button onClick={() => handleInput(7)}>7</button>
                <button onClick={() => handleInput(8)}>8</button>
                <button onClick={() => handleInput(9)}>9</button>
                <button onClick={() => handleInput(0)}>/</button>
            </div>
            <div className="buttonRow">
                <button onClick={() => handleInput(4)}>4</button>
                <button onClick={() => handleInput(5)}>5</button>
                <button onClick={() => handleInput(6)}>6</button>
                <button onClick={() => handleInput(0)}>-</button>
            </div>
            <div className="buttonRow">
                <button onClick={() => handleInput(1)}>1</button>
                <button onClick={() => handleInput(2)}>2</button>
                <button onClick={() => handleInput(3)}>3</button>
                <button onClick={() => handleInput(0)}>+</button>
            </div>
            <div className="buttonRow">
                <button onClick={() => handleInput(7)}>(-)</button>
                <button onClick={() => handleInput(0)}>0</button>
                <button onClick={() => handleInput(0)}>.</button>
                <button onClick={() => handleInput(0)}>*</button>
            </div>
        </div>
    )
}