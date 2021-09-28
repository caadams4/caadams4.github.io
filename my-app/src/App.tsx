import React, { useState } from 'react';
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'
import { offShoreDecisionMaker } from './Utils/Operations'

function App(): JSX.Element  {
  const [workingTotal, setWorkingTotal] = useState<string>("");
  const [calculatingTotal, setCalculatingTotal] = useState<string>("");
  const [operation, setOperation] = useState<string>("");
  const [calcDisp, setCalcDisp] = useState<string>("");

  //TODO create a stringbuilder for calc display

  const handleInput = (input: string) => {

    let calcData = {workingTotal, calculatingTotal, operation};
    let newObj = offShoreDecisionMaker(input, calcData);

    if (input === "AC") {
      setCalculatingTotal("");
      setWorkingTotal("");
      setOperation("");
      newObj.workingTotal = "";
      newObj.calculatingTotal = "";
      newObj.operation = "";
      setCalculatingTotal("");
    } else if (input === "C") {
      setWorkingTotal("");
      newObj.workingTotal = "";
    }

    setWorkingTotal(newObj.workingTotal);
    setOperation(newObj.operation);
    setCalculatingTotal(newObj.calculatingTotal);

    console.log(newObj);

    setCalcDisp(newObj.calculatingTotal+newObj.operation+newObj.workingTotal);

    }

  
  


  return (
    <div className="App">
      <div>
          <Display calcSays = {calcDisp}></Display>
          <Buttons newInput = {handleInput} ></Buttons>
      </div>
    </div>
  );
}


export default App;
