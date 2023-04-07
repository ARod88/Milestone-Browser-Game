const words = ["javascript", "html", "css", "react", "angular", "vue"];
const maxWrong = 6;
let mistakes = 0;
let guessed = [];
let word = "";

// select elements from the HTML document
const guessedWord = document.getElementById("guessed-word");
const chancesDisplay = document.getElementById("chances-display");
const letterButtons = document.getElementById("letter-buttons");
const resetButton = document.getElementById("reset-button");
const hangmanHead = document.querySelector(".hangman-head");
const hangmanBody = document.querySelector(".hangman-body");
const rightArm = document.querySelector(".right-arm");
const leftArm = document.querySelector(".left-arm");
const rightLeg = document.querySelector(".right-leg");
const leftLeg = document.querySelector(".left-leg");

// create letter buttons dynamically
function createLetterButtons() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.innerText = letter;
    button.classList.add("letter-button");
    letterButtons.appendChild(button);
  });
}

// reset the game
function reset() {
  mistakes = 0;
  guessed = [];
  hangmanHead.style.display = "none";
  hangmanBody.style.display = "none";
  rightArm.style.display = "none";
  leftArm.style.display = "none";
  rightLeg.style.display = "none";
  leftLeg.style.display = "none";
  word = words[Math.floor(Math.random() * words.length)];
  guessedWord.innerText = Array(word.length).fill("_").join(" ");
  chancesDisplay.innerText = `Chances: ${maxWrong}`;
  document.querySelectorAll(".letter-button").forEach((button) => {
    button.disabled = false;
  });
}

// update the guessed word
function updateGuessedWord() {
  guessedWord.innerText = word
    .split("")
    .map((letter) => (guessed.includes(letter) ? letter : "_"))
    .join(" ");
}

// handle guess
function handleGuess(e) {
  if (e.target.tagName !== "BUTTON") return;
  const letter = e.target.innerText;
  if (word.includes(letter)) {
    if (!guessed.includes(letter)) {
      guessed.push(letter);
      updateGuessedWord();
    }
  } else {
    mistakes++;
    chancesDisplay.innerText = `Chances: ${maxWrong - mistakes}`;
    if (mistakes === 1) {
      hangmanHead.style.display = "block";
    } else if (mistakes === 2) {
      hangmanBody.style.display = "block";
    } else if (mistakes === 3) {
      rightArm.style.display = "block";
    } else if (mistakes === 4) {
      leftArm.style.display = "block";
    } else if (mistakes === 5) {
      rightLeg.style.display = "block";
    } else {
      leftLeg.style.display = "block";
      chancesDisplay.innerText = "Game Over!";
      document.querySelectorAll(".letter-button").forEach((button) => {
        
      });
    }
  }
  if (word.split("").every((letter) => guessed.includes(letter))) {
    chancesDisplay.innerText = "You Won!";
    document.querySelectorAll(".letter-button").forEach((button) => {
      
    });
  }
}

// add event listeners to the buttons
letterButtons.addEventListener("click", handleGuess);
resetButton.addEventListener("click", reset);

// create the letter buttons
createLetterButtons();

// reset the game initially
reset();
