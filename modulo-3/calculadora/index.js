const calculadora = require("./calc")
const prompt = require('prompt-sync')()

function options() {
  console.log(`
  1 - somar
  2 - subtrair
  3 - multiplicar
  4 - dividir
  5 - sair
  `)
}

function optionSelected(option) {
  const num1 = Number(prompt("Digite numero 1: "));
  const num2 = Number(prompt("Digite numero 2: "));

  if (option == "1") {
    return calculadora.soma(num1, num2);
  }
  if (option == "2") {
    return calculadora.subtracao(num1, num2);
  }
}
let opcao, resultado;
while(opcao != "0") {
  options();
  opcao = prompt("Qual a opção ?")
  resultado = optionSelected(opcao)

  console.log(`O resultado é ${resultado}`)
}
