let words = ['jaguar', 'cat', 'piranha', 'lion', 'dog', 'lizard'];
let selectedWords = [];
let wordDisplay = document.getElementById("word-display");
wordDisplay.textContent = selectedWords;

let buttons = document.querySelectorAll('.alpha-button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        let buttonText = event.target.textContent.toLowerCase();
        if (words.includes(buttonText)) {
            selectedWords.push(buttonText);
            console.log(`Selected words: ${selectedWords}`);
        }
    });
});