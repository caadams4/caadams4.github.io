import React, { useState } from 'react';
import { displayPartsToString } from 'typescript';
import { Display } from './components/Display'
import { Buttons } from './components/Buttons'



function App(): JSX.Element  {
  const [display, setDisplay] = useState<string>("Welcome!")
        // Make Func a JSX.Element
        // Declare each state its type!
        // Ex <Display consumes Screen calcDisplay and renders the displayText
  return (
    <div className="App">
      <div>
          <Display></Display>
          <Buttons></Buttons>
      </div>
    </div>
  );
}

export default App;
