import React, { useState } from 'react';
import PropTypes from 'prop-types';

function handleOperation(data: {workingTotal: string, calculatingTotal: string, operation: string})  {
    let calcTotal: number =+ data.calculatingTotal;
    let workingTotal: number =+ data.workingTotal;
    switch(data.operation) {
        case ("+"): {
            calcTotal += workingTotal;
            break;
        } 
        case ("-"): {
            calcTotal -= workingTotal;
            break;
        }
        case ("*"): {
            calcTotal *= workingTotal;
            break;
        }
        case ("/"): {
            calcTotal /= workingTotal;
            break;
        }
    }
    data.calculatingTotal = "";
    data.calculatingTotal += calcTotal;
    return data;
}

export function offShoreDecisionMaker(input: string,data: {workingTotal: string, calculatingTotal: string, operation: string}) {
    //TODO I think i have to break up the functions. OperationDecisionMaker, calculationsDecisionMaker


    switch(input) {
        case ("+"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            return handleOperation(data);
        }
        case ("-"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            return handleOperation(data);
        }
        case ("*"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            return handleOperation(data);
        }
        case ("/"): {
            data.operation = input;
            data.calculatingTotal = data.workingTotal;
            data.workingTotal = "";
            return handleOperation(data);
        }
        case ("."): {
            //TODO
            break;
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
    data.workingTotal+=input;
    return data;
}



