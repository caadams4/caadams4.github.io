import React, { useState, useEffect } from 'react';

counter = 0;
var clickHandler = function(eventObject) {
  counter++;
  document.querySelector("#likes").innerText = "Likes: " + counter;             //displays likes on html page
}

document.querySelector("#like_button").addEventListener("click",clickHandler);  //listens for clicks


