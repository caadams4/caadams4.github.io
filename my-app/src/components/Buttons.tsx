import React, { useState } from 'react';


export const Buttons = (props: {change: (text: string) => void}): JSX.Element => {
    const [active, setActive] = useState<boolean>(true);

    //const swapper = () => {
    //    props.change("YeeYee!");

   // }

   const swapper = () => {
    if (active) {
      props.change("Old prompt!!");
    } else {
      props.change("New Prompt!!!");
    }
    setActive(!active)
  }

    return (<button onClick={() => swapper()}>Swap</button>)
    /*return (
        <div>
            <div className="buttonRow">
                <button onClick={() => swapper()}>AC</button>
                <button onClick={() => swapper()}>C</button>
                <button onClick={() => swapper()}>=</button>
            </div>
            <div className="buttonRow">
               <button onClick={() => swapper()}>7</button>
               <button onClick={() => swapper()}>8</button>
               <button onClick={() => swapper()}>9</button>
               <button onClick={() => swapper()}>/</button>
            </div>
            <div className="buttonRow">
                <button onClick={() => swapper()}>4</button>
                <button onClick={() => swapper()}>5</button>
                <button onClick={() => swapper()}>6</button>
                <button onClick={() => swapper()}>-</button>
            </div>
            <div className="buttonRow">
                <button onClick={() => swapper()}>1</button>
                <button onClick={() => swapper()}>2</button>
                <button onClick={() => swapper()}>3</button>
                <button onClick={() => swapper()}>+</button>
            </div>
            <div className="buttonRow">
                <button onClick={() => swapper()}>(-)</button>
                <button onClick={() => swapper()}>0</button>
                <button onClick={() => swapper()}>.</button>
                <button onClick={() => swapper()}>*</button>
            </div>
        </div>
    )*/
}