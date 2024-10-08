function converter() {
    const moedaDe = document.getElementById('moedaDe').value;
    const moedaPara = document.getElementById('moedaPara').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const resultadoElement = document.getElementById('resultado');
  
 
    const taxas = {
        BRLUSD: 0.25, 
        USDBRL: 4 
    };
    const taxa = taxas[moedaDe + moedaPara];
  
    if (taxa) {
        const resultado = quantidade * taxa;
        resultadoElement.textContent = `${quantidade} ${moedaDe} = ${resultado.toFixed(2)} ${moedaPara}`;
    } else {
        resultadoElement.textContent = 'Taxa de conversão não encontrada.';
    }
}
// teste
