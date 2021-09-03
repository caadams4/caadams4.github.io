let x = 2;
let y = 1;

if (x > y) {
    console.log("x is greater");
} else {
    console.log("y is greater");
}
var z = "reet";





function thePerfectDrink(base,alc) {
    //base and alc are ounces of liquid
    //base should be coke or re bull
    //alc is voka or whiskey
    //if base:alc ratio < 3, dilution is required
    let ratio = base/alc;
    if (ratio < 3) {                                //decision -> is the ratio < 3?
        console.log("dilute the solution!");            //prints 
    } else {
        console.log("Serve it up!");
    }                                               //if the above decision is false,
    return;                                             //prints 
}

thePerfectDrink(3,3);