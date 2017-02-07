const main = document.querySelector('.main');
const button = main.querySelector('.button');

function displayStyles() {
  console.log(`I will eventually display the page styles`);
}


/* revist color flash tomorrow */
function changeButtonColor() {
  let clicked = false;
  if (clicked) {
    button.style.backgroundColor = 'yellow'
    clicked = true;
  }
}



// event listeners
button.addEventListener('click', displayStyles);
button.addEventListener('click', changeButtonColor);
