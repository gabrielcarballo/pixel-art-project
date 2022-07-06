let colors = document.getElementsByClassName('color');
window.onload = document.getElementsByClassName('color')[0].classList.add('selected')


function colorsRandomizer() {
    colors[0].style.backgroundColor = `rgb(0, 0, 0)`
    for (let i = 1; i < colors.length; i += 1) {
        let randomizer1 = Math.round(Math.random() * 200);
        let randomizer2 = Math.round(Math.random() * 150);
        let randomizer3 = Math.round(Math.random() * 212);
        colors[i].style.backgroundColor = `rgb(${randomizer1}, ${randomizer2}, ${randomizer3})`
    }

}

colorsRandomizer();

function generatingNewBoard() {
    let generateTrigger = document.getElementById('generate-board');
    generateTrigger.addEventListener('click', () => {
        let generateAmount = document.getElementById('board-size').value
        if (generateAmount > 50) {
            generateAmount = 50;
        } else if (generateAmount < 5) {
            generateAmount = 5;
        }
        document.querySelector('#pixie-board').innerHTML = '';
        renderizingPixels(generateAmount);
    })
}

generatingNewBoard();

function renderizingPixels(num) {
    let contador = document.querySelectorAll('.pixel')
    if (num >= 50) {
        num = 50;
    } else if (num < 5) {
        num = 5;
    }
    else if (contador.length < 50) {
        for (let i = 0; i < num; i += 1) {
            let pixelBoard = document.getElementById('pixel-board');
            let colorBoard = document.createElement('div');
            colorBoard.classList.add('pixel');
            pixelBoard.appendChild(colorBoard);
        }
    } else {
        return alert('Board Inválido!')
    }
}

renderizingPixels(25);



function gettingColor() {
    let palette = document.querySelectorAll('.color');
    for (let i = 0; i < palette.length; i += 1) {
        let color = 'color';
        let selected = 'color selected'
        palette[i].addEventListener('click', () => {
            let got = document.querySelector('.selected');
            got.className = color;
            palette[i].className = selected;
        })
    }
}

gettingColor();

function applyingColor() {
    let pixelBoard = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixelBoard.length; i += 1) {
        pixelBoard[i].addEventListener('click', () => {
            let appColor = document.querySelector('.selected');
            pixelBoard[i].style.backgroundColor = appColor.style.backgroundColor


        })
    }
}

applyingColor();

function cleaningBoard() {
    let pixelBoard = document.querySelectorAll('.pixel');
    let cleaningButton = document.getElementById('clear-board');
    cleaningButton.addEventListener('click', () => {
        for (let i = 0; i < pixelBoard.length; i++) {
            pixelBoard[i].style.backgroundColor = 'white'
        }
    })
}

cleaningBoard();

