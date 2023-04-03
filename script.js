// array of words that will be using 
let words = [ 'jaguar', 'cat', 'piranah', 'lion', 'dog', 'lizard'];

//this is going to select random array 
let selectedWord = words[Math.floor(Math.random() * words.length)];

// code that will decrease number of chances when the wrong button is selected
let numberofChances = 5;

function letterButtonSel() {
  let selectedWord  = letterButtonSel.value;
  // Check if guessedLetter is in selectedWord and update currentWordState
  // ...

  if (!selectedWord.includes(words)) {
    numberofChances--;
    numberofChancesDisplay.innerText = `Chances: ${numberofChances}`;
    hangmanImage.setAttribute('src', `hangman-${lives}.png`);
  }
}


// when button is selected it will get the letters 
let buttons = document.querySelectorAll('.alpha-button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        let buttonClass = event.target.className;
        console.log ('Button with class ${buttonClass} was clicked');
    });
});





let currentWord = Array(selectedWord.length).fill('_');
// let alphaButtons = document.getElementsByClassName('.alpha-button')

// for (let i = 0; i < alphaButtons.length; i++){
//     alphaButtons[i].addEventListener('click'),function() {

//     }
// }

// if (guessedLetters.includes(letter)) {
//     return letter;
//   } else {
//     return '_';
//   }

