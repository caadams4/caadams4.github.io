

counter = 0;
var clickHandler = function(eventObject) {
  counter++;
  console.log(eventObject);
  document.querySelector("#likes").innerText = "Likes: " + counter;             //displays likes on html page
}

document.querySelector("#like_button").addEventListener("click",clickHandler);  //listens for clicks

document.getElementById("#calc1").addEventListener("click")


