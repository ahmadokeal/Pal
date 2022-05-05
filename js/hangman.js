let letters = 'abcdefghijklmnopqrstuvwxyz';
let arrLetters = Array.from(letters);
let placeLetters = document.querySelector('.letters');
arrLetters.forEach((letter) => {
    let span = document.createElement('span');
    let txt = document.createTextNode(letter);
    span.appendChild(txt)
    span.className = 'letter-box';
    placeLetters.appendChild(span);
});
let lettersBox =  Array.from(placeLetters.children);
const words = {
    programing: ['php', 'javascript', 'sass', 'c', 'paythone', 'java', 'json', 'jqeary'],
    movies: ['avenger', 'teen titins', 'theMovie', 'starWars', 'transylvenya', 'coco', 'shrek', 'luca'],
    people: ['Albert AineshTain', 'Mo salah', 'Eshak nioten', 'dafinshy'],
};
let allKeys = Object.keys(words);

let randPropNum = Math.floor(Math.random() * allKeys.length);
let randPropName = allKeys[randPropNum];
let randPropVal = words[randPropName];

let randvalNum = Math.floor(Math.random() * randPropVal.length);
let randValVal = randPropVal[randvalNum];
document.querySelector('.category span').innerHTML = `${randPropName} ${randValVal}`;
let letterGuess = document.querySelector('.letter-guess');
let lettersAndSpace = Array.from(randValVal);
lettersAndSpace.forEach((letter) => {
    let span = document.createElement('span');
    if (letter === ' ') {
        span.className = 'space';
    };
    letterGuess.appendChild(span);
}) ;
let drow = document.querySelector('.hangman-drow');
let wrongs = 0;
let guessSpans = document.querySelectorAll('.letter-guess span');
document.addEventListener('click', (e) => {
    let state = false;
    if (e.target.className === 'letter-box') {
        e.target.classList.add('disabled');
        let clickedLetter = e.target.innerHTML.toLowerCase();
        let chosenVal = Array.from(randValVal.toLowerCase());  
        chosenVal.forEach((wordLet, wordIndex) => {
            if (clickedLetter === wordLet) {
                // letterGuess.children[wordIndex].innerHTML = clickedLetter;
                state = true;
                guessSpans.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = clickedLetter;
                    }
                });
            };
        });
        if (state !== true) {
            wrongs++;
            drow.classList.add(`wrong-${wrongs}`);
            if (wrongs === 8) {
                endGame();
                placeLetters.classList.add('finished')
            }
        };
    };
});
function endGame() {
    let div = document.createElement('div');
    let txt = document.createTextNode(`Game Over, The Word Is ${randValVal} your level is: `);
    div.appendChild(txt);
    div.classList.add('popup');
    document.body.appendChild(div);
}