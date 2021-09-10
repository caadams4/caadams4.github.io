

let counter = 0;
var likeHandler = function(eventObject) {
  counter++;
  document.querySelector("#likes").innerText = "Likes: " + counter;             //displays likes on html page
}
document.querySelector("#like_button").addEventListener("click",likeHandler);  //listens for clicks




