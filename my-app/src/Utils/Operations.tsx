import React, { useState } from 'react';
import PropTypes from 'prop-types';

function handleOperation(data: {workingTotal: string, calculatingTotal: string, operation: string})  {
    let calcTotal: number =+ data.calculatingTotal;
    let workingTotal: number =+ data.workingTotal;
    switch(data.operation) {
        case ("+"): {
            calcTotal += workingTotal;
            data.workingTotal = "" + calcTotal;
            break;
        } 
        case ("-"): {
            calcTotal -= workingTotal;
            data.workingTotal = "" + calcTotal;
            break;
        }
        case ("*"): {
            calcTotal *= workingTotal;
            data.workingTotal = "" + calcTotal;
            break;
        }
        case ("/"): {
            calcTotal /= workingTotal;
            data.workingTotal = "" + calcTotal;
            break;
        }
    }
    data.calculatingTotal = "";
    data.operation = "";
    return data;
}

function handleDecimal(input: string,data: {workingTotal: string, calculatingTotal: string, operation: string}) {
    let workingTotal: number =+ data.workingTotal;
    let inputNum: number =+ input;
    console.log(input)
    console.log(workingTotal)

    workingTotal = workingTotal + inputNum * 0.1;
    
    console.log(workingTotal)

    data.workingTotal = "" + workingTotal;
    return data;


}


export function offShoreDecisionMaker(input: string,data: {workingTotal: string, calculatingTotal: string, operation: string}) {
    //TODO I think i have to break up the functions. OperationDecisionMaker, calculationsDecisionMaker


    switch(input) {
        case ("+"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            break;
        }
        case ("-"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            break;
        }
        case ("*"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            break;
        }
        case ("/"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            break;
        }
        case ("."): {
            data.operation = input;
            return data;
        }
        case ("(-)"): {
            //TODO
            break;
        }
        case ("="): {
            if (["+","-","*","/"].includes(data.operation)) {
                return handleOperation(data);
            }
            break;
        }
    }
    if (["1","2","3","4","5","6","7","8","9","0"].includes(input)){
        if (data.operation === ".") {
            handleDecimal(input, data);
        } else {
            data.workingTotal+=input;
        }
    }
    return data;
}



