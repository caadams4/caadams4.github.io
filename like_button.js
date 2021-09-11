

let counter = 0;

let calcDisp = 0;
let calcPow = 1;
let calcIn = 0;
let calcTmp = 0;
let calcTmp2 = 0;
let plus,minus,mult,div = false;

let calcInput = function(calcIn,calcTmp) {
  parseInt(calcTmp);
  parseInt(calcIn);
  return ((calcTmp * 10) + calcIn);
}
let calcInput1 = function(eventObject) {
  parseInt(calcTmp);
  calcTmp = calcInput(1,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput2 = function(eventObject) {
  calcTmp = calcInput(2,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput3 = function(eventObject) {
  calcTmp = calcInput(3,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput4 = function(eventObject) {
  calcTmp = calcInput(4,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput5 = function(eventObject) {
  calcTmp = calcInput(5,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput6 = function(eventObject) {
  calcTmp = calcInput(6,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput7 = function(eventObject) {
  calcTmp = calcInput(7,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput8 = function(eventObject) {
  calcTmp = calcInput(8,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput9 = function(eventObject) {
  calcTmp = calcInput(9,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInput0 = function(eventObject) {
  calcTmp = calcInput(0,calcTmp);
  console.log(eventObject);
  console.log(calcTmp);
  document.querySelector("#CalcDisplay").innerText = calcTmp;  
}

let calcInputMinus = function(eventObject) {
  calcTmp2 = calcTmp;
  calcTmp = 0;
  minus = true;
}

let calcInputPlus = function(eventObject) {
  calcTmp2 = calcTmp;
  calcTmp = 0;
  plus = true;
}
let calcInputMult = function(eventObject) {
  calcTmp2 = calcTmp;
  calcTmp = 0;
  mult = true;
}
let calcInputDiv = function(eventObject) {
  calcTmp2 = calcTmp;
  calcTmp = 0;
  div = true;
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




document.querySelector("#CalcDisplay").innerText = calcTmp;  

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



calcInput(calcIn,calcTmp) 








  //listens for clicks





