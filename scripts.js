const test = document.querySelector('.test');
const testH1 = test.querySelector('span');

function changeTestColor() {
  console.log(`you clicked the test div text`);
}

// event listeners
testH1.addEventListener('click', changeTestColor)
