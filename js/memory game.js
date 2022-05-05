let blocks = Array.from(document.querySelectorAll('.game-block'));
let blocksCont = document.querySelector('.memory-game-blocks');
let timer = document.querySelectorAll('.info-cont .timer span');
let boardOfScores = document.querySelector('.board-of-scores .theplayers');
let scoreTime = 60;
let allPlayers = [];
let theBlocks = [];
for (let i = 0; i < 12; i++) {
    let randomNum = blocks[Math.floor(Math.random() * blocks.length)];
    while (theBlocks.includes(randomNum)) {
        randomNum = blocks[Math.floor(Math.random() * blocks.length)];
    }
    theBlocks.push(randomNum);
    blocks.forEach((block) => {
        if (block.dataset.data == randomNum.dataset.data) {
            theBlocks.push(block);
        };
    });
};
blocks.forEach((block) => {
    if (theBlocks.includes(block)) {
        block.classList.add('selected')
    };
})
let blocksNotSelcted = blocks.filter((block) => {
    !block.classList.contains('selected');
});
blocks = Array.from(document.querySelectorAll('.game-block.selected'));
if (window.localStorage.getItem('allPlayers')) {
    allPlayers = JSON.parse(window.localStorage.getItem('allPlayers'));
    boardOfScores.innerHTML = '';
    allPlayers.forEach(player => {
        downLoadScore(player);
    });
} else {
    boardOfScores.parentElement.classList.add('empty');
    let span = document.createElement('span');
    span.classList.add('alert' , 'bg-warning', 'text-light', 'text-center');
    span.appendChild(document.createTextNode('empty'));
    boardOfScores.appendChild(span);
}
shahidMode();
document.querySelector('.control-btn span:nth-child(2)').onclick = function () {
    let faces = Array.from(document.querySelectorAll('.game-block.selected .face'));
    this.parentElement.remove();
    blocks.forEach((b) => {
        b.classList.add('show');
        blocksCont.classList.add('instart')
    });
}
document.querySelector('.control-btn span:first-child').onclick = function() {
    sweatPrompt('whats your name?', document.querySelector('.name1 span'));
    this.style.pointerEvents = 'none';
    document.querySelectorAll('.prompt span').forEach(span => {
        span.onclick = _ => {
            blocks.forEach((b) => {
                b.classList.add('show');
                blocksCont.classList.add('instart')
            });
            setTimeout( _ => {
                blocks.forEach((b) => {
                    b.classList.remove('show');
                    blocksCont.classList.remove('instart');
                })
                
            }, 5500);
            setTimeout(() => {
                let inrtvl = setInterval(() => {
                    let boxes = blocks.filter(block => block.classList.contains('true'));
                    scoreTime--;
                    if (boxes.length === blocks.length) {
                        clearInterval(inrtvl);
                    };
                    let minu = timer[0];
                    let seco = timer[1];
                    if (seco.innerHTML === '00') {
                        minu.innerHTML--;
                        seco.innerHTML = "60";
                    }
                    if (+minu.innerHTML < 0) {
                        minu.innerHTML = '0'
                        clearInterval(inrtvl);
                        endGame(true)
                    }
                    if (+seco.innerHTML == 0) {
                        seco.innerHTML = '0';
                        minu.innerHTML = '0'
                        clearInterval(inrtvl);
                        endGame(true)
                    } else {
                        seco.innerHTML--;
                    }
                }, 1000);
            }, 5500);
        }
    })

}
let wrongs = 0
let duration = 1000;
let orderRange = [...Array(blocks.length).keys()];
shuffle(orderRange)
blocks.forEach((box, index) => {
    box.style.order = orderRange[index];
    box.addEventListener('click', _ => {
        flipBlock(box);
        endGame();
    });
})
function shuffle(arr) {
    let current = arr.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        temp = arr[current];
        arr[current] = arr[random];
        arr[random] = temp;
    };
    return arr
}
function checkerBlocks(firstBlock, secondBlock) {
    let tries = document.querySelector('.info-cont .tries span');
    if (firstBlock.dataset.data === secondBlock.dataset.data) {
        firstBlock.classList.remove('show');
        secondBlock.classList.remove('show');
        firstBlock.classList.add('true');
        secondBlock.classList.add('true');
    } else {
        setTimeout(() => {
            firstBlock.classList.remove('show');
            secondBlock.classList.remove('show');
        }, duration);
        wrongs++;
        tries.innerHTML = wrongs;
    }
}
function flipBlock(theBlock) {
    theBlock.classList.add('show');
    let blocksShowed = blocks.filter(block => block.classList.contains('show'));
    if (blocksShowed.length === 2) {
        stopClicking();
        checkerBlocks(blocksShowed[0], blocksShowed[1])
    }
};
function stopClicking() {
    blocksCont.classList.add('instart');
    setTimeout( () => {
        blocksCont.classList.remove('instart')
    }, duration)
};
function endGame(time = false) {
    let boxes = blocks.filter(block => block.classList.contains('true'));
    let par = Math.floor((((boxes.length / blocks.length * 100) + (scoreTime / 60 * 100)) / (blocks.length + 60)) * 100 - wrongs);
    if (par < 0) {
        par = 0;
    }
    let finished = 'lost';
    if (boxes.length === blocks.length) {
        finished = 'win';
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(`congratz, your score is ${par}`));
        div.classList.add('finalMass');
        div.classList.add('good');
        if (blocksCont.classList.contains('shahid')) { div.classList.add('shahid') }
        blocksCont.classList.add('inend');
        document.body.appendChild(div);
        upLoadScore(document.querySelector('.info-cont .name1 span').innerHTML , finished, par);
    }
    if (time === true && boxes.length !== blocks.length) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(`Game over, your score is ${par}`));
        div.classList.add('finalMass');
        div.classList.add('bad');
        if (blocksCont.classList.contains('shahid')) { div.classList.add('shahid') }
        blocksCont.classList.add('inend');
        document.body.appendChild(div);
        upLoadScore(document.querySelector('.info-cont .name1 span').innerHTML , finished, par);
    };
};
function upLoadScore(name, finished ,score) {
    let theScore = {
        playerName: name,
        playerScore: score,
        wrongsNum: wrongs,
        dateGame: getDateOfGame(),
        state: finished,
    };
    allPlayers.forEach((player, index) => {
        if (player.playerName === theScore.playerName && player.playerScore >= theScore.playerScore) {
            theScore = player;
        };
        if (player.playerName === theScore.playerName && player.playerScore <= theScore.playerScore) {
            allPlayers.splice(index, 1);
        };
    });
    allPlayers.push(theScore);
    window.localStorage.setItem(`allPlayers`, JSON.stringify(allPlayers));
}
function downLoadScore(object) {
    let div = document.createElement('div');
    div.classList.add('player');
    let PlayerName = document.createElement('div');
    PlayerName.classList.add('playerName');
    PlayerName.innerHTML = `the player: <span>${object.playerName}</span>`;
    div.appendChild(PlayerName);
    let PlayerScore = document.createElement('div');
    PlayerScore.classList.add('score');
    PlayerScore.innerHTML = `score: <span>${object.playerScore}</span>`
    div.appendChild(PlayerScore);
    let WrongsNum = document.createElement('div');
    WrongsNum.classList.add('wrongs-num');
    WrongsNum.innerHTML = `wrongs: <span>${object.wrongsNum}</span>`
    div.appendChild(WrongsNum);
    let dateGame = document.createElement('div');
    dateGame.classList.add('dateGame');
    dateGame.innerHTML = `Date: <span>${object.dateGame}</span>`;
    let partTime = dateGame.children[0].innerHTML.split(":");
    if (partTime[0].length > 1) {
        partTime[0] = +partTime[0] - 12;
    }
    div.appendChild(dateGame);
    let State = document.createElement('div');
    State.classList.add('state');
    State.innerHTML = `state: <span>${object.state}</span>`
    div.appendChild(State);
    boardOfScores.appendChild(div);
};
function toggleAmPm(timeHour) {
    if (timeHour.endsWith('AM')) {
        timeHour = Array.from(timeHour);
        timeHour.splice(timeHour.length - 2, 2, 'PM')
        return timeHour.join('');
    } else if (timeHour.endsWith('PM')) {
        timeHour = Array.from(timeHour);
        timeHour.splice(timeHour.length - 2, 2, 'AM')
        return timeHour.join('');
    }
};
function getDateOfGame() {
    let timeGame = new Date().getHours();
    let theDate = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()} ${timeGame}:${new Date().getMinutes()}AM`;
    if (timeGame > 12) {
        timeGame -= 12;
        theDate = toggleAmPm(`${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()} ${timeGame}:${new Date().getMinutes()}AM`);
        // theDate.replace(/\d:/ig, `${timeGame}:`);
    };
    return theDate;
};
// functions mode
function shahidMode() {
    document.querySelector('.control-btn').classList.add('shahid')
    document.body.classList.add('bg-dark');
    timer[0].parentElement.parentElement.classList.add('bg-dark', 'text-light', 'shahid');
    blocksCont.classList.add('shahid');
    blocks.forEach(block => block.classList.add('shahid'));
    boardOfScores.parentElement.classList.add('text-light');
};
function sweatPrompt(txtMaessage, valueReturnVar) {
    let div = document.createElement('div');
    div.classList.add('prompt', 'bg-dark', 'text-light', 'shahid');
    let message = document.createElement('div');
    message.classList.add('massege');
    message.textContent = txtMaessage;
    let inp = document.createElement('input');
    inp.setAttribute('type', 'text');
    let btnCont = document.createElement('div');
    btnCont.classList.add('btns');
    let btnOk = document.createElement('span');
    let btnCansel = document.createElement('span');
    btnOk.classList.add('btn', 'btn-primary');
    btnCansel.classList.add('btn', 'btn-danger');
    btnOk.innerHTML = 'ok';
    btnCansel.innerHTML = 'cansel';
    btnCont.appendChild(btnOk);
    btnCont.appendChild(btnCansel);
    div.appendChild(message);
    div.appendChild(inp);
    div.appendChild(btnCont);
    let valueReturn = 'unknown';
    document.querySelector('.control-btn').appendChild(div);
    setTimeout(() => {
        div.classList.add('active');
    }, 100);
    btnOk.addEventListener('click', _ => {
        btnCont.parentElement.parentElement.remove();
        if (inp.value !== '') {
            valueReturn = inp.value;
        };
        valueReturnVar.innerHTML = valueReturn;
    });
    btnCansel.addEventListener('click', _ => {
        btnCont.parentElement.parentElement.remove();
        valueReturnVar.innerHTML = valueReturn;
    });
    inp.addEventListener('keyup', (ev) => {
        if (ev.key == 'Enter') {
            btnOk.click();
        }
    })
};
if (window.innerWidth < 768) {
    let icons = Array.from(document.querySelectorAll('.game-block.selected .back i'));
    icons.forEach(icon => {
        icon.classList.remove('fa-8x');
        icon.classList.remove('fa-7x');
        icon.classList.add('fa-3x');
    })
}