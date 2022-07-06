


function renderizingPixels(num) {
    let contador = document.getElementsByClassName('pixels');
    if (num <= 50 && num > 0 && contador.length < 50) {
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
    for (let i = 0; i < palette.length; i++) {
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

}