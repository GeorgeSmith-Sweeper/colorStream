const main = document.querySelector('.main');
const displayStylesBtn = main.querySelector('.displayStylesBtn');
const randomBtn = main.querySelector('.randomBtn');



// creates random colors in RGB
function randomColor() {
  let letters = '01234566789ABCDEF';
  let color = '#';
  let colorArray = ['first', 'second', 'third'];

  for (let i = 0; i < 6; i++) {
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

  let theGradient = `linear-gradient(${gradientDegree()}deg, ${randomColor()} 0%, ${randomColor()} 45%, ${randomColor()} 100%)`;

  return document.body.style.background = theGradient;
}


function displayStyles() {
  console.log(`I will eventually display the page styles`);
}

/* unfinished */
// function changeButtonColor() {
//   let clicked = false;
//   if (clicked) {
//     button.style.backgroundColor = 'yellow'
//     clicked = true;
//   }
// }



// Event Listeners
// button.addEventListener('click', changeButtonColor);
displayStylesBtn.addEventListener('click', displayStyles);
randomBtn.addEventListener('click', applyRandomColor);
