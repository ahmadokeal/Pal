// document.getElementById('register').onsubmit = function () {
//     let phonInpt = document.getElementById('phone').value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/;
//     let vlidateInp = phoneRe.test(phonInpt);
//     if (vlidateInp === false) {
//         return false;
//     }
//     return true;
// }
let ArrWords = [
    'javaScript',
    'Html',
    'Css',
    'Programer',
    'Windows',
    'linux',
    'Blablabl1',
    'Inner',
    'fontSize',
    'Background',
    'paragraph',
    'Russia',
    'blablabl4',
    'Eygpt',
    'world',
    'default',
    'blablabl2',
    'Monster',
    'paythone',
    'Json',
    'builder',
    'environment',
    'Government',
    'Blablabl3',
    'dangerous',
    'hours',
    'house',
    'London',
    'paris',
    'Giza',
    'souhag',
    'Problem',
    'working',
    'Building',
    'None',
    'nine',
    'Proffessional',
    'infinity',
    'Developer',
    'Monster Level',
];
const lvls = {
    'easy': 7,
    'normal': 5,
    'hard': 3
};
let selceLvl = document.querySelector('#lvlSlc');
let defaultLvl = selceLvl.value;
let defaultSec = lvls[defaultLvl];
let start_btn = document.querySelector('.start');
let lvlName = document.querySelector('.massege .lvlN');
let secSpan = document.querySelector('.massege .seconds');
let word = document.querySelector('.the-word');
let upComingWords = document.querySelector('.upcoming-word');
let inp = document.querySelector('input');
let time = document.querySelector('.time span');
let score = document.querySelector('.score .got');
let scoreTotal = document.querySelector('.score .total');
let finishMass = document.querySelector('.finish');
let btn_re = document.querySelector('.btn_reload');
// let levels = document.querySelectorAll('option[value]');
selceLvl.onselectstart = _ => {
    // defaultLvl = selceLvl.value;
    // lvlName.innerHTML = selceLvl.value;
    // secSpan.innerHTML = lvls[selceLvl.value];
    console.log(selceLvl.value)
}
// selceLvl.style.color = 
btn_re.onclick = _ => window.location.reload();
// document.addEventListener('click', (e) => {
//     if (e.target.classList.contains('btn_reload')) {
//         window.location.reload();
//     } else {
//         ''
//     }
// })
console.log(defaultLvl,defaultSec,start_btn,lvlName,secSpan,word,upComingWords,inp,time,score,scoreTotal,finishMass);
lvlName.innerHTML = defaultLvl;
secSpan.innerHTML = defaultSec;
time.innerHTML = defaultSec;
scoreTotal.innerHTML = ArrWords.length;
inp.onpaste = _ => false;
inp.ondrop = _ => false;
start_btn.onclick = function () {
    this.remove();
    inp.focus();
    genrate();
}
function genrate() {
    // console.log(ArrWords)
    let theWord = ArrWords[Math.floor(Math.random() * ArrWords.length)];
    let wordInd = ArrWords.indexOf(theWord);
    ArrWords.splice(wordInd, 1);
    word.innerHTML = theWord;
    upComingWords.innerHTML = '';
    for (let i = 0; i < ArrWords.length; i++) {
        let div = document.createElement('div');
        let txt = document.createTextNode(ArrWords[i]);
        div.appendChild(txt);
        upComingWords.appendChild(div)
    }
    let countS = setInterval(() => {
        time.innerHTML -= 1;
        if (time.innerHTML === '0') {
            if (inp.value.toLowerCase() === theWord.toLowerCase()) {
                clearInterval(countS);
                genrate();
                inp.value = '';
                score.innerHTML = +score.innerHTML + 1;
                time.innerHTML = defaultSec;
            } else {
                clearInterval(countS);
                inp.blur();
                inp.onfocus = _ => inp.blur();
                let spanBad = document.createElement('div');
                spanBad.classList.add('bad');
                let textSpan = document.createTextNode('Game Over');
                spanBad.appendChild(textSpan);
                finishMass.appendChild(spanBad)
            }
        }
    }, 1000);
    if (theWord == undefined) {
        clearInterval(countS);
        inp.blur();
        inp.onfocus = _ => false;
        let spanGood = document.createElement('div');
        spanGood.classList.add('good');
        let textSpanG = document.createTextNode('Congratulations');
        spanGood.appendChild(textSpanG);
        finishMass.appendChild(spanGood);
        word.innerHTML = '';
        return false;
    }
    // console.log(ArrWords
}
inp.onkeyup = (e) => {
    if (e.key === 'Enter') {
        start_btn.click()
    }
}
document.onkeyup = (e) => {
    if (e.key === 'Enter') {
        defaultLvl = selceLvl.value;
        lvlName.innerHTML = defaultLvl;
        defaultSec = lvls[defaultLvl];
        secSpan.innerHTML = defaultSec; 
        time.innerHTML = defaultSec;
    }
} 