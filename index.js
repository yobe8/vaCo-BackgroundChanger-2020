const hexText = document.querySelector('.hexcolor-text__colors'),
hexBtn = document.getElementById('random-btn'),
body = document.querySelector('body');

function randomHexColor() {
    const NUM_AND_ALPHABET = '1234567890abcdef' //length = 16
    const CHAR_BOX = NUM_AND_ALPHABET.split('').sort();
    let hexColor = '';

    for(var i= 0; i < 6; i++) {
        hexColor = hexColor.concat(CHAR_BOX[Math.floor(Math.random()*16)]);
    }

    return hexColor;
};

function sendHexCodes() {
    let hexCodes = randomHexColor();
    hexText.innerText = `#${hexCodes}`;
    body.style.backgroundColor= `#${hexCodes}`;
}

function handleBtn() {
    hexBtn.addEventListener('click', sendHexCodes);
}

function init() {
    handleBtn();
}

init();