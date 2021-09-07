import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

counter = 0;
var clickHandler = function(eventObject) {
  counter++;
  document.querySelector("#likes").innerText = "Likes: " + counter;             //displays likes on html page
}

document.querySelector("#like_button").addEventListener("click",clickHandler);  //listens for clicks
document.querySelector("#calc1").addEventListener("click",clickHandler);


