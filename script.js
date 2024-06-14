function mostrarTela(idTela) {
    const telas = document.querySelectorAll('.tela');
    telas.forEach(tela => {
        tela.style.display = 'none';
    });
    document.getElementById(idTela).style.display = 'block';
}

function decimalParaBinario() {
    const entradaDecimal = document.getElementById('entradaDecimal').value;
    const saidaBinaria = (entradaDecimal >>> 0).toString(2); // Use >>> 0 para garantir que seja interpretado como número não negativo
    document.getElementById('saidaBinario').textContent = saidaBinaria;
}

function operacaoBinaria(operacao) {
    const binario1 = document.getElementById('binario1').value;
    const binario2 = document.getElementById('binario2').value;

    // Garantir que binario1 e binario2 tenham exatamente 8 bits
    const binario1Preenchido = preencherBinario(binario1);
    const binario2Preenchido = preencherBinario(binario2);

    const num1 = parseInt(binario1Preenchido, 2);
    const num2 = parseInt(binario2Preenchido, 2);
    let resultado;

    switch(operacao) {
        case 'somar':
            resultado = (num1 + num2) & 0xFF; // Limitar o resultado a 8 bits
            break;
        case 'subtrair':
            resultado = (num1 - num2) & 0xFF; // Limitar o resultado a 8 bits
            break;
        case 'multiplicar':
            resultado = (num1 * num2) & 0xFF; // Limitar o resultado a 8 bits
            break;
        case 'dividir':
            if (num2 !== 0) {
                resultado = (Math.floor(num1 / num2)) & 0xFF; // Limitar o resultado a 8 bits
            } else {
                resultado = 0; // Tratamento de divisão por zero, pode ser ajustado conforme necessário
            }
            break;
    }

    const resultadoBinario = resultado.toString(2).padStart(8, '0');
    document.getElementById('saidaOperacao').textContent = resultadoBinario;
}

function preencherBinario(binarioString) {
    return binarioString.padStart(8, '0'); // Preencher com zeros à esquerda até 8 bits
}

function paraComplementoDe2() {
    const entradaBinaria = document.getElementById('entradaBinaria').value;

    // Garantir que o número binário tenha exatamente 8 bits
    const binarioPreenchido = preencherBinario(entradaBinaria);

    const num = parseInt(binarioPreenchido, 2);
    const complementoDe2 = (~num + 1) & 0xFF; // Complemento de dois limitado a 8 bits
    const complementoDe2Binario = complementoDe2.toString(2).padStart(8, '0');
    document.getElementById('saidaComplementoDe2').textContent = complementoDe2Binario;
}

function converterBinParaHexEOct() {
    const entradaBinariaConv = document.getElementById('entradaBinariaConv').value;

    // Garantir que o número binário tenha exatamente 8 bits
    const binarioPreenchido = preencherBinario(entradaBinariaConv);

    const num = parseInt(binarioPreenchido, 2);
    const saidaHex = num.toString(16).toUpperCase();
    const saidaOctal = num.toString(8);
    document.getElementById('saidaHex').textContent = saidaHex;
    document.getElementById('saidaOctal').textContent = saidaOctal;
}
