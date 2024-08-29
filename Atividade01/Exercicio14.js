// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
const prompt = require("prompt-sync")();
let factorialNumber = parseFloat(
  prompt("Insira um número para calculo do seu fatorial: ")
);
let factorial = 1;
if (factorialNumber < 0) {
  console.log("O número inserido é invalido");
} else {
  for (let i = 1; i <= factorialNumber; i++) {
    factorial *= i;
  }
  console.log(`O fatorial de ${factorialNumber} é ${factorial}.`);
}
