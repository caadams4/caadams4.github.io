counter = 0;
var clickHandler = function(eventObject) {
  counter++;
  document.querySelector("#likes").innerText = "Likes: " + counter;             //displays likes on html page
}

document.querySelector("#like_button").addEventListener("click",clickHandler);  //listens for clicks

array1 = ["xcom","ycom","zcom"];

map1 = array1.map(array1.toUpperCase());

console.log(map1);
