function soma() {
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    document.getElementById('result').textContent = "Resultado: " + (val1 + val2);
}
 
function subtracao() {
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    document.getElementById('result').textContent = "Resultado: " + (val1 - val2);
}
 
function divisao() {
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    if (val2 === 0) {
        document.getElementById('result').textContent = "Erro: divisão por zero";
    } else {
        document.getElementById('result').textContent = "Resultado: " + (val1 / val2);
    }
}
 
function multiplicacao() {
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    document.getElementById('result').textContent = "Resultado: " + (val1 * val2);
}
 
function media() {
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    var resultado = (val1 + val2) / 2;
    document.getElementById('result').textContent = "Média: " + resultado;
}
 
function moda() {
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    if (val1 === val2) {
        document.getElementById('result').textContent = "Moda: " + val1;
    } else {
        document.getElementById('result').textContent = "Sem moda: os valores são diferentes";
    }
}
 
function mediana() {
    var val1 = parseFloat(document.getElementById('val1').value);
    var val2 = parseFloat(document.getElementById('val2').value);
    var valores = [val1, val2];
    valores.sort(function(a, b) { return a - b; });
    var resultado = (valores[0] + valores[1]) / 2;
    document.getElementById('result').textContent = "Mediana: " + resultado;
}
console.log
 