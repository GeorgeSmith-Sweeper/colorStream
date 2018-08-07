'use strict';

// query Selectors for page elements
const main = document.querySelector('.main');
const displayStylesBtn = main.querySelector('.displayStylesBtn');
const randomBtn = main.querySelector('.randomBtn');
const theStylesDiv = main.querySelector('.theStylesDiv');

// creates random colors in RGB
const randomColor = () => {
  const letters = '01234566789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// creates a random number from 1-180
const gradientDegree = () => {
  return (Math.round(Math.random() * ((180 - 1) + 1)).toString());
};

// will clear the displayed stylesDiv
const clearStylesDiv = () => {
  theStylesDiv.textContent = '';
  return theStylesDiv;
};

// Applies the random color to the 'body'
const applyRandomColor = () => {
  const theGradient = `linear-gradient(${gradientDegree()}deg, ${randomColor()} 0%, ${randomColor()} 45%, ${randomColor()} 100%)`;
  clearStylesDiv();
  document.body.style.background = theGradient;
  return document.body.style.background;
};

// will modifiy the textContents to display the current CSS background
const displayStyles = () => {
  const startingBackground = 'linear-gradient(73deg, rgb(228, 50, 27) 0%, rgb(198, 20, 104) 45%, rgb(217, 4, 230) 100%)';
  const domBodyBackground = document.body.style.background;

  // if the background style hasn't been changed, display the original CSS
  const backgroundStyle = `background: ${domBodyBackground ? domBodyBackground : startingBackground};`;
  theStylesDiv.textContent = backgroundStyle;
  return theStylesDiv;
};

// Event Listeners
displayStylesBtn.addEventListener('click', displayStyles);
randomBtn.addEventListener('click', applyRandomColor);

