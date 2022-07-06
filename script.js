


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