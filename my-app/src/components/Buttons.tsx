import React, { useState } from 'react';
<<<<<<< Updated upstream


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


=======
import PropTypes from 'prop-types';
import {handleInput,solve,clear} from '../Utils/Operations' 


export const Buttons = (props: {intInput: (incomingInput: number) => void, opInput: (setOperation: string) => void}): JSX.Element => {

    const [intInput, setIntInput] = useState<number>(0);
    const [intTmp, setIntTmp] = useState<number>(0);
    const [dec, setDec] = useState<boolean>(false);
    const [operation, setOperation] = useState<string>("");




    function btnPress(input: string): void {
        let num = 0;
        switch (input) {
            case ("AC") : {
                //TODO all clear function
                break;
            }
            case ("C") : {
                //TODO all clear function
                break;
            }            
            case ("*") : {
                //TODO all clear function
                break;
            }            
            case ("/") : {
                //TODO all clear function
                break;
            }            
            case ("+") : {
                //TODO all clear function
                break;
            }            
            case ("-") : {
                //TODO all clear function
                break;
            }            
            case ("(-)") : {
                //TODO all clear function
                break;
            }
                        
            case ("1") : {
                console.log("input")
                console.log(input)
                let numInput: number = +input;
                //console.log(input)
                handleIntInput(numInput)
                break;
            }
        }
    }
        
    function handleIntInput(numInput: number) {
        let tmp = (intTmp * 10) + numInput
        console.log("handling input")
        console.log(tmp)
        setIntTmp(tmp)
        console.log(intTmp)
        let tmpstr = "" + intTmp;
        props.opInput(tmpstr)
    }

    
    
  
>>>>>>> Stashed changes


    return (
        <div>
<<<<<<< Updated upstream
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
=======
            <div>
                <button onClick={() => clear(true)}>AC</button>  
                <button onClick={()=> clear(false)}>C</button>  
                <button onClick={() => solve}>=</button>          
            </div>
            <div>
                <button onClick={()=>props.intInput(9)}>9</button>   
                <button onClick={()=>props.intInput(8)}>8</button>   
                <button onClick={()=>props.intInput(7)}>7</button>   
                <button onClick={()=>props.opInput("*")}>*</button>   
            </div>
            <div>
                <button onClick={()=>props.intInput(6)}>6</button>   
                <button onClick={()=>props.intInput(5)}>5</button>   
                <button onClick={()=>props.intInput(4)}>4</button>   
                <button onClick={()=>props.opInput("/")}>/</button> 
            </div>
            <div>
                <button onClick={()=>props.intInput(3)}>3</button>   
                <button onClick={()=>props.intInput(2)}>2</button>   
                <button onClick={()=>btnPress("1")}>1</button>   
                <button onClick={()=>props.opInput("+")}>+</button> 
            </div>
            <div>
                <button onClick={()=>props.opInput("(-)")}>(-)</button>   
                <button onClick={()=>props.intInput(0)}>0</button>   
                <button onClick={()=>props.opInput(".")}>.</button>   
                <button onClick={()=>props.opInput("-")}>-</button> 
            </div>
        </div>
    )   

>>>>>>> Stashed changes
}