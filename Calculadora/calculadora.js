document.addEventListener('submit', function(ev) {
    ev.preventDefault()
    let valor1 = parseFloat(document.querySelector('#n1').value)
    let valor2 = parseFloat(document.querySelector('#n2').value)
    let operador = document.querySelector('.sinal_operador:checked').value
    let result = 0
    switch (operador) {
        case "soma":
            result = valor1 + valor2
            break
        case "subtracao":
            result = valor1 - valor2
            break
        case "multiplicacao":
            result = valor1 * valor2
            break
        case "divisao":
            result = (valor1 / valor2).toFixed(2)
            break
        default:
            alert("Marque o operador")            
            break
    }
    const exibir = document.querySelector('#result_span')
    exibir.innerText = result

})


















/*let valor1 = prompt("Digite o primeiro número:")
let valor2 = prompt("Digite o segundo número:")
valor1 = parseInt(valor1)
valor2 = parseInt(valor2)
let soma = valor1 + valor2
let subtracao = valor1 - valor2
let multiplicacao = valor1 * valor2
let divisao = valor1 / valor2

alert(`A soma de ${valor1} e ${valor2} é ${soma}.
A subtração de ${valor1} e ${valor2} é ${subtracao}.
A multiplicação de ${valor1} e ${valor2} é ${multiplicacao}.
A divisão de ${valor1} e ${valor2} é ${divisao}.`)
*/