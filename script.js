const words = ['jaguar', 'cat', 'piranah', 'lion', 'dog', 'lizard'];
let answer = '';
let numberOfChances = 6;
let wrongAnswers = 0;
let guessedWord = [];

function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function displayImage(isWrong) {
  const treeElement = document.querySelector('.tree');
  const hangmanParts = document.querySelectorAll('.wrong-answer-images');

  if (isWrong) {
    // Show the corresponding hangman part
    hangmanParts[wrongAnswers - 1].style.display = 'block';
  } else {
    // Hide the entire hangman and show the tree
    treeElement.style.display = 'block';
  }
}

const letterButtons = document.getElementById('letter-buttons');
const letters = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < letters.length; i++) {
  const button = document.createElement('button');
  button.textContent = letters[i];
  button.dataset.letter = letters[i];
  button.addEventListener('click', handleLetterClick);
  letterButtons.appendChild(button);
}


function handleLetterClick(event) {
  const button = event.target;
  guessedWord = answer.split('').map((char) => (char === button.dataset.letter ? char : '_'));
  const guessedWordDisplay = document.getElementById('guessed-word');
  guessedWordDisplay.textContent = guessedWord.join(' ');

  if (!answer.includes(button.dataset.letter)) {
    wrongAnswers++;
    numberOfChances--;
    const numberofChancesDisplay = document.getElementById('chances-display');
    numberofChancesDisplay.textContent = `Chances: ${numberOfChances}`;
    displayImage(true);
    const hangmanImage = document.querySelector('.wrong-answer-images img:last-child');
    hangmanImage.setAttribute('src', `assets/wrong-answer/hangman-head${wrongAnswers}.png`);
    if (wrongAnswers >= 6) {
      alert(`Game Over! The answer was ${answer}.`);
      resetGame();
    }
  } else if (guessedWord.indexOf('_') === -1) {
    alert(`Congratulations! You guessed the word "${answer}"!`);
    resetGame();
  } else {
    displayImage(false);
  }
}

function resetGame() {
  randomWord();
  wrongAnswers = 0;
  numberOfChances = 6;
  guessedWord = answer.split('').map(() => '_');
  const guessedWordDisplay = document.getElementById('guessed-word');
  guessedWordDisplay.textContent = guessedWord.join(' ');
  const numberofChancesDisplay = document.getElementById('chances-display');
  numberofChancesDisplay.textContent = `Chances: ${numberOfChances}`;
  const hangmanImage = document.querySelector('.wrong-answer-images img:last-child');
  hangmanImage.setAttribute('src', 'assets/wrong-answer/hangman-head1.png');
  const hangmanParts = document.querySelectorAll('.wrong-answer-images img');
  hangmanParts.forEach(part => part.style.display = 'none');
  const treeElement = document.querySelector('.tree');
  treeElement.style.display = 'none';
}

function initializeGame() {
  randomWord();
  guessedWord = answer.split('').map(() => '_');
  guessedLetters = [];
  guessesLeft = 6;
  updateDisplay();
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGame);


// const words = ['jaguar', 'cat', 'piranah', 'lion', 'dog', 'lizard'];
// let answer = '';
// let numberOfChances = 6;
// let wrongAnswers = 0;
// let guessedWord = [];

// function randomWord() {
//   answer = words[Math.floor(Math.random() * words.length)];
// }

// randomWord();

// function displayImage(isWrong) {
//   const treeElement = document.querySelector('.tree');
//   const hangmanParts = document.querySelectorAll('.wrong-answer-images img');

//   if (isWrong) {
//     // Show the corresponding hangman part
//     hangmanParts[wrongAnswers - 1].style.display = 'block';
//   } else {
//     // Hide the entire hangman and show the tree
//     treeElement.style.display = 'block';
//   }
// }

// function handleLetterClick(button) {
//   guessedWord = answer.split('').map((char) => (char === button ? char : '_'));
//   const guessedWordDisplay = document.getElementById('guessed-word');
//   guessedWordDisplay.textContent = guessedWord.join(' ');

//   if (!answer.includes(button)) {
//     wrongAnswers++;
//     numberOfChances--;
//     const numberofChancesDisplay = document.getElementById('chances-display');
//     numberofChancesDisplay.textContent = `Chances: ${numberOfChances}`;
//     displayImage(true);
//     const hangmanImage = document.querySelector('.wrong-answer-images img:last-child');
//     hangmanImage.setAttribute('src', `assets/wrong-answer/hangman-head${wrongAnswers}.png`);
//     if (wrongAnswers >= 6) {
//       alert(`Game Over! The answer was ${answer}.`);
//       resetGame();
//     }
//   } else if (guessedWord.indexOf('_') === -1) {
//     alert(`Congratulations! You guessed the word "${answer}"!`);
//     resetGame();
//   } else {
//     displayImage(false);
//   }
// }

// function resetGame() {
//   randomWord();
//   wrongAnswers = 0;
//   numberOfChances = 6;
//   guessedWord = answer.split('').map(() => '_');
//   const guessedWordDisplay = document.getElementById('guessed-word');
//   guessedWordDisplay.textContent = guessedWord.join(' ');
//   const numberofChancesDisplay = document.getElementById('chances-display');
//   numberofChancesDisplay.textContent = `Chances: ${numberOfChances}`;
//   const hangmanImage = document.querySelector('.wrong-answer-images img:last-child');
//   hangmanImage.setAttribute('src', 'assets/wrong-answer/hangman-head1.png');
//   const image = document.querySelector('.wrong-answer-images');
// }