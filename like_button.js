

let counter = 0;

let calcDisp = 0;
let calcPow = 1;

let calcHandler = function(eventObject) {
  

}




var likeHandler = function(eventObject) {
  counter++;
  document.querySelector("#likes").innerText = "Likes: " + counter;             //displays likes on html page
}
document.querySelector("#like_button").addEventListener("click",likeHandler);  //listens for clicks

document.querySelector(".calc_button").addEventListener("click",calcHandler);


