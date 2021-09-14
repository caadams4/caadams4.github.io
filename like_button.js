




const Calculator = {
  display: "",
  input: 0,
  calcTmp: 0,
  calcTmp2: null,
  neg: false,
  plus: false,
  minus: false,
  mult: false,
  div: false,
  sign: false,
};

let updateCalcDisp = function(calcTmp,calcTmp2) {
  let opDisp = "";
  if (Calculator.plus === true) {opDisp = "+"; }
  else if (Calculator.minus === true) {opDisp = "-"; }
  else if (Calculator.mult === true) {opDisp = "*"; }
  else if (Calculator.div === true) {opDisp = "/"; }
  Calculator.display = Calculator.calcTmp + opDisp;
  if (Calculator.calcTmp2 !== null) {
    Calculator.display = "" + Calculator.calcTmp2 + opDisp + Calculator.calcTmp;
  }
  document.querySelector("#CalcDisplay").innerText = Calculator.display;
}

let calcInput = function(calcIn,calcTmp) {
  let input = (calcTmp * 10) + calcIn;
  console.log(input);
  console.log(calcTmp);

  document.querySelector("#CalcDisplay").innerText = input;
  Calculator.calcTmp = input;
  updateCalcDisp(input,Calculator.calcTmp);
  return input;
}

let calcInput1 = function(eventObject) {
  console.log(1);
  Calculator.calcTmp = calcInput(1,Calculator.calcTmp); 
  console.log(Calculator.calcTmp)
}

let calcInput2 = function(eventObject) {
  Calculator.calcTmp = calcInput(2,Calculator.calcTmp); 
}

let calcInput3 = function(eventObject) {
  Calculator.calcTmp = calcInput(3,Calculator.calcTmp); 
}

let calcInput4 = function(eventObject) {
  Calculator.calcTmp = calcInput(4,Calculator.calcTmp); 
}

let calcInput5 = function(eventObject) {
  Calculator.calcTmp = calcInput(5,Calculator.calcTmp); 
}

let calcInput6 = function(eventObject) {
  Calculator.calcTmp = calcInput(6,Calculator.calcTmp); 
}

let calcInput7 = function(eventObject) {
  Calculator.calcTmp = calcInput(7,Calculator.calcTmp); 
}

let calcInput8 = function(eventObject) {
  Calculator.calcTmp = calcInput(8,Calculator.calcTmp); 
}

let calcInput9 = function(eventObject) {
  Calculator.calcTmp = calcInput(9,Calculator.calcTmp); 
}

let calcInput0 = function(eventObject) {
  Calculator.calcTmp = calcInput(0,Calculator.calcTmp); 
}

let calcInputMinus = function(eventObject) {
  if (Calculator.minus === true) {return;}
  Calculator.calcTmp2 = Calculator.calcTmp;
  Calculator.calcTmp = "";
  Calculator.minus = true;
  updateCalcDisp(Calculator.calcTmp2,Calculator.calcTmp)
}

let calcInputPlus = function(eventObject) {
  if (Calculator.plus === true) {return;}
  Calculator.calcTmp2 = Calculator.calcTmp;
  Calculator.calcTmp = "";
  Calculator.plus = true;
  updateCalcDisp(Calculator.calcTmp2,Calculator.calcTmp)
}
let calcInputMult = function(eventObject) {
if (Calculator.mult === true) {return;}
Calculator.calcTmp2 = Calculator.calcTmp;
Calculator.calcTmp = "";
Calculator.mult = true;
updateCalcDisp(Calculator.calcTmp2,Calculator.calcTmp)
}
let calcInputDiv = function(eventObject) {
  if (Calculator.div === true) {return;}
  Calculator.calcTmp2 = Calculator.calcTmp;
  Calculator.calcTmp = "";
  Calculator.div = true;
  updateCalcDisp(Calculator.calcTmp2,Calculator.calcTmp)
}

let calcInputEquals = function(eventObject) {
  console.log(eventObject);
  if (minus === true) {
    calcTmp = calcTmp2 - calcTmp;
    minus = false;
    document.querySelector("#CalcDisplay").innerText = calcTmp;
    calcTmp = 0;
  }
  if (plus === true) {
    calcTmp = calcTmp2 + calcTmp;
    plus = false;
    document.querySelector("#CalcDisplay").innerText = calcTmp;
  }
  if (mult === true) {
    calcTmp = calcTmp2 * calcTmp;
    mult = false;
    document.querySelector("#CalcDisplay").innerText = calcTmp;
  }
  if (div === true) {
    calcTmp = calcTmp2 / calcTmp;
    div = false;
    document.querySelector("#CalcDisplay").innerText = calcTmp;
  }
}

let calcInputNeg = function(eventObject) {
  calcTmp = calcTmp * -1;
  document.querySelector("#CalcDisplay").innerText = calcTmp;
}

let calcInputClear = function(eventObject) {
  calcTmp = 0;
  document.querySelector("#CalcDisplay").innerText = calcTmp;
}
let calcInputAllClear = function(eventObject) {
  calcTmp = 0;
  calcTmp2 = 0;
  plus,minus,mult,div = false;
  document.querySelector("#CalcDisplay").innerText = calcTmp;
}





//document.querySelector("#CalcDisplay").innerText = calcTmp;  

var likeHandler = function(eventObject) {
  console.log(eventObject);
  counter++;
  document.querySelector("#likes").innerText = "Likes: " + counter;             //displays likes on html page
}
document.querySelector("#like_button").addEventListener("click",likeHandler);

document.querySelector("#calc1").addEventListener("click",calcInput1);
document.querySelector("#calc2").addEventListener("click",calcInput2);
document.querySelector("#calc3").addEventListener("click",calcInput3);
document.querySelector("#calc4").addEventListener("click",calcInput4);
document.querySelector("#calc5").addEventListener("click",calcInput5);
document.querySelector("#calc6").addEventListener("click",calcInput6);
document.querySelector("#calc7").addEventListener("click",calcInput7);
document.querySelector("#calc8").addEventListener("click",calcInput8);
document.querySelector("#calc9").addEventListener("click",calcInput9);
document.querySelector("#calc0").addEventListener("click",calcInput0);
document.querySelector("#calcEquals").addEventListener("click",calcInputEquals);
document.querySelector("#calcMinus").addEventListener("click",calcInputMinus);

document.querySelector("#calcDiv").addEventListener("click",calcInputDiv);
document.querySelector("#calcPlus").addEventListener("click",calcInputPlus);
document.querySelector("#calcMult").addEventListener("click",calcInputMult);
document.querySelector("#calcNeg").addEventListener("click",calcInputNeg);
//document.querySelector("#calcDec").addEventListener("click",calcInputDec);
document.querySelector("#calcClear").addEventListener("click",calcInputClear);
document.querySelector("#calcAllClear").addEventListener("click",calcInputAllClear);



//calcInput(calcIn,calcTmp) 








  //listens for clicks





