console.log("welcome to tic tac toe");
let bg = new Audio("sound/music.mp3");
let audioturn = new Audio("sound/ting.mp3");
let gameover = new Audio("sound/gameover.mp3");

let turn = "X";
let isgameover = false;

//function to change the turn

const changeTurn = () => {
        return (turn === "X") ? "O" : "X";
    } //function to check win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            isgameover = true;
            console.log(isgameover);
        }
    })
}

//game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(Element => {
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play()
            checkWin();
            if (!isgameover) { document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; }

        }
    })
})


// document.querySelectorAll('box').addEventListener('click', () => {
//     turn.play();
//     if (document.getElementsByClassName('info')[0].innerHTML == "Turn for O") { document.getElementsByClassName('info')[0].innerHTML = "Turn for X"; } else {
//         document.getElementsByClassName('info')[0].innerHTML = "Turn for O";
//     }

// })