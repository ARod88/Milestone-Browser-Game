let words: string[] = ["javascript", "html", "css", "react", "angular", "vue"];
const maxWrong: number = 6;
let mistakes: number = 0;
let guessed: string[] = [];
let word: string = "";

// select elements from the HTML document
const guessedWord: HTMLElement | null = document.getElementById("guessed-word");
const chancesDisplay: HTMLElement | null = document.getElementById("chances-display");
const letterButtonsContainer: HTMLElement | null = document.getElementById("letter-buttons");
const resetButton: HTMLElement | null = document.getElementById("reset-button");
const hangmanHead: HTMLElement | null = document.querySelector(".hangman-head");
const hangmanBody: HTMLElement | null = document.querySelector(".hangman-body");
const rightArm: HTMLElement | null = document.querySelector(".right-arm");
const leftArm: HTMLElement | null = document.querySelector(".left-arm");
const rightLeg: HTMLElement | null = document.querySelector(".right-leg");
const leftLeg: HTMLElement | null = document.querySelector(".left-leg");

// create letter buttons dynamically
function createLetterButtons(): void {
  if (letterButtonsContainer !== null) {
    "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
      const button: HTMLButtonElement = document.createElement("button");
      button.innerText = letter;
      button.classList.add("letter-button");
      letterButtonsContainer.appendChild(button); // Append the button to the letter-buttons div
    });
  }
}

// reset the game
function reset(): void {
  mistakes = 0;
  guessed = [];

  if (hangmanHead !== null) {
    hangmanHead.style.display = "none";
  }

  if (hangmanBody !== null) {
    hangmanBody.style.display = "none";
  }

  if (rightArm !== null) {
    rightArm.style.display = "none";
  }

  if (leftArm !== null) {
    leftArm.style.display = "none";
  }

  if (rightLeg !== null) {
    rightLeg.style.display = "none";
  }

  if (leftLeg !== null) {
    leftLeg.style.display = "none";
  }

  word = words[Math.floor(Math.random() * words.length)];

  if (guessedWord !== null) {
    guessedWord.innerText = Array(word.length).fill("_").join(" ");
  }

  if (chancesDisplay !== null) {
    chancesDisplay.innerText = `Chances: ${maxWrong}`;
  }

  document.querySelectorAll(".letter-button").forEach((button) => {
    if (button instanceof HTMLButtonElement) {
      button.disabled = false;
    }
  });
}

// update the guessed word
function updateGuessedWord(): void {
  if (guessedWord !== null) {
    guessedWord.innerText = word
      .split("")
      .map((letter) => (guessed.includes(letter) ? letter : "_"))
      .join(" ");
  }
}

// handle guess
function handleGuess(e: MouseEvent): void {
  if (e.target instanceof HTMLButtonElement) {
    const letter: string = e.target.innerText;
    if (word.includes(letter)) {
      if (!guessed.includes(letter)) {
        guessed.push(letter);
        updateGuessedWord();
      }
    }
  } else {
    mistakes++;
    if (chancesDisplay !== null) {
      chancesDisplay.innerText = `Chances: ${maxWrong - mistakes}`;
    }
    if (mistakes === 1 && hangmanHead !== null) {
      hangmanHead.style.display = "block";
    } else if (mistakes === 2 && hangmanBody !== null) {
      hangmanBody.style.display = "block";
    } else if (mistakes === 3 && rightArm !== null) {
      rightArm.style.display = "block";
    } else if (mistakes === 4 && leftArm !== null) {
      leftArm.style.display = "block";
    } else if (mistakes === 5 && rightLeg !== null) {
      rightLeg.style.display = "block";
    } else if (leftLeg !== null) {
      leftLeg.style.display = "block";
    }
    if (chancesDisplay !== null) {
      chancesDisplay.innerText = "Game Over!";
    }
    document.querySelectorAll(".letter-button").forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        button.disabled = true;
      }
    });
  }
  if (word.split("").every((letter) => guessed.includes(letter))) {
    if (chancesDisplay !== null) {
      chancesDisplay.innerText = "You Won!";
    }
    document.querySelectorAll(".letter-button").forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        button.disabled = true;
      }
    });
  }
}

// add event listeners to the buttons
if (letterButtonsContainer !== null) {
  letterButtonsContainer.addEventListener("click", handleGuess);
}
if (resetButton !== null) {
  resetButton.addEventListener("click", reset);
}
// create the letter buttons
createLetterButtons();

// reset the game initially
reset();
