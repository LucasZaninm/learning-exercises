//11.Escreva um programa que solicita ao usuário 5 números e calcula a soma totalutilizando um loop for.
const prompt = require("prompt-sync")();

let sumTotal = 0;

for (i = 1; i <= 5; i++) {
  let number = parseFloat(
    prompt(`Insira o valor correspondente ao número: ${i}:`)
  );

  while (isNaN(number)) {
    console.log("Erro, insira um número válido, por favor");
    number = parseFloat(prompt(`Insira um valor: ${i}`));
  }

  sumTotal += number;
}

console.log("Soma total: " + sumTotal);
