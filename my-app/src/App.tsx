import React, { useState } from 'react';
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'
import {handleInput} from './Utils/Operations' 


function App(): JSX.Element  {
  const [workingTotal, setWorkingTotal] = useState<string>("");
  const [calculatingTotal, setCalculatingTotal] = useState<string>("");
  const [operation, setOperation] = useState<string>("");

  const handleInput = (input: string) => {
    setWorkingTotal(workingTotal+input);
    const calcData = {workingTotal, calculatingTotal, operation};
    setCalculatingTotal(workingTotal);
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
