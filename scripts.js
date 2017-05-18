'use strict';


// query Selectors for page elements
const main = document.querySelector('.main');
const displayStylesBtn = main.querySelector('.displayStylesBtn');
const randomBtn = main.querySelector('.randomBtn');
const theStylesDiv = main.querySelector('.theStylesDiv');


// creates random colors in RGB
function randomColor() {
  const letters = '01234566789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
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

// will clear the displayed stylesDiv
function clearStylesDiv () {
  return theStylesDiv.textContent = "";
}

// Applies the random color to the 'body'
function applyRandomColor() {
  "use strict";
  var theGradient = `linear-gradient(${gradientDegree()}deg, ${randomColor()} 0%, ${randomColor()} 45%, ${randomColor()} 100%)`;
  clearStylesDiv();
  return document.body.style.background = theGradient;
}

// will modifiy the textContents to display the current CSS background
function displayStyles() {
  "use strict";
  var startingBackground = `linear-gradient(160deg, #c36251 0%, #2500d0 30%, #9a1e96 100%)`;
  var domBodyBackground = document.body.style.background;

  // if the background style hasn't been changed, display the original CSS
  var backgroundStyle = `background: ${domBodyBackground ? domBodyBackground : startingBackground};`;
  return theStylesDiv.textContent = backgroundStyle;
}

// Event Listeners
displayStylesBtn.addEventListener('click', displayStyles);
randomBtn.addEventListener('click', applyRandomColor);

