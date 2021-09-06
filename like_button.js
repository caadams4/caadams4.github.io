counter = 0;
var clickHandler = function(eventObject) {
  counter++;
  document.querySelector("#likes").innerText = "Likes: " + counter;
}

document.querySelector("#like_button").addEventListener("click",clickHandler);


