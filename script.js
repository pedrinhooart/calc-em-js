function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.style.display = 'none';
    });
    document.getElementById(screenId).style.display = 'block';
}

function decimalToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryOutput = parseInt(decimalInput, 10).toString(2);
    document.getElementById('binaryOutput').textContent = binaryOutput;
}

function binaryOperation(operation) {
    const bin1 = document.getElementById('bin1').value;
    const bin2 = document.getElementById('bin2').value;
    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    let result;

    switch(operation) {
        case 'add':
            result = (num1 + num2).toString(2);
            break;
        case 'subtract':
            result = (num1 - num2).toString(2);
            break;
        case 'multiply':
            result = (num1 * num2).toString(2);
            break;
        case 'divide':
            result = (Math.floor(num1 / num2)).toString(2);
            break;
    }

    document.getElementById('operationOutput').textContent = result;
}

function toTwosComplement() {
    const binaryInput = document.getElementById('binaryInput').value;
    const num = parseInt(binaryInput, 2);
    const twosComplement = (~num + 1 >>> 0).toString(2).slice(-8);
    document.getElementById('twosComplementOutput').textContent = twosComplement;
}

function convertBinToHexAndOct() {
    const binaryInputConv = document.getElementById('binaryInputConv').value;
    const num = parseInt(binaryInputConv, 2);
    const hexOutput = num.toString(16).toUpperCase();
    const octalOutput = num.toString(8);
    document.getElementById('hexOutput').textContent = hexOutput;
    document.getElementById('octalOutput').textContent = octalOutput;
}
