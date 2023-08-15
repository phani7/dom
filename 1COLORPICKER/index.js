const generateColorButton = document.getElementById('generateColor');
const colorPreview = document.querySelector('.color-preview');

generateColorButton.addEventListener('click', generateRandomColor);

function generateRandomColor() {
    const randomColor = getRandomColor();
    colorPreview.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        console.log(color)
    }
    return color;
}
