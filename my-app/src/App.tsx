import React, { useState } from 'react';
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'
import { offShoreDecisionMaker } from './Utils/Operations'

function App(): JSX.Element  {
  const [workingTotal, setWorkingTotal] = useState<string>("");
  const [calculatingTotal, setCalculatingTotal] = useState<string>("");
  const [operation, setOperation] = useState<string>("");

  const handleInput = (input: string) => {
    let calcData = {workingTotal, calculatingTotal, operation};
    
    let newObj = offShoreDecisionMaker(input, calcData);

    setWorkingTotal(newObj.workingTotal);
    setOperation(newObj.operation);
    setCalculatingTotal(newObj.calculatingTotal);
    //input goes to working total


    //setWorkingTotal(workingTotal+input);
    //setWorkingTotal(prevWorkingTotal=>prevWorkingTotal+input);
    console.log(newObj);




    
    //offShoreDecisionMaker(input,calcData);


    //if operation != "", calcTotal = calcWorking, calcWorking = 0

    }

  
  


  return (
    <div className="App">
      <div>
          <Display calcSays = {calculatingTotal}></Display>
          <Buttons newInput = {handleInput} ></Buttons>
      </div>
    </div>
  );
}


export default App;
