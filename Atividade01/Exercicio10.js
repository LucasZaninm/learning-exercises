//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require("prompt-sync")() //deixei uma interação com o terminal.
let numInt = parseInt(prompt("Insira um número para repetilo dez vezes: "))
for (let i = 0; i < 10; i ++ ){
  console.log(numInt)
}
