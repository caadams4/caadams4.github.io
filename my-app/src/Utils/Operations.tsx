

function handleSolve(data: {workingTotal: string, calculatingTotal: string, operation: string})  {

    // takes in calculator data and performs mathematical operation based on operation<string> variable.

        // returns data:
            // workingTotal as the result of math ops
            // calculatingTotal and operation cleared in preparation for immediate follow on math ops

    let calcTotal: number =+ data.calculatingTotal; //converts to num   
    let workingTotal: number =+ data.workingTotal;  //

    switch(data.operation) {    // math ops based on operation sign
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
    data.calculatingTotal = ""; //clearing variables in prep for next problem  
    data.operation = "";        //
    return data;
}

function handleDecimal(input: string,data: {workingTotal: string, calculatingTotal: string, operation: string}) {

    // takes in calculator data and adds decimal value

        // returns data as decimal   

    if (data.workingTotal.includes(".")) {  // concatenates string input to the workingTotal if it is aleady a decimal
        data.workingTotal += input;
    } else {    // adds input as multiplied by one tenth to create decimal value
        data.workingTotal += input;  // adding input as a tenth
    }
    return data;
}

function handleNegative(data: {workingTotal: string, calculatingTotal: string, operation: string}) {

    // takes in calculator data and mulitplies the workingTotal by -1

        // returns data as workingTotal * -1 -- turning neg -> pos or pos -> neg 

    let workingTotal: number =+data.workingTotal; // converting to num
    workingTotal *= -1; // negating workingTotal
    data.workingTotal = "" + workingTotal;
    data.operation = "";
    return data;

}

function operationHandler(input: string,data: {workingTotal: string, calculatingTotal: string, operation: string}) {

    // takes in calculator data and adds or switches operation sign 

        // returns data as with desired operation sign value 

    if (["+","-","*","/"].includes(data.operation)) {    // if operation previously inputted..
        data.calculatingTotal = data.workingTotal;  //variables reset ot handle math operations 
        data.workingTotal = "";    // switching existing operation to last inputted operation
    } else {     // assigning operation to input
        data.calculatingTotal = data.workingTotal;
        data.workingTotal = ""; // clearing variables to prepare for follow input and ops
    }

    return data;

}

export function offShoreDecisionMaker(input: string,data: {workingTotal: string, calculatingTotal: string, operation: string}) {

    // takes in input from buttons and caluclator data FROM APP.TSX. Based on input & existing calcdata, decisions are made to manipulate calcdata
    
    switch(input) { // handles data based on input from buttons, calls handler functions as necessary
        case ("+"): {
            data.operation = input;
            return operationHandler(input, data);
        }
        case ("-"): {
            data.operation = input;
            return operationHandler(input, data);
        }
        case ("*"): {
            data.operation = input;
            return operationHandler(input, data);
        }
        case ("/"): {
            data.operation = input;
            return operationHandler(input, data);
        }
        case ("."): { // sets all input to workingTotal varialbe after "." to be a decimal value
            handleDecimal(input, data);
            return data;
        }
        case ("(-)"): { // negates workingTotal variable
            data.operation = input;
            return handleNegative(data);
        }
        case ("="): {   // calls function to solve equation
            if (["+","-","*","/"].includes(data.operation)) {
                return handleSolve(data);
            }
            break;
        }
    }
    if (["1","2","3","4","5","6","7","8","9","0"].includes(input)){ // in the input is (basically) an int
        data.workingTotal+=input;
    }
    return data;
}



