import React, { useState } from 'react';
import './App.css';

function App(): JSX.Element  {

        // Make Func a JSX.Element
        // Declare each state its type!

  const [calcInput, setCalcInput] = useState<number>(0);
  const [calcTmp,setCalcTmp] = useState(0);
  const [calcTmp2, setCalcTmp2] = useState(null);
  const [calcDisp, setCalcDisp] = useState("");
  const [calcWorking, setCalcWorking] = useState(0);
  const [count, setCount] = useState(0);
  const [neg, setNeg] = useState(false);
  const [minus, setMinus] = useState(false);
  const [plus, setPlus] = useState(false);
  const [mult, setMult] = useState(false);
  const [div, setDiv] = useState(false);
  const [equals, setEquals] = useState(false);
  const [dec, setDec] = useState(false);
  const [operator, setOperator] = useState("y")

  const handleCalcDisplay = () => {
    let opDisp = "";
    if (plus === true) {opDisp = "+"; }
    else if (minus === true) {opDisp = "-"; }
    else if (mult === true) {opDisp = "*"; }
    else if (div === true) {opDisp = "/"; }
    setCalcTmp(calcWorking);
    setCalcDisp(calcTmp + opDisp);
    if (calcTmp2 !== null) {
      setCalcDisp("" + calcTmp2 + opDisp + calcTmp);
    }
  }

  const renderBtn = () => {
    return (<button>yee</button>)

  }

  const handleInput = (i) => {
    if (equals === true) {
      setCalcTmp(0);
      setEquals(false);
    }
    if (dec === true) {
      setCalcWorking(calcTmp+(calcInput*0.1))
      handleCalcDisplay();
    } else {
      setCalcWorking((calcTmp*10)+calcInput)
      handleCalcDisplay();
    }

  }
  

  return (

  <div>
    <div id="calculator">
      <div className="calcRow">
        <div id="calcDisp">
          text = {calcDisp}
            
        </div>
      </div>
      <div className="calcRow">
        <button className="calcBtn">AC</button>
        <button className="calcBtn">C</button>
        <button className="calcEquals">=</button>
      </div>
      <div className="calcRow">
        <button className="calcBtn" onClick={() => setCalcTmp(7)}handleInput}>7</button>
        <button className="calcBtn">8</button>
        <button className="calcBtn">9</button>
        <button className="calcBtn">/</button>
      </div>
      <div className="calcRow">
        <button className="calcBtn">4</button>
        <button className="calcBtn">5</button>
        <button className="calcBtn">6</button>
        <button className="calcBtn">-</button>
      </div>
      <div className="calcRow">
        <button className="calcBtn">1</button>
        <button className="calcBtn">2</button>
        <button className="calcBtn">3</button>
        <button className="calcBtn">+</button>
      </div>
      <div className="calcRow">
        <button className="calcBtn">(-)</button>
        <button className="calcBtn">0</button>
        <button className="calcBtn">.</button>
        <button className="calcBtn">*</button>
      </div>
          <p>You clicked {count} times</p>
            <button onClick={() => setCalcDisp(calcDisp + 1)}>
            Click me
          </button>
    </div>
  </div>

);
}

export default App;
