//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require("prompt-sync")(); //usaremos prompt para interação com o terminal

let Value1 = parseFloat(prompt("Escolha um número: "));
let Value2 = parseFloat(prompt("Escolha um número: "));
while (Value1 === Value2) {
  console.log("Os números escolhidos não podem ser iguais");
  Value1 = parseFloat(prompt("Escolha um número: "));
  Value2 = parseFloat(prompt("Escolha um número: "));
}

if (Value1 < Value2) {
  console.log(`valores em ordem crescente: ${Value1}, ${Value2}`);
} else {
  console.log(`Valores em ordem crescente: ${Value2}, ${Value1}`);
}
