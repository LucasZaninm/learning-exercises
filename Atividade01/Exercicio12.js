//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
const prompt = require("prompt-sync")();
let multiplier = Number(prompt("Informe qual nº da tabuada: "));

while (isNaN(multiplier) || multiplier < 1 || multiplier > 10) {
  console.log(`Por favor, insira um número válido entre 1 e 10.`);

  multiplier = Number(prompt("Informe qual nº da tabuada: "));
}
for (let counter = 1; counter <= 10; counter++) {
  console.log(`${multiplier} * ${counter} =`, multiplier * counter);
}
