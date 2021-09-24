import React, { useState } from 'react';
import { displayPartsToString } from 'typescript';
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'
import {handleInput} from './Utils/Operations' 


function App(): JSX.Element  {
  const [display, setDisplay] = useState<string>("A-HOI");
  const [intInput, setIntInput] = useState<number>(0);
  const [intTmp, setIntTmp] = useState<number>(0);
  const [dec, setDec] = useState<boolean>(false);
  const [operation, setOperation] = useState<string>("");
  
  console.log(intInput)


  return (
    <div className="App">
      <div>
<<<<<<< Updated upstream
          <Display text={display}></Display>
          <Buttons change={setDisplay}></Buttons>
=======
          <Display calcSays = {display}></Display>
          <Buttons intInput = {setIntInput} opInput = {setDisplay}></Buttons>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;
