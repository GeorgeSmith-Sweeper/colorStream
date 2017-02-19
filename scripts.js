'use strict';

const main = document.querySelector('.main');
const displayStylesBtn = main.querySelector('.displayStylesBtn');
const randomBtn = main.querySelector('.randomBtn');



// creates random colors in RGB
function randomColor() {
  var letters = '01234566789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color;
}

// creates a random number from 1-180
function gradientDegree() {
  return (Math.round(Math.random() * (180 - 1) + 1).toString());
}

// modifies the percentage of color break points
// creates very abstract backgrounds...
function colorPercentage() {
   return (Math.round(Math.random() * (100 - 1 + 1)).toString());
}

// Applies the random color to the 'body'
function applyRandomColor() {
  "use strict";
  var theGradient = `linear-gradient(${gradientDegree()}deg, ${randomColor()} 0%, ${randomColor()} 45%, ${randomColor()} 100%)`;

  return document.body.style.background = theGradient;
}


function displayStyles() {
  console.log(`I will eventually display the page styles`)
}


function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + eventName, callback);
  }
}

// Event Listeners
displayStylesBtn.addEventListener('click', displayStyles);
randomBtn.addEventListener('click', applyRandomColor);

/* Possible workaround for eventlisteners in Firefox */
//addEvent(randomBtn, 'click', applyRandomColor());



//linear-gradient(2deg, rgb(198, 82, 213) 0%, rgb(186, 67, 59) 45%, rgb(126, 18, 9) 100%)
//linear-gradient(152deg, rgb(192, 181, 10) 0%, rgb(105, 184, 154) 45%, rgb(145, 32, 90) 100%)
//linear-gradient(97deg, rgb(72, 21, 167) 0%, rgb(200, 164, 75) 45%, rgb(157, 123, 189) 100%)
