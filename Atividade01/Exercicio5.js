// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

let weight = parseFloat(); // Inserir o peso desejado
let height = parseFloat(); // Inserir a altura desejada
let IMC = weight / (height * height);
if (IMC <= 18.5) {
  console.log(`${IMC} Baixo peso.`);
} else if (IMC > 18.5 && IMC <= 24.99) {
  console.log(`${IMC} Peso normal.`);
} else if (IMC >= 25 && IMC <= 29.99) {
  console.log(`${IMC} Sobrepeso.`);
} else if (IMC > 29.99) {
  console.log(`${IMC} Obesidade.`);
}
